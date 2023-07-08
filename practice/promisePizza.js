function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese =" Cheese";
           // console.log('Here is the Cheese--',cheese);
            resolve(cheese);
        },2000)

    })
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough = cheese+" + Dough";
            //console.log("Here is the Dough--",dough); 
            resolve(dough);
        },3000);
    });
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza = dough+" + Pizaa";
            resolve(pizza);
        },2000);
    })
}

//****** asyn - await **********/

async function orderPizza(){
    const cheese = await getCheese();
    console.log("Here is the cheese",cheese);
    const dough = await makeDough(cheese);
    console.log("Here is the dough",dough);
    const pizza =await bakePizza(dough);
    console.log("Here is the pizza", pizza);
}

orderPizza();

//****** then catch ************/

// getCheese()
// .then((cheese)=>{
//     console.log("Here is the cheese",cheese);
//     return makeDough(cheese);
// })
// .then((dough)=>{
//     console.log("Here is the dough",dough);
//     return bakePizza(dough);
// })
// .then((pizza)=>{
//     console.log("Here is the pizza",pizza);
// })
// .catch((data)=>{
//     console.log("Pizza not Ready");
// })