// start task1

let arr = [5, 6, 7, 8, 9];
let count = 0;
arr.forEach(element => count += element);
console.log(count);

// end task1

// start task2

let pow = arr.map(elem => elem * elem)
console.log(pow)

// end task2

// start task3

let arr3 = [{ name: 'Ivan', country: 'Ukraine' },

    { name: 'Petro', country: 'Ukraine' },

    { name: 'Miguel', country: 'Cuba' }

]
let checkCountry

arr3.every(() => {
    for (const iterator of arr3) {
        checkCountry = iterator.country.toLowerCase() === 'ukraine';
    }
    console.log(checkCountry);
});

// end task3

// start task4

let someCountry
arr3.some(() => {
    someCountry = arr3.map(element => element.country.toLowerCase() === 'cuba')
})
console.log(someCountry);

// end task4

// start task5

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];

let subarr = arr5.filter(Array.isArray);
console.log(subarr)

// end task5

// start task6

// part1

let arr6 = [1, 2, 5, 0, 4, 5, 6];
let findZero = arr6.slice(0, arr6.indexOf(0))
let summa = findZero.reduce((total, sum) => total + sum)
console.log(summa)

// part 2

let count2 = 0
for (const iterator of arr6) {
    count2 += iterator
    if (count2 >= 10) {
        let newArr = arr6.slice(0, arr6.indexOf(iterator))
        console.log(newArr.length + 1);
        break;
    }
}

// end task6

// start task 7

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];

let positiveNum = arr7.filter(elem => elem > 0)
console.log(positiveNum)
let sqrt = positiveNum.map(element => Math.sqrt(element))
console.log(sqrt)

// end task 7