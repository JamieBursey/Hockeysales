
const Items = [
  { type: "Stick", brand: "CCM", style: "Ribcor Trigger 6", size: "Senior", price: "258.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6db0dc9f458615f750e9602df46e58c8_500x500_crop_center.jpg?v=1644279684", linkRef: "https://www.sourceforsports.ca/products/ccm-ribcor-trigger-6-pro-grip-senior-hockey-stick" },
  { type: "Stick", brand: "Bauer", style: "Nexus Geo Grip", size: "Senior", price: "244.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6953fe96a6b7ae45ef6790d0ef38390b_500x500_crop_center.jpg?v=1631706509", linkRef: "https://www.sourceforsports.ca/products/bauer-nexus-geo-grip-senior-hockey-stick-87-flex" },
  { type: "Stick", brand: "CCM", style: "Ribcor Trigger 6 Grip", size: "Senior", price: "174.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/39a1e4a000ce1f34bc6d236a572d9051_500x500_crop_center.jpg?v=1643656382", linkRef: "https://www.sourceforsports.ca/products/ccm-ribcor-trigger-6-grip-senior-hockey-stick" },
  { type: "Stick", brand: "True", style: "AX5 Grip", size: "Senior", price: "111.97", imageUrl: "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333127328_31_a-True-AX5-Hockey-Stick-AX5-SR-20?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520", linkRef: "https://www.sportchek.ca/categories/shop-by-sport/hockey/hockey-sticks/senior-composite-one-piece/product/true-ax5-grip-senior-hockey-stick-333127328.html#" },
  { type: "Stick", brand: "Bauer", style: "Nexus Geo Grip", size: "Intermediate", price: "223.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6953fe96a6b7ae45ef6790d0ef38390b_e1303f90-7b57-4b44-a766-8b69bda36f3f_500x500_crop_center.jpg?v=1627526291", linkRef: "https://www.sourceforsports.ca/products/bauer-nexus-geo-grip-intermediate-hockey-stick-65-flex" },
  { type: "Stick", brand: "Bauer", style: "Vapor 2X Pro Grip", size: "Senior", price: "209.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/3c250ad1f3b15440b1a4ca4ec28f011e_500x500_crop_center.jpg?v=1627461707", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-2x-pro-grip-senior-hockey-stick" },
  { type: "Stick", brand: "Bauer", style: "Nexus 3N Grip", size: "Senior ", price: "118.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/29c8c2ef224e52774e198d53cc207ab8_90b4bd9c-5226-458d-bd5f-c5fc2ec6d4ca_500x500_crop_center.jpg?v=1640215658", linkRef: "https://www.sourceforsports.ca/products/bauer-nexus-3n-grip-senior-hockey-stick-87-flex" },
  { type: "Stick", brand: "Bauer", style: "TVapor X:Shift Pro Grip", size: "Senior", price: "139.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/6452d07009adac4677152b6a8caeebb9_500x500_crop_center.jpg?v=1627460331", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-x-shift-pro-grip-senior-hockey-stick-3" },
  { type: "Stick", brand: "True", style: "AX Pro (2020)", size: "Senior", price: "103.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/9c661c531df45128f3381ea5014f2f0a_500x500_crop_center.jpg?v=1627461032", linkRef: "https://www.sourceforsports.ca/products/true-hockey-ax-pro-senior-hockey-stick-source-exclusive" },
  { type: "Stick", brand: "Warrior", style: "QR Edge Grip 85 Flex", size: "Senior", price: "299.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/51cba2ff956dcbdd8db3e27e9a9e688b_30eef7f7-1406-4f8b-9363-cf0b3efb585d_500x500_crop_center.jpg?v=1628683088", linkRef: "https://www.sourceforsports.ca/products/warrior-qr-edge-grip-85-flex-senior-hockey-stick" },
  { type: "Stick", brand: "Bauer", style: "Nexus 3N Pro Grip (2020)", size: "Senior", price: "174.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/cdd191c11b4646acafdb4404b3fa7678_8c4e2b04-3d1d-45ea-9039-5f187113d7ae_500x500_crop_center.jpg?v=1627464304", linkRef: "https://www.sourceforsports.ca/products/bauer-nexus-3n-pro-grip-senior-hockey-stick-87-flex" },
  { type: "Stick", brand: "Bauer", style: "Supreme 3S Pro Grip (2020)", size: "Senior", price: "209.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/b8c3e97f814632df83a5c8e88cfb391f_500x500_crop_center.jpg?v=1627461865", linkRef: "https://www.sourceforsports.ca/products/bauer-supreme-3s-pro-grip-senior-hockey-stick-87-flex-2020" },

  { type: "Glove", brand: "Bauer", style: "Vapor (2022)", size: "Junior", price: "169.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/b1af3b490876395f8e8d17ea4a7efd4e_500x500_crop_center.jpg?v=1657318715", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-3x-pro-junior-hockey-gloves-2022" },
  { type: "Glove", brand: "CCM", style: "Tacks Vector Premier", size: "Senior", price: "149.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/d28114195ea632e2c7f04941ed7c4ffb_500x500_crop_center.jpg?v=1657232195", linkRef: "https://www.sourceforsports.ca/products/ccm-tacks-vector-premier-senior-hockey-gloves-source-exclusive-2022" },
  { type: "Glove", brand: "Warrior", style: "Covert Krypto Pro", size: "Senior", price: "149.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/dbe0ca72f321e083526c4a7ada81f022_500x500_crop_center.jpg?v=1657059445", linkRef: "https://www.sourceforsports.ca/products/warrior-covert-krypto-pro-senior-hockey-gloves-2022-source-exclusive" },
  { type: "Glove", brand: "True Hockey", style: "Catalyst ", size: "Youth", price: "59.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/3c645b51a72cb8051a7c51e0f2af687d_500x500_crop_center.jpg?v=1627461521", linkRef: "https://www.sourceforsports.ca/products/true-hockey-catalyst-9x-youth-hockey-gloves" },
  { type: "Glove", brand: "Bauer", style: "Vapor (2022)", size: "Junior", price: "169.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/b1af3b490876395f8e8d17ea4a7efd4e_500x500_crop_center.jpg?v=1657318715", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-3x-pro-junior-hockey-gloves-2022" },
  { type: "Glove", brand: "Bauer", style: "Vapor (2022)", size: "Junior", price: "169.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/b1af3b490876395f8e8d17ea4a7efd4e_500x500_crop_center.jpg?v=1657318715", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-3x-pro-junior-hockey-gloves-2022" },
  { type: "Glove", brand: "Bauer", style: "Vapor (2022)", size: "Junior", price: "169.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/b1af3b490876395f8e8d17ea4a7efd4e_500x500_crop_center.jpg?v=1657318715", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-3x-pro-junior-hockey-gloves-2022" },

  { type: "Helmet", brand: "Warrior", style: "Covert CF100", size: "Senior", price: "199.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/d2fabfa31a21f6f456e43eae7ba206d5_500x500_crop_center.jpg?v=1656671578", linkRef: "https://www.sourceforsports.ca/products/warrior-covert-cf-100-hockey-helmet" },
  { type: "Helmet", brand: "CCM", style: "Tacks 70 Combo", size: "youth", price: "84.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/0009dac6592ee52f8b99322269041fa3_6fd328fa-d0cb-4343-81c6-76c429b847c5_500x500_crop_center.jpg?v=1653042048", linkRef: "https://www.sourceforsports.ca/products/ccm-tacks-70-youth-hockey-helmet-combo" },
  { type: "Helmet", brand: "CCM", style: "Tacks 70 combo", size: "Senior", price: "84.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/cd33d88ece570a9e144712d66d49c76e_500x500_crop_center.jpg?v=1653042006", linkRef: "https://www.sourceforsports.ca/products/ccm-tacks-70-senior-hockey-helmet-combo" },
  { type: "Helmet", brand: "Bauer", style: "HyperLite (2021)", size: "Senior", price: "349.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/e6b45c2a0b4c4f01545096603d1eb9fc_500x500_crop_center.jpg?v=1627631566", linkRef: "https://www.sourceforsports.ca/products/bauer-hyperlite-hockey-helmet" },

  { type: "Pants", brand: "CCM", style: "JetSpeed Vibe Senior Hockey Pants (2019)", size: "S/M/L", price: "47.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/dcd5dc401f221b89c239f5fab1f69ef9_91b20e78-e2cb-4c23-a585-4e620b727701_500x500_crop_center.jpg?v=1627527986", linkRef: "https://www.sourceforsports.ca/products/ccm-jetspeed-vibe-senior-hockey-pants-2019-source-exclusive" },
  { type: "Pants", brand: "Bauer", style: "Elite Intermediate Goalie Pants", size: "S/M/L", price: "194.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/7cf90b5f9df415b2cb22f2eedf13400f_e11ef7e0-eb5f-494a-918c-75c595e3e2fb_500x500_crop_center.jpg?v=1627460228", linkRef: "https://www.sourceforsports.ca/products/bauer-s20-bauer-elite-goalie-pants-int" },
  { type: "Pants", brand: "CCM", style: "CCM JetSpeed Control Junior Hockey Pants (2019)", size: "S-XL", price: "53.99", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/beba990cd9c058851a5990120196a817_500x500_crop_center.jpg?v=1627510577", linkRef: "https://www.sourceforsports.ca/products/ccm-jetspeed-control-junior-hockey-pants-2019-source-exclusive" },
  { type: "Pants", brand: "Bauer", style: "Bauer Vapor X-W Women's Hockey Pants (2020)", size: "XS-L", price: "112.49", imageUrl: "https://cdn.shopify.com/s/files/1/0505/8838/5453/products/f7aaacf5c43a21c0fa37f1b3dcfa8a0b_500x500_crop_center.jpg?v=1627462137", linkRef: "https://www.sourceforsports.ca/products/bauer-vapor-x-w-womens-hockey-pants" },
];
Items.forEach((item, index) => {
  item.id = index + 1
  item.wishList = false
})


const priceBtnElement = document.getElementById("sort-price");
const priceBtn = document.createElement("button");
priceBtn.classList.add("sortBtn");
priceBtn.innerHTML = "Sort" + " " + "&#9661;";
priceBtnElement.appendChild(priceBtn);

const sortTitles = ["Clear", "Alphabetical", "High-Low", "Low-High"];
const sortListElement = document.getElementById("button-list")
const sortDropDown = document.createElement("div");
sortDropDown.classList.add("pricelist");
sortListElement.style.display = "none";
sortListElement.appendChild(sortDropDown)
let filteredArray = [...Items]

const innersortButtons = sortTitles.map((buttonName) => {
  const sortElement = document.createElement("li");
  sortElement.classList.add("sortHigh");
  sortElement.innerHTML = buttonName;
  sortDropDown.appendChild(sortElement);


  if (buttonName === "High-Low") {
    sortElement.onclick = () => {
      const newItemsArray = filteredArray
      const highFirst = newItemsArray.sort((low, high) => (high.price - low.price))
      updateFilterItems(highFirst);
      sortListElement.style.display = "none";
    };
  }
  else if (buttonName === "Low-High") {
    sortElement.onclick = () => {
      const newItemsArray = filteredArray
      const lowFirst = newItemsArray.sort((low, high) => (low.price - high.price))
      updateFilterItems(lowFirst);
      sortListElement.style.display = "none";
    };
  }
  else if (buttonName === "Alphabetical") {
    sortElement.onclick = () => {
      const newItemsArray = filteredArray
      const Alphabetically = newItemsArray.sort((a, b) => {
        let brandA = a.brand.toLocaleLowerCase()
        let brandB = b.brand.toLocaleLowerCase()
        if (brandA < brandB) return -1
        if (brandA > brandB) return 1
        return 0;
      })
      updateFilterItems(Alphabetically)
      sortListElement.style.display = "none"
    }
  }

  else if (buttonName === "Clear") {
    sortElement.onclick = () => {
      updateFilterItems(Items)
      sortListElement.style.display = "none";
    };
  }

  return sortElement;
});
priceBtn.onclick = () => {
  if (sortListElement.style.display === "none") {
    sortListElement.style.display = "contents";
  }
  else {
    sortListElement.style.display = "none";
  }
};

const searchBar = document.getElementById("search-bar")
const input = document.createElement("input")
input.type = "text"
input.placeholder = "Search..."
input.classList.add("searchBar")
const searchButton = document.createElement("button")
searchButton.classList.add("btn-search")
const searchIcon = document.createElement("i")
searchIcon.classList.add("fa", "fa-search")
searchBar.appendChild(searchButton)
searchButton.appendChild(searchIcon)
searchBar.appendChild(input)

let searchItems = Items

input.onkeyup = () => {
  const searchInput = input.value.toLowerCase();
  searchItems = Items.filter((item) => (item.type + item.brand + item.style + item.size).toLowerCase().includes(searchInput))
  const noResults = document.getElementById("no-results")
  if (searchItems.length === 0) {
    noResults.innerText = ("No Search Results")

  }
  else if (searchItems.length >= 1) {
    const noResults = document.getElementById("no-results")
    noResults.innerText = ""

  }
  updateFilterItems(searchItems);

};

const buttonTitles = ["All", "Stick", "Glove", "Helmet", "Pants"]
const btnfilterContainer = document.getElementById("filter-button")
const filterBtn = document.createElement("button")
filterBtn.classList.add("filter-btn")
filterBtn.innerHTML = "Filter" + " " + "&#9661;"
btnfilterContainer.appendChild(filterBtn)
const buttonDiv = document.getElementById("myBtnContainer")
buttonDiv.style.display = "none"


filterBtn.onclick = () => {
  if (buttonDiv.style.display === "none") {
    buttonDiv.style.display = "block";
  } else {
    buttonDiv.style.display = "none";
  }
}

const innerFilterButtons = buttonTitles.map((buttonName) => {
  const buttonElement = document.createElement("li")
  buttonElement.classList.add("item-button")
  buttonElement.innerHTML = buttonName
  buttonDiv.appendChild(buttonElement)
  buttonElement.onclick = () => {
    filterMyItems(buttonName)
    updateFilterItems(filteredArray)
  }
  if (buttonName === "All") {
    buttonElement.onclick = () => {
      filteredArray = Items
      updateFilterItems(filteredArray)
    }
  }
  btnfilterContainer.appendChild(filterBtn)
  return buttonElement
})

const filterMyItems = (type) => {
  filteredArray = Items.filter(item => item.type === type)
}
const itemsContainer = document.getElementById("parent-container")
const updateFilterItems = (filteredItems) => {

  while (itemsContainer.hasChildNodes()) { itemsContainer.removeChild(itemsContainer.firstChild) }
  filteredItems.map((item) => {
    const columnDiv = document.createElement("div")
    itemsContainer.appendChild(columnDiv)
    const itemDiv = document.createElement("div")
    const heartElementDiv = document.createElement("div")
    heartElementDiv.classList.add("addWish-Container")
    const wishButton = document.createElement("Button")
    wishButton.classList.add("wishButton")
    wishButton.innerHTML = "&#x2661"
    if (item.wishList) {
      wishButton.innerHTML = "&#x2665;"
      wishButton.style.color = "red"
      wishButton.style.fontSize = "30px"
    }
    heartElementDiv.appendChild(wishButton)
    itemDiv.appendChild(heartElementDiv)
    columnDiv.appendChild(itemDiv)
    itemDiv.classList.add("item")
    columnDiv.classList.add("items-column")
    const brand = document.createElement("p")
    brand.innerHTML = `${item.brand}`
    const img = document.createElement("img");
    img.setAttribute("width", "70%");
    img.setAttribute("height", "50%");
    img.src = item.imageUrl;

    const itemDetails = document.createElement("p")
    itemDiv.appendChild(brand)
    itemDiv.appendChild(img);
    itemDetails.innerHTML = `${item.style}<br>${item.size}`
    const prices = document.createElement("p")
    prices.innerHTML = `$${item.price}`
    prices.classList.add("price-font")
    itemDiv.appendChild(itemDetails)
    itemDiv.appendChild(prices)
    const buyNowElement = document.createElement("div")
    buyNowElement.classList.add("buyBtn")
    const buyNow = document.createElement("p")
    buyNow.innerText = "BUY NOW"
    buyNow.classList.add("buyNowFont")
    const link = document.createElement("a");
    link.classList.add("no-underline")
    link.href = item.linkRef;
    link.appendChild(buyNow)
    buyNowElement.appendChild(link)
    itemDiv.appendChild(buyNowElement);

    wishButton.onclick = () => {
      if (searchItems.length >= 1) {
        item.wishList = true
        wishArray.push(item)
        saveWishArray();
        wishAdd(item)
        updateFilterItems(searchItems)
      }

      else if (!wishArray.find(wishListItem => wishListItem.id === item.id)) {
        item.wishList = true
        wishArray.push(item)
        saveWishArray();
        wishAdd(item)
        updateFilterItems(filteredArray)
      }
      else {
        const wishListedItem = wishArray.find(wishListItem => wishListItem.id === item.id)
        wishArray.splice(wishArray.indexOf(wishListedItem), 1)
        wishButton.style = ""
        wishButton.innerHTML = "&#x2661"
        item.wishList = false
      }
      saveWishArray()

      wishItemContainer.innerHTML = "";
      wishArray.forEach(item => {
        wishAdd(item);
      });
    }
  })
}

let wishArray = []

const saveWishArray = () => {
  localStorage.setItem("wishList", JSON.stringify(wishArray));
};

const getWishListFromLocalStorage = () => {
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    wishArray = JSON.parse(storedWishList);
  }
}
const wishBtn = document.getElementById("wish-Btn")
wishBtn.innerHTML = "Wish List"

const wishContainer = document.getElementById("wishList-Container")
wishContainer.classList.add("wishDisplay")
const wishItemContainer = document.createElement("div")
wishItemContainer.classList.add("wish-Items")
const wishHeader = document.createElement("div")
const wishHeaderImg = document.createElement("img")
wishHeaderImg.src = "./images/wishHeader.png"
wishHeaderImg.setAttribute("width", "70%")
wishHeader.appendChild(wishHeaderImg)
wishHeader.classList.add("wish-Header")
wishContainer.appendChild(wishHeader)
wishContainer.appendChild(wishItemContainer)
wishContainer.style.display = "none"

wishBtn.onclick = () => {
  if (wishContainer.style.display === "none") {
    wishContainer.style.display = "block"
  }
  else {
    wishContainer.style.display = "none"
  }
}

const wishAdd = (item) => {
  const itemLi = document.createElement("li")
  itemLi.classList.add("wishItem")
  itemLi.id = item.id
  const heartElementDiv = document.createElement("div")
  heartElementDiv.classList.add("RemoveWish-Container")
  const wishRemoveButton = document.createElement("Button")
  wishRemoveButton.innerHTML = "&#8861"
  heartElementDiv.appendChild(wishRemoveButton)
  itemLi.appendChild(heartElementDiv)
  const brand = document.createElement("p")
  brand.innerHTML = `${item.brand}`
  const img = document.createElement("img");
  img.src = item.imageUrl
  img.setAttribute("width", "10%");
  img.setAttribute("height", "5%");
  img.classList.add("Item-Images")

  const itemDetails = document.createElement("p")
  itemLi.appendChild(brand)
  itemLi.appendChild(img);
  itemDetails.innerHTML = `${item.style}<br>${item.size}`
  const prices = document.createElement("p")
  prices.innerHTML = `$${item.price}`
  prices.classList.add("price-font")
  itemLi.appendChild(itemDetails)
  itemLi.appendChild(prices)
  const buyNowElement = document.createElement("div")
  buyNowElement.classList.add("buyBtn")
  const buyNow = document.createElement("p")
  buyNow.innerText = "BUY NOW"
  buyNow.classList.add("buyNowFont")
  const link = document.createElement("a");
  link.classList.add("no-underline")
  link.href = item.linkRef;
  link.appendChild(buyNow)
  buyNowElement.appendChild(link);
  itemLi.appendChild(buyNowElement);
  wishItemContainer.appendChild(itemLi)

  wishRemoveButton.onclick = () => {
    itemLi.remove()
    wishArray.splice(wishArray.indexOf(item), 1)
    if (itemsContainer.querySelector = "grid") {
      item.wishList = false
      itemsContainer.innerHTML = ""
      updateFilterItems(Items)
    }

    saveWishArray()
  }
}
wishArray.forEach((item) => wishAdd(item))
//first load     
updateFilterItems(Items)
getWishListFromLocalStorage()
