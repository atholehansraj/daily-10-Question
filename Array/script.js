
//====================================================
//====================================================
// --------------- Right 1 elem rotate----------------
// let arr = [10, 20, 30, 40, 50]
// let temp = arr[0]

// for(let i = 0 ; i<arr.length-1 ; i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1] = temp
//     console.log(arr);
    
    



//====================================================
//====================================================
//-----------------left 1 elem rotate ----------------

// let arr = [10, 20, 30, 40, 50]
// let  temp =  arr[arr.length-1]

// for(let i = arr.length-1 ; i>0 ; i--){
//     arr[i]=arr[i-1]

// }
// arr[0] = temp
// console.log(arr);



//====================================================
//====================================================
//----------------- Rotate right to left of n times

// let arr = [10, 20, 30, 40, 50]
// let n =2
// for(let k =1 ; k<= n ; k++){
//     let  temp =  arr[0]
//     for(let i = 0 ; i<arr.length-1; i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1] = temp
// }
// console.log(arr);





//====================================================
//====================================================
//----------------- Rotate left to right of n times

// let arr = [10, 20, 30, 40, 50]
// let n =2
// console.log(arr);

// for(let i =1 ; i<=n ; i++){
//     let temp = arr[arr.length-1]
//     for(let j = arr.length-1 ; j>0 ; j--){
//         arr[j]=arr[j-1]
//     }
//     arr[0] = temp
    
// }
// console.log(arr);




//====================================================
//====================================================
// --------------- Reverse Array

// let arr = [10, 20, 30, 40, 50]

// let n = 12
// n = n%arr.length
// console.log(arr);
// console.log(reverse(arr,0,n-1));
// console.log(reverse(arr,n,arr.length-1));
// console.log(reverse(arr,0,arr.length-1));

// function reverse(arr,i,j){    
//     let temp = null
//     while(i<j){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
//     // console.log(arr);
//     return arr   
// }


// let str = "naman"
// let n = str.length

// function pall(i){
//     if(i>n/2) return true
//     if(str[i]!==str[n-i-1]) return false
//     return pall(i+1)
// }

// console.log(pall(0))


// let n = 5
// let i = 1
// let last =0
// let current = 1
// console.log(last);

// function fibo(i,n){
//     if(i>n)return
//     let sum = last + current
//     console.log(sum);
//     last = current
//     current = sum
//     fibo(i+1,n)
    
// }

// fibo(i,5)
