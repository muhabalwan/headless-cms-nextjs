import '../styles/global.css'
import '../styles/screen.css'


import Layout from '../components/Layout';
// import { getPages } from './api/page';

import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [selectedPageId, setSelectedPageId] = useState("60827a29647814089c944f5b");

  const getSelectedLink = (selectedLink) => {
    setSelectedPageId(selectedLink.id);
  }

  return (
      <Component {...pageProps}  selectedPageId={selectedPageId} />
  )
}

export default MyApp

