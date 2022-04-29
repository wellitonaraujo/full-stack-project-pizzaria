import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string,
}

// Verifica se esta autenticado
export function isAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    // pegando apenas o token
    const [, token] = authToken.split(" ");

    try {
        // validar o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        return next();
        
    } catch (error) {
        return res.status(401).end();
    }

}