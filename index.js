
const stickItem = [
            {type:"Stick",brand:"CCM",style:"Left Hand",size:"senior 90-Flex",price:"$100"},
            {type:"Stick",brand:"Sherwood",style:"Left Hand",size:"Inermediate 70-Flex",price:"$45"},
            {type:"Stick", brand:"True",style:"Right Hand",Size:"Jumior 100-flex", price:"$99"},
            {type:"Stick", brand: "Warrior",style:"Right Hand", size:"Senior 80-flex", price:"$200"},
];
const skateItem = [
    {type:"Skate", brand:"Bauer", style:"vapor",size:"10", price:"$400"},
    {type:"Skate",brand:"CCM",style:"tacks", size:"9",price:"$210"},
    {type:"Skate",brand:"Victory",style:"Hx1", size:"9",price:"$70"},

];

const gloveItem = [
    {type:"Glove", brand:"", style:"",size:"",price:""},
    {type:"Glove", brand:"", style:"",size:"",price:""},
    {type:"Glove", brand:"", style:"",size:"",price:""},
];

const stickElement = document.getElementById("stick-column")
stickItem.forEach (function(item) {
  const Element = document.createElement("div")
  Element.textContent=item.type + item.brand + item.style + item.size + item.price;
  stickElement.appendChild(Element);

});

const skateElement = document.getElementById("skate-column")
skateItem.forEach(function(item) {
    const Element = document.createElement("div")
    Element.textContent = item.type + item.brand + item.style + item.size + item.price;
    skateElement.appendChild(Element);
});
// draws "glove-info" tag from HTML Page
const gloveElement = document.getElementById("glove-info")
// loops through gloveItem and adds a paramater (item) to each object in the element
gloveItem.forEach(function(item){
// creates a div for the object to be displayed in the HTML    
    const Element=document.createElement("div")
 // element.textContent is use to display inner strings of gloveElement?   
    Element.textContent = item.type + item.brand + item.style + item.size + item.price;
 // append child loops through gloveElement and adds its content to Element? 
 // gloveElement being the parent and Element being the child? 
    gloveElement.appendChild(Element);
});