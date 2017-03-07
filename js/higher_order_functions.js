function forEach(array, action) {
    for (var i=0; i<array.length; i++)
        action(array[i]);
}

forEach(['A', 'B', 'C'], console.log);


function greaterThan(n) {
    return function(m) { return m>n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(1));
console.log(greaterThan10(10));
console.log(greaterThan10(100));

var json = JSON.stringify({name: 'X', born: 1980});
console.log(json);
console.log(JSON.parse(json)['name']);


/* EXCERCISES */

/* FLATTENING */

var arrays = [[1,2,3], [4,5], [6]];

function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce(arrays, function(a, b) {
    return a.concat(b);
}, []));
