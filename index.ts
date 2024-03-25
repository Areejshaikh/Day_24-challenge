console.log("Day 24 Challenge:");
// Question 70: 
//  this function print 1 to 5 
function num() {
    for (let i = 0; i < 5; i++) {
        // loop
     console.log(i);
    }
}

num();
// cll function

// Question 71:

let userName: string = "Rose";
userName = "Eric"  // let alows  reassignment
console.log(userName);

const age : number =  25;
// age = 28 // show error Cannot assign to 'age' because it is a constant
console.log(age);


// Question 72:
{
    let blockLet = "Show inside"
    const blockConst = "show only inside"
    console.log(blockLet);
    console.log(blockConst);
}
// try {
//     console.log(blockLet);
// } catch (error) {
//     console.log("not accrssible"); // return value only inside. 
// }
// try {
//     console.log(blockConst);
// } catch (error) {
//     console.log("not accrssible"); // return value only inside. 
// }