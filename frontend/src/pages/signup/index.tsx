import Head from "next/head";
import Image from "next/image";

import logoImg from '../../../public/logo.svg';
import styles from '../../../styles/home.module.scss';
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

import Link from "next/link";

export default function Signup() {
  return (
    <>
    <Head>
      <title>Faça seu cadastro</title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" className={styles.logoImg}/>

        <div className={styles.login}>
            <h1>Criando sua conta</h1>
          <form>
          <Input 
              placeholder="Digite seu nome"
              type="email"
            />

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
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <a className={styles.text}>Já possue uma conta? Faça Login</a>
          </Link>
        </div>

      </div>
    </>
  )
}
