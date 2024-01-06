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
console.log(sum_digit);

// Coding challenge #18: Print the first 100 prime numbers
let ln=100;
while(ln<100){
    if(ln>2){
        
    }
}