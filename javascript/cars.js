// export const cars = `
// <main>
//         <div>
//             <label><input type="checkbox" checked="checked" name="subscribe"></label>
//             <div class="cards"></div>
//         </div>
//     </main>
// `
const requestwebsite = '../data.json';
const cards = document.querySelector('.cards');
const display = document.querySelector(".cards");

fetch(requestwebsite)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const carInfo = jsonObject['carInfo'];
    carInfo.forEach(displayCarInfo);  
  });

  function displayCarInfo (carInfo) {
    let card = document.createElement('div');
    // let label = document.createElement('label');
    let input = document.createElement('input');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let h3 = document.createElement('h3');
    let logo = document.createElement('img');

    logo.setAttribute('src', carInfo.carpic);
    logo.setAttribute('alt',` ${carInfo.brand} logo`)
    logo.setAttribute('loading', 'lazy');
    input.setAttribute('type','checkbox');
    input.setAttribute('name','check');


    p1.textContent = `${carInfo.capacity}`;
    p2.textContent = `${carInfo.doors}`;
    p3.textContent = `${carInfo.info}`;
    h2.textContent = `${carInfo.brand}`;
    h3.textContent = `${carInfo.price}`;

    card.appendChild(input);
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(h3);

    document.querySelector('div.cards').appendChild(card);
  }