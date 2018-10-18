import UserModel from '../Domain/Entitties/UserModelEntities';
import passwordHash from "password-hash";

export class UpdateUsers {

    static async update(id , data){

        let password;

        let currentUser = await UserModel.findById(id).lean().exec();

        if (data.password){
            password = passwordHash.generate(data.password);
        }else{
            password = currentUser.password
        }

        let datasave = {
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            password: password,
            address: data.address
        };

        let updated = await UserModel.findOneAndUpdate({ _id:id }, { $set: datasave }).exec();

        if ( ! updated) throw new Error('Cannot update this user');

        return datasave;

    }

}