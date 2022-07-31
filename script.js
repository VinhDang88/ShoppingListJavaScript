let cart = []



function AddCart(name, price){

let item = {        //think of Class item = {Name = name, Price = price}
    Name : name,
    Price : price
}

cart.push(item);
console.log('Added to Your cart:', name, price )

}

function CheckOut(){

let total = 0;
let salesTax = 0.06;


    cart.forEach((x) => {
        console.log(x.Name, x.Price);
        total += x.Price
    });

    console.log('SubTotal', total)

    let sales = total
    let result = sales * salesTax
    result = result.toFixed(2);

    console.log('Michigan Sales Tax 6%', result )
   
    console.log('Total', total + (total * 0.06))

}

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}
//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(1);
console.log(circle)
console.log(circle.draw)


function CreateGrocery(name, price) {
    this.name = name;
    this.price = price;


    let item = {      
        Name : name,
        Price : price
    }
    
    cart.push(item);


    console.log('Added to Your cart:', name, price )

    this.checkOut1 = function() {


        let total = 0;
    let salesTax = 0.06;


    cart.forEach((x) => {
        console.log(x.Name, x.Price);
        total += x.Price
    });

    console.log('SubTotal', total)

    let sales = total
    let result = sales * salesTax
    result = result.toFixed(2);

    console.log('Michigan Sales Tax 6%', result )
   
    console.log('Total', total + (total * 0.06))




        
    }


}

let z = new CreateGrocery('Kiwi', 5);
console.log(z);
console.log(z.checkOut1);

//Primitives are copied by their value
//Objects are copied by their reference

let x = 10;
let y = x;
x = 20;

let number = 10;

function increase (number) {
    number++;
}

increase(number);
console.log(number);

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);


// function GrandTotal(){

//     let tax = 0.06
//     let salesTotal = sales * tax
//     console.log(salesTotal)
//     let result2 = salesTotal + (sales * tax)
//     result2 = result2.toFixed(2);

// }
