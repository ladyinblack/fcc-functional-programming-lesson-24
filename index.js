// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Introduction to Currying and Partial Application</h1>`;

/** TODO:
 * Fill in the body of the add function so it uses currying to add parameters x, y, and z.
 * 
 function add(x) {
   // Only change code below this line
 
   // Only change code above this line
 }
 
 add(10)(20)(30);
 */

function add(x) {
  // Only change code below this line
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
  // Only change code above this line
}

console.log(add(10)(20)(30));
console.log(add(1)(2)(3));
console.log(add(11)(22)(33));
