
//submit homework to the repository that you created for git lecture 



// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64


let exponent = function(x, i) 
{
   if (i === 0) 
   {
    return "invalid degree";
   } else
       if (i === 1       
       ) {
           return x;
       }
        else 
            {
                return x * exponent(x, i-1);
            }
};

console.log(exponent(8, 5));
console.log(exponent(8, 1));
console.log(exponent(8, 0));



// 2. Write functions min and max that will find min and max number in array using apply
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 55, 33, 66, 44, 88, 99, 100, 120, 140, 160, 49, 499, 588, 633, 1256, 4589, 3212, 5478, 6598]

console.log(Math.min.apply(Math, numbers));
console.log(Math.max.apply(Math, numbers));


const num = [0, -5, 3, -6, 78, -89, 2.6, 8.89, -96.5];

console.log(Math.min.apply(Math, num));
console.log(Math.max.apply(Math, num));


// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars


// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
 
// function greet (person) {
//   if (person.name ==  'amy' ) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// const amy = {name: 'amy'}
// greet(amy)

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }
