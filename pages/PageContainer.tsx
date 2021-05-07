import { useState } from "react";
import Layout from "../components/Layout";


const Page = (props) => {
    const { pageSlug, pages } = props;
    console.log('pageSlug -->', pageSlug);
    console.log('pages -->', pages);
    const [selectedPageId, setSelectedPageId] = useState("60827a29647814089c944f5b");

    const page = props?.pages?.find(page => {
        return page.slug === props.pageSlug
      });

    const getSelectedLink = (selectedLink) => {
        setSelectedPageId(selectedLink.id);
      }

    const createMarkup = (html) => {
        return {__html: html};
    }

    return (
    <Layout pages={props.pages} getSelectedLink={getSelectedLink}>
        <div dangerouslySetInnerHTML={createMarkup(page.html)} />
    </Layout>)
}



export default Page;

