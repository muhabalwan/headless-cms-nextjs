import GhostContentAPI from "@tryghost/content-api";

// TODO remove api to Global File
const api = new GhostContentAPI({
  url: process.env["NEXT_PUBLIC_BLOG_URL"] || "",
  key: process.env["NEXT_PUBLIC_CONTENT_API_KEY"] || "",
  version: "v3"
});

export const getPosts = async () => {
  const pages = await api.posts.browse()
    .catch(err => {
      console.error(err);
    });
  return pages;
};

