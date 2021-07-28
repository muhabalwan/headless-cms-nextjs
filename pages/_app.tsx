import '../styles/global.css'
import '../styles/screen.css'

import React, { Component } from 'react';
import { useState } from 'react';
import { PostsOrPages, Settings } from '@tryghost/content-api';



export type INavList = Array<{
  label: string;
  url: string;
}>
export interface IPageProps {
  pages: PostsOrPages,
  posts: PostsOrPages,
  navList: INavList
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
    <Component {...pageProps} />
  )
}

export default MyApp

