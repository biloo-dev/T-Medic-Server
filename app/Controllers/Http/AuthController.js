'use strict'
const User = use("App/Models/User");
const Address = use("App/Models/Address");
const Newsletter = use("App/Models/NewsLatter");
const Helpers = use('Helpers');
const Drive = use('Drive'); 
const { validateAll } = use("Validator");
const Hash = use('Hash')

class AuthController {
  async register({ auth, request, response }) {
    try {
      const { email, password } = request.all();
        const rules = {
          email: "required|email|unique:users,email",
          password: "required|min:8"
        };
        const validation = await validateAll(request.all(), rules);
        if (validation.fails()) {
          return response.status(400).send(validation.messages());
        }
      const user = await User.create({
        email,
        password,
      });

      const authedUser = await auth.withRefreshToken().attempt(email, password);
      return response.status(201).send(authedUser);
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }
  
  async login({ auth, request, response }) { 
    let { email, password} = request.all(); 
        try {
          const rules = {
            email: "required",
            password: "required|min:8"
          };
          const validation = await validateAll(request.all(), rules);
          if (validation.fails()) {
            return response.status(400).send(validation.messages());
          }//.withRefreshToken()
          let token = await auth.attempt(email, password,{
            expiresIn: "10 days",
          })  
          if (token) { 
              return response.json(token)
          }
          return response.status(400).send({ 
              field : "oldPassword",
              message : 'IncorrectPassword',
              validation  : "Incorrect",  
          });
 
        }
        catch (e) { 
          return response.status(401).send("unauthorized")
        }
  }

  async show({ auth,request, response }) { 
    try {
       const id = await auth.user.id;
      const user = await User.query().where('id',id)
                                     .with('addresse.wilaya')
                                     .with('addresse.daira')
                                     .with('addresse.commune')  
                                     .with('orders.subOrder.products').first()  
      return response.status(200).send({user});
    } catch (err) {
      console.error('err', err)
      return response.status(500).send(err);
    }
  }
  
  async logout({ auth,request, response }) { 
    try {   
      console.log('logout oky oky')
      const apiToken = auth.getAuthHeader()

      let Rev = await auth.authenticator('api')
                          .revokeTokens([apiToken])
      return response.json(Rev)
    } catch (err) {
      console.log(err)
      response
        .status(404)
        .json({ type: 'error', message: err })
    }
  }
  async deleteAddress({ auth,request, response }) {
     try {
        let req = request.all()
    
        let address = await Address.find(req.id)
        await address.delete()
        return response.json(true)
     } catch (err) { 
      response
        .status(404)
        .json({ type: 'error', message: err })
     }

  }
  async saveAddress({ auth,request, response }) {
     try {
        let req = request.all()
         const rules = { 
            address_fr : "required",
            address_en : "required",
            address_ar : "required",
            wilaya_id : "required",
            commune_id : "required",
            daira_id : "required",  
          };

      const validation = await validateAll(req, rules);
      
      if (validation.fails()) { 
        return response.status(400).send(validation.messages());
      }
        let address = new Address;
        if(req.id){
          address = await Address.find(req.id)
        }
        address.default = req.default;
        address.address_fr = req.address_fr;
        address.address_en = req.address_en;
        address.address_ar = req.address_ar; 
        address.wilaya_id = req.wilaya_id.id;
        address.commune_id = req.commune_id.id;
        address.daira_id = req.daira_id.id;
        address.user_id = await auth.user.id;
        await address.save()
        return response.json(address)
     } catch (err) {
      console.log(err)
      response
        .status(404)
        .json({ type: 'error', message: err })
     }

  }
  async updatePassword({ auth,request, response }) {
     try { 
      let { oldPassword, newPassword, confirmPassword } = request.all()
      const user = await auth.user;
      const passwordCheck = await Hash.verify(oldPassword, user.password)

      if (!passwordCheck) {
        return response
          .status(400)
          .send([
            {
              field : "oldPassword",
              message : 'IncorrectPassword',
              validation  : "Incorrect", 
            }
          ])
      }  
      if (newPassword !== confirmPassword) {
        return response
          .status(400)
          .send([
            {
              field : "confirmPassword",
              message : 'IncorrectPassword',
              validation  : "notMatch", 
            }
          ])
      }  
      user.password = newPassword
      await user.save()
      return response.json(true)
     } catch (err) {
      console.log(err)
      response
        .status(404)
        .json({ type: 'error', message: err })
     }

  }
  async refreshToken({ auth,request, response }) {
     try {
      const refreshToken = request.input('refreshToken')

      let token = await auth.generateForRefreshToken(refreshToken, true)
      return response.json(token)
     } catch (err) {
      console.log(err)
      response
        .status(404)
        .json({ type: 'error', message: err })
     }

  }
  async checkImg(url) {
    let fullPath = Helpers.publicPath(url)
    const exists = await Drive.exists(fullPath)
    console.log('exists :>> ', exists);
    if (exists) {
      await Drive.delete(fullPath)
    }

  }
  async updateProfile({ auth, request, response }) {
    try { 
      const req = request.input('form') ? JSON.parse(request.input('form')) : {}  
      const imageFile  = request.file('image',{
        types: ["image"],
        size: "5mb", 
      });
      const rules = { 
        firstName_fr : "required",
        firstName_en : "required",
        firstName_ar : "required",
        lastName_fr : "required",
        lastName_en : "required",
        lastName_ar : "required", 
        phone1 : "required|number",
        email : "required|email", 
      };

      const validation = await validateAll(req, rules);
      
      if (validation.fails()) { 
        return response.status(400).send(validation.messages());
      }
      
      const user = await auth.user;
      user.username = req.username
      user.firstName_fr = req.firstName_fr
      user.firstName_en = req.firstName_en
      user.firstName_ar = req.firstName_ar
      user.lastName_fr = req.lastName_fr
      user.lastName_en = req.lastName_en
      user.lastName_ar = req.lastName_ar
      user.sexe = req.sexe
      user.type = req.type
      user.phone1 = req.phone1
      user.phone2 = req.phone2 
      user.email = req.email
      user.password = req.password     
      if (imageFile) {
        let fileName = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000 +"-" + new Date().getTime() + "." + imageFile.subtype;
        let imagePath = Helpers.publicPath('/images/avatars/');
        await imageFile.move(imagePath, { name: fileName, overwrite: true });
        if (!imageFile.moved()) {
          let error = imageFile.error();
          console.log('error :>> ', error);
          throw new Error(JSON.stringify(error));
        }
        await this.checkImg(user.img)
        user.img =  '/images/avatars/' + fileName
      }
      await user.save()
      return response.status(200).send({user});
    } catch (error) {
      console.log('error :>> ', error);
      return response.status(500).send(error);
    }
  }
  async newsletter({ request,response }){
    
    try {
      const newsletter = await Newsletter.query().where("email",request.input("email")).getCount()
       if (!!newsletter) {
         return response.status(400).send({ 
              field : "email",
              message : 'IncorrectPassword',
              validation  : "unique",  
          });
      } 
      newsletter = await Newsletter.create({
        email: request.input("email")
      })
      return response.json(true) 
    } catch (err) {
      console.log(err)
       response
        .status(404)
        .json({ type: 'error', message: err })
    }
  }
}

module.exports = AuthController
 