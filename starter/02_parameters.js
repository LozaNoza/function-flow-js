// TODO: Write a function 'totalScores' that takes an array of numbers
// TODO: Return the sum of all numbers in the array
const scores = [75, 80, 95];

function totalScores(scores) {
  // Your code here
    
    let total = 0;
    for (let i=0; i <scores.length; i++){
      total += scores[i];
    };
    return total;
};

console.log(totalScores(scores));

//module.exports = { totalScores };
