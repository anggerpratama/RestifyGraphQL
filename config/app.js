import dotenv from 'dotenv';

dotenv.load();

export default {

    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application and can used when you
    | need to place the application's name in a email, view or
    | other location.
    |
    */

    app_name: process.env.APP_NAME || 'Restify',

    /*
    |--------------------------------------------------------------------------
    | Application Port
    |--------------------------------------------------------------------------
    |
    | This value is the port of your application 
    |
    */

    app_port: process.env.APP_PORT || 3000


}