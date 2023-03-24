let num = [24,true,"hello",38];
let num2 = new Array(24,true,"hello",38);
console.log(num);
console.log(num2);
// push adds an element at the end of an array
num.push("fruits");
console.log(num);

num.unshift(3);
console.log(num);

num.pop();
console.log(num);

num.shift();
console.log(num);

// map
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
