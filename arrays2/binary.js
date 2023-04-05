// Given an array of unsorted numbers, return the index of the following target 
// if the target exists in the array. If the target is not found, return null
// let num = [1,2,3,4]
// let target = 6
// marge sort
function divideArrs(array){
    if(array<=1){
        return array
    }
    let middle=math.floor(array.length/2)
    let left =array.slice(0,middle)
    let right=array.slice(middle)
    return sortedArray(divideArrs(left),divideArrs(right))


}
function sortedArray(left,right){
    let newEmptyArr=[]
    while(left.length && right.length){
        if(left[0] < right[0]){
            newEmptyArr.push(left.shift())
   }else{
    newEmptyArr.push(right.shift())
   }
    
    }
    return[...newEmptyArr,...left,...right]
}
let hopper=[-6,20,8,-2,4]

const arr =[1,2,3,4]
console.log(Arry.shift())
    

// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
let arr4=[123,89,5,23,9,56]
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

