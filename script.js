// Function A
function getAverage(scores) {
 let sum=0;
for (let i=0; i<scores.length; i++) {
  sum=sum+scores[i];
}
let average=sum/(scores.length);
return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Function B

function getGrade(score) {
  let grade;
  if (score === 100) {
    grade = "A++";
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) { 
    grade = "C";
  } else if (score >= 60 && score <= 69) { 
    grade = "D";
  } else if (score >= 0 && score <= 59) {
    grade = "F";
  } else {
    grade = "Invalid score";
  }
  return grade; 
}

console.log(getGrade(96)); 
console.log(getGrade(82));
console.log(getGrade(56)); 
