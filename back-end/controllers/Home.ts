import { Request, Response } from "express";





const index = (request: Request, response: Response) => {
   response.send('teste')
}


export {index};