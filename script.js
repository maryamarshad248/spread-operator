'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:00',
    address,
  }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
};

// spread operator
const array = [4, 5, 6];
const arrayNew = [1, 2, array[0], array[1], array[2]];
console.log(arrayNew);

const arr = [1, 2, ...array];
console.log(arr);
console.log(...arr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// arrays , strings, maps and sets are iterable but objects are not
const str = 'Noman';
const strNew = [...str, '', 'M.'];
console.log(strNew);
console.log(...str);

//console.log(` ${...str} Maryam`);
// example
const Ingredients = [
  //prompt('lets make pasta with Ingredients 1'),
  // prompt('Ingredients 2'),
  //prompt('Ingredients 3'),
];
console.log(Ingredients);
restaurant.orderPasta(Ingredients[0], Ingredients[1], Ingredients[2]);
restaurant.orderPasta(...Ingredients);

//  objects
const newRestaurant = { foundIn: 1999, ...restaurant, founder: 'Noman' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorento Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
