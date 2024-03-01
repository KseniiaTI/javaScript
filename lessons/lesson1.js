// var price = 50
// var itemName = "Table"
// var message = `Then price for your ${itemName} is $ ${price}`
// console.log(message)

//object
let customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}

// Dot notation
console.log(`First name ${customer.firstName}`)
// Bracket notation
console.log(`Last name ${customer['lastName']}`)

// Changing the value
customer.firstName = 'Mike' // or customer["firstName"] = 'Mike'
console.log(`Customer name ${customer.firstName} ${customer.lastName}`)

//array
let cars = ["Volvo", "Toyota", "Tesla"]
console.log(`Car No 1 ${cars[0]}`)

// Changing the value inside the array
cars[1] = "Mazda"
console.log(`Car No 2 ${cars[1]}`)

// to access first element of the array inside the objec
console.log(`Car from the object is ${customer.cars[2]}`)

// ------------------------------------------------------------------------------

// for of loop
for(let car of cars){
    console.log(`Car is ${car}`)
    if(car == 'Mazda'){
        break
    }
}

// example of syntax with ES6
cars.forEach(i => {
    console.log(i)
})

// ------------------------------------------------------------------------------

// Function declaration syntax
function helloOne(){
    console.log('Hello one!')
}

helloOne()

// Anonymous function
var helloTwo = function(){
    console.log('Hello two!')
}

helloTwo()

// ES6 function (arrow function)
var helloThree = () => {
    console.log('Hello three!')
}

helloThree()

// ------------------------------------------------------------------------------

class CustomerDetails{
    printFirstName(firstName){
        console.log(firstName)
    }
    /**
     * This method will print last name
     * @param {*} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

// creating an instance of the class

var customerDet = new CustomerDetails()
customerDet.printFirstName('Steve')
customerDet.printLastName('Smith')