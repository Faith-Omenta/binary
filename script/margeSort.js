function margeSort(arr){
if(arr.length<2){
    return arr
}
const mid=math.floor(arr.length/2)
const leftArr=arr.slice(0,mid)
const rightArr=arr.slice(mid)
return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
const sortedArr=[]
while(leftArr.length && rightArr.length){
    if(leftArr[0]<= rightArr[0]){
        sortedArr.push(leftArr.shift())
}else{
    sortedArr.push(leftArr.shift())
}
}
[...sortedArr,...leftArr,...rightArr]

}
const arr=[-8,20,-2,4,-6]
console.log(margeSort(arr))


// another trial if i rem
function margesort(arr){
if (arr.length<2){
    return arr
}
const mid=(arr.length/2)
const leftArr=(arr.slice(o,mid))
const rightArr=(arr.slice(mid))
return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
sortedArr.push(leftArr.shift())
        }
    }
[...sortedArr,...leftArr,...rightArr]
    }
let arr1=[1,2,3,4,5]
console.log(margeSort(arr1))




// another trial
function margeSort(arr){
    if(arr.length<2){
        return arr
    }
   const mid=(arr.length/2)
   const leftArr=(arr.slice(0,mid))
   const rightArr=(arr.slice(mid))
   return merge=(mergeSort(leftArr),margeSort(rightArr))
}
function merge(leftArr,rightArr){
    sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(leftArr.shift())
        }
    }
    [...sortedArr,...leftArr,...rightArr]
}

const arr3=[4,5,6,72,34,56]
console.log(arr3)