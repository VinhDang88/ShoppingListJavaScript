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
   
    console.log('Total', total + (total * 0.06));

}


