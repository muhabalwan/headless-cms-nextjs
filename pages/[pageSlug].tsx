import { useRouter } from 'next/router'
import { useState } from 'react';
import Layout from '../components/Layout';
import { getPage, getPages } from './api/page';
import { getPosts } from './api/post';
import PageContainer from './PageContainer';

export default function DynamicPage (props) {
  const router = useRouter();
  const { pageSlug } = router.query;
   return (
      <PageContainer pageSlug={ pageSlug } pages={props.pages} />
    )
}



export const getStaticPaths = async () => {
  const pages = await getPages();
  const paths = pages.map(page => {
    return {
      params: {
        pageSlug: page.slug
      }
    }
  });
  return {
    paths,
    fallback: false
  }
}

// export async function getStaticPaths() {
//   const paths = [];
//   return {
//     paths,
//     fallback: false
//   }
// }

export const getStaticProps = async () => {
  const posts = await getPosts();
  const pages = await getPages();
  console.log('props pages -->', pages)

  return {
    props: { posts, pages: pages }
  }
}




