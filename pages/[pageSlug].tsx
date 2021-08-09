import { useRouter } from 'next/router'
import { getPages } from './api/page';
import { getContentSettings } from './api/contentSettings';
import { getPosts } from './api/post';
import PageContainer from './PageContainer';
import { IPageProps } from './_app';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DynamicPage(props: IPageProps) {
  const router = useRouter();
  const { pageSlug } = router.query;
  if (typeof pageSlug === "string") {
    return (
      <>
        <Header navList={props.navList} />
        <PageContainer pageSlug={pageSlug} pages={props.pages} />
        <Footer />
      </>
    )
  }
  return false;
}

export const getStaticPaths = async () => {
  const pages = await getPages();
  const paths = pages ? pages.map(page => {
    return {
      params: {
        pageSlug: page.slug,
      }
    }
  }) : [];
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  const pages = await getPages();
  const navList = await getContentSettings();

  return {
    props: { posts, pages: pages, navList: navList }
  }
}




