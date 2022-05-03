import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignProps) => Promise<void>;
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

export function AuthProvider({ children }: AuthProvierProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn() {
        alert('clicpouuu')
    }
    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}