import { useContext, FormEvent, useState } from "react";
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent){
    event.preventDefault()

    if(email === '' || password === '') return;

      setLoading(true)

    let data = {
      email,
      password,
    }
    await signIn(data)
      setLoading(false)
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input 
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button 
              type="submit"
              loading={loading}
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
