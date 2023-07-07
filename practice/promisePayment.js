var didPayment = false;

function message(){
    console.log('Payment Done');
}

// userPayment function which returns a new Promise.

function UserPayment(didPayment){
    return new Promise(function(resolve, reject){
        if(didPayment){
            resolve(); 
        }else{
            reject();
        }
    });
}

//----- making the call now 

UserPayment(didPayment)
.then(function(){
    message();
  }).catch(function() {
    return UserPayment(didPayment);
  })
  .then(function() {
    message();
  })
  .catch(function() {
    return UserPayment(didPayment);
  })
  .then(function() {
    message();
  })
  .catch(function(err) {
    console.log(err)
  });


  //then is called when promise condition is true otherwise it will called the catch