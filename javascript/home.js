export const home = `
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
        <input type="submit" value="SELECT MY CAR">
    </div>

    <div id="car-animation">
        <img src="https://ik.imagekit.io/tfotr241290/animation-car.png?updatedAt=1679942302753" alt="animation-car">
    </div>

    <div class="slogan">
        <h1 class="slog">With us you hire the best car at the best price</h1>
    </div>


    <div class="suscribe">
        <form method="get" id="myForm">
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
              <a href="#" onclick = "getPageContent('subscribe')><input type="submit" value="Subscribe"></a>
            </div>
          </form>
    </div>
    
</main>`