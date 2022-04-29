import { Request, Response, NextFunction } from "express";

export function isAuthenticated(    
    req: Request,
    res: Response,
    next: NextFunction
)
    {
        console.log('Chamouuu')

        return next()
    }