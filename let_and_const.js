function calculateAmount(boolVal) { 
    let amount = 0;
    if(boolVal) {
       let amount = 1;
       console.log("Inside if: amount : ", amount);  // scope of this amount ends with next closing bracket
    }
    console.log("Inside functional scope: amount : ", amount);
    return amount;
 }
 console.log(calculateAmount(true));