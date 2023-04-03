import { getImages } from "./data.js";
import { getPageContent } from "./pages.js";

const pageContent = getPageContent('home');
document.querySelector('.bodyI').onload = pageContent;

getImages(1,'car','landscape');