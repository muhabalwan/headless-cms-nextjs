import Head from 'next/head'
import Navigation from './Navigation';
import { INavList } from '../pages/_app';
import styled from 'styled-components';


const StyledHeader = styled.div``;


interface IHeader {
    navList: INavList
}

const Header = ({navList}: IHeader) => {
    return (
        <StyledHeader>
        <Head>
            <title>Home Page</title>
            <meta name="myProfile" content="web development, freelance, muhab alwan profile, javascript developer, frontend" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation navList={navList} />
        </StyledHeader>

    )
};


export default Header;