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

    cart.forEach((x) => {
        console.log(x.Name, x.Price);
        total += x.Price
    });

    console.log('Total', total)

}