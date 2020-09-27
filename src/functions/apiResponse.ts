import { Response } from "express";

export const apiResponse = (res:Response ,code: number, success: boolean, desc: string = '', payload = null) => {
    //pin this for mark
    if (success) {
        res.status(code).json({
            responseType: "ok",
            success: true,
            payload,
            responseDesc: {
                code,
                "message": desc
            }
            });
    }
    else {
        res.status(code).json({
            responseType: "error",
            success: false,
            responseDesc: {
                code,
                "message": desc
            }
            });
    }

}
