import { useState } from "react";
import Layout from "../components/Layout";
import { PostsOrPages } from '@tryghost/content-api';
import { INavList } from "./_app";


interface IPageContainerProps {
  pageSlug: string,
  pages: PostsOrPages,
  navList: INavList
}


export interface ISelectedLink {
  id: string,
  title?: string,
  slug: string,
}

const Page = (props: IPageContainerProps) => {
    const { pageSlug, pages, navList } = props;
    const [selectedPageId, setSelectedPageId] = useState("60827a29647814089c944f5b"); // TODO: fix this: this is the Home page ID!

    const page = props?.pages?.find(page => {
        return page.slug === props.pageSlug
      });

    const getSelectedLink = (selectedLink: ISelectedLink) => {
      selectedLink.id && setSelectedPageId(selectedLink.id);
      }

    const createMarkup = (html: string) => {
        return {__html: html};
    }

    return (
    <Layout pages={props.pages} getSelectedLink={getSelectedLink} navList={navList}>
      {
        page?.html ? <div dangerouslySetInnerHTML={createMarkup(page?.html)} /> : false
      }
    </Layout>)
}



export default Page;

