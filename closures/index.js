// CHALLENGE 1
function createFunction() {
	return () => console.log('hello')
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
var input = 'global'
function createFunctionPrinter(input) {
	return () => console.log(input)
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
	return (y) => x+y;
}

// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
  let lastResult=null;
  return (...args) => {
    if(lastResult===null) {
      lastResult = func(...args)
    }
    return lastResult
  }
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let counter = 1;
  return () => {
    if(counter === count) func()
    else counter++
  }
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
	return (...args) => {
    setTimeout(()=> func(...args), wait)
  }
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
// let count = 0;
// const delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); 												 // should print '0'
// setTimeout(() => console.log(count), 2000); // should print '1' after 1 second



// CHALLENGE 7
function rollCall(names) {
  let index = 0;
	return () => {
    if(index === names.length) console.log('Everyone accounted for')
    else console.log(names[index++])
  }
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  let cache = {}
	return (arg) => {
    if(arg === magicWord) return cache;
    
    cache[arg] = func(arg);
    return cache[arg];
  }
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let index = 0;
	return () => {
    if(index===array.length) index = 0;
    return array[index++];
  }
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
	return (...args)=>func(arg, ...args)
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
	return (...args)=> {
    let obj = {
      date: new Date().toString(),
      output: func(...args)
    }
    return obj;
  }
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  const censorWords = {}
	return (str1, str2) => {
    if(str2!==undefined) {
    	censorWords[str1] = str2
    } else {
      for(const str in censorWords) {
	      str1 = str1.replaceAll(str, censorWords[str])
      }
      return str1;
    }
  }
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
	let privateSecret = secret;
  return {
    getSecret() {
      return privateSecret
    },
    setSecret(newSecret) {
      privateSecret = newSecret
    }
  }
}

// /*** Uncomment these to check your work! ***/
// let obj = createSecretHolder(5)
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
  let counter=0;
	return () => counter++;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
  let counter = 0;
	return () => {
    if(counter === num-1){
			counter++;
      return 'win';      
    } 
    else if(counter >= num) {
      return 'pick a number to play again';
    }
    counter++;
    return 'spin'
  }
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
  let count = 0;
  let avg = 0;
	return (num) => {
    if(num) {
      ++count;
      avg = ((avg*(count-1)) + num)/count;
    }
    return avg;
  }
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 18
function makeHistory(limit) {
	const history = []
  return (str) =>{
    if(str === 'undo') {
     	if(history.length === 0) return 'Nothing left to undo'
      else return history.pop() + ' undone'
    } else {
      if(history.length === limit) history.shift()
      history.push(str)
      return str + ' done'
    }
  }
  
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'
