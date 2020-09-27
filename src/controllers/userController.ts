import { Request, Response } from 'express';
import { apiResponse } from '../functions/apiResponse';
import * as userService from '../functions/user/userService'

export class UserController{
    t: any;
    public async registerUser(request: Request, response: Response){
        try{
            this.t = "ddf";
        userService.register(request.body).then(isCreated=>{
            if(isCreated){
                return  apiResponse(response, 200, true, "Registered successfully");
            }
        });
        }
        catch(ex){
            throw ex;
        }
    }
}