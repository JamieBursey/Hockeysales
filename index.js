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
console.log (document.getElementById("helmet-info"))

const equipment = {
    style: "shin pads",
    brand: "sheerwood",
    size: "medium",
    price: "$50",
};
document.getElementById("equip-info").innerHTML = 
equipment.style + " " + equipment.brand + " " + equipment.size + " " + equipment.price;
console.log(document.getElementById("equip-info"))

const apparel = {
    style: "Jersey",
    team: "New Jersey Devils",
    size: "large",
    name: "Mercer",
    number: "number-18",
}
const myArray = Object.values(apparel);
document.getElementById("cloths").innerHTML = myArray;


