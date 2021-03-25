'use strict'
const Settings = use('App/Models/Setting')
const Wilaya = use('App/Models/Wilaya')
const Commune = use('App/Models/Commune')
const Daira = use('App/Models/Daira')
class SettingController {
 
  async getSettings ({ request, response, view }) {
    let settings = await Settings.all() 
    return response.json(settings)
  }

  async allAdress ({ response }) {
    let wilayas = await Wilaya.all() 
    let communes = await Commune.all() 
    let dairas = await Daira.all() 
    return response.json({wilayas,communes,dairas})
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
