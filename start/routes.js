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
Route.post('users', 'UserController.store')
Route.put('users', 'UserController.update')
Route.post('users/forgotPassword', 'ForgotPasswordController.store')
Route.put('users/forgotPassword/:token/:email', 'ForgotPasswordController.update')

/**
 * BeckEnd API Admin Dashboard
*/

  Route.group(() => {
    Route.post("register", "AuthController.register");
    Route.post("login", "AuthController.login");  
  }).prefix("api").middleware("guest");



  Route.group(() => { 
    Route.get("/users/profile", "AuthController.show")
    Route.patch("/users/profile", "UserController.updateProfile")
    Route.patch("/users/email", "UserController.updateEmail")
    Route.patch("/users/password", "UserController.updatePassword")
  }).prefix("api").middleware(['auth'])





/**
 * Front End API Website 
*/
  Route.group(() => {

    Route.post("/categorys", "CategoryController.index");
    Route.get("/getConfig", "CategoryController.getConfig");
    Route.post("/getPopularCategories", "CategoryController.getPopularCategories");
    Route.post("/getCategoryBySlug", "CategoryController.getCategoryBySlug");

    Route.post("/getSettings", "SettingController.getSettings");

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

 
 
