
const items = [
    {type:"Stick",brand:"CCM",style:"JetSpeed FT5 Pro North Edition",size:"intermediate (2023)",price:"379.99", imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/018e1e67022caf21f37384e38255a1f2_500x500_crop_center.jpg?v=1675422966",linkRef: "https://www.sourceforsports.ca/products/ccm-jetspeed-ft5-pro-north-edition-intermediate-hockey-stick-2023"},
    {type:"Stick,",brand:"Bauer,,",style:"Nexus Havok Grip,",size:"Senior,",price:"$209.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e35bdc0dadb8ef44a7e8490957873df9_c8896a10-ea08-4ac1-b16e-53141c04b3d5_500x500_crop_center.jpg?v=1659090157",linkRef:"https://www.sourceforsports.ca/products/bauer-nexus-havok-grip-senior-hockey-stick-source-exclusive-2022"},
    {type:"Stick,", brand:"Bauer,",style:"AG5NT Grip Senior Hockey Stick (2022),",size:"Senior", price:"$429.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/dd02b89c1eea8aa2df48730e2625e295_1f1b412f-b832-47ce-8ea0-6257b165e96d_500x500_crop_center.jpg?v=1665742607", linkRef:"https://www.sourceforsports.ca/products/bauer-ag5nt-grip-senior-hockey-stick-2022"},
    {type:"Stick,", brand: "Warrior,",style:"Warrior Covert Krypto Junior Hockey Stick (2022),", size:"Junior,", price:"$109.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/9d5df02904c98d66b278c7f3459812dd_500x500_crop_center.jpg?v=1657146209", linkRef:"https://www.sourceforsports.ca/products/warrior-covert-krypto-junior-hockey-stick-2022-40-flex-source-exclusive"},
    {type:"Skate,", brand:"Bauer,", style:"Supreme Matrix Senior Hockey (2022),",size:"7-11,", price:"$729.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/71a37ab148ee9567578eb4cd3de450ba_500x500_crop_center.jpg?v=1656423047",linkRef:"https://www.sourceforsports.ca/products/bauer-supreme-matrix-senior-hockey-skates-2022-with-pulse-steel-source-exclusive"},
    {type:"Skate,",brand:"CCM,",style:"tacks Vector Premier Senior (2022),", size:"7-10.5,",price:"$699.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/8acf3efc5390ad13127921a476265d90_500x500_crop_center.jpg?v=1661526971",linkRef:"https://www.sourceforsports.ca/products/ccm-tacks-vector-premier-senior-hockey-skates-2022-with-step-blacksteel-xs-source-exclusive"},
    {type:"Skate,",brand:"True,",style:"Hockey Catalyst CAT7,",size:"7-11 ",price:"$499.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/a8895b295c2143f46f8496afb60482a5_e0f3d79f-ab36-4df8-9b1d-b77ea9b0c59b_500x500_crop_center.jpg?v=1656929965",linkRef:"https://www.sourceforsports.ca/products/true-hockey-catalyst-cat7-senior-hockey-skates"},
    {type:"Skate,",brand:"CCM,",style:"Tacks AS 590 Senior Hockey (2022),",size:"7-11",price:"$729.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/24e74727f01136353298c261bcad70fa_b7f5a71f-9202-4c31-a47b-12c5c4628e72_500x500_crop_center.jpg?v=1661509249",linkRef:"https://www.sourceforsports.ca/products/ccm-tacks-as590-senior-hockey-skates-2022-with-step-v-steel"},
    {type:"Glove", brand:"Bauer", style:"Vapor 3X Pro (2022)",size:"Junior",price:"$169.99", imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/b1af3b490876395f8e8d17ea4a7efd4e_500x500_crop_center.jpg?v=1657318715",linkRef:"https://www.sourceforsports.ca/products/bauer-vapor-3x-pro-junior-hockey-gloves-2022"},
    {type:"Glove", brand:"CCM", style:"Tacks Vector Premier (2022)",size:"Senior",price:"149.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/d28114195ea632e2c7f04941ed7c4ffb_500x500_crop_center.jpg?v=1657232195",linkRef:"https://www.sourceforsports.ca/products/ccm-tacks-vector-premier-senior-hockey-gloves-source-exclusive-2022"},
    {type:"Glove", brand:"Warrior", style:"Covert Krypto Pro (2022)",size:"Senior",price:"$149.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/dbe0ca72f321e083526c4a7ada81f022_500x500_crop_center.jpg?v=1657059445",linkRef:"https://www.sourceforsports.ca/products/warrior-covert-krypto-pro-senior-hockey-gloves-2022-source-exclusive"},
    {type:"Glove", brand:"True Hockey", style:"Catalyst 9X (2021)",size:"Youth",price:"$59.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/3c645b51a72cb8051a7c51e0f2af687d_500x500_crop_center.jpg?v=1627461521",linkRef:"https://www.sourceforsports.ca/products/true-hockey-catalyst-9x-youth-hockey-gloves"},
    {type:"Helmet,",brand:"Warrior,",style:"Covert CF100,",size:"Senior",price:"199.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/d2fabfa31a21f6f456e43eae7ba206d5_500x500_crop_center.jpg?v=1656671578",linkRef:"https://www.sourceforsports.ca/products/warrior-covert-cf-100-hockey-helmet"},
    {type:"Helmet,",brand:"CCM,",style:"Tacks 70 Combo,",size:"youth,",price:"84.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/0009dac6592ee52f8b99322269041fa3_6fd328fa-d0cb-4343-81c6-76c429b847c5_500x500_crop_center.jpg?v=1653042048",linkRef:"https://www.sourceforsports.ca/products/ccm-tacks-70-youth-hockey-helmet-combo"},
    {type:"Helmet,",brand:"CCM",style:"Tacks 70 combo,",size:"Senior,",price:"84.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/cd33d88ece570a9e144712d66d49c76e_500x500_crop_center.jpg?v=1653042006",linkRef:"https://www.sourceforsports.ca/products/ccm-tacks-70-senior-hockey-helmet-combo"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
    {type:"Helmet,",brand:"Bauer,",style:"HyperLite (2021)",size:"Senior,",price:"349.99",imageUrl:"https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566",linkRef:"https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet"},
];
const putItemsIntoContainers = (items, cutOffnumber) => {
    let cutOff = cutOffnumber -1
    let container=[]
    const results =[]
     items.map ((item,index)=>{
        
        if(index <= cutOff){
            container.push(item)   
        }
        if (index === cutOff || index == items.length -1){    
            results.push(container)
            cutOff += cutOffnumber
            container=[];
        }
        
    
    })
     return results
     }
     
const itemsGroupByContainers = putItemsIntoContainers(items, 8);
console.log(itemsGroupByContainers);
items.map((item) => {console.log(item)});




const itemsContainer = document.getElementById("item-container")
items.map ((item) => {
  const element = document.createElement("div")
  const link = document.createElement("a");
  const img = document.createElement("img");
  img.src = item.imageUrl;
  element.textContent=item.type + item.brand + item.style + item.size + item.price;
  element.appendChild(img);
  const stickImg = document.querySelector("img");
  img.setAttribute("src",item.imageUrl);
  img.setAttribute("width", "100");
  img.setAttribute("height", "100");
  link.href = item.linkRef;
  link.appendChild(img);
  element.appendChild(link);
  itemsContainer.appendChild(element);
});



// const stickColumn = document.getElementById("stick-column")
// items.forEach ((item) => {
//   const element = document.createElement("div")
//   const link = document.createElement("a");
//   const img = document.createElement("img");
//   img.src = item.imageUrl;
//   element.textContent=item.type + item.brand + item.style + item.size + item.price;
//   element.appendChild(img);
//   const stickImg = document.querySelector("img");
//   img.setAttribute("src",item.imageUrl);
//   img.setAttribute("width", "200");
//   img.setAttribute("height", "200");
//   link.href = item.linkRef;
//   link.appendChild(img);
//   element.appendChild(link);
//   stickColumn.appendChild(element);
  
  



// });

// const skateColumn = document.getElementById("skate-column")
// skateItems.forEach((item) => {
//     const element = document.createElement("div");
//     const link = document.createElement("a");
//     const img = document.createElement("img");
//     img.src= item.imageUrl;
//     element.textContent = item.type + item.brand + item.style + item.size + item.price;
//     const skateImg=document.querySelector("img");
//     img.setAttribute("src",item.imageUrl);
//     img.setAttribute("width","200");
//     img.setAttribute("height","200");
//     link.href=item.linkRef;
//     link.appendChild(img);
//     element.appendChild(link);
//     skateColumn.appendChild(element);
// });
// // draws "glove-info" tag from HTML Page
// const gloveColumn = document.getElementById("glove-info");
// gloveItems.forEach(function(item){   
//     const element=document.createElement("div");
//     const img = document.createElement("img");
//     const link =document.createElement("a");
//     img.src = item.imageUrl;  
//     element.textContent = item.type + item.brand + item.style + item.size + item.price;
//     element.appendChild(img);
//     const gloveImage = document.querySelector("img");
//     img.setAttribute("src",item.imageUrl);
//     img.setAttribute("width", "200");
//     img.setAttribute("height", "200");
//     link.href=item.linkRef;
//     link.appendChild(img);
//     element.appendChild(link);
//     gloveColumn.appendChild(element);
// });


//    const button = document.createElement("Button");
//     const onClickHandler = () => {
//         fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json));
//     }
//     button.onclick = onClickHandler
//     button.innerHTML="test click";
//     gloveColumn.appendChild(button);

    
    
    


