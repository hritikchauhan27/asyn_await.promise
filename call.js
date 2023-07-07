// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"Hritik",
//     lastName: "Chauhan"
//   }
  
//   const person2 = {
//     firstName:"Rishi",
//     lastName: "Rajput"
//   }

//   console.log(person.fullName.call(person2,"Delhi","India"));

//Calls a method of an object, substituting another object for the current object.
//call()method takes arguments separately, apply() method takes arguments as an array.

//--apply
const person={
    fullName : function(city,country){
        return this.firstName +" "+ this.lastName+" " +city+country;
    }
}

const p1={
    firstName:"Hritik",
    lastName:"Chauhan"
}

const p2={
    firstName:"Rishi",
    lastName:"Rajput"
}
console.log(person.fullName.apply(p1,["delhi ","India"]));

//---bind 
//with the bind method an object can borrow a method from another object
