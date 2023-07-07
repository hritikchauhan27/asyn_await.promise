var DidPayment = false;

//--put an async word before the function which we want to make a promise

async function UserPayment() {
    try {
        if (DidPayment) {
            console.log("Payment Successful");
        }
    } catch (err) {
        console.log("Payment cancel");
    }
}

// Making the function call
UserPayment();