import { 
        GetServerSideProps,
        GetServerSidePropsContext,
        GetServerSidePropsResult
        } 
from "next";
import { parseCookies } from "nookies";

// funcao p/ paginas que apenas podem ser acessadas por visitantes
export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx)

        // caso tente acessar a pagina estando logado, redirecionamos
        if(cookies['@nextauth.token']){
            return {
                redirect:{
                    destination: '/dashboard',
                    permanent: false,
                }
            }
        }

        return await fn(ctx);

    }

}