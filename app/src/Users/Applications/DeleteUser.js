import User from "../Domain/Entitties/UserModelEntities";

export class DeleteUser {

    static async destroy(_id) {

        let id = _id;
        
        const users = await User.findById(id).exec();

        if (users == null){
            throw new Error('user not found , please check the id')
        }

        await User.findById(id).deleteOne().exec();

        return {
            _id: id
        };

    }

}