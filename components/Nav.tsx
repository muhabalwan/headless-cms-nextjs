import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import React from 'react';

export default function Nav(props) {
    const navElements = props?.pages?.map(page => {
        return { title: page.title, slug: page.slug, id: page.id };
    });

    const getSelectedLink = (e, el) => {
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


