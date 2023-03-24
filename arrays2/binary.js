// Given an array of unsorted numbers, return the index of the following target 
// if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6
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
let num=[45,12,6,89,2,5];
let target=6;

const sortedNum=mergeSort(num);
const index=binarySearch(sortedNum,target)
console.log(sortedNum)


// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
let arr=[123,89,5,23,9,56]
let unsorted=arr.sort(function(a,b){
    {return a-b};
    console.log(sortedArray.reverse())
})

// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];
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
let arr2=[1,4,78,2,67,3];
let arrr=34;
const Num=mergeSort(num);
const bin=binarySearch(sortedNum,target)
console.log(num)

