console.clear();
console.log("Inventory Entry System");
//Inventory
console.log();

const prompt=require("prompt-sync")();

let stock=[];
// stock is empty array

function addStock()
{
    let item_code=Number(prompt("Enter Item Code:"));
    let item_name=prompt("Enter Item Name:");
    let item_price=Number(prompt("Enter price:"));
    let item_quantity=Number(prompt("Enter quantity:"));
    // object is a collection of pair(property and value)
    let item={
        code:item_code,
        item:item_name,
        price:item_price,
        quantity:item_quantity,
    };
    //recall properties in html style height:100px; width:200px;
    //now techniqual term for property is key
    stock.push(item);
    // //now stock is an array of objects
    console.log("\n Inventory Updated");
}
console.log();

while(true){
    addStock();
    let loop=prompt("Add More Items(0 for No/ 1 for Yes):");
    loop=parseInt(loop);
    if(loop==0){
        break;
    }
}
console.log("\n Inventory Entry Completed");
console.log("\n Updated Stock is as follows");


console.log(stock);
console.log();
/*for(let element of stock){
  console.log(element.item);
}
console.log("This is forEach loop=");
stock.forEach((element)=>{
    console.log(element.price);
});
this demo was that of a callback function */