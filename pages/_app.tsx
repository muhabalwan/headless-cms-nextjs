import '../styles/global.css'
import '../styles/screen.css'

import React, { Component } from 'react';
import { useState } from 'react';
import { PostsOrPages } from '@tryghost/content-api';


export interface IPageProps {
  pages: PostsOrPages,
  posts: PostsOrPages,
  selectedProps: string,
}

interface IMyAppProps {
  Component: React.FunctionComponent,
  pageProps: IPageProps,
}

function MyApp({ Component, pageProps }: IMyAppProps) {
  const [selectedPageId, setSelectedPageId] = useState("60827a29647814089c944f5b");

  return (
      <Component {...pageProps}  selectedPageId={selectedPageId} />
  )
}

export default MyApp

