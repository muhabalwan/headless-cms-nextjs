import GhostContentAPI from "@tryghost/content-api";

const CONTENT_API_KEY = "0802107f84994d6baa7ab909f2";
const BLOG_URL = "http://localhost:2368";


const api = new GhostContentAPI({
    url: BLOG_URL,
    key: CONTENT_API_KEY,
    version: "v3"
});
export default api;
