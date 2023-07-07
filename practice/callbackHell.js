//--Callback hell, also known as "pyramid of doom," is a term used to describe a 
// situation in asynchronous programming where multiple nested callback functions 
// create complex and hard-to-read code.

function print(i){
    window.alert("This is call number "+i);
}

//--The Callback will execute all calls to the print() function in its specified time.

function fun1(callback){
    setTimeout(()=>{
        console.log("first");
        let i = 1 ;
 	   callback(i); 
       i=2 ;
 	   setTimeout(()=>{
        console.log("second");
      	    callback(i); 
            i=3;
      	    setTimeout(()=>{
    	        console.log("third");
        	    callback(i); 
                i=4 ;
        	    setTimeout(()=>{
                    console.log("fourth");
          		    callback(i); 
                    i=5 ;
          		    setTimeout(()=>{
        	            console.log("fivth");
            		    callback(i); 
                        i=6;
            		    // .... and so on
            		    
          		    }, 800)
        	    }, 700)
      	    }, 100)
 	   }, 300)
    }, 500)
}

fun1(print);