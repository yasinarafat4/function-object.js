// array vs object

//array
var shoppingCart = [3, 1, 12, 2];
var shoppingCart = ["books", "sunglass", "pen", "dress"];

//object

var shoppingCart = {
  books: 3,
  sunglass: 1,
  pen: 12,
  dress: 2,
  bottle: 3,
  shoes: 1,
};
var keys = Object.keys(shoppingCart);
console.log(keys);
var values = Object.values(shoppingCart);
console.log(values);

// var keys = ["books", "sunglass", "pen", "dress", "bottle", "shoes"];

for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  //   console.log(propertyName, propertyValue);
}

// Another easy way by "for in loop"

for (var propertyName in shoppingCart) {
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}
