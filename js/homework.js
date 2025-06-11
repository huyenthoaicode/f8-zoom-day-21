// ----------------------- indexOf2 -------------------------------
const fruitLists = ["Banana", "Lemon", "Orange", "Apple", , 1, 1, 3, "NaN", NaN];
const students = [{name: "Hoa", age: 18}, {name: "Lan", age: 20}, {name: "Chi", age: 18}];

Array.prototype.indexOf2 = function(value, fromIndex) {
    const length = this.length;
    let i = fromIndex ?? 0;
    for(; i < length; i++) {
        if(this[i] === value) return i;
    }
    return -1;
}

console.log("----------------------- indexOf2 -------------------------------");
console.log(Array.prototype.indexOf2);
console.log(fruitLists.indexOf2(1)); // 5
console.log(fruitLists.indexOf2("Orange")); // 2
console.log(fruitLists.indexOf2("6")); // -1

// ----------------------- map2 -------------------------------
Array.prototype.map2 = function(callback, thisArg) {   
    const length = this.length;
    const newArr = new Array(length);

    for (let index = 0; index < length; index++) {
        if (index in this) newArr[index] = callback.call(thisArg, this[index], index, this);  
    }
    return newArr
}

console.log("----------------------- map2 -------------------------------");
console.log(Array.prototype.map2);
console.log(fruitLists.map2(x => x + 2)); // ['Banana2', 'Lemon2', 'Orange2', 'Apple2', empty, 3, 3, 5]
console.log(fruitLists.map2(function(value) {
    return value === 1 ? value : null;
})); //[null, null, null, null, empty, 1, 1, null]

// ----------------------- include2 -------------------------------
Array.prototype.includes2 = function(value, fromIndex) {
    const length = this.length;
    let index = fromIndex ?? 0;

    for (; index < length; index++) {
        if(this[index] === value)  return true;
        if(typeof this[index] === "number" && typeof value === "number" && isNaN(this[index]) && isNaN(value)) 
            return true;     
    }
    return false;
}

console.log("----------------------- include2 -------------------------------");
console.log(Array.prototype.includes2);
console.log(fruitLists.includes2(NaN)); // true
console.log([1,2,3,NaN].includes2('NaN')); // false
console.log([1,2,3,null].includes2(null)); // true

// ----------------------- forEach2 -------------------------------
Array.prototype.forEach2 = function(callback, thisArg) {   
    const length = this.length;
    for (let index = 0; index < length; index++) {
        if (index in this) callback.call(thisArg, this[index], index, this);
    }
}

console.log("----------------------- forEach2 -------------------------------");
console.log(Array.prototype.forEach2);
console.log(fruitLists.forEach(function(element, index, arr){
    console.log(element, index);
}));
console.log(fruitLists.forEach2(function(element, index, arr){
    console.log(element, index);
}));

// ----------------------- filter2 -------------------------------
Array.prototype.filter2 = function(callback, thisArg) {   
    const length = this.length;
    const newArr = [];

    for (let index = 0; index < length; index++) {
        if (index in this && callback.call(thisArg, this[index], index, this))
            newArr.push(this[index]);  
    }
    return newArr
}

console.log("----------------------- filter2 -------------------------------");
console.log(Array.prototype.filter2);
let filterTmp = fruitLists.filter(function(value, index, arr){
    return value === 1
});

console.log(filterTmp);
let filterTmp2 = fruitLists.filter2(function(value, index, arr){
    return value === 1
});
console.log(filterTmp2);

// ----------------------- some2 -------------------------------
Array.prototype.some2 = function(callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
        return true;
    }
  }
  return false;
};

console.log("----------------------- some2 -------------------------------");
console.log(Array.prototype.some2);

let someTmp = fruitLists.some(function (num) {
  return num === 3;
});
console.log(someTmp);

let someTmp2 = fruitLists.some2(function (num) {
  return num === 3;
});
console.log(someTmp2);


console.log([2,3,6,2].some(function (num) {
  return num === 2;
}));

console.log([2,3,6,2].some2(function (num) {
  return num === 2;
}));

// ----------------------- every2 -------------------------------
Array.prototype.every2 = function(callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this && !callback.call(thisArg, this[i], i, this)) {
        return false;
    }
  }
  return true;
};

console.log("----------------------- every2 -------------------------------");
console.log(Array.prototype.every2);

let everyTmp = fruitLists.every(function (num) {
  return num === 3;
});
console.log(everyTmp);

let everyTmp2 = fruitLists.every2(function (num) {
  return num === 3;
});
console.log(everyTmp2);

console.log([2,2,2,2].every(function (num) {
  return num === 2;
}));

console.log([2,2,2,2].every2(function (num) {
  return num === 2;
}));

// ----------------------- find2 -------------------------------
Array.prototype.find2 = function(callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
        return this[i];
    }
  }
  return undefined;
};

console.log("----------------------- find2 -------------------------------");
console.log(Array.prototype.find2);

let findTmp = fruitLists.find(function (num) {
  return num === 3;
});
console.log(findTmp);

let findTmp2 = fruitLists.find2(function (num) {
  return num === 3;
});
console.log(findTmp2);

console.log(students.find(function (student) {
  return student.age === 20;
}));

console.log(students.find2(function (student) {
  return student.age === 20;
}));

// ----------------------- findIndex2 -------------------------------
Array.prototype.findIndex2 = function(callback, thisArg) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
        return i;
    }
  }
  return -1;
};

console.log("----------------------- findIndex2 -------------------------------");
console.log(Array.prototype.findIndex2);

let findIndexTmp = fruitLists.findIndex(function (num) {
  return num === 3;
});
console.log(findIndexTmp);

let findIndexTmp2 = fruitLists.findIndex2(function (num) {
  return num === 3;
});
console.log(findIndexTmp2);

console.log(students.findIndex(function (student) {
  return student.age === 20;
}));

console.log(students.findIndex2(function (student) {
  return student.age === 20;
}));

// ----------------------- reduce2 -------------------------------
Array.prototype.reduce2 = function(callback, initialValue) {
  const length = this.length;
  let hasInitialValue = arguments.length > 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  let startIndex = hasInitialValue ? 0 : 1;

  for (let i = startIndex; i < length; i++) {
    if (i in this) {
        if ((initialValue === null || initialValue === undefined) && i === 0) continue;
        accumulator = callback(accumulator, this[i], i, this);
    }
  }
  
  return accumulator;
};

console.log("----------------------- reduce2 -------------------------------");
console.log(Array.prototype.reduce2);

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(acc, curr) {
    console.log(acc, curr);   
    return acc + curr;
}, 0);

console.log(sum)

const sum2 = numbers.reduce2(function(acc, curr) {
    console.log(acc, curr);
    return acc + curr;
}, 0);

console.log(sum2)

const arr = [["hoa", 18] , ["lan", 20]];
console.log(arr.reduce(function(accumulator, currentValue, index) {
    const [key, value] = currentValue;
    console.log(key, value);
    accumulator += `${key}=${value}` + (index === arr.length - 1 ? '' : ';');
    return accumulator
}, ""));

console.log(arr.reduce2(function(accumulator, currentValue, index) {
    const [key, value] = currentValue;
    console.log(key, value);
    accumulator += `${key}=${value}` + (index === arr.length - 1 ? '' : ';');
    return accumulator
}, ""));
