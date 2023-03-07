
const stickItem = [
            {type:"Stick",brand:"CCM",style:"JetSpeed FT5 Pro North Edition",size:"intermediate (2023)",price:"379.99", stickImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/018e1e67022caf21f37384e38255a1f2_500x500_crop_center.jpg?v=1675422966",linkRef: "https://www.sourceforsports.ca/products/ccm-jetspeed-ft5-pro-north-edition-intermediate-hockey-stick-2023"},
            {type:"Stick,",brand:"Bauer,,",style:"Nexus Havok Grip,",size:"Senior,",price:"$209.99",stickImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e35bdc0dadb8ef44a7e8490957873df9_c8896a10-ea08-4ac1-b16e-53141c04b3d5_500x500_crop_center.jpg?v=1659090157",linkRef:"https://www.sourceforsports.ca/products/bauer-nexus-havok-grip-senior-hockey-stick-source-exclusive-2022"},
            {type:"Stick,", brand:"Bauer,",style:"AG5NT Grip Senior Hockey Stick (2022),",Size:"Senior", price:"$429.99",stickImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/dd02b89c1eea8aa2df48730e2625e295_1f1b412f-b832-47ce-8ea0-6257b165e96d_500x500_crop_center.jpg?v=1665742607", linkRef:"https://www.sourceforsports.ca/products/bauer-ag5nt-grip-senior-hockey-stick-2022"},
            {type:"Stick,", brand: "Warrior,",style:"Warrior Covert Krypto Junior Hockey Stick (2022),", size:"Junior,", price:"$109.99",stickImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/9d5df02904c98d66b278c7f3459812dd_500x500_crop_center.jpg?v=1657146209", linkRef:"https://www.sourceforsports.ca/products/warrior-covert-krypto-junior-hockey-stick-2022-40-flex-source-exclusive"},
];
const skateItem = [
    {type:"Skate,", brand:"Bauer,", style:"Supreme Matrix Senior Hockey Skates (2022),",size:"7-11,", price:"$729.99",skateImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/71a37ab148ee9567578eb4cd3de450ba_500x500_crop_center.jpg?v=1656423047",skateLink:"https://www.sourceforsports.ca/products/bauer-supreme-matrix-senior-hockey-skates-2022-with-pulse-steel-source-exclusive"},
    {type:"Skate,",brand:"CCM,",style:"tacks Vector Premier Senior Hockey Skates (2022),", size:"7-10.5,",price:"$699.99",skateImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/8acf3efc5390ad13127921a476265d90_500x500_crop_center.jpg?v=1661526971",skateLink:"https://www.sourceforsports.ca/products/ccm-tacks-vector-premier-senior-hockey-skates-2022-with-step-blacksteel-xs-source-exclusive"},
    {type:"Skate,",brand:"True,",style:"Hockey Catalyst CAT7,",size:"7-11 ",price:"$499.99",skateImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/a8895b295c2143f46f8496afb60482a5_e0f3d79f-ab36-4df8-9b1d-b77ea9b0c59b_500x500_crop_center.jpg?v=1656929965",skateLink:"https://www.sourceforsports.ca/products/true-hockey-catalyst-cat7-senior-hockey-skates"},
    {type:"Skate,",brand:"CCM,",style:"Tacks AS 590 Senior Hockey Skates (2022),", size:"7-11.5",price:"$729.99",skateImage:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/24e74727f01136353298c261bcad70fa_b7f5a71f-9202-4c31-a47b-12c5c4628e72_500x500_crop_center.jpg?v=1661509249",skateLink:"https://www.sourceforsports.ca/products/ccm-tacks-as590-senior-hockey-skates-2022-with-step-v-steel"}

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
  link.href = item.linkRef;
  link.appendChild(img);
  element.appendChild(link);
  stickColumn.appendChild(element);
  
  



});

const skateElement = document.getElementById("skate-column")
skateItem.forEach((item) => {
    const element = document.createElement("div");
    const link = document.createElement("a");
    const img = document.createElement("img");
    img.src= item.skateImage;
    element.textContent = item.type + item.brand + item.style + item.size + item.price;
    const skateImg=document.querySelector("img");
    img.setAttribute("src",item.skateImage);
    img.setAttribute("width","200");
    img.setAttribute("height","200");
    link.href=item.skateLink;
    link.appendChild(img);
    element.appendChild(link);
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

    
    
    


