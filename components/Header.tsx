import headerStyle from '../styles/Header.module.css';
import Head from 'next/head'
import Nav from './Nav';

const Header = () => {
    return (
        <>
        <Head>
            <title>Home Page</title>
            <meta name="myProfile" content="web development, freelance, muhab alwan profile, javascript developer, frontend" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        </>

    )
};


export default Header;