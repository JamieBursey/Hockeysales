
const stickItem = [
            {type:"Stick",brand:"CCM",style:"JetSpeed FT5 Pro North Edition",size:"intermediate (2023)",price:"379.99", stickImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/018e1e67022caf21f37384e38255a1f2_500x500_crop_center.jpg?v=1675422966"},
            {type:"Stick,",brand:"Bauer,",style:"Nexus Havok Grip,",size:"Senior,",price:"$209.99",stickImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e35bdc0dadb8ef44a7e8490957873df9_c8896a10-ea08-4ac1-b16e-53141c04b3d5_500x500_crop_center.jpg?v=1659090157"},
            {type:"Stick", brand:"True",style:"Right Hand",Size:"Jumior 100-flex", price:"$99"},
            {type:"Stick", brand: "Warrior",style:"Right Hand", size:"Senior 80-flex", price:"$200"},
];
const skateItem = [
    {type:"Skate", brand:"Bauer", style:"vapor",size:"10", price:"$400"},
    {type:"Skate",brand:"CCM",style:"tacks", size:"9",price:"$210"},
    {type:"Skate",brand:"Victory",style:"Hx1", size:"9",price:"$70"},
    

];

const gloveItems = [
    {type:"Glove", brand:"Warrior", style:"Alpha",size:"senior-medium",price:"$249", imageUrl:"./images/gloves.png"},
    {type:"Glove", brand:"CCM", style:"Jetspeed",size:"Juior-large",price:"70",imageUrl:"https://cdn.shopify.com/s/files/1/0020/1585/4658/products/warrior-alpha-pro-team-gloves-zone3_4b498a9a-61c1-4b6e-bec8-d6dbed329134_1400x.jpg?v=1642614363"},
    {type:"Glove", brand:"sheerwood", style:"rouge",size:"Intermediate-small",price:"$50",imageUrl1:"https://cdn.shopify.com/s/files/1/0020/1585/4658/p462a-802f-dd29d56801fc_1800x1800.jpg?v=1642614363"},
];

const stickColumn = document.getElementById("stick-column")
stickItem.forEach ((item) => {
  const element = document.createElement("div")
  const link = document.createElement("a");
  const img = document.createElement("img");
  img.src = item.stickImage;
  element.textContent=item.type + item.brand + item.style + item.size + item.price;
  element.appendChild(img);
  const stickImg = document.querySelector("img");
  img.setAttribute("src",item.stickImage);
  img.setAttribute("width", "200");
  img.setAttribute("height", "200");
  link.href = "https://www.sourceforsports.ca/products/bauer-nexus-havok-grip-senior-hockey-stick-source-exclusive-2022";
  link.appendChild(img);
  element.appendChild(link);
  stickColumn.appendChild(element);
  
  



});

const skateElement = document.getElementById("skate-column")
skateItem.forEach((item) => {
    const element = document.createElement("div")
    element.textContent = item.type + item.brand + item.style + item.size + item.price;
    skateElement.appendChild(element);
});
// draws "glove-info" tag from HTML Page
const gloveColumn = document.getElementById("glove-info");
gloveItems.forEach(function(item){   
    const element=document.createElement("div");
    const img = document.createElement("img");
    img.src = item.imageUrl;  
    element.textContent = item.type + item.brand + item.style + item.size + item.price;
    element.appendChild(img);
    const gloveImage = document.querySelector("img");
    img.setAttribute("src",item.imageUrl);
    img.setAttribute("width", "200");
    img.setAttribute("height", "200");
    gloveColumn.appendChild(element);
});


   const button = document.createElement("Button");
    const onClickHandler = () => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
    }
    button.onclick = onClickHandler
    button.innerHTML="test click";
    gloveColumn.appendChild(button);

    
    
    


