import {canSSRAuth} from '../../utils/canSSRAuth';
import Head from 'next/head';
import { Header } from '../../components/Header';

export default function Dashboard(){
    return(
        <>
        <Head>
            <title>Painel - Los Pollos Hermanos</title>
        </Head>
        <Header />
        <div>
            <h1>Header</h1>
        </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})