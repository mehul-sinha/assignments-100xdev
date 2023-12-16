/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// solution one
// function calculateTotalSpentByCategory(transactions) {
//   let cat = new Set();
//   for(let i = 0; i < transactions.length; i++){
//     cat.add(transactions[i]['category']);
//   }
  
//   let catArr = Array.from(cat);
//   let ans = [];

//   for(let i = 0; i < catArr.length; i++){
//     ans.push({category: catArr[i], totalSpent: 0});
//   }
  

//   for(let i = 0; i < catArr.length; i++){
//     for(let j = 0; j < transactions.length; j++){
//       if(catArr[i] == transactions[j]['category']){
//         ans[i]['totalSpent'] += transactions[j]['price'];
//       }
//     }
//   }

//   return ans;
// }


// solution two
function calculateTotalSpentByCategory(transactions){
  const categoryMap = {};

  for(let i = 0; i < transactions.length; i++){
    const {category, price} = transactions[i];

    if(!categoryMap[category]){
      categoryMap[category] = price;
    }
    else{
      categoryMap[category] += price;
    }
  }

  // convert map into array of obejects
  const result = Object.keys(categoryMap).map(a => ({
    category: a,
    totalSpent: categoryMap[a],
  }));

  return result
}

module.exports = calculateTotalSpentByCategory;
