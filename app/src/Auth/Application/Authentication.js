import UsersModel from '../../Users/Domain/Entitties/UserModelEntities';
import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';
import config from '../../../../config/auth';

export class Authentication {

    static async loginUsers(data){

        if(! data.username && ! data.password){
            return new Error('You need to insert username and password')
        }

        let checkUser = await UsersModel.findOne({ username: data.username }).lean().exec();

        if (checkUser){

            let password = data.password;

            if (passwordHash.verify(password , checkUser.password) === true) {

                checkUser.token = null;

                const token = jwt.sign(checkUser , config.jwt_key , {
                    expiresIn: '15d'
                });

                await UsersModel.findOneAndUpdate({ _id:checkUser._id } , { $set : { token:token } }).exec();

                checkUser.token = token;

                return checkUser;
            }

            return new Error('Your password is wrong');

        }

        return new Error('You are not registered');

    }

}