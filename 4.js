// has return + has parameter:
function oddEven (num){
    if (num % 2 === 0){
        return "even";

    }
    else {
        return "odd";
    }
}
var result = oddEven(6);
console.log(result);

// no return + has parameter:

function oddEven1 (num1){
    if (num1 % 2 === 0){
        console.log("even");
    } else{
        console.log("odd");
    }
}
oddEven1 (9);