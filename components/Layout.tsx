import { PostsOrPages } from '@tryghost/content-api';
import { ISelectedLink } from '../pages/PageContainer';
import { INavList } from '../pages/_app';
import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

interface ILayoutProps {
    children: React.ReactNode,
    pages: PostsOrPages,
    getSelectedLink: (el: ISelectedLink) => void,
    navList: INavList
}

const Layout = ({ children, pages, getSelectedLink, navList }: ILayoutProps) => {
    return (
        <>
            <Nav navList={navList} getSelectedLink={getSelectedLink} />
            <Header />
            <div>
                <main className={styles.main} >
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;
