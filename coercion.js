// it convert a value from one type to another

// const sum = 35 + "hello"

// console.log(sum)
// // 35hello

// console.log(typeof sum)
// // string

// //------------------------------------
// //if in case of multiply there is no multiply operation is present in string */
// const times = 35 * "hello"

// console.log(times)
// console.log(typeof times);

// NaN

//************************************************************************************/



// --the function defined in the closure remembers the environment in which it was created

function numberGenerator() {
    // Local free variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      return num;;
    }
    num++;
    return checkNumber(); //calling the function by doing-() & returing the fun without this-()
  }
  
  var number = numberGenerator();
  console.log(number); 


// function numberGenerator() {
//     var num = 1;
//     function checkNumber() { 
//       console.log(num);
//     }
//     num++;
//     return checkNumber;
//   }
  
// var  number =numberGenerator();
// number();

//the closure allows the checkNumber function to retain access to the num variable even after the numberGenerator fun has completed execution

//*************************************************************/
//primitive and reference value
//primitive - stored directly in variable
// let x = 5;
// let y = x;
// y = 10;
// console.log(x); 
// console.log(y);
// //the variable y is assigned a copy of the value of x
// //When we change the value of y, it does not affect the value of x
// //This is because x and y are separate variables with separate memory locations.

// //reference - we assign a reference value to a variable
// let array1 = [1, 2, 3];
// let array2 = array1;
// array2.push(4);
// console.log(array1); // Output: [1, 2, 3, 4]
// console.log(array2); // Output: [1, 2, 3, 4]
//the variable array2 is assigned a reference to the original array array1
//when we push a value to array2 it also affects array1 because both variables reference the same memory location

// function alt(obj){
//     obj.foo=
// }