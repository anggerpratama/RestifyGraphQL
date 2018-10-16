export class AuthMiddleware {

    handle(req , res , next) {

        if(typeof req.headers.token !== "string"){
            res.status(401);
            res.json('token is invalid! string');
        }else if (req.headers.token.length < 10){
            res.status(401);
            res.json('token is invalid!');
        }else {
            next();
        }

    }

}