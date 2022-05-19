import styles from './styles.module.scss';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export function Header(){

    const { signOut } = useContext(AuthContext);

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src='/logo.svg' width={170} height={60}/>
                </Link>

                <nav className={styles.menuNav}>
                    <Link href='/category'>
                        <a>Categoria</a>
                    </Link>

                    <Link href='/product'>
                        <a>Cardapio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#fff' size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}