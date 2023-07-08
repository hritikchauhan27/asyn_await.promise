//********* Practicing promises and asyn-await */

const ticket = new Promise(function(resolve,reject){
    const isBoarded = false; 
    if(isBoarded){
        resolve('you are in flight ')
    }else{
        reject('flight has been cancelled');
    }
});

ticket
.then((data)=>{
    console.log('completed');
})
.catch((data)=>{
    console.log("oh no ");
})