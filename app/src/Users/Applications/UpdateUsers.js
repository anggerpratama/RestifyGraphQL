import UserModel from '../Domain/Entitties/UserModelEntities';

export class UpdateUsers {

    static async update(id , data){

        let updated = await UserModel.findOneAndUpdate({ _id:id }, { $set: data }).exec();

        if ( ! updated) throw new Error('Cannot update this user');

        return data;

    }

}