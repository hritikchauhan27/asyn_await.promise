//synchronous program of sum
// ----imagine a more complex operation in place of our sum,
// ---- it would severely slow down the page *in a synchronous operation*

// function sum(a,b){
//     return a+b;
// }

// ans =sum(5,4);
// console.log(ans);

//*********************************************************/

// Asynchronous program of sum
// ----no longer concerned with how long the operation takes,the callback guarantees that after it’s done,
// --- however long it takes, the display will be changed.

function sum(ans){
    console.log(ans);
}

function perform(a,b,callback){
    let c= a+b;
    callback(c);
}

perform(1,2,sum);