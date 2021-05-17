import '../styles/global.css'
import '../styles/screen.css'

import React, { Component } from 'react';
import { useState } from 'react';
import { PostsOrPages } from '@tryghost/content-api';


export interface IPageProps {
  pages: PostsOrPages,
  posts: PostsOrPages,
}

interface IMyAppProps {
  Component: React.FunctionComponent<IPageProps>,
  pageProps: IPageProps,
}


export interface ISelectedPageId {
  selectedPageId: string;
}

function MyApp({ Component, pageProps }: IMyAppProps) {
  return (
      <Component {...pageProps}  />
  )
}

export default MyApp

