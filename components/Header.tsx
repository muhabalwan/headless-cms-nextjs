import Head from 'next/head'
import Navigation from './Navigation';
import { ISelectedLink } from '../pages/PageContainer';
import { INavList } from '../pages/_app';


interface IHeader {
    navList: INavList
}

const Header = ({navList}: IHeader) => {
    return (
        <>
        <Head>
            <title>Home Page</title>
            <meta name="myProfile" content="web development, freelance, muhab alwan profile, javascript developer, frontend" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation navList={navList} />
        </>

    )
};


export default Header;