import { PostsOrPages } from '@tryghost/content-api';
import { ISelectedLink } from '../pages/PageContainer';
import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

interface ILayoutProps {
    children: React.ReactNode,
    pages: PostsOrPages,
    getSelectedLink: (el: ISelectedLink) => void
}

const Layout = ({ children, pages, getSelectedLink }: ILayoutProps) => {
    return (
        <>
            <Nav pages={pages} getSelectedLink={getSelectedLink} />
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
