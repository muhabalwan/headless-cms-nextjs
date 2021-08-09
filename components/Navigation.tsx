import navStyles from '../styles/Navigation.module.css';
import Link from 'next/link';
import React, { MouseEvent } from 'react';
import { ISelectedLink } from '../pages/PageContainer';
import { INavList } from '../pages/_app';

interface INavProps {
    navList: INavList
}

export default function Navigation(props: INavProps) {


    return (
        <nav className={navStyles.nav}>
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
        </nav>
    )
}


