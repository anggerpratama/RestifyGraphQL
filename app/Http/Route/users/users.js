import {UserController} from '../../Controller/Users/UserController';

const RouterInstance = require('restify-router').Router;
const router = new RouterInstance();


/**
 * Route to get all data of users
 */

router.get("/" , (req , res) => {
    new UserController().getUsersAll(req , res);
});


/**
 * Route to save new data do DB
 */

router.post("/save" , (req , res) => {
    new UserController().saveNewData(req , res);
});


/**
 * Route to get detail of users
 */

router.get("/:id" , (req , res) => {
    new UserController().getDetailById(req , res);
});

/**
 * Route to delete user exist
 */

router.del("/delete/:id" , (req , res) => {
    new UserController().deleteUserExist(req , res);
});

/**
 * Route to update user exist
 */

router.put("/update/:id" , (req , res) => {
    new UserController().updateUserExist(req , res);
});





module.exports = router;