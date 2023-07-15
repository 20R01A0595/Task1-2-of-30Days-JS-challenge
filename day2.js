const prompt =require("prompt-sync")({ sigint:true});
function countChocolates(totalMoney, chocolateCost) {
    const money = parseInt(totalMoney);
    const cost = parseInt(chocolateCost);
    if (money < 0) {
      return "Invalid input";
    }
    let initialChocolates = Math.floor(money / cost);
    let wrappers = initialChocolates;
    let additionalChocolates = 0;
  
    while (wrappers >= 3) {
      const exchangedChocolates = Math.floor(wrappers / 3);
      additionalChocolates += exchangedChocolates;
      wrappers = exchangedChocolates + (wrappers % 3);
    }
    const totalChocolates = initialChocolates + additionalChocolates;
    return totalChocolates;
  }
  const totalMoney = prompt("Enter the total money Ashi has:");
  const chocolateCost = prompt("Enter the cost of one chocolate:");
  const res = countChocolates(totalMoney, chocolateCost);
  console.log(res);