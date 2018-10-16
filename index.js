import restify from 'restify';
import dbConnection from './Providers/DatabaseProviders';
import app_config from './config/app';
import graphqlHTTP from 'express-graphql';

import UserSchema from './config/graphql';

const server = restify.createServer({
    name : app_config.app_name,
    ignoreTrailingSlash: true
});

//load the dotenv
require("dotenv").load();

//server can read header
server.use(restify.plugins.acceptParser(server.acceptable));

// server can read request body
server.use(restify.plugins.bodyParser());

// server can read query string
server.use(restify.plugins.queryParser());

server.get("/" , function (req , res) {
    res.json({
        name: server.name,
        status: "Active"
    })
});

/**
 * Config route core graphQL
 */

server.post('/graphql' , graphqlHTTP({
    schema: UserSchema,
    graphiql: false
}));

server.get('/graphql' , graphqlHTTP({
    schema: UserSchema,
    graphiql: true
}));


/**
 * Import all Providers
 */
dbConnection;


/**
 * import all config from config/ dir
 */

 require('./config/app');


/**
 * Import all routes from app/http/route
 */

 const router = require('./app/Http/Route/index');

 router.applyRoutes(server);


server.listen(app_config.app_port , function () {

    console.log('Server start at port '+app_config.app_port);
    
});