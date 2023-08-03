function makeAvg (array) {
    var sum = 0;
    for(var i = 0 ; i < array.length; i++)
    {
        sum = sum +  array[i];
    }
    return sum / array.length;
}
var array = [ 2,2,2,2];
var avg = makeAvg(array);
console.log(avg);