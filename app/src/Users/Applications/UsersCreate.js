import User from '../Domain/Entitties/UserModelEntities';
import passwordHash from 'password-hash';

export class UserCreate{

    static async store(data){

        let datasave = {
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            password: passwordHash.generate(data.password),
            address: data.address
        };

        new User(datasave).save();

        return datasave;

    }

}