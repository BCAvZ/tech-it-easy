// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// opdracht 1.1
// const tvTypes = inventory.map((tvType) => {
//   return tvType.type;
// })
//
// console.log(tvTypes);


// opdracht 1.2

// const soldout = inventory.filter ((tv) => {
//   return tv.originalStock - tv.sold === 0;
// })
//
// console.log(soldout)

// opdracht 1.3
// const ambiLightCheck = inventory.filter ((ambiTv) => {
//   return ambiTv.options.ambiLight === true
// })
//
// console.log(ambiLightCheck)

// opdracht 1.4
// const salesPrice = inventory.sort ((a,b) => {
//   return a.price - b.price;
// })
//
// console.log(salesPrice);


// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// let outcome = 0;
//
// for (let i = 0; i < inventory.length; i++) {
//  outcome += inventory[i].sold;
// }
// console.log(outcome);



// let soldTv2 = 0;
//
// inventory.map ((soldTv) => {
//   return (soldTv2 += soldTv.sold);
// })
//
// console.log(soldTv2);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// const element2 = document.getElementById("soldTv");
// element2.textContent = `Amount of sold TV's: ${soldTv2}`;



//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// let purchasedInventory2 = 0;
//
// inventory.map ((purchasedinventory) => {
//   return (purchasedInventory2 += purchasedinventory.originalStock);
// })
//
// console.log(purchasedInventory2);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// const element3 = document.getElementById("purchasedInventory");
// element3.textContent = `Amount of purchased TV's: ${purchasedInventory2}`;

//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

// let remainingInventory2 = 0;
//
// inventory.map ((remainingInventory) => {
//   return remainingInventory2 += (remainingInventory.originalStock - remainingInventory.sold
// )})
//
// console.log(remainingInventory2);
//
// const element4 = document.getElementById("toBeSoldTv");
// element4.textContent = `Amount of TV's yet to be sold: ${remainingInventory2}`;

// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// const productNames = inventory.map ((productName) => {
//   return productName.brand;
// })
//
// console.log(productNames);

// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

// let outcome6 = "";
//
// const productnames3 = (input) => {
//   for (let i = 0; i < inventory.length; i++) {
//     outcome6 += input;
//   } return outcome6;
// }
//
// const element6 = document.getElementById('banaan');
// element6.textContent = `The tv brand names are: ${productnames3(inventory[i].brand)}`;



// const productNames2 = inventory.map ((productName) => {
//   return productName.brand;
// })
//
// const element6 = document.getElementById('banaan');
// element6.textContent = `The tv brand names are: ${productNames2}`;


// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.


const productNames4 = (input2) => {
  let outcome7;
  for (let i = 0; i < inventory.length; i++) {

    const tvBrand = inventory[input2].brand
    const tvType = inventory[input2].type
    const tvName = inventory[input2].name

    outcome7 = tvBrand + ' ' + tvType + ' - ' + tvName;
  } return outcome7
}

const element7 = document.getElementById('list');
element7.textContent = ` ${productNames4(1)}`;

// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//

let outcome8 = '';

const productNames5 = (input3) => {
  let outcome8;
  for (let i = 0; i < inventory.length; i++) {
    outcome8 = inventory[input3].price;
  } return outcome8;
}

const element8 = document.getElementById('lis');
element8.textContent = `€${productNames5(2)},-`;

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//

function availableScreenSizes ( input8 ) {
  let size = "";
  for (let i = 0; i < inventory.length; i++) {
      const sizeInInch = inventory[input8].availableSizes;
      const sizeInCm = inventory[input8].availableSizes * 2.54;

      size += sizeInInch + ' inch ('+ sizeInCm + ' cm). | ';
  } return size;
}

// ik snap er niks van dit zou moeten werken

const element9 = document.getElementById("li");
element9.textContent = availableScreenSizes(0);

// function availableScreenSizes2 ( input ){
//   let size = "";
//   for (let i = 0; i < input.length; i++) {
//     const sizeInInch = input[i];
//     const sizeInCM = input[i] * 2.54;
//     //const stringScreenSize = `Screen sizes are: ${sizeInInch} inch | In centimeters that is: ${sizeInCM} cm`;
//     size = size + sizeInInch + ` inch | In centimeters that is: ${sizeInCM} cm \n`
//   }   return size;
// }
// const screenSizesTv = document.getElementById("l");
// screenSizesTv.textContent = availableScreenSizes2(inventory[3].availableSizes);


//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

// let displayTotalInfo = "";
//
// const totalInfo = (parameter) => {
//   return displayTotalInfo = availableScreenSizes(parameter) + productNames5(parameter) + productNames4(parameter)
// }
//
// const element10 = document.getElementById("l");
// element10.textContent = totalInfo(0);



// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
