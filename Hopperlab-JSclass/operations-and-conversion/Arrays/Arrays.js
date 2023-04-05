let num = [24,true,"hello",38];
let num2 = new Array(24,true,"hello",38);
console.log(num);
console.log(num2);
// push adds an element at the end of an array
num.push("fruits");
console.log(num);

// Unshift()adds a new element at a particular position and shifts the remaining elements down the list.
num.unshift(3);
console.log(num);
//  removes the last element from an array and returns that element.
num.pop();
console.log(num);
// shift() removes an element at a specified position and shifts the remaining elements up. 
num.shift();
console.log(num);

// map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements.
// given an array of x return an array even where every item in x is multiplied by 5
let x = [5,8,2,87,33,67]
let even=x.map(function(item){
    return item*5
    })
    console.log(even);

    let result=[];
    x.forEach(function(item){
        result.push(item*5)
    })
    console.log(result);

    

    let newArray = num.concat(x);
    console.log(newArray);

    let tests=["Angela",...x];
    console.log(tests);

    let[a,b,...c]=x;
    console.log({a});
    console.log({b});
    console.log({c});
