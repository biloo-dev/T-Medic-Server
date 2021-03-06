'use strict'
 const Product = use('App/Models/Product')
const Category = use('App/Models/Category')
const Brand = use('App/Models/Brand.js')
const Helpers = use('Helpers')
const fs = use('fs')
const readFile = Helpers.promisify(fs.readFile)
class ProductController {
 
  async index ({ request, response, view }) { 
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
      let tags = fil.tags || ''   
    if (Object.entries(fil).length != 0 && category != 'null') {
          let Products = await Product.query().optional(query => { 
            if (brand.length) {
              query.whereHas('brand', q => q.whereIn('slug', brand))
            }
            if (category.length) {
              query.whereHas('categories', q => q.where('slug', category))
            }
            if (tags.length) {
              query.whereHas('tags', q => q.where('slug', tags))
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
            .with('attributes.specifications')
            .with('tags')
            .with('brand')  
            .orderBy('slug', sort).fetch()
            // .paginate(page, limit) 
      let filters = await this.filters(Products.toJSON(), request.input('options').sort,price,brand,color,discount,category,page,limit)  
    
      return response.json(filters)
      }else {
        let Products = await Product.query().with('categories')
                                    .with('attributes.specifications')
                                    .with('brand')
                                    .with('tags')
                                    .orderBy('slug', sort).fetch() 
                                    // .paginate(page, limit)
      let filters = await this.filters(Products.toJSON(), request.input('options').sort, price, brand, color, discount, category,page,limit)   
         
         
      return response.json(filters)

      }
  } 
  async getPopularProducts ({ request, response }) {
    let { limit } = request.input('options') || {}
    let Products = await Product.query()
                                .with('categories.parent')
                                .with('categories.children')
                                 
                                .with('attributes.specifications')
                                .with('brand')
                                .with('tags')
                                .where('featured', true).limit(limit).fetch()
    return response.json(Products)
  }
  async getProductBySlug ({ request, response }) { 
    let slug = request.input('slug') || ""
    let Products = await  Product.query().where('slug', slug)  
                                .with('categories.parent')
                                .with('categories.children')
                                .with('tags')
                                
                                .with('attributes.specifications')
                                .with('brand').first()
    return response.json(Products)
  }
  async getRelatedProducts ({ request, response }) { 
    let slug = request.input('slug') || ""
    let { limit } = request.input('options') || {}
    let Products = await  Product.query()
                                .optional( q =>{
                                  if (slug) {
                                    q.whereHas('categories', q => q.where('slug', slug))
                                  }
                                })
                                .with('categories.parent')
                                .with('categories.children')
                                .with('tags')
                                
                                .with('attributes.specifications')
                                .with('brand').limit(limit).fetch()
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
                                
                                .with('attributes.specifications')
                                .with('brand')
                                .with('tags')
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
                                
                                .with('attributes.specifications')
                                .with('brand')
                                .with('tags')
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
                                
                                .with('attributes.specifications')
                                .with('brand')
                                .with('tags')
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
                                
                                .with('attributes.specifications')
                                .with('brand')
                                .with('tags')
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
  async filters(prod = [], sort, price, brand, color, discount, category,page,limit) {
 
    try {
      let Categorys = await Category.query().whereNull('parent_id').with('parent').with('children').fetch();
      let Brands = await this.countPdodBrand(prod); 
              
      const start = (page - 1) * limit
      const end = start + limit  
      let from = (page - 1) * limit + 1 
      let items = prod.slice(start, end)
      let disc = await this.countDiscount(prod) 
      return  {
        page: page || 1,
        limit: limit || 12,
        sort: sort || 'default',
        pages: Math.ceil(prod.length / limit),
        total: prod.length,
        from: from,
        to: Math.max(Math.min(page * limit, prod.length), from) ,
        items: items || [],
        filters:  [
                    {
                      id: 1,
                      type: 'category',
                      name_fr: "Catégories",
                      name_ar: 'الفئة',
                      slug: 'category',
                      items: Categorys,
                      value: category
                    },
                    {
                      id: 2,
                      type: 'range',
                      name_fr: "le prix",
                      name_ar: 'السعر',
                      slug: 'price',
                      value: price || [100,900000],
                      min: 100,
                      max: 900000
                    },
                    {
                      id: 3,
                      type: 'check',
                      slug: 'brand',
                      name_fr: "marque",
                      name_ar: 'ماركة',
                      items: Brands,
                      value: brand 
                    },
                    {
                      id: 4,
                      type: 'radio',
                      slug: 'discount',
                      name_fr: "remise",
                      name_ar: 'خصم',
                      items: [
                        {
                          count: prod.length,
                          name_fr: "Toute",
                          name_ar: "الكل",
                          slug: "any", 
                        },
                        {
                          count: disc.no,
                          name_fr: "Non",
                          name_ar: "لا",
                          slug: "no" 
                        },
                        {
                          count: disc.yes,
                          name_fr: "Oui",
                          name_ar: "نعم",
                          slug: "yes" 
                        },
                      ],
                      value: discount || 'any'
                    },
                    // {
                    //   id: 5,
                    //   type: 'color',
                    //   slug: 'color',
                    //   name_fr: "Couleur",
                    //   name_ar: 'اللون',
                    //   items: [
                    //     { slug: 'white', color: '#fff', count: 0 },
                    //     { slug: 'silver', color: '#d9d9d9', count: 0 },
                    //     { slug: 'light-gray', color: '#b3b3b3', count: 0 },
                    //     { slug: 'gray', color: '#808080', count: 0 },
                    //     { slug: 'dark-gray', color: '#666', count: 0 },
                    //     { slug: 'coal', color: '#4d4d4d', count: 0 },
                    //     { slug: 'black', color: '#262626', count: 0 },
                    //     { slug: 'red', color: '#ff4040', count: 0 },
                    //     { slug: 'orange', color: '#ff8126', count: 0 },
                    //     { slug: 'yellow', color: '#ffd333', count: 0 },
                    //     { slug: 'pear-green', color: '#becc1f', count: 0 },
                    //     { slug: 'green', color: '#8fcc14', count: 0 },
                    //     { slug: 'emerald', color: '#47cc5e', count: 0 },
                    //     { slug: 'shamrock', color: '#47cca0', count: 0 },
                    //     { slug: 'shakespeare', color: '#47cccc', count: 0 },
                    //     { slug: 'blue', color: '#40bfff', count: 0 },
                    //     { slug: 'dark-blue', color: '#3d6dcc', count: 0 },
                    //     { slug: 'violet', color: '#7766cc', count: 0 },
                    //     { slug: 'purple', color: '#b852cc', count: 0 },
                    //     { slug: 'cerise', color: '#e53981', count: 0 }
                    //   ],
                    //   value: color,
                    // },
                  ]
        } 
      
    } catch (err) {
      console.log('err filters:>> ', err);
    }
  }
  async countPdodBrand(prod = []){
    let Brands = await Brand.all();

    return Brands.toJSON().map((item) => {
      const count = prod.reduce((acc, product) => ( 
        acc + (product.brand_id == item.id ? 1 : 0)
      ), 0)

      return { ...item, count }
    })
  }
  async countDiscount(prod = []){
    let yes = prod.reduce((acc, product) => (
      acc + (product.compareAtPrice ? 1 : 0)
    ), 0)
    let no = prod.reduce((acc, product) => (
      acc + (!product.compareAtPrice ? 1 : 0)
    ), 0) 
    return {
      yes : yes,
      no : no
    } 
  }
  async getSuggestions ({ request, response }) {
    let str = request.input('query') || ''
    let { category, limit } = request.input('options') || { category: "", limit : 5}  
 
    let Products = Product.query().where('name_fr','like',`%${str}%`)
    .optional(q=>{ 
        q.orWhere('name_ar', 'like', `%${str}%`)
        if (category && category != "undefined") {
          q.whereHas('categories', q => q.where('slug', category))
        } 
      })    
      .with('categories.parent')
      .with('categories.children')
      
      .with('attributes.specifications')
      .with('brand').limit(limit)
      .with('tags').limit(limit)
    return response.json(await Products.fetch())
  }
  async store ({ request, response }) {
  }
 
  async edit ({ params, request, response, view }) {
  }
 
  async update ({ params, request, response }) {
  }
 
  async destroy ({ params, request, response }) {
  }
  string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;
  }
}

module.exports = ProductController
