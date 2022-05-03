import { useContext, FormEvent } from "react";
import Head from "next/head";
import Image from "next/image";

import logoImg from '../../public/logo.svg';
import styles from '../../styles/home.module.scss';
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

import Link from "next/link";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const {signIn} = useContext(AuthContext)

  async function handleLogin(event: FormEvent){
    event.preventDefault()

    let data = {
      email: "teste@teste.com",
      password: "123123"
    }
    await signIn(data)
  }

  return (
    <>
    <Head>
      <title>Pizzaria - Login</title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" className={styles.logoImg}/>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input 
              placeholder="Digite seu email"
              type="email"
            />

            <Input 
              placeholder="Sua senha"
              type="password"
            />

            <Button 
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Não possue uma conta? Cadastre-se</a>
          </Link>
        </div>

      </div>
    </>
  )
}
