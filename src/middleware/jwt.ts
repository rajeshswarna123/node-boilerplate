import { NextFunction, Request, Response } from "express";
import jsonwebtoken  from "jsonwebtoken";
import { apiResponse } from "../functions/apiResponse";

// require("dotenv").config();
const whitelist: string[] = [
  // "/register",
];
const secret = process.env.APPSETTING_ACCESS_TOKEN_SECRET

export async function jwt(req: Request, res: Response, next: NextFunction) {
  

  var token = req.headers.accesstoken;
  if (whitelist.includes(req.originalUrl.split('?')[0])) {
    console.log("req.originalUrl reached: " + req.originalUrl);
    next();
  } else {
    jsonwebtoken.verify(token as string, secret as string, (err: any) => {
      // if (err) return apiResponse(res, 400, false, "Invalid Token")
      next();
    });
  }
}
