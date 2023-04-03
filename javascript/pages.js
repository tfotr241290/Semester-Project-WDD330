import { home } from "./home.js"

const pages = {
    'home':`${home}`,
    'cars':``,
    'subscribe':``,
    'checkout':``
}

export function getPageContent(page){
    let contentToReturn;

    switch(page){
        case 'home':
            contentToReturn = pages.home;
            break;
        case 'cars':
            contentToReturn = pages.cars;
            break;
        case 'subscribe':
            contentToReturn = pages.subscribe;
            break; 
        case 'checkout':
            contentToReturn = pages.checkout;
            break;
        default:
            contentToReturn = pages.home;
            break;
    }
    document.getElementById('content').innerHTML = contentToReturn;
}