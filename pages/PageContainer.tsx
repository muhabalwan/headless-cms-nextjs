import { useEffect, useState } from "react";
import { PostsOrPages, PostOrPage } from '@tryghost/content-api';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

interface IPageContainerProps {
  pageSlug: string,
  pages: PostsOrPages,
}

export interface ISelectedLink {
  label: string,
  url: string,
}

const Page = (props: IPageContainerProps) => {
  const { pageSlug } = props;
  const [selectedPage, setSelecetedPage] = useState<PostOrPage>();


  useEffect(() => {
    const pageFromSlug = getPageFromSlug(pageSlug);
    setSelecetedPage(pageFromSlug);
  });

  const getPageFromSlug = (pageSlug: string) => {
    const selectedPage = props.pages.find(page => {
      if (page?.slug?.toLowerCase() === pageSlug.toLowerCase()) {
        return page;
      }
    });
    return selectedPage;
  }

  const createMarkup = (html: string) => {
    return { __html: html };
  }

  return (
    <StyledPageContainer>
      {
        selectedPage?.html ? <div dangerouslySetInnerHTML={createMarkup(selectedPage?.html)} /> : false
      }
    </StyledPageContainer>
  )
}

export default Page;

