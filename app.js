let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(31);
let firstAge = ages[0];
let lastAge = ages[ages.length - 1]

console.log (lastAge - firstAge);

let total = 0;
for(let i = 0; i < ages.length; i++) {
    total += ages[i];
}
let avg = total / ages.length;
console.log(avg);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let lengths = names.map(function(element) {
    return element.length;
});

let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log (sum / names.length);

console.log(names.join(' '));

function fullName (firstName, lastName) {
    return firstName + " " + lastName
}
console.log(fullName ('Francisco', 'Salazar'));
