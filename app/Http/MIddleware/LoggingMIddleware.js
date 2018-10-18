export class LoggingMIddleware {

    handle(req , res , next) {

        console.log('Passing Middleware');
        next();

    }

}