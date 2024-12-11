import meta from "../../../pages/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "sidebarTitle": "About"
  }
}, {
  name: "authentication-api",
  route: "/authentication-api",
  frontMatter: {
    "sidebarTitle": "Authentication API"
  }
}, {
  name: "blogs-api",
  route: "/blogs-api",
  frontMatter: {
    "sidebarTitle": "Blogs API"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "pages-api",
  route: "/pages-api",
  frontMatter: {
    "sidebarTitle": "Pages API"
  }
}];