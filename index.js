console.log("Day 24 Challenge:");
// Question 70: 
//  this function print 1 to 5 
function num() {
    for (var i = 0; i < 5; i++) {
        // loop
        console.log(i);
    }
}
num();
// cll function
// Question 71:
var userName = "Rose";
userName = "Eric"; // let alows  reassignment
console.log(userName);
var age = 25;
// age = 28 // show error Cannot assign to 'age' because it is a constant
console.log(age);
// Question 72:
{
    var blockLet = "Show inside";
    var blockConst = "show only inside";
    console.log(blockLet);
    console.log(blockConst);
}
// try {
//     console.log(blockLet);
// } catch (error) {
//     console.log("not accrssible");
// }
// try {
//     console.log(blockConst);
// } catch (error) {
//     console.log("not accrssible");
// }
