import { createContext, ReactNode, useState } from "react";
import {destroyCookie, setCookie, parseCookies} from 'nookies';
import Router from 'next/router';

import {api} from '../services/apiClient';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignProps = {
    email: string;
    password: string;
}

type AuthProvierProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

// função para deslogar
export function signOut(){
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
        
    } catch (error) {
        console.log('error ao deslogar..')
    }
}

export function AuthProvider({ children }: AuthProvierProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    // função para logar 
    async function signIn({ email, password }: SignProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            })

            const { id, name, token } = response.data;
            // console.log(responde.data)
            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30,  // 30d para expiração desse token
                path: "/" // As rotas que terão acesso ao token
            })

            setUser({
                id,
                name,
                email,
            })

            // Passar para as prox requisições o token de acesso
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            // Redirecionando o user para a rota /dashboard
            Router.push('/dashboard')


        } catch (error) {
            console.log('Erro ao acessar', error)
        }
    }
    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}