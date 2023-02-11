var shoppingCart = {
  books: 3,
  sunglass: 1,
  pen: 12,
  dress: 2,
};

//to find property value

var propertyName = "pen";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// Returns the names of the enumerable string properties and methods of an object.
var properties = Object.keys(shoppingCart);
var properties = Object.values(shoppingCart);
// console.log(properties);

// when you know the specific properties name, use dot (.) notation to get the property value
// var penCount = shoppingCart.pen;

//alternative:

// var penCount2 = shoppingCart["pen"];

// console.log(penCount);

//set property values

shoppingCart.pen = 15;
console.log(shoppingCart);
shoppingCart["pen"] = 25;
console.log(shoppingCart);
shoppingCart[propertyName] = 90;
console.log(shoppingCart);

//------------------
var smartphone = { brand: "iPhone", model: "13" };
console.log(smartphone.brand);
