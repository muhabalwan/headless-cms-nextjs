import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import React, { MouseEvent } from 'react';
import { PostsOrPages } from '@tryghost/content-api';
import { ISelectedLink } from '../pages/PageContainer';

interface INavProps {
    pages: PostsOrPages,
    getSelectedLink: (el: ISelectedLink) => void
}

export default function Nav(props: INavProps) {
    const navElements = props?.pages?.map(page => {
        return { title: page.title, slug: page.slug, id: page.id };
    });

    const getSelectedLink = (e: MouseEvent, el: ISelectedLink) => {
        props.getSelectedLink(el);

    }

    return (
        <nav className={navStyles.nav}>
            <ul>
                {
                    navElements?.map( el => {
                        return (
                            <li key={el.id} onClick={(e) => getSelectedLink(e, el)}>
                                <Link href={'/'} as={`/${el.slug}`} key={el.id}>{el.title}</Link>
                            </li>
                        )
                    })
                    }
            </ul>
        </nav>
    )
}


