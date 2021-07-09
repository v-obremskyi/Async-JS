let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]}`);
    console.log("start the production");
    await time(2000);
    console.log("cut the fruit");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected.`);
    await time(1000);
    console.log("start the machine");
    await time(2000);
    console.log(`ice cream was placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected.`);
    await time(2000);
    console.log("ice cream was served");
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended. The shop is closed");
  }
}

kitchen();

// await/async

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which topping would you prefer?"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");
//   await toppings_choice();
//   console.log("D");
//   console.log("E");
// }

// kitchen();
// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking orders");

// promises

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed."));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected.`))
//   .then(() => {
//     return order(0000, () => console.log("Production has started."));
//   })
//   .then(() => {
//     return order(2000, () => console.log("The fruit was chopped."));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected.`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream was placed on ${stocks.holder[0]}`)
//     );
//   })
//   .then(() => {
//     return order(3000, () =>
//       console.log(`${stocks.toppings[0]} was selected.`)
//     );
//   })
//   .then(() => {
//     return order(2000, () => console.log("ice cream was served"));
//   })
//   .catch(() => {
//     console.log("Customer left.");
//   })
//   .finally(() => {
//     console.log("Day ended. The shop is closed");
//   });
// callback hell

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruit_name]} was selected.`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("Production has started.");
//     setTimeout(() => {
//       console.log("The fruit has been chopped.");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`);
//         setTimeout(() => {
//           console.log("the machine was started.");
//           setTimeout(() => {
//             console.log(`ice cream was placed on ${stocks.holder[0]}.`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added as toppings`);
//               setTimeout(() => {
//                 console.log("Serve ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);
