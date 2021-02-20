'use strict'
 const Product = use('App/Models/Product')
const Category = use('App/Models/Category')
const Helpers = use('Helpers')
const fs = use('fs')
const readFile = Helpers.promisify(fs.readFile)
class ProductController {
 
  async index ({ request, response, view }) {
      // console.log('options :>> ', request.input('options'));
      // console.log('filters :>> ', request.input('filters'));
      let opt = request.input('options') || {};
      let fil = request.input('filters') || {}
      let page     = opt.page || 1
      let limit    = opt.limit || 12
      let sort     = opt.sort && request.input('options').sort != 'name_asc' ? 'DESC' :'ASC'
      let price    = fil.price ? fil.price.split('-') : ['0', '999999999']
      let brand    = fil.brand ? fil.brand.split(',') : []
      let color    = fil.color || ''
      let discount = fil.discount || ''
      let category = fil.category || ''   
      if (Object.entries(fil).length !== 0) {
          let Products = await Product.query().optional(query => {
            if (brand.length) {
              query.whereHas('brand', q => q.whereIn('slug', brand))
            }
            if (category.length) {
              query.whereHas('categories', q => q.where('slug', category))
            }
            // if (color.length) {
            //   query.whereHas('attributes', q => q.where('slug', 'color')
            //        .whereInPivot('values',color))
            // }
            query.whereBetween('price', price) 
            if (discount == 'yes') { 
              query.whereNotNull("compareAtPrice")
            } else if (discount == 'no') { 
              query.whereNull("compareAtPrice")
            } 
             
          }).with('categories')
            .with('attributes')
            .with('brand')
            .orderBy('name', sort)
            .paginate(page, limit)
            return response.json(Products)
        }else {
          let Products = await Product.query().with('categories')
          .with('attributes')
          .with('brand')
          .orderBy('name', sort)
          .paginate(page, limit)
          // console.log('Products.getCount() :>> ',Products);
          return response.json(Products)

        }
  }
 
  async getPopularProducts ({ request, response }) {
    let { limit } = request.input('options') || {}
    let Products = await Product.query()
                                .with('categories.parent')
                                .with('categories.children')
                                .with('attributes', q => q.select('name', 'slug', 'featured'))
                                .with('brand')
                                .where('featured', true).limit(limit).fetch()
    return response.json(Products)
  }
  async getDiscountedProducts ({ request, response }) { 
    let { limit,category } = request.input('options') || {}
    let Products = await  Product.query()
                                .whereNotNull('compareAtPrice')
                                .optional( q =>{
                                  if (category) {
                                    q.whereHas('categories', q => q.where('slug', category))
                                  }
                                })
                                .with('categories.parent')
                                .with('categories.children')
                                .with('attributes', q => q.select('name', 'slug', 'featured'))
                                .with('brand')
                                .where('featured', true).limit(limit).fetch()
    return response.json(Products)
  }
  async getTopRatedProducts ({ request, response }) { 
    let { limit,category } = request.input('options')  || {}
    let Products = await  Product.query()
                                .optional( q =>{
                                  if (category) {
                                    q.whereHas('categories', q => q.where('slug', category))
                                  }
                                })
                                .with('categories.parent')
                                .with('categories.children')
                                .with('attributes', q => q.select('name', 'slug', 'featured'))
                                .with('brand')
                                .where('featured', true).limit(limit).fetch()
    return response.json(Products)
  }
  async getFeaturedProducts({  request,  response }) {
    let { limit,category } = request.input('options') || {}
    let Products = await Product.query()
                                .optional( q =>{
                                  if (category) {
                                    q.whereHas('categories', q => q.where('slug', category))
                                  }
                                })
                                .with('categories.parent')
                                .with('categories.children')
                                .with('attributes', q => q.select('name', 'slug', 'featured'))
                                .with('brand')
                                .where('featured', true).limit(limit).fetch()
    return response.json(Products)
  }
  async getLatestProducts ({ request, response }) { 
    let { limit,category } = request.input('options')  || {}
    let Products = await Product.query()
                                .optional( q =>{
                                  if (category) {
                                    q.whereHas('categories', q => q.where('slug', category))
                                  }
                                })
                                .with('categories.parent')
                                .with('categories.children')
                                .with('attributes', q => q.select('name', 'slug', 'featured'))
                                .with('brand')
                                .where('featured', true).orderBy('id', 'desc').limit(limit).fetch()
    return response.json(Products)
  }
  async getImg ({ request, response ,params }) {
    let  { folder,category , img } = params || {}
    let url = Helpers.publicPath(`${folder}/${category}/${img}`)
    if (!img) {
      url = Helpers.publicPath(`${folder}/${category}`)
    }else if(!category){
      url = Helpers.publicPath(`${folder}`)
    } else if (!folder) {
      url = Helpers.publicPath(`images/placeholder.png`)
    }
    return await readFile(url)
  }
  async store ({ request, response }) {
  }
 
  async edit ({ params, request, response, view }) {
  }
 
  async update ({ params, request, response }) {
  }
 
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductController
