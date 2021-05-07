import GhostContentAPI from "@tryghost/content-api";


const CONTENT_API_KEY = "0802107f84994d6baa7ab909f2";
const BLOG_URL = "http://localhost:2368";



// Create API instance with site credentials
const api = new GhostContentAPI({
    url: BLOG_URL,
    key: CONTENT_API_KEY,
    version: "v3"
  });

  export const getPage = async(id: string) => {
    const page = await api.pages.read({ id })
    .catch(err => {
      console.error(err);
    });
    return page;
  };



  export const getPages = async () => {
    const pages = await api.pages.browse()
    .catch(err => {
      console.error(err);
    });
    return pages
  }