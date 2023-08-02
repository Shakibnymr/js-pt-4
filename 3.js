function makeAvg (array, size) {
    var sum = 0;
    for(var i = 0 ; i < size; i++)
    {
        sum += array[i];
    }
    return sum / size;
}
var array = [ 2,2,2,2];
var avg = makeAvg(array, array.length);
console.log(avg);