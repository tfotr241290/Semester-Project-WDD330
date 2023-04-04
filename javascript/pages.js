const home = `
<div id="root">
    <header class="heading"></header>
    <nav class="navigation"></nav>
</div>
<main>

    <div class="models">

    </div>

    <div class="grid">
        <div class="pickup">
            <label for="pickup">PickUp:</label>
            <input type="date" id="pickup" name="pickup">
            
        </div>
        <div class="arrival">
            <label for="arrival">Arrival:</label>
            <input type="date" id="arrival" name="arrival">
            
        </div>
    </div>

    <div class="submission">
        <a href="cars.html"><input type="submit" value="SELECT MY CAR" onclick="getPageContent('cars')"></a>
    </div>

    <div id="car-animation">
        <img src="https://ik.imagekit.io/tfotr241290/animation-car.png?updatedAt=1679942302753" alt="animation-car">
    </div>

    <div class="slogan">
        <h1 class="slog">With us you hire the best car at the best price</h1>
    </div>


    <div class="suscribe">
        <form method="get" id="myForm" action="#">
            <div class="container">
              <h2>Subscribe to our Newsletter</h2>
              <p>If you want to stay updated about new models availability, limited offers and promotions, enter your name and e-mail address and you will be receiveing a weekly e-mail.</p>
            </div>
          
            <div class="container">
              
              <input type="text" id="name" placeholder="Name" name="name" required>
              <input type="text" placeholder="Email address" name="mail" required>
              <label>
                <input type="checkbox" checked="checked" name="subscribe"> Weekly Newsletter
              </label>
            </div>
          
            <div class="container">
            <a href="#" onclick="getPageContent('subscribe')"><input type="submit" value="Subscribe"></a>
            </div>
          </form>
    </div>
    
</main>`;

const subscribe = `
    <div class="sHeading">
        <header class="sHeader">
        <section class="logo"><a href="./index.html"><img class="nav-img" src="https://ik.imagekit.io/tfotr241290/Black_n_White_Luxury__Rent_Car_Logo.png?updatedAt=1679597309897" alt="navimgcar"></a></section><section class="media"><a href="https://www.facebook.com"><img class="face" src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt"facebooklogo"></a> <a href="https://www.twitter.com"><img class="twitter" src="https://cdn-icons-png.flaticon.com/128/3670/3670211.png" alt"facebooklogo"></a> <a href="https://www.instagram.com"><img class="insta" src="https://cdn-icons-png.flaticon.com/128/3670/3670125.png" alt"facebooklogo"></a></section>
        </header>
    </div>
    
    <div class="thanks">
        <h1>Welcome to UMC-Car Rental and thank your for subscribing to our newsletter.</h1>
        <p>We really appreciate your loyalty. We will maintain you uptaded with the newest offers and limited promotions</p>
    </div>`;

const cars = `
    <div class="sHeading">
        <header class="sHeader">
            <section class="logo"><a href="./index.html"><img class="nav-img" src="https://ik.imagekit.io/tfotr241290/Black_n_White_Luxury__Rent_Car_Logo.png?updatedAt=1679597309897" alt="navimgcar"></a></section><section class="media"><a href="https://www.facebook.com"><img class="face" src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt"facebooklogo"></a> <a href="https://www.twitter.com"><img class="twitter" src="https://cdn-icons-png.flaticon.com/128/3670/3670211.png" alt"facebooklogo"></a> <a href="https://www.instagram.com"><img class="insta" src="https://cdn-icons-png.flaticon.com/128/3670/3670125.png" alt"facebooklogo"></a></section>
        </header>
    </div>

    <main>
        <div>
            <div class="cards"></div>
        </div>
    </main>
    <button type="submit" onclick="getPageContent('checkout')">CHECKOUT</button>
`;

const checkout = `
<div class="sHeading">
<header class="sHeader">
    <section class="logo"><a href="./index.html"><img class="nav-img" src="https://ik.imagekit.io/tfotr241290/Black_n_White_Luxury__Rent_Car_Logo.png?updatedAt=1679597309897" alt="navimgcar"></a></section><section class="media"><a href="https://www.facebook.com"><img class="face" src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt"facebooklogo"></a> <a href="https://www.twitter.com"><img class="twitter" src="https://cdn-icons-png.flaticon.com/128/3670/3670211.png" alt"facebooklogo"></a> <a href="https://www.instagram.com"><img class="insta" src="https://cdn-icons-png.flaticon.com/128/3670/3670125.png" alt"facebooklogo"></a></section>
</header>
</div>
    <main>
        <form action="" class="checkout-form">
            <fieldset class="contact-form">
                <legend>Contact Info</legend>
                <label class="top" for="fname">First name* <input type="text" name="fname" id="fname" required></label>
                <label class="top" for="email">Email* <input type="email" name="email" id="email" placeholder="example@gmail.com" required></label>
                <label class="top" for="phone">Phone-number* <input type="tel" name="phone" id="phone" required></label>
            </fieldset>
            <fieldset class="payment-form">
                <legend>Payment Info</legend>
                <label class="top" for="cc-number">Card number<input id="cc-number" name="cc-number" autocomplete="cc-number" inputmode="numeric" maxlength="50" pattern="[\d ]{10,30}" required></label>
                <label class="top" for="cc-name">Name on card<input id="cc-name" name="cc-name" autocomplete="cc-name" maxlength="50" pattern="[\p{L} \-\.]+" required></label>
                <label id="cc-exp-csc" for="cc-exp">Expiry date<input id="cc-exp" name="cc-exp" autocomplete="cc-exp" placeholder="MM/YY" maxlength="5" required></label>
                <label for="cc-csc">Security code<input id="cc-csc" name="cc-csc" inputmode="numeric" maxlength="3" required></label>
            </fieldset>
        </form>
    </main>`;
document.querySelector(".carList");

const pages = {
  home: `${home}`,
  cars: `${cars}`,
  subscribe: `${subscribe}`,
  checkout: `${checkout}`,
};

function getPageContent(page) {
  let contentToReturn;

  switch (page) {
    case "home":
      contentToReturn = pages.home;
      break;
    case "cars":
      contentToReturn = pages.cars;
      break;
    case "subscribe":
      contentToReturn = pages.subscribe;
      break;
    case "checkout":
      contentToReturn = pages.checkout;
      break;
    default:
      contentToReturn = pages.home;
      break;
  }

  document.getElementById("content").innerHTML = contentToReturn;
}
