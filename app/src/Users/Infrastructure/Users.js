import UserModel from '../Domain/Entitties/UserModelEntities';

export class User{

    static async all(){

        return UserModel.find({}).lean().exec()

    }

    static async getById(_id){

        return UserModel.find({_id: _id}).lean().exec()

    }

}