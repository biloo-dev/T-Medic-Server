'use strict'
const User = use("App/Models/User");
const { validateAll } = use("Validator");
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
          }
          if (await auth.attempt(email, password)) {
            let user = await User.query().where('email', email).select('id','username', 'firstName','lastName','sexe','type','phone1','phone2','img','email').first()
            let token = await auth.withRefreshToken().generate(user)  
            return response.json({user, ...token })
          } 
        }
        catch (e) {
          console.log(e)
          return response.status(401).send("unauthorized")
        }
  }
  async show({ auth,request, response }) { 
    try {
      const user = await auth.getUser();
      JSON.stringify
      return response.status(200).send(user);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
  
  async logout({ auth,request, response }) { 
    try {
      await auth.check()
      const refreshToken = request.input('refreshToken') 
      console.log('refreshToken :>> ', refreshToken);
      let ret = await auth.revokeTokens([refreshToken], true) 
      return ret
    } catch (err) {
      console.log(err)
      response
        .status(404)
        .json({ type: 'error', message: err })
    }
  }
  async updateProfile({ auth, request, response }) {
    try {
      const { firstName, lastName } = request.all();
      const rules = {
        firstName: "required",
        lastName: "required",
      };
      const validation = await validateAll(request.all(), rules);
      
      if (validation.fails()) {
        return response.status(400).send(validation.messages());
      }
      
      const user = await auth.user;
      user.firstName = firstName;
      user.lastName = lastName;

      await user.save();
      return response.status(200).send(user);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}

module.exports = AuthController

// try {
//    const rules = {
//      username: "required",
//      password: "required|min:8"
//    };
//    const validation = await validateAll(request.all(), rules);
//      if (validation.fails()) {
//        return response.status(400).send(validation.messages());
//      }
//   const { username, password } = request.all();

//   const authedUser = await auth.withRefreshToken().attempt(username, password);
//   let user = await User.query().where('username', username).first()
//   return response.status(200).send({...authedUser,user});
// } catch (error) {
//   return response.status(404).send(error);
// }