import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstname: { 
        type : String , 
        required: true 
    },
    lastname: { 
        type : String , 
        required: true 
    },
    address: { 
        type: String , 
        default: "Not Defined" 
    }
    
} , {collection:"users_data"});

let User = mongoose.model('User' , userSchema);

export default User;