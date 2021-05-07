import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';


const Layout = ({ children, pages, getSelectedLink }) => {
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
