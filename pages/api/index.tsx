import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: process.env["NEXT_PUBLIC_BLOG_URL"] || "",
    key: process.env["NEXT_PUBLIC_CONTENT_API_KEY"] || "",
    version: "v3"
});
export default api;
