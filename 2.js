function makeAvg (a, b, c) {
    var avg = (a + b + c) / 3;
    return avg;
}
var avg1 = makeAvg (2,4,5);
var avg2 = makeAvg(5,5,5);
console.log( 'the average is', avg1);
console.log( 'the average is', avg2);