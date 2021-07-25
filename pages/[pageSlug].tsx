import { useRouter } from 'next/router'
import { getPages } from './api/page';
import { getContentSettings } from './api/contentSettings';
import { getPosts } from './api/post';
import PageContainer from './PageContainer';
import { IPageProps } from './_app';


export default function DynamicPage(props: IPageProps) {
  const router = useRouter();
  const { pageSlug } = router.query;
  // TODO: how can we make this better
  console.log('props.navList', props.navList);
  if (typeof pageSlug === "string") {
    return (
      <PageContainer pageSlug={pageSlug} pages={props.pages} navList={props.navList}/>
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




