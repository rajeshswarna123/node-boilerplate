import { NextFunction, Request, Response } from 'express';
import { apiResponse } from '../functions/apiResponse';

export async function errorHandler(error: Error, req: any, res: any, next: any) {

    if (typeof (error) === 'string') {
        // custom application error
        return apiResponse(res,400,false,`An error occurred: ${error}`);
    }

    if (error.name === 'UnauthorizedError') {
        
        // jwt authentication error
        return apiResponse(res,401,false,`Unauthorized`);
    }

    // default to 500 server error
    return apiResponse(res,401,false,error.message);
}