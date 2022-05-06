import Head from "next/head";
import Image from "next/image";

import logoImg from '../../../public/logo.svg';
import styles from '../../../styles/home.module.scss';
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { AuthContext } from "../../contexts/AuthContext";

import Link from "next/link";
import { FormEvent, useState, useContext } from "react";
import { toast } from "react-toastify";

export default function Signup() {
  const { signUp } = useContext(AuthContext);

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const [loading, setLoading] = useState(false);

  async function handleSignup(event: FormEvent) {
    event.preventDefault()

    if(name === '' || email === '' || password === '') {    
      toast.warning("Preencha todos os campos.")
        return;
    }

    setLoading(true)

    let data = {
      name,
      email,
      password
    }

    await signUp(data)

    setLoading(false)

  }

  return (
    <>
    <Head>
      <title>Faça seu cadastro</title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" className={styles.logoImg}/>

        <div className={styles.login}>
            <h1>Criando sua conta</h1>

          <form onSubmit={handleSignup}>
          <Input 
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={ (event) => setNome(event.target.value) }
            />

            <Input 
              placeholder="Digite seu email"
              type="email"
              value={email}
              onChange={ (event) => setEmail(event.target.value) }
            />

            <Input 
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={ (event) => setPassword(event.target.value) }
            />

            <Button 
              type="submit"
              loading={loading}
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
