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
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
// routes for user
Route.post('/create', "UserController.createUser")
Route.post('/login', "UserController.login")
Route.post('/logout', "UserController.logOut")
// routes for post
Route.get('/home', 'PostController.getAllPosts')
Route.post('/post', 'PostController.createPost').middleware(['auth:jwt'])

Route.post('/uploadImage', 'PostController.uploadImage')

 //routes for like
Route.post('/like', 'LikeController.createLike')
