const skates = {
    brand: "Bauer",
    model: "vapor" ,
    size: "size-10",
    price: "$100",
  };
  
  document.getElementById("skate-info").innerHTML = skates.brand + " " + skates.model + " " + skates.size + " " + skates.price;
      
  console.log(document.getElementById("skate-info"))

const sticks = {
    name: "twig",
    brand: "warrior",
    hand: "right-handed", 
    flex: "85-flex",
    price: "$80",
};
 document.getElementById("stick-info").innerHTML = 
sticks.name + " " + sticks.brand + " " + sticks.hand + " " + sticks.flex + " " + sticks.price;


const Helmets = {
    brand: "CCM",
    color: "black",
    size: "medium", 
    price: "$120",
};
document.getElementById("helmet-info").innerHTML = Helmets.brand + " " + Helmets.color + " " + Helmets.size + " " + Helmets.price;


const equipment = {
    style: "shin pads",
    brand: "sheerwood",
    size: "medium",
    price: "$50",
};
document.getElementById("equip-info").innerHTML = 
equipment.style + " " + equipment.brand + " " + equipment.size + " " + equipment.price;


const apparel = {
    style: "Jersey",
    team: "New Jersey Devils",
    size: "large",
    name: "Mercer",
    number: "number-18",

};
const myArray = Object.values(apparel);
document.getElementById("cloths").innerHTML = myArray;



const allItems = [
            {type:"hockey glove",brand:"CCM",size:"senior-medium",price:"$100"},
            {type:"Shirt",brand:"Colorado Avalanch",size:"Large",price:"$45"},
            {type:"Stick", brand:"right-handed",style:"100-flex", price:"$299"},
            {type:"skate", brand: "Bauer", size:"10", price:"$200"},
];


let text = "";
allItems.forEach (function(value) {
    text += value.type + "<br>";
    console.log (text);

})
document.getElementById("test-info").innerHTML = text;


const skateElement = document.getElementById("skate-column");
allItems.forEach (function(item) {
    const Element = document.createElement("div")
    Element.textContent=item.type;
    skateElement.appendChild(Element);
    
});





const test = document.createElement("p");
test.innerText = ("gloves CCM Senior-Small $60");
document.body.appendChild(test);

const test2 = document.createElement("p");
test2.innerText = ("stick Vapor Right-Handed $120");
document.getElementById("test2").appendChild(test2);

const test3= document.createElement("p");
test3.innerText = ("stick Vapor Right-Handed $120");
document.body.appendChild(test3);

const test4 = document.createElement("p");
test4.innerText = ("stick Vapor Right-Handed $120");
document.getElementById("test2").appendChild(test4);











