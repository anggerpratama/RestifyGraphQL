import {UserCreate} from '../../../src/Users/Applications/UsersCreate';
import {User} from '../../../src/Users/Infrastructure/Users';
import {Controller} from '../Controller';
import {DeleteUser} from '../../../src/Users/Applications/DeleteUser';
import {UpdateUsers} from "../../../src/Users/Applications/UpdateUsers";


export class UserController extends Controller {

    /**
     * function that handle request get all data
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */

    async getUsersAll(req , res){

        try {

            return this.success(
                res,
                "Success Get All Data Users",
                await User.all(),
            )
            
        } catch (error) {
            
            return this.internalServerError(
                res , 
                [error.message],
                500
            )

        }

    }


    /**
     * Function that handle request get detail users
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */

    async getDetailById(req , res){

        try {

            return this.success(
                res,
                "Success Get Data User",
                await User.getById(req.params.id),
            )
            
        } catch (error) {
            
            return this.internalServerError(
                res , 
                [error.message],
                500
            )

        }

    }

    /**
     * method that handle request of saving new data users
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */

    async saveNewData(req , res){

        try {
            
            return this.success(
                res , 
                "success create new data" , 
                await UserCreate.store(req.body)
            );

        } catch (error) {

            return this.internalServerError(
                res ,
                [error.message],
                500
            );

        }

    }

    async updateUserExist(req , res){

        try{

            return this.success(
                res ,
                "Success Update user",
                await UpdateUsers.update(req.params.id , req.body)
            )

        }catch (error) {

            return this.internalServerError(
                res ,
                [error.message],
                500
            );

        }

    }

    /**
     * Method that handle request to delete user exist
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */

    async deleteUserExist(req , res){

        try {
            
            return this.success(
                res , 
                "Success Delete User with id : " + req.params.id, 
                await DeleteUser.destroy(res , req.params.id)
            )

        } catch (error) {
            
            return this.internalServerError(
                res ,
                [error.message],
                500
            );

        }

    }

}