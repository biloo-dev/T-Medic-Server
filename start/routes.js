'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')


/**
 * BeckEnd API Admin Dashboard
*/

  Route.group(() => {
    Route.post("register", "AuthController.register");
    Route.post("login", "AuthController.login");  
    Route.post("/refreshToken", "AuthController.refreshToken")
  }).prefix("api");
 
  Route.group(() => { 
    Route.post("/users/profile", "AuthController.show")
    Route.post("/logout", "AuthController.logout")
    Route.post("/users/editProfile", "AuthController.updateProfile")
     
    Route.post("/users/saveAddress", "AuthController.saveAddress")
    Route.post("/users/deleteAddress", "AuthController.deleteAddress")

    Route.patch("/users/email", "UserController.updateEmail")
    Route.post("/users/password", "AuthController.updatePassword")

    Route.post("/orders/orders", "OrderController.histOrders")
    Route.post("/orders/orderById", "OrderController.orderById")
    Route.post("/orders/proceedToCheckout", "OrderController.proceedToCheckout")
 
    Route.post('users',        'UserController.index')
    Route.post('users/store',  'UserController.store')
    Route.post('users/update', 'UserController.update')
    Route.post("users/delete", "UserController.destroy");
    
    Route.post('users/forgotPassword', 'ForgotPasswordController.store')
    Route.put('users/forgotPassword/:token/:email', 'ForgotPasswordController.update')
    
  }).prefix("api").middleware(['auth'])
  
  /**
   * Front End API Website 
   */
  Route.group(() => {
    Route.post("users/verifyEmail", "UserController.verifyEmail");

    Route.post("/newsletter", "AuthController.newsletter");

    Route.post("/categorys", "CategoryController.index");
    Route.get("/getConfig", "CategoryController.getConfig");
    Route.post("/getPopularCategories", "CategoryController.getPopularCategories");
    Route.post("/getCategoryBySlug", "CategoryController.getCategoryBySlug");

    Route.post("/getSettings", "SettingController.getSettings");
    Route.post("/settings/allAdress", "SettingController.allAdress");

    Route.post("/getProductsList", "ProductController.index"); 
    Route.post("/getPopularProducts", "ProductController.getPopularProducts");
    Route.post("/getFeaturedProducts", "ProductController.getFeaturedProducts");
    Route.post("/getLatestProducts", "ProductController.getLatestProducts");
    Route.post("/getTopRatedProducts", "ProductController.getTopRatedProducts");
    Route.post("/getDiscountedProducts", "ProductController.getDiscountedProducts");
    Route.post("/getSuggestions", "ProductController.getSuggestions");
    Route.post("/getProductBySlug", "ProductController.getProductBySlug");
    Route.post("/getRelatedProducts", "ProductController.getRelatedProducts");


    Route.get("/getImg/:folder?/:category?/:img?", "ProductController.getImg");
  }).prefix("api")

 
 
