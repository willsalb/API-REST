import { Response } from "express";

export const badRequest = (res: Response, err: string) => 
  res.status(400).json({
    err
  })

export const internalServerError = (res: Response, err: Error) => 
  res.status(500).json({
    err: err.message
  })

export const notFound = (res: Response) => res.status(404);

export const Ok = (res: Response) => res.status(200);