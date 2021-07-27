import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
// TODO remove api to Global File
const api = new GhostContentAPI({
  url: process.env["NEXT_PUBLIC_BLOG_URL"] || "",
  key: process.env["NEXT_PUBLIC_CONTENT_API_KEY"] || "",
  version: "v3"
});

export const getPage = async (id: string) => {
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