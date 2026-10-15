type Product = [name:string,qty:number,B:boolean];
const inventory: Product[]=[];
inventory.push(["Laptop",15,true]);
inventory.push(["Desk",50,false]);
inventory.push(["Glass Vase",5,true]);
inventory.push(["Monitor",10,true]);
inventory.push(["Chair",100,false]);
for (const sc of inventory) {
    console.log(inventory);
}
