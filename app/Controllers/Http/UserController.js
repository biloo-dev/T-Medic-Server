'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')
class UserController {
    async store({ request, response }) {
      try {
        // getting data passed within the request
        const data = request.only(['username', 'firstName', 'lastName','email','password'])
        // looking for user in database
        const userExists = await User.findBy('email', data.email)
        console.log('data :>> ', userExists);

        // if user exists don't save
        if (userExists) {
          return response
            .status(400)
            .send({
              message: {
                error: 'User already registered'
              }
            })
        }

        // if user doesn't exist, proceeds with saving him in DB
        const user = await User.create(data)

        return user
      } catch (err) {
        console.log('err :>> ', err);
        return response
          .status(err.status)
          .send(err)
      }
    }
    async updateProfile({auth, request, response }) {
   
      const req = request.all()
      const user = await User.find(auth.current.user.id)
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
      user.img = req.img
      user.email = req.email
      user.password = req.password
      user.created_at = req.created_at
      user.updated_at = req.updated_at
      user.token = req.token
      user.token_created_at = req.token_created_at
      // persisting new data (saving)
      await user.save()
      return response.json(user)
    }
    async update({ request, response, params }) {
   
      const { id,username, firstName, lastName, email, password, newPassword } = request.all()
        // .only(['username', 'firstName', 'lastName', 'email', 'password', 'newPassword'])
      // looking for user in DB
      const user = await User.find(id)
      console.log('user :>> ', id);
      // checking if old password informed is correct
      const passwordCheck = await Hash.verify(password, user.password)

      if (!passwordCheck) {
        return response
          .status(400)
          .send({
            message: {
              error: 'Incorrect password provided'
            }
          })
      }

      // updating user data
      user.username = username
      user.firstName = firstName
      user.lastName = lastName
      user.email = email
      user.password = newPassword

      // persisting new data (saving)
      await user.save()
      return response.json(user)
    }
}

module.exports = UserController
