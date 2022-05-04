import { createContext, ReactNode, useState } from "react";
import {destroyCookie} from 'nookies';
import Router from 'next/router';

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
        console.log("dados:")
        console.log(email)
        console.log(password)
    }
    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}