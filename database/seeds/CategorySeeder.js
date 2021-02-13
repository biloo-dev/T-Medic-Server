'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
class CategorySeeder {
  async run() {
    await Database.from('categories').insert([
      {
      id: 1,
      type:'shop',
      name: 'Instruments',
      slug: 'instruments',
      items: 272,
      
    }, {
      id: 2,
      type:'shop',
      name: 'Power Tools',
      slug: 'power-tools',
      image: 'assets/images/categories/category-1.jpg',
      items: 370, 
    }, {
      id: 3,
      type:'shop',
      name: 'Drills & Mixers',
      slug: 'drills-mixers',
      items: 57,
      parent_id: 2,
    }, {
      id: 4,
      type:'shop',
      name: 'Cordless Screwdrivers',
      slug: 'cordless-screwdrivers',
      items: 15,
      parent_id: 2,
    }, {
      id: 5,
      type:'shop',
      name: 'Screwdrivers',
      slug: 'screwdrivers',
      items: 126,
      parent_id: 2,
    }, {
      id: 6,
      type:'shop',
      name: 'Wrenches',
      slug: 'wrenches',
      items: 12,
      parent_id: 2,
    }, {
      id: 7,
      type:'shop',
      name: 'Grinding Machines',
      slug: 'grinding-machines',
      items: 25,
      parent_id: 2,
    }, {
      id: 8,
      type:'shop',
      name: 'Milling Cutters',
      slug: 'milling-cutters',
      items: 78,
      parent_id: 2,
    }, {
      id: 9,
      type:'shop',
      name: 'Electric Spray Guns',
      slug: 'electric-spray-guns',
      items: 3,
      parent_id: 2,
    }, {
      id: 10,
      type:'shop',
      name: 'Hand Tools',
      slug: 'hand-tools',
      image: 'assets/images/categories/category-2.jpg',
      items: 134,
       
    }, {
      id: 11,
      type:'shop',
      name: 'Tool Kits',
      slug: 'tool-kits',
      items: 57,
      parent_id: 10,
    }, {
      id: 12,
      type:'shop',
      name: 'Hammers',
      slug: 'hammers',
      items: 15,
      parent_id: 10,
    }, {
      id: 13,
      type:'shop',
      name: 'Spanners',
      slug: 'spanners',
      items: 5,
      parent_id: 10,
    }, {
      id: 14,
      type:'shop',
      name: 'Handsaws',
      slug: 'handsaws',
      items: 54,
      parent_id: 10,
    }, {
      id: 15,
      type:'shop',
      name: 'Paint Tools',
      slug: 'paint-tools',
      items: 13,
      parent_id: 10,
    }, {
      id:16,
      type:'shop',
      
      name: 'Machine Tools',
      slug: 'machine-tools',
      image: 'assets/images/categories/category-3.jpg',
      items: 302, 
    },
    {
      id:17,
      type:'shop',
      parent_id:16,
      name: 'Lathes',
      slug: 'lathes',
      items: 104
    },
    {
      id:18,
      type:'shop',
      parent_id:16,
      name: 'Milling Machines',
      slug: 'milling-machines',
      items: 12
    },
    {
      id:19,
      type:'shop',
      parent_id:16,
      name: 'Grinding Machines',
      slug: 'grinding-machines',
      items: 67
    },
    {
      id:20,
      type:'shop',
      parent_id:16,
      name: 'CNC Machines',
      slug: 'cnc-machines',
      items: 5
    },
    {
      id:21,
      type:'shop',
      parent_id:16,
      name: 'Sharpening Machines',
      slug: 'sharpening-machines',
      items: 88
    },
    {
      id: 22,
      type:'shop',
      
      name: 'Power Machinery',
      slug: 'power-machinery',
      image: 'assets/images/categories/category-4.jpg',
      items: 79, 
    }, 
     {
       id: 23,
       type:'shop',
       parent_id: 22,
       name: 'Generators',
       slug: 'generators',
       items: 23
     }, 
     {
       id: 24,
       type:'shop',
       parent_id: 22,
       name: 'Compressors',
       slug: 'compressors',
       items: 76
     }, 
     {
       id: 25,
       type:'shop',
       parent_id: 22,
       name: 'Winches',
       slug: 'winches',
       items: 43
     }, 
     {
       id: 26,
       type:'shop',
       parent_id: 22,
       name: 'Plasma Cutting',
       slug: 'plasma-cutting',
       items: 128
     }, 
     {
       id: 27,
       type:'shop',
       parent_id: 22,
       name: 'Electric Motors',
       slug: 'electric-motors',
       items: 76
    },
    {
      id: 28,
      type:'shop',
      
      name: 'Measurement',
      slug: 'measurement',
      image: 'assets/images/categories/category-5.jpg',
      items: 366, 
    },
    {
      id: 29,
      type:'shop',
      parent_id: 28,
      name: 'Tape Measure',
      slug: 'tape-measure',
      items: 57
    }, {
      id: 30,
      type:'shop',
      parent_id: 28,
      name: 'Theodolites',
      slug: 'theodolites',
      items: 5
    }, 
    {
      id: 31,
      type:'shop',
      parent_id: 28,
      name: 'Thermal Imagers',
      slug: 'thermal-imagers',
      items: 3
    }, 
    {
      id: 32,
      type:'shop',
      parent_id: 28,
      name: 'Calipers',
      slug: 'calipers',
      items: 37
    }, 
    {
      id: 33,
      type:'shop',
      parent_id: 28,
      name: 'Levels',
      slug: 'levels',
      items: 14
    },
    {
      id: 34,
      type:'shop',
      
      name: 'Clothes and PPE',
      slug: 'clothes-and-ppe',
      image: 'assets/images/categories/category-6.jpg',
      items: 82, 
    },
    {
      id: 35,
      type:'shop',
      parent_id: 34,
      name: 'Winter Workwear',
      slug: 'winter-workwear',
      items: 24
    }, {
      id: 36,
      type:'shop',
      parent_id: 34,
      name: 'Summer Workwear',
      slug: 'summer-workwear',
      items: 87
    }, {
      id: 37,
      type:'shop',
      parent_id: 34,
      name: 'Helmets',
      slug: 'helmets',
      items: 9
    }, {
      id: 38,
      type:'shop',
      parent_id: 34,
      name: 'Belts and Bags',
      slug: 'belts-and-bags',
      items: 1
    }, {
      id: 39,
      type:'shop',
      parent_id: 34,
      name: 'Work Shoes',
      slug: 'work-shoes',
      items: 0
    },
    {
       id: 40,
       type:'shop',
      
      name: 'Electronics',
      slug: 'electronics',
      items: 54
    }, {
       id: 41,
       type:'shop',
      
      name: 'Computers',
      slug: 'computers',
      items: 421
    }, {
       id: 42,
       type:'shop',
      
      name: 'Automotive',
      slug: 'automotive',
      items: 182
    }, {
       id: 43,
       type:'shop',
      
      name: 'Furniture & Appliances',
      slug: 'furniture-appliances',
      items: 15
    }, {
       id: 44,
       type:'shop',
      
      name: 'Music & Books',
      slug: 'music-books',
      items: 89
    }, {
       id: 45,
       type:'shop',
      
      name: 'Health & Beauty',
      slug: 'health-beauty',
      items: 201
    }])
  }
}

module.exports = CategorySeeder
