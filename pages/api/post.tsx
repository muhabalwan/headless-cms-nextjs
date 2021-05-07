import GhostContentAPI from "@tryghost/content-api";

// TODO: store this in a safe place
const CONTENT_API_KEY = "0802107f84994d6baa7ab909f2";
const BLOG_URL = "http://localhost:2368";



// Create API instance with site credentials
const api = new GhostContentAPI({
    url: BLOG_URL,
    key: CONTENT_API_KEY,
    version: "v3"
  });

  export const getPosts = async() => {
    const pages = await api.posts.browse()
    .catch(err => {
      console.error(err);
    });
    return pages;
  };

