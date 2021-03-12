'use strict'

/*
|--------------------------------------------------------------------------
| AttribtuteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
const Database = use('Database') 
class AttribtuteSeeder {
  async run () {

    await Database.from('users').insert([
      {
        id : 3,
        username: "bilal-dev",
        firstName_fr: "Bour",
        firstName_en: "Bour",
        firstName_ar: "بور",
        lastName_fr: "bilal",
        lastName_en: "bilal",
        lastName_ar: "بلال",
        type: 1,
        phone1: "0550660011",
        phone2: "0659815545",
        img: "/images/avatars/bilal_bour.jpg",
        email: "billal.20113@gmail.com",
        password: await Hash.make("biloo123"),
      }, 
    ])
    await Database.from('addresses').insert([
      { 
        default: 1,
        address_fr : "119 rue Residence, L88",
        address_en : "119 Residence Street, L88",
        address_ar : "شارع  119 مسكن ، الرقم 88",
        delivery_price : 0,
        wilaya_id: 38,
        commune_id : 1275,
        daira_id : 3803,
        user_id : 1
      }, 
      { 
        default: 2,
        address_fr : "119 rue Residence, L88",
        address_en : "119 Residence Street, L88",
        address_ar : "شارع  119 مسكن ، الرقم88",
        delivery_price : 0,
        wilaya_id: 38,
        commune_id : 1275,
        daira_id : 3803,
        user_id : 2
      }, 
      { 
        default: 3,
        address_fr : "Rue du 1er novembre, magasin numéro L5",
        address_en : "1st November Street, store number L5",
        address_ar : "شارع أول نوفمبر رقم المحل خ5 ",
        delivery_price : 0,
        wilaya_id: 38,
        commune_id : 1275,
        daira_id : 3803,
        user_id : 3
      }, 
    ])
    await Database.from('orders').insert([
      { 
        id : 1, 
        isFactor : 0,
        code : "O-0001",
        status : 0,
        paymentMode : 1,
        with_delivery : 1,
        totla_ht : 36500,
        totla_ttc : 48200,
        totla_tva : 1320,
        credit : 0,
        user_id : 1,
        address_id : 3,
      }, 
      { 
        id : 2,
        isFactor : 1,
        code : "O-0002",
        status : 2,
        paymentMode : 1,
        with_delivery : 1,
        totla_ht : 36500,
        totla_ttc : 48200,
        totla_tva : 1320,
        credit : 0,
        user_id : 1,
        address_id : 3,
      }, 
      { 
        id : 3,
        isFactor : 1,
        code : "O-0006",
        status : 0,
        paymentMode : 1,
        with_delivery : 1,
        totla_ht : 36500,
        totla_ttc : 48200,
        totla_tva : 1320,
        credit : 0,
        user_id : 1,
        address_id : 3,
      }, 
      { 
        id : 4, 
        isFactor : 0,
        code : "O-0003",
        status : 0,
        paymentMode : 1,
        with_delivery : 0,
        totla_ht : 36500,
        totla_ttc : 48200,
        totla_tva : 1320,
        credit : 1,
        user_id : 1,
        address_id : 3,
      }, 
      { 
        id : 5,
        isFactor : 0,
        code : "O-0004",
        status : 1,
        paymentMode : 1,
        with_delivery : 1,
        totla_ht : 36500,
        totla_ttc : 48200,
        totla_tva : 1320,
        credit : 0,
        user_id : 1,
        address_id : 3,
      }, 
      { 
        id : 6,
        isFactor : 1,
        code : "O-0005",
        status : 1,
        paymentMode : 1,
        with_delivery : 0,
        totla_ht : 36500,
        totla_ttc : 48200,
        totla_tva : 1320,
        credit : 1,
        user_id : 1,
        address_id : 3,
      }, 
    ])
    await Database.from('sub_orders').insert([
      { 
        id:1,
        qty : 300,
        totla_ht : 3000,
        totla_ttc : 1200,
        order_id : 1,
        product_id : 1,
      },
      {
        id:2,
        qty : 10,
        totla_ht : 4000,
        totla_ttc : 5200,
        order_id : 1,
        product_id : 2,
      },
      {
        id:3,
        qty : 2,
        totla_ht : 13000,
        totla_ttc : 3200,
        order_id : 2,
        product_id : 3,
      },
      {
        id:4,
        qty : 300,
        totla_ht : 3000,
        totla_ttc : 1200,
        order_id : 2,
        product_id : 1,
      },
      {
        id:5,
        qty : 10,
        totla_ht : 4000,
        totla_ttc : 5200,
        order_id : 3,
        product_id : 2,
      },
      {
        id:6,
        qty : 2,
        totla_ht : 13000,
        totla_ttc : 3200,
        order_id : 3,
        product_id : 3,
      },
      {
        id:7,
        qty : 300,
        totla_ht : 3000,
        totla_ttc : 1200,
        order_id : 4,
        product_id : 1,
      },
      {
        id:8,
        qty : 10,
        totla_ht : 4000,
        totla_ttc : 5200,
        order_id : 4,
        product_id : 2,
      },
      {
        id:9,
        qty : 2,
        totla_ht : 13000,
        totla_ttc : 3200,
        order_id : 5,
        product_id : 3,
      },
      {
        id:10,
        qty : 300,
        totla_ht : 3000,
        totla_ttc : 1200,
        order_id : 5,
        product_id : 1,
      },
      {
        id:11,
        qty : 10,
        totla_ht : 4000,
        totla_ttc : 5200,
        order_id : 6,
        product_id : 2,
      },
      {
        id:12,
        qty : 2,
        totla_ht : 13000,
        totla_ttc : 3200,
        order_id : 6,
        product_id : 3,
      },
    ])
  }
}

module.exports = AttribtuteSeeder
