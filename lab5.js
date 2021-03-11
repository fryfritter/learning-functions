const assertEquals = require("./assert-helper");

function says(message1, message2) {
  this.name = this.name || "John";
  return `${this.name} says ${message1} and ${message2}`;
}

// using call get the assertion to pass
// object
assertEquals(
  says.call({ name: "Peter" }, "hello", "welcome"),
  "Peter says hello and welcome"
);

// using apply get the assertion to pass
// object, array
assertEquals(
  says.apply({ name: "Peter" }, ["hello", "welcome"]),
  "Peter says hello and welcome"
);

const iceCreamMachine = {
  make: function (topping) {
    let flavour = this.flavour;
    if (topping) {
      flavour += " " + topping;
    }
    return flavour;
  },
};

function IceCream(flavour) {
  this.flavour = flavour;
}

// 1.1 Create a chocolate flavoured IceCream
// const chocolateIceCream = ...

// 1.2 Call `make` method on iceCreamMachine with chocolateIceCream context, using `bind`
// const makeChocolateIceCream = ...

assertEquals(makeChocolateIceCream(), "chocolate");

// 2.1 Create a vanilla flavoured IceCream
// const vanillaIceCream = ...
const vanillaIceCream = new IceCream("vanilla");

// 2.2 Call `make` method on iceCreamMachine with vanillaIceCream context AND "nuts" topping, using `call` or `apply`
// const makeVanillaIceCream = ...

assertEquals(makeVanillaIceCream, "vanilla nuts");
