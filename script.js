// Finding Element in Array

const item = [
  { id: 1, itemname: "Tomato", quantity: 1 },
  { id: 2, itemname: "Potato", quantity: 1.5 },
  { id: 3, itemname: "Onion", quantity: 5 },
  { id: 4, itemname: "Carrot", quantity: 3 },
];
let result = item.find(function (vegitem) {
  // CallBack Function
  return vegitem.quantity === 3;
});

// Arrow Functions

let result2 = item.find((vegitem) => vegitem.quantity === 3); // Using Arrow Function

let result3 = item.findIndex(function (vegitem) {
  return vegitem.itemname === "Carrot";
});
console.log(result);
console.log(result2);
console.log(result3);
