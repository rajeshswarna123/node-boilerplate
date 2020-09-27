import { NextFunction, Request, Response } from "express";

require("dotenv").config();
export async function requestMiddleware(req: Request, res: Response, next: NextFunction) {
  if (
    req.headers.apikey === process.env.APPSETTING_API_KEY &&
    req.headers.apisecret === process.env.APPSETTING_API_SECRET
  ) {
    next();
  } else {
    res.set(401).json({
      responseType: "error",
      responseDesc: "Unauthorized!",
      errorCode: 401,
    });
  }
}
