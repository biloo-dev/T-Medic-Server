'use strict'
const Category = use('App/Models/Category')
const Helpers = use('Helpers');
const Drive = use('Drive');
class CategoryController {
 
  async index ({ request, response, view }) { 
    let Categorys = await Category.query().with('parent').with('children').limit().fetch() 
    return response.json(Categorys)
  }

  async getPopularCategories ({ request, response, view }) { 
    let limit  = request.input('options') ? request.input('options').limit : 12 
    let Categorys = await Category.query()
                                  .optional(q => {  
                                    q.whereNotNull('image') 
                                  })
                                  .with('parent').with('children').limit(limit || 12).fetch()
  
    return response.json(Categorys)
  }
  async getCategoryBySlug ({ request, response, view }) {   
    let limit  = request.input('options') ? request.input('options').limit : 12 
    let Categorys = await Category.query()
                                  .where('slug',request.input('slug')) 
                                  .with('parent').with('children').first()
  
    return response.json(Categorys)
  }
  async getConfig({ request, response, view }){
     let config = await Drive.get(Helpers.publicPath('department.json'), 'utf-8')
     let Carousel = await Drive.get(Helpers.publicPath('Carousel.json'), 'utf-8')
     return response.json({
       config : JSON.parse(config),
       Carousel : JSON.parse(Carousel)
     })
  }
 
  async create ({ request, response, view }) {
  }
 
  async store ({ request, response }) {
     let Categorys = new Category; 
     return response.json(Categorys)
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

module.exports = CategoryController
