import { UserController } from '../controllers/userController';
import express, { Request, Response } from 'express';

export class UserRoutes{

  public _userController: UserController; 
  constructor() {
    this._userController = new UserController()
  }
    public routes(app:express.Application): void {
        app.route("/").get((req: Request, res: Response) => {
          res.status(200).send({
            message: "User Server Operational.",
          });
        });

        app.route("/register").post(this._userController.registerUser);
      }

    
}