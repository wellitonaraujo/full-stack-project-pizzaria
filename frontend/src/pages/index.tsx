import Head from "next/head";
import Image from "next/image";

import logoImg from '../../public/logo.svg';
import styles from '../../styles/home.module.scss';
import { Input } from "../components/ui/Input";

export default function Home() {
  return (
    <>
    <Head>
      <title>Pizzaria - Login</title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria"/>

        <div className={styles.login}>
          <form>
            <Input 
              placeholder="Digite seu email"
              type="email"
            />

            <Input 
              placeholder="Sua senha"
              type="password"
            />
          </form>
        </div>

      </div>
    </>
  )
}
