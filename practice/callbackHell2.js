var DidPayment = false;

function message(){
    console.log("Payment Successful");
}

function UserPayment(DidPayment, callback){
  
    if(DidPayment){
 	   callback();
    }else{
 	   UserPayment();
 	   if(DidPayment){
   	     callback();
 	   }else{
   	     UserPayment();
   	     if(Didpayment){
     	       callback();
   	     }else{
     	       UserPayment();
     	       //... And so on 
   	     }
 	   }
    }
}

// Making the call
UserPayment(DidPayment, message);



//-----------------------------------------------------------------//
//if he does not complete the payment, then we will get stuck into an infinite loop
//where UserPayment function is called continuously. This will result in a range error because the
//maximum call stack size will exceed. So how can we overcome this problem?