
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
    {type:"Glove", brand:"Warrior", style:"Alpha",size:"senior-medium",price:"$249", imageUrl:"https://cdn.shopify.com/s/files/1/0020/1585/4658/p…1c1-4b6e-bec8-d6dbed329134_1400x.jpg?v=1642614363"},
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
const gloveElement = document.getElementById("glove-info");
gloveItem.forEach(function(item){   
    const Element=document.createElement("div");
    // const img creates an img Element in html
    const img = document.createElement("img");
    // img.src loads the image from the URL and displays it as an item in the HTML webpage
    img.src = item.imageUrl;   
    Element.textContent = item.type + item.brand + item.style + item.size + item.price;
    gloveElement.appendChild(Element);
    gloveElement.appendChild(img);
});

