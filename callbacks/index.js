// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + "s"
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	const result = []
  for(let i=0; i<array.length; i++){
    result.push(callback(array[i]))
  }
  return result
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for(let i=0; i<array.length; i++){
    callback(array[i])
  }
}

// see for yourself if your forEach works!
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);  

// Challenge 5
function mapWith(array, callback) {
	const result=[]
  forEach(array, (element) => {
    result.push(callback(element))
  })
  return result
}
// console.log(mapWith([1, 2, 3], addTwo));


// Challenge 6
function reduce(array, callback, initialValue) {
  //initialValue is optional in Array.reduce
  // when it is not given take element at 0 index as initialvalue and 1 index as currentvalue
  let accumulator = initialValue ?? array[0];
  
  for(let i=0; i<array.length; i++){
    accumulator = callback(accumulator, array[i], i, array)
  }
  return accumulator;
}
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8

// Challenge 7
function intersection(arrays) {
  return arrays.reduce((acc, currentArray)=>{
    return currentArray.filter(el => acc.includes(el))
  })
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {
	return arrays.reduce((acc, currArr) => {
    // or use acc.concat(filtered)
		return [ ...acc, ...currArr.filter(el => !acc.includes(el))]
  })
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
	let obj = {}
  array1.forEach((el, index) => {
    if(callback(el) === array2[index]){
      obj[el] = array2[index]
    }
  })
  return obj
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
	let obj = {};
  arrVals.forEach((el)=>{
    obj[el] = arrCallbacks.map(cb => cb(el))
  })
  return obj
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
	const result = {};
  for(let key in obj) {
    if(obj[key] === callback(key)){
      result[key] = obj[key]
    }
  }
  return result
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
	let truthyCount = 0, falsyCount = 0, arrLen = array.length;
  let result = false;
  array.forEach((ele)=>{
    callback(ele) ? truthyCount++ : falsyCount++;
    // if(Math.abs(truthyCount - falsyCount) > arrLen/2) {
    // 	break
    // }
    result = truthyCount > falsyCount ? true : false 

  })
  return result  
}

// /*** Uncomment these to check your work! ***/
// const isOddd = (num) => { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOddd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOddd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
	const result = [];
  array.forEach((ele)=>{
    if(callback(ele)) result.unshift(ele)
    else result.push(ele)
  })
  return result
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
// 	``

// Challenge 14
function countBy(array, callback) {
	let obj = {}
  array.forEach((ele)=>{
    let key = callback(ele)
    if(obj[key] === undefined) obj[key] = 1
    else obj[key]= obj[key] + 1
  })
  return obj
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
	let obj = {}
  array.forEach((ele) => {
    let key = callback(ele)
    if(obj[key] === undefined) obj[key] = [ele]
    else obj[key].push(ele)
  })
  return obj
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
	let resultArr = []
  
  for(let key in obj) {
    if(callback(obj[key])) resultArr.push(key)
  }
  return resultArr
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {
	if((func1(func2(value))) === (func2(func1(value)))) return true
  else return false
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
	let newObj = {}
  for(let key in obj) {
    if(callback(key) === obj[key]) newObj[key] = obj[key]
  }
  return newObj
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
	let truthyCount = 0, arrLen = arrOfFuncs.length;
  arrOfFuncs.forEach((func) => {
    if(func(value)) truthyCount++;
  })
  return Math.floor(truthyCount / arrLen * 100 )
}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {
	let newArg = value
  arrOfFuncs.forEach((fn)=>{
    newArg = fn(newArg)
  })
  return newArg
}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let highestValue = 0
  let highestKey
	for(let [key, func] of Object.entries(objOfFuncs)) {
    const currValue = func(subject)
    if(currValue > highestValue) {
      highestKey = key
      highestValue = currValue
    }
  }	
	return highestKey
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
	let finalVal = arrOfFuncs.reduce((acc, currFunc)=>{
    return currFunc(acc)
  }, startVal)
  return finalVal
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyByThree, add100])); // Should output 10


// Challenge 23
function myFunc(array, callback) {

}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
	for(let i=0; i<array.length; i++) {
    if(callback(array[i])) return i;
  }
  return -1
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
