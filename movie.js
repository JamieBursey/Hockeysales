const input = [
    ["10212021", "popcorn"],
    ["10222021", "popcorn"],
    ["10212021", "soda"],
    ["10212021", "popcorn"],
    ["10212021", "soda"],
    ["10212021", "popcorn"],
    ["10212022", "popcorn"],
    ["10212023", "soda"],
    ["10212023", "popcorn"]
];

const prices = {
    soda: 2.5,
    popcorn: 8,
    bundle: 9
};

const purchaseDates = {}
let output = 0

input.forEach(([date, item]) => {
    if (!purchaseDates[date]) {
        purchaseDates[date] = { soda: 0, popcorn: 0 }
    }
    if (item === "soda") {
        purchaseDates[date].soda += 1;
    }
    else {
        purchaseDates[date].popcorn += 1
    }
})

Object.keys(purchaseDates).forEach(dateKey => {
    const purchaseTimes = purchaseDates[dateKey];
    const sodaAmount = purchaseDates[dateKey].soda;
    const popcornAmount = purchaseDates[dateKey].popcorn
    let bundleAmount = 0
        if (sodaAmount > 0 && popcornAmount > 0){
            bundleAmount=Math.min(popcornAmount,sodaAmount)
        }
    const sodaPrice=(sodaAmount-bundleAmount) * prices.soda;
    const popcornPrice=(popcornAmount-bundleAmount) * prices.popcorn
    const bundlePrice= bundleAmount * prices.bundle;

    output += sodaPrice + popcornPrice + bundlePrice
console.log(bundleAmount)
console.log(sodaPrice)
console.log(popcornPrice)
console.log(bundlePrice)

});


console.log(output)




 // traverse through every key in purchase date object(convert object into array for easy access for loop)
 // determine the larger number, then subtract from the smaller number to get left over from bundle.
 // add beverages and bundles togeater (learn to create a variable to call the prices)
 // push total to output ( make sure step 2-4 is contained inside one loop so i am only working with one key)


