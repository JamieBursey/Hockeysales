
const Items =[
    { type: "Stick", brand: "CCM", style: "Ribcor Trigger 6", size: "Senior", price: "258.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6db0dc9f458615f750e9602df46e58c8_500x500_crop_center.jpg?v=1644279684", linkRef: "https://www.sourceforsports.ca/products/ccm-ribcor-trigger-6-pro-grip-senior-hockey-stick" },
    { type: "Stick", brand: "Bauer", style: "Nexus Geo Grip", size: "Senior", price: "244.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6953fe96a6b7ae45ef6790d0ef38390b_500x500_crop_center.jpg?v=1631706509", linkRef: "https://www.sourceforsports.ca/products/bauer-nexus-geo-grip-senior-hockey-stick-87-flex" },
    { type: "Stick", brand: "CCM", style: "Ribcor Trigger 6 Grip", size: "Senior", price: "174.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/39a1e4a000ce1f34bc6d236a572d9051_500x500_crop_center.jpg?v=1643656382", linkRef: "https://www.sourceforsports.ca/products/ccm-ribcor-trigger-6-grip-senior-hockey-stick" },
    { type: "Stick", brand: "True", style: "AX5 Grip", size: "Senior,", price: "111.97", imageUrl: "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333127328_31_a-True-AX5-Hockey-Stick-AX5-SR-20?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520", linkRef: "https://www.sportchek.ca/categories/shop-by-sport/hockey/hockey-sticks/senior-composite-one-piece/product/true-ax5-grip-senior-hockey-stick-333127328.html#" },
    { type: "Stick", brand: "Bauer", style: "Nexus Geo Grip", size: "Intermediate", price: "223.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6953fe96a6b7ae45ef6790d0ef38390b_e1303f90-7b57-4b44-a766-8b69bda36f3f_500x500_crop_center.jpg?v=1627526291", linkRef: "https://www.sourceforsports.ca/products/bauer-nexus-geo-grip-intermediate-hockey-stick-65-flex" },
    { type: "Stick", brand: "Bauer", style: "Vapor 2X Pro Grip", size: "Senior", price: "209.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/3c250ad1f3b15440b1a4ca4ec28f011e_500x500_crop_center.jpg?v=1627461707", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-2x-pro-grip-senior-hockey-stick" },
    { type: "Stick", brand: "Bauer", style: "Nexus 3N Grip", size: "Senior ", price: "118.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/29c8c2ef224e52774e198d53cc207ab8_90b4bd9c-5226-458d-bd5f-c5fc2ec6d4ca_500x500_crop_center.jpg?v=1640215658", linkRef: "https://www.sourceforsports.ca/products/bauer-nexus-3n-grip-senior-hockey-stick-87-flex" },
    { type: "Stick", brand: "Bauer", style: "TVapor X:Shift Pro Grip", size: "Senior", price: "139.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6452d07009adac4677152b6a8caeebb9_500x500_crop_center.jpg?v=1627460331", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-x-shift-pro-grip-senior-hockey-stick-3" },
{ type: "Glove", brand: "Bauer", style: "Vapor (2022)", size: "Junior", price: "$169.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/b1af3b490876395f8e8d17ea4a7efd4e_500x500_crop_center.jpg?v=1657318715", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-3x-pro-junior-hockey-gloves-2022" },
{ type: "Glove", brand: "CCM", style: "Tacks Vector Premier", size: "Senior", price: "149.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/d28114195ea632e2c7f04941ed7c4ffb_500x500_crop_center.jpg?v=1657232195", linkRef: "https://www.sourceforsports.ca/products/ccm-tacks-vector-premier-senior-hockey-gloves-source-exclusive-2022" },
{ type: "Glove", brand: "Warrior", style: "Covert Krypto Pro", size: "Senior", price: "149.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/dbe0ca72f321e083526c4a7ada81f022_500x500_crop_center.jpg?v=1657059445", linkRef: "https://www.sourceforsports.ca/products/warrior-covert-krypto-pro-senior-hockey-gloves-2022-source-exclusive" },
{ type: "Glove", brand: "True Hockey", style: "Catalyst ", size: "Youth", price: "59.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/3c645b51a72cb8051a7c51e0f2af687d_500x500_crop_center.jpg?v=1627461521", linkRef: "https://www.sourceforsports.ca/products/true-hockey-catalyst-9x-youth-hockey-gloves" },  
 { type: "Helmet", brand: "Warrior", style: "Covert CF100", size: "Senior", price: "199.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/d2fabfa31a21f6f456e43eae7ba206d5_500x500_crop_center.jpg?v=1656671578", linkRef: "https://www.sourceforsports.ca/products/warrior-covert-cf-100-hockey-helmet" },
    { type: "Helmet", brand: "CCM", style: "Tacks 70 Combo", size: "youth", price: "84.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/0009dac6592ee52f8b99322269041fa3_6fd328fa-d0cb-4343-81c6-76c429b847c5_500x500_crop_center.jpg?v=1653042048", linkRef: "https://www.sourceforsports.ca/products/ccm-tacks-70-youth-hockey-helmet-combo" },
    { type: "Helmet", brand: "CCM", style: "Tacks 70 combo", size: "Senior", price: "84.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/cd33d88ece570a9e144712d66d49c76e_500x500_crop_center.jpg?v=1653042006", linkRef: "https://www.sourceforsports.ca/products/ccm-tacks-70-senior-hockey-helmet-combo" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },


    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },


    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
    { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },
]
    const putItemsIntoContainers = (stickItems, cutOffnumber) => {
    let cutOff = cutOffnumber - 1
    let container = []
    const results = []
    stickItems.map((item, index) => {

        if (index <= cutOff) {
            container.push(item)
        }
        if (index === cutOff || index == stickItems.length - 1) {
            results.push(container)
            cutOff += cutOffnumber
            container = [];
        }
    })
    return (results)
}

const itemsGroupByContainers = putItemsIntoContainers(Items, 8)
const itemsContainersContainer= document.getElementById("parent-container")
if (itemsContainersContainer){
    itemsGroupByContainers.forEach((containerArray) => {
        const container = document.createElement("div");
        container.classList.add("items-containers");
        containerArray.forEach((item, index) => {
            const itemDiv = document.createElement("div")
            itemDiv.classList.add("item")
            itemDiv.classList.add("items-column")
            const link = document.createElement("a");
            const img = document.createElement("img");
            img.setAttribute("width", "50");
            img.setAttribute("height", "50");
            img.src = item.imageUrl;
            const itemDetails=document.createElement("p")
            itemDetails.innerHTML= `${item.type}<br>${item.brand}<br>${item.style}<br>${item.size}<br>$${item.price}`
            itemDiv.appendChild(itemDetails)
            itemDiv.appendChild(img);
            link.href = item.linkRef;
            link.appendChild(img);
            itemDiv.appendChild(link);
            container.appendChild(itemDiv)
            if (!index < containerArray.length) {
                itemsContainersContainer.appendChild(container);
            }
        })
    })
};



const testArray = [
    { name: "popcorn", price: 12 },
    { name: "soda", price: 2 },
    { name: "candy", price: 3 },
    { name: "twizzler", price: 6 }
]

const table = document.getElementById("display-table")

const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "Name";
headerRow.appendChild(nameHeader);
const priceHeader = document.createElement("th");
priceHeader.textContent = "Price";
headerRow.appendChild(priceHeader);
table.appendChild(headerRow);

testArray.forEach(item => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerHTML = `${item.name}`;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.innerHTML = `$${item.price}`;
    row.appendChild(priceCell);

    table.appendChild(row);
});
  
  console.log(table);
  
console.log(headerRow)
console.log(table);



















    // const tableHeader = (table,data) => {
    //     let tableHead= table.createTHead();
    //     let row = tableHead.insertRow()
    //     for (let key of data) {
    //         let th = document.createElement("th");
    //         let text = document.createTextNode(key);
    //         th.appendChild(text)
    //         row.appendChild(th);
    //     }
    // }
    // const generateTable = (table,data) => {
    //     for (let element of data){
    //         let row = table.insertRow();
    //         for (key in element){
    //             let cell= row.insertCell()
    //             let text = document.createTextNode(key === "price" ? "$" + element[key] : element[key])
    //             cell.appendChild(text)
    //         }
    //     }
    //     console.log(generateTable)
    // }
    // let table = document.querySelector("table");
    // let data = Object.keys(testArray[0]);
    // tableHeader(table,data)
    // generateTable(table,testArray)

    // console.log(tableHeader)


    



console.log("hello")












//    const button = document.createElement("Button");
//     const onClickHandler = () => {
//         fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json));
//     }
//     button.onclick = onClickHandler
//     button.innerHTML="test click";
//     gloveColumn.appendChild(button);


