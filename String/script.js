
const prompt = require("prompt-sync")({sigint:true});
//===================================================
// ---------print all charactor in next line --------
// let s = "hansraj"

//first way
// for(let i = 0 ; i<s.length ; i++){
//     console.log(s.charAt(i));
// }

// second way
// for(let i = 0 ; i<s.length ; i++){
//     console.log(s[i]);
// }


 



//====================================================
// --------------reverse string ----------------------
// let str = "hello"
// let str2 = ''
// for(let i = str.length-1 ; i>=0 ;i--){
//     str2 += str.charAt(i )
// }
// console.log(str2);





//====================================================
//---------check the string pallindrom or not -------- 

// let str = "mom"
// let str2 = ''
//first way
// for(let i = str.length-1 ; i>=0 ;i--){
//     str2 += str.charAt(i)
// }
// if(str === str2)console.log("pallindrom string");
// else console.log("not pallindrom string");


// second way 
// let i = 0 
// let j = str.length-1
// let ispall = true
// while(i<j){
//     if(str.charAt(i)!==str.charAt(j)){
//         ispall = false
//         break
//     }   
//     i++
//     j--    
// }
// if(ispall)console.log("pallindrom");
// else console.log("not pallindrome");




//====================================================
//count vowels and consonant space and Numbers -------

// let str = "hello world 12334"
// let countVowels = 0
// let countConsonant = 0
// let countSpace = 0
// let countNumber = 0
// for(let i = 0 ; i<str.length ; i++){
//    let char = str.charAt(i)
//    if(char === "a"|| char === "e" || char ==="i" || char==="o" || char==="u")countVowels++
//    else if(char===" ")countSpace++
//    else if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)countNumber++
//    else countConsonant++

// }

// console.log(`vowels count ${countVowels}, and space count ${countSpace}, and consonant count ${countConsonant} and count Number ${countNumber}`);



//=====================================================
//-------------- togle the charactor ------------------ 
// 
// let str =  "hanSrAj"
// let result =  ''
// //first way
// for(let i = 0 ; i<str.length ; i++){
//    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
//       result += str.charAt(i).toLowerCase()
      
//    }
//    if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
//       result += str.charAt(i).toUpperCase()
//    }
// }
// console.log(result);


// Second way
// let str = "AbCd";
// let result = ""
// for(let i =0 ; i<str.length ; i++){
//    if(str.charAt(i) === str.charAt(i).toUpperCase()){
//          result += str.charAt(i).toLowerCase() 
//    }
//    else{
//       result += str.charAt(i).toUpperCase()
//    }
// }
// console.log(result)

// Third way
// let str = prompt("Enter the String :- ");
// let newString = ''

// for(let i = 0 ; i<str.length ; i++){
//     let ascii = str.charCodeAt(i) 
//     if(ascii>=65 && ascii<=96){
//         newString += String.fromCharCode(ascii+32)
//     }else{
//         newString += String.fromCharCode(ascii-32)
//     }
// }

// console.log(newString);





//========================================================
//------count the valid words ------------------

// let words = ["pay" , "attre","practice", "attend"]
// let pref = "at"
// let count = 0
// for(let i = 0 ; i<words.length ; i++){
//    if(words[i].startsWith(pref))count++
// }
// console.log(count);





//=====================================================
//
// let sentence = "hello bhai kaise ho"
// let arr = sentence.split(" ")
// for(let i = 0 ; i<arr.length ; i++){
//    console.log(arr[i].charAt(0).toUpperCase()+arr[i].substring(1));
// }



//====================================================
//-----------count the frequency ---------------------

// let str = "hello"
// let arr = new Array(26).fill(0)
// for(let i = 0 ; i<str.length ; i++){
//     let ascii = str.charCodeAt(i)
//     arr[ascii-97]++
// }

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i+97)+" "+arr[i]);
//     }
// }




//=====================================================
// --------------check Anagrams -----------------------

// let str1 = "taste"
// let str2 = "state"

// let arr = new Array(26).fill(0)


// if(str1.length !== str2.length){
//    console.log("not a Anagrams");
   
// }else{
//    for (let i = 0; i < str1.length; i++) {
//       let ascii1 = str1.charCodeAt(i)
//       let ascii2 = str2.charCodeAt(i)

//       arr[ascii1 - 97]++
//       arr[ascii2 - 97]--
      
//    }
//    let isAnagram = true
//    for(let i = 0 ; i<arr.length ; i++){
//       if(arr[i]>0){
//          isAnagram = false
//          break
//       }
//    }

//    if(isAnagram) console.log("given string is anagram");
//    else console.log("given string is not a anagram");
   
   
// }


//===================================================
// rout containing 4 direction (E,W,N,S)------
// let str = "WNEENESENNN"
// let x = 0
// let y = 0

// for(let i = 0 ; i<str.length ; i++){
//    let char = str.charAt(i)
//    if(char === "N")y++
//    else if(char === "S") y--
//    else if(char === "W") x--
//    else x++
// }

// let x2 = x*x
// let y2 = y*y

// console.log(Math.sqrt(x2+y2));


//===================================================
// -------------- print sub string ------------------

// let str = "hansraj"
// first way by using predefine method
// console.log(str.substring(0,5));

// second way without predifine method
// let k = 5
// let str2 = ""
// for(let i = 0 ; i<k ;i++){
//    str2 += str.charAt(i)
// }

// console.log(str2);


//====================================================
//check string and string of new keyword is same 

// let str1 = "Tony"
// let str2 = "Tony"

// let str3 = new String("Tony")

// if(str1 === str2)console.log("given string is same ");
// else console.log("given string is not same");

// if(str1===str3)console.log("given string is same ");
// else console.log("given string is not same");

// if(str1.localeCompare(str3)) console.log("same ");
// else console.log("not same");

// if(Object.is(str1,str3)) console.log("same");
// else console.log("not same");










//==========================================================

 










//===============================================================
//===============================================================
//===============================================================
//
// function fun(){
//     console.log(arguments);
//     console.log(this);
    
// }
// fun(10,23,45,67)


// const arrowfun = ()=>{
//     console.log(this);
    
// }
// arrowfun()