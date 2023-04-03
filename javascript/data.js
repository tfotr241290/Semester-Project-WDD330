const accessKey = '7F-ZRGL0PGzM-wC2Y1WBSuQKiss_448K7HPUtK5h-P0'; 

export async function getImages(int,type,orientation){
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${type}&orientation=${orientation}&per_page=${int}10&client_id=${accessKey}`);
    console.log(response);

    if(response.status === 200){
        const data = await response.json();
        console.log(data);
        displayNav(data);
        
    } else{
        console.log('Something went wrong...')
    }
    }

    export const displayNav = (data)=>{

        let logoPath = "https://ik.imagekit.io/tfotr241290/Black_n_White_Luxury__Rent_Car_Logo.png?updatedAt=1679597309897";

        const hero = data.results[3].urls.regular;

        const navImages = `<img name=slider class="navimages" src="${hero}">`

        

        const socialMedia = `<section class="logo"><a href="./index.html"><img class="nav-img" src=${logoPath} alt="navimgcar"></a></section><section class="media"><a href="https://www.facebook.com"><img class="face" src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt"facebooklogo"></a> <a href="https://www.twitter.com"><img class="twitter" src="https://cdn-icons-png.flaticon.com/128/3670/3670211.png" alt"facebooklogo"></a> <a href="https://www.instagram.com"><img class="insta" src="https://cdn-icons-png.flaticon.com/128/3670/3670125.png" alt"facebooklogo"></a></section>`
        
        

        document.querySelector(".navigation").innerHTML = navImages;
        document.querySelector(".heading").innerHTML = socialMedia;

    
    }
