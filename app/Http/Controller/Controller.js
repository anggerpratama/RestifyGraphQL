
/**
 * 
 * Class base of Controller
 * 
 */

export class Controller{

    /**
     * 
     * Success response
     * 
     * @param {*} res
     * @param {*} message
     * @param {*} data
     * 
     */

    success(res , message , data){

        res.json({
            success: true,
            message: message,
            data: data
        });

    }

    /**
     * Internal server error response
     *
     * @param {*} res
     * @param error
     * @param {*} error_code
     */

    internalServerError(res , error = [] , error_code = 500){

        res.status(500);
        res.json({
            success:false,
            message: "Whoops, Somthing error in server",
            error_code: error_code,
            error:error
        })

    }


}