'use strict'
const Orders = use('App/models/Order')
const SubOrder = use('App/models/SubOrder')

class OrderController {
  async index ({ request, response }) {
    
  }
  async orderById ({auth, request, response }) {
    try { 
      let id = request.input('id')
      let orders = await Orders.query()
                               .where('user_id',auth.current.user.id) 
                               .where('id',id)
                               .with('subOrder.products.tva') 
                               .with('address.wilaya')
                               .with('address.daira')
                               .with('address.commune')
                               .first()
      return response.json(orders)
    } catch (err) {
      console.log('err :>> ', err);
    } 
  }
  async histOrders ({auth, request, response }) {
    try {
      let page     = request.input('page') || 1
      let limit    = request.input('limit') || 12
      let status    = request.input('status') || ''
      let sort    = request.input('sort') || "asec"
      let isFactor    = request.input('isFactor') 
      let orders = await Orders.query()
                             .where('user_id',auth.current.user.id)
                             .optional(query => { 
                               if (status) {
                                 query.where('status',status) 
                               }
                               if (isFactor !== false) {
                                 query.where('isFactor',isFactor) 
                               }
                              })
                             .with('subOrder')
                             .orderBy('id', sort)
                             .paginate(page, limit) 

      return response.json(orders)
    } catch (err) {
      console.log('err :>> ', err);
    } 
  }
 
  async create ({ request, response }) {
  }
 
  async proceedToCheckout ({auth, request, response }) {
    let req = request.all(); 
    console.log('req :>> ', req);
    try {
      let orders = new Orders;
      orders.isFactor      = req.isFactor;
      orders.code          = req.code;
      orders.status        = req.status;
      orders.paymentMode   = req.paymentMode;
      orders.with_delivery = req.with_delivery;
      orders.totla_ht      = req.totla_ht;
      orders.totla_ttc     = req.totla_ttc;
      orders.totla_tva     = req.totla_tva;
      orders.credit        = req.credit;
      orders.user_id       = auth.current.user.id;
      orders.address_id    = req.address_id;
      let save = await orders.save()
      if (save) {
        req.sub_orders.forEach(async(Sub) => {
          let subOrder = new SubOrder;
          subOrder.qty = Sub.quantity
          subOrder.totla_ht = Sub.totalHt
          subOrder.total_tva = Sub.totalTva
          subOrder.totla_ttc = Sub.totalTtc
          subOrder.order_id = orders.id
          subOrder.product_id = Sub.product.id
          await subOrder.save()
        })
      }
      return response.json(true)
    } catch (err) {
      console.log('err :>> ', err);
      response
        .status(404)
        .json({ type: 'error', message: err })
    }
  }
 
  async show ({ params, request, response }) {
  }
 
  async edit ({ params, request, response }) {
  }
 
  async update ({ params, request, response }) {
  }
 
  async destroy ({ params, request, response }) {
  }
}

module.exports = OrderController
