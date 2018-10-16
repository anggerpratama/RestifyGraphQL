const RouterInstance = require('restify-router').Router;
const router = new RouterInstance();


/**
 * Register user router
 */

router.add("/user" , require('./users/users'));


module.exports = router;