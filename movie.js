const input = [
    ["10212021", "popcorn"],
    ["10222021", "popcorn"],
    ["10212021", "soda"],
    ["10212021", "popcorn"],
    ["10212021", "soda"],
    ["10212021", "popcorn"],
    ["10212022", "popcorn"]
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
   if (item === "soda"){
    purchaseDates[date].soda += 1;
   }
   else {
    purchaseDates[date].popcorn += 1
   }
  })

  for (let dateKeys in purchaseDates){
    const purchaseTimes = purchaseDates[dateKeys];
    const sodaAmount = purchaseTimes.soda;
    const popcornAmount = purchaseTimes.popcorn
    let bundleAmount = Math.min(popcornAmount,sodaAmount);
    output += bundleAmount * prices.bundle;
    output += (sodaAmount- bundleAmount) * prices.soda;
    output += (popcornAmount - bundleAmount) * prices.popcorn;
  }
  console.log(purchaseDates)
  console.log(output);

  

  

 // traverse through every key in purchase date object(convert object into array for easy access for loop)
 // determine the larger number, then subtract from the smaller number to get left over from bundle.
 // add beverages and bundles togeater (learn to create a variable to call the prices)
 // push total to output ( make sure step 2-4 is contained inside one loop so i am only working with one key)


