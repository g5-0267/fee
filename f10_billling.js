//billing counter are mading of store
console.clear();
const prompt=require('prompt-sync')();
//const/let/var
const store="Rambo Store";
console.log(store);
//store="Rockey Store";
//let item1="Mobile";
/*{
    let item1="Laptop";//curly brackets lgana sa vo item1 ko different item managa jab vo block ka bhar ajayaga tho vo item1 ki value laptop bhul jayaga
}*/
//let item2="Shoes";
// bar bar variables(item1,item2,--) bnana sa acha hai ek array hi bna la
//inventory
let items =["item1","item2","item3"];
let prices=[2000,5000,3000];// array is a object it has property and attributes

console.log(items.length);//its property of object(array)=length

items.push("item4","item5");// add items at last
//items.pop();//last item remove karaga 
console.log(items);

//customer oriented billing
console.log("Billing System");
console.log();
prices.push(3000,3500);
console.log("SrNo.\t","Item\t","Price");
for(let i=0 ;i<items.length;i++){
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
}
console.log();
let srno=Number(prompt("Enter Item No.:"));
let quantity=Number(prompt("Enter Quantity:"));

//billing
let price=prices[srno-1];
let cost=price*quantity;
let discount=0;
if(cost>=5000){
    discount=cost*0.05;
}else if(vost>=2000){
    discount=cost*0.02;
}else{
    discount=cost*0.01;
}
console.log("Your Discount is:",discount);
console.log("Your bill Amount is:",cost-discount);

console.log();