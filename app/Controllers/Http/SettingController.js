'use strict'
const Settings = use('App/Models/Setting')
class SettingController {
 
  async getSettings ({ request, response, view }) {
    let settings = await Settings.all() 
    return response.json(settings)
  }
 
  async create ({ request, response, view }) {
  }
 
  async store ({ request, response }) {
  }
 
  async show ({ params, request, response, view }) {
  }
 
  async edit ({ params, request, response, view }) {
  }
 
  async update ({ params, request, response }) {
  }
 
  async destroy ({ params, request, response }) {
  }
}

module.exports = SettingController
