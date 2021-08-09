import navStyles from '../styles/Navigation.module.css';
import Link from 'next/link';
import React from 'react';
import { INavList } from '../pages/_app';
import styled from 'styled-components';

interface INavProps {
    navList: INavList
}

const StyledNav = styled.nav`
    height: 50px;
    padding: 10px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a {
        color: white;
    }
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
    ul li a {
        padding-left: 10px;
    }
`;

export default function Navigation(props: INavProps) {
    return (
        <StyledNav>
            <ul>
                {
                    props?.navList?.map(el => {
                        return (
                            <li key={el.label}>
                                <Link href={el.url} key={el.label}>{el.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledNav>
    )
}


