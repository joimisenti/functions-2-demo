////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

// if I wanted to check if the arguments(num1 and num2) are numbers, I would have to type that for each of the separate functions. Instead, create a higher order function to do the operation on them.
// In order to not repeat the code inside each function we will create a higher order function that accepts these functions as callbacks.

const calculator = (num1, num2, cb) => {
// we will check to see if these params(num1 & num2) can be coerced into numbers
// if it is, then we will go ahead and coerce them
// if not, we will inform the user
if(+num1 && +num2){
  num1 = +num1
  num2 = +num2
  return cb(num1, num2)
} else {
  console.log(`please send in numbers`)
}
}

// use SHIFT + ALT + down/up arrow keys to copy same line up or down
// use CTRL + D to replace same words on one line

const addResult = calculator(1, 2, add)
const subtractResult = calculator(3, 1, subtract)
const multiplyResult = calculator(4, 5, multiply)
const divideResult = calculator(10, 2, divide)
console.log(addResult)
console.log(subtractResult)
console.log(multiplyResult)
console.log(divideResult)

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

// we want to apply discount by percentage (25% would be .25)
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}
// we want to be able to apply a flat rate discount($5)
const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}

// when you find yourself repeating code multiple times, it's best to make callback function
// create a higher order function

const applyDiscountsToCollection = (arr, discount, cb) => {
  for(let i = 0; i < arr.length; i++){
    cb(arr[i], discount)
  }
}

// applyDiscountsToCollection(dogProducts, 0.10, applyPercentDiscount)
// console.log(dogProducts)

// applyDiscountsToCollection(catProducts, 5, applyFlatRateDiscount)
// console.log(catProducts)

const applyDiscountByCategory = (category, discount, arr, cb) => {
  // we want to iterate over the array and change the values that match the category
  for(let i = 0; i < arr.length; i++) {
    // check if category matches; if it does we can do our operation and invoke the cb
    if(arr[i].category === category){
      cb(arr[i], discount)
    }
  }
}

// applyDiscountByCategory(1, 0.25, catProducts, applyPercentDiscount)
// console.log(catProducts)

// applyDiscountByCategory(2, 2, dogProducts, applyFlatRateDiscount)
// console.log(dogProducts)

const applyDiscountByInventory = (inventory, discount, arr, cb) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].inventory < inventory) {
      cb(arr[i], discount)
    }
  }
}

applyDiscountByInventory(50, 1, catProducts, applyFlatRateDiscount)
console.log(catProducts)
applyDiscountByInventory(80, .05, dogProducts, applyPercentDiscount)
console.log(dogProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
