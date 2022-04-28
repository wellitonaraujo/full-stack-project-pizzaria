import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        // Verifica se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
              email: email
            }
          })

        if(!user) {
            throw new Error("User/password incorrect")
        }

        // Verifica se a senha digitada esta correta
        const passwordMatch = await compare(password, user.password)
        
        if(!passwordMatch) {
            throw new Error("User/password incorrect")
        }

        // Gerar token JWT e devolver dados do usuario como id, name e email...


        return { ok: true }
    }
}

export { AuthUserService };