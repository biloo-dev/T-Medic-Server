"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");
const Helpers = use("Helpers");
const Drive = use("Drive");
const { validateAll } = use("Validator"); 
class UserController {
  async index({ request, response }) {
    let users = await User.all();
    return response.json(users);
  }
  async store({ request, response }) {
    try {
      const req = request.input("data")
        ? JSON.parse(request.input("data"))
        : {};
      const imageFile = request.file("img", {
        types: ["image"],
        size: "5mb",
      });
      const rules = {
        firstName_fr: "required",
        firstName_en: "required",
        firstName_ar: "required",
        lastName_fr: "required",
        lastName_en: "required",
        lastName_ar: "required",
        password: "required",
        username: "required|unique:users,username",
        phone1: "required|number",
        email: "required|email|unique:users,email",
      };

      const validation = await validateAll(req, rules);

      if (validation.fails()) {
        return response.status(400).send(validation.messages());
      }

      const user = new User();
      user.username = req.username;
      user.firstName_fr = req.firstName_fr;
      user.firstName_en = req.firstName_en;
      user.firstName_ar = req.firstName_ar;
      user.lastName_fr = req.lastName_fr;
      user.lastName_en = req.lastName_en;
      user.lastName_ar = req.lastName_ar;
      user.sexe = req.sexe;
      user.type = req.type;
      user.phone1 = req.phone1;
      user.phone2 = req.phone2;
      user.email = req.email;
      user.password = req.password;
      if (imageFile) {
        let fileName =
          Math.floor(Math.random() * (999999 - 100000 + 1)) +
          100000 +
          "-" +
          new Date().getTime() +
          "." +
          imageFile.subtype;
        let imagePath = Helpers.publicPath("/images/avatars/");
        await imageFile.move(imagePath, { name: fileName, overwrite: true });
        if (!imageFile.moved()) {
          let error = imageFile.error();
          console.log("error :>> ", error);
          throw new Error(JSON.stringify(error));
        }
        // await this.checkImg(user.img);
        user.img = "/images/avatars/" + fileName;
      }
      await user.save();
      return response.status(200).send({ user });
    } catch (error) {
      console.log("error :>> ", error);
      return response.status(500).send(error);
    }
  }
  async updateProfile({ auth, request, response }) {
    const req = request.all();
    const user = await User.find(auth.current.user.id);
    user.username = req.username;
    user.firstName_fr = req.firstName_fr;
    user.firstName_en = req.firstName_en;
    user.firstName_ar = req.firstName_ar;
    user.lastName_fr = req.lastName_fr;
    user.lastName_en = req.lastName_en;
    user.lastName_ar = req.lastName_ar;
    user.sexe = req.sexe;
    user.type = req.type;
    user.phone1 = req.phone1;
    user.phone2 = req.phone2;
    user.img = req.img;
    user.email = req.email;
    user.password = req.password;
    user.created_at = req.created_at;
    user.updated_at = req.updated_at;
    user.token = req.token;
    user.token_created_at = req.token_created_at;
    // persisting new data (saving)
    await user.save();
    return response.json(user);
  }
  async update({ request, response, params }) {
    try {
        const req = request.input("data") ? JSON.parse(request.input("data")) : {};
        console.log('req   :>> ', req);
        const imageFile = request.file("img", {
          types: ["image"],
          size: "5mb",
        });
        const rules = {
          id : 'required',
          firstName_fr: "required",
          firstName_en: "required",
          firstName_ar: "required",
          lastName_fr: "required",
          lastName_en: "required",
          lastName_ar: "required", 
          username: `required|unique:users,username,id,${req.id}`,
          phone1: "required|number",
          email: `required|email|unique:users,email,id,${req.id}`,
        };

        const validation = await validateAll(req, rules);

        if (validation.fails()) {
          return response.status(400).send(validation.messages());
        }

        const user = await User.find(req.id);
        user.username = req.username;
        user.firstName_fr = req.firstName_fr;
        user.firstName_en = req.firstName_en;
        user.firstName_ar = req.firstName_ar;
        user.lastName_fr = req.lastName_fr;
        user.lastName_en = req.lastName_en;
        user.lastName_ar = req.lastName_ar;
        user.sexe = req.sexe;
        user.type = req.type;
        user.phone1 = req.phone1;
        user.phone2 = req.phone2;
        user.email = req.email;
        if (req.password) {
          user.password = req.password;
        }
        if (imageFile) {
          await this.checkImg(user.img);
          let fileName =
            Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000 + "-" +
            new Date().getTime() + "." +
            imageFile.subtype;
          let imagePath = Helpers.publicPath("/images/avatars/");
          await imageFile.move(imagePath, { name: fileName, overwrite: true });
          if (!imageFile.moved()) {
            let error = imageFile.error();
            console.log("error :>> ", error);
            throw new Error(JSON.stringify(error));
          }
          
          user.img = "/images/avatars/" + fileName;
        }
        await user.save();
        return response.status(200).send({ user });
      } catch (error) {
        console.log("error :>> ", error);
        return response.status(500).send(error);
      }
  }
  async checkImg(url) {
    let fullPath = Helpers.publicPath(url);
    const exists = await Drive.exists(fullPath);
    console.log("exists :>> ", exists);
    if (exists) {
      await Drive.delete(fullPath);
    }
  }
  async verifyEmail({ request, response }) {
    let email = request.input("email");
    let user = await User.query().where("email" ,email).first();
    return response.json(user);
  }
  async destroy({ request, response }) {
    let id = request.input("id");
    let user = await User.find(id);
    return response.json(await user.delete());
  }
}

module.exports = UserController;
