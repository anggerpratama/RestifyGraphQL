import User from '../Domain/Entitties/UserModelEntities';

export class UserCreate{

    static async store(data){

        new User(data).save();

        return data;

    }

}