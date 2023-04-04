// export const cars = `
// <main>
//         <div>
//             <label><input type="checkbox" checked="checked" name="subscribe"></label>
//             <div class="cards"></div>
//         </div>
//     </main>
// `
const requestwebsite = './data.json';
const cards = document.querySelector('.cards');

async function fetchData(){
  const carResponse = await fetch(requestwebsite);
  const theCars = await carResponse.json();
  console.log(theCars);
  const carInf = theCars.carInfo;
  console.log(carInf);
  carInf.forEach(displayCarInfo);  
  };

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
    let separator = document.createElement('div');
    let hr = document.createElement('hr');

    logo.setAttribute('src', carInfo.carpic);
    logo.setAttribute('alt',` ${carInfo.brand}`);
    logo.setAttribute('loading', 'lazy');
    input.setAttribute('type','checkbox');
    input.setAttribute('name','check');
    input.setAttribute('id','check');


    p1.textContent = `${carInfo.capacity}`;
    p2.textContent = `${carInfo.doors}`;
    p3.textContent = `${carInfo.info}`;
    h2.textContent = `${carInfo.brand}`;
    h3.textContent = `$${carInfo.price}`;

    card.classList.add('card');
    card.appendChild(input).classList.add('check');
    card.appendChild(logo);
    card.appendChild(h2).classList.add('brand');
    card.appendChild(p1).classList.add('capacity');
    card.appendChild(p2).classList.add('doors');
    card.appendChild(p3).classList.add('carInfo');
    card.appendChild(hr);
    card.appendChild(h3).classList.add('price');
    card.appendChild(separator).classList.add('separator');

    //HERE IS THE PROBLEM, WE ARE TRYING TO APPEND CONTENT TO A DIV THAT DOESN'T EXIST YET, THE CARDS DIV IS IN THE CARS PAGE BUT THIS PAGE HASN'T BEEN LOADED YET THAT IS WHY WE ARE GETTING THE ERROR, IT CANNOT APPEND CARD TO CARDS BECAUSE ITS UNDEFINED BY THE MOMENT. 
    cards.appendChild(card);
  }

  fetchData();