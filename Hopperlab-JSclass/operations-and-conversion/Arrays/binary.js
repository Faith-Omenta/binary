// given an array num of numbers and target,returns the index if the target is
// found in the array else return null

function binary (num, target){
    let left=0;
    let right = num.length -1;
    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(num[middle]===target){
        return middle;

        }
        else if(num[middle]<target){
            left=middle+1;
        }
        else{
            right=middle -1;
        
        right=middle-1
        }
    }
    return null
}
let num=[3,4,6,10,15,26,47,56];
let target=47;
console.log(binary(num,target))