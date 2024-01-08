// Coding challenge #1: Print numbers from 1 to 10

for(let i=1;i<=10;i++)
{
    // console.log(i);
}

// Coding challenge #2: Print the odd numbers less than 100

for(let i=1;i<100;i++)
{
     if(i%2!=0){
        // console.log(i);
     }   

}

// Coding challenge #3: Print the multiplication table with 7
for(let i=1;i<=10;i++){
    // console.log(i*7);
}


// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for(let i=1;i<=10;i++){
   for(let j=1;j<11;j++){
    // console.log(i*j);
   }
//    console.log(" ")
}


// Coding challenge #5: Calculate the sum of numbers from 1 to 10

let sum=0;
for (i=1;i<=10;i++){
   sum=sum+i;
}
// console.log(sum);


// Coding challenge #6: Calculate 10! factorial

let factorial=1;
for(let i=1;i<=10;i++){
    factorial=factorial*i;
}
// console.log(factorial);


// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
let add=0;
for(let i=10;i<=30;i++){
    
    if(i%2!=0){
        add=add+i;
    }
}
// console.log(add);


// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celsius_to_fahrenheit(C) {
   let farehnite= ((9/5) * C) + 32.
    // console.log(farehnite);
}
celsius_to_fahrenheit(10.00);


// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function fahrenheit_to_celcuis(F) {
    let celsius= ((F-32)*(5/9)) 
    //   console.log(celsius);
 }
 fahrenheit_to_celcuis(50);


//  Coding challenge #10: Calculate the sum of numbers in an array of numbers

let temp_array=[2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum_arr=0;
for(let i=0;i<temp_array.length;i++){
    sum_arr=sum_arr+temp_array[i];
}
// console.log(sum_arr);


// Coding challenge #11: Calculate the average of the numbers in an array of numbers
let avg_array=[1, 3, 9, 15, 90];
let sum_avg=0
for(let i=0;i<avg_array.length;i++){
    sum_avg=sum_avg+avg_array[i];
}
// console.log(sum_avg/(avg_array.length));


// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
for(let i=0;i<=ar.length;i++){
    if(ar[i]>0){
        // console.log(ar[i]);
    }
}


// Coding challenge #13: Find the maximum number in an array of numbers

let arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max=arr1[0];
for (let index = 1; index < arr1.length; index++) {
    
     if(max<arr1[index]){
        max=arr1[index]
     }   
}
// console.log(max);


// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

let f0=1,f1=0;
let fn=0;
while(fn<10){
    // console.log(fn);
    fn=f0+f1;
    f1=f0;
    f0=fn;
    

}

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n = findFibonacci(10);
// console.log(n);


// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
function prime_no(n) {
    if(n==0||n==1){
        return "not prime number"
    }
    if(n==2){
        return "prime number"
    }
    if(n%2!=0){
        return "prime number"
    }else{
        return "not prime number"
    }
}
// console.log(prime_no(13));


// Coding challenge #17: Calculate the sum of digits of a positive integer number

let digit =1235231;
let digit_to_Str=digit.toString();
let sum_digit=0;
for(let char of digit_to_Str){
    sum_digit=sum_digit+parseInt(char)
}
// console.log(sum_digit);

// Coding challenge #18: Print the first 100 prime numbers
function isPrime(n){
    //since 0 and 1 is not prime return false.
    if(n==1||n==0) return false;

  //Run a loop from 2 to n-1
  for(let i=2; i<=n/2; i++){
      // if the number is divisible by i, then n is not a prime number.
      if(n%i==0)return false;
  }
  //otherwise, n is prime number.
  return true;
}

for(let i=1; i<=100; i++){
    //check if current number is prime
    if(isPrime(i)) {
    //   console.log(i);
    }
}


// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function isPrime_charAt(count,start) {
    let ar = [];
    
    let i = start;
    
    while(ar.length < count)
    {
        if (isPrime(i))
        {
            ar.push(i);
        }
        
        i++;
    }
    
    return ar;
    
}
// console.log(isPrime_charAt(10,200));


// Coding challenge #20: Rotate an array to the left 1 position

let arr=[1,2,3];
let temp=arr[0];
for (let index = 1,i=0; index < arr.length; index++,i++) {
    arr[i]=arr[index]; 
     
}
 let last=arr.length
// console.log(last);
 arr[last-1]=temp;

for (let index = 0; index < arr.length; index++) {
//    console.log(arr[index]);
    
}

// Coding challenge #21: Rotate an array to the right 1 position
right_arr=[1,2,3];
let last_pos = right_arr.pop();
right_arr.unshift(last_pos);
// console.log(right_arr);

// Coding challenge #22: Reverse an array

let rev_ar = [1, 2, 3];
rev_ar2=new Array();
for(i=rev_ar.length-1;i>=0;i--){
    rev_ar2.push(rev_ar[i])
}
// console.log(rev_ar2);


// Coding challenge #23: Reverse a string

let s = "NutanBhoyar";
let s2 = "";
    
    for(let i = s.length - 1; i >= 0; i--)
    {
        let char = s[i];
        s2=s2+ char;
    }
    
    // console.log(s2);

// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

let arra1=[1,2,5,6,7];
let arr2=[8,1,3,0];
let arr3=new Array();
arr3=arr1.concat(arr2);
// console.log(arr3);

// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
let arr_merge=[];
for (let el of arra1) {
   if (!arr2.includes(el)) {
    arr_merge.push(el);
   }
}
   for (let el of arr2) {
    if (!arra1.includes(el)) {
       arr_merge.push(el);
    }
    
}
// console.log(arr_merge);

// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];
let arr_new=[];
for (let el of ar1) {
    if (!ar2.includes(el)) {
        arr_new.push(el)
    }
}
// console.log(arr_new);

// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements


let distinct_arr=[1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
let new_distinct=[];
let num=6;

function isInArray(arr,num){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]===num){
            return true;
        }else{
            return false;
        }
        
    }

}
for (let index = 0; index < distinct_arr.length; index++) {
    const element = distinct_arr[index];
    if(!isInArray(new_distinct,element)){
     new_distinct.push(element);
    }
}

console.log(new_distinct);



