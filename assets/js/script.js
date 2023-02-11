"use strict";

// function getCount(num) {
//     console.log(num);
//     let number = num - 1;
//     if(num>0){
//         getCount(num-1);
//     }
// }
// getCount(4);

// function getSumOfNumbers(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         sum+=i;
//     }
//     console.log(sum);
// }
// getSumOfNumbers(4);

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach((element, index)=>{
//     console.log(`Index: ${index}, Element: ${element}`);
// });
// console.log(numbers);

// let user1 = {
//     name: "user1",
//     surname: "user1",
//     age: 1
// }

// let user2 = {
//     name: "user2",
//     surname: "user2",
//     age: 2
// }

// let user3 = {
//     name: "user3",
//     surname: "user3",
//     age: 3
// }

// let users = [user1, user2, user3];
// for (const item of users) {
//     for (const key in item) {
//         console.log(key + " / " + item[key]);
//     }
// }

// users.forEach((element, index)=>{
//     for (const key in element) {
//         console.log(key + " / " + item[key]);
//     }
// });

// let nums = [1,2,3,4,5,6,7,8,9,10];
// let result = nums.map(m =>{
//     return m*2;
// });
// console.log(nums);
// console.log(result);

// const checkOdd = num => num % 2 == 1;
// const checkEven = num => num % 2 == 0;
// let nums = [1,2,3,4,5,6,7,8,9,10];
// function sumOfNumbers(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if(callback(item)){
//             sum+=item;
//         }
//     }
//     return sum;
// }
// console.log(sumOfNumbers(nums, checkOdd));
// console.log(sumOfNumbers(nums, checkEven));

// function findFactorial(num) {
//     if(num == 0){
//         return 1;
//     }else{
//         return num * findFactorial(num-1);
//     }
// }
// console.log(findFactorial(1));

// let stu1 = {
//     name: "Musa",
//     surname: "Afandiyev",
//     age: 19
// }

// let stu2 = {
//     name: "stuName",
//     surname: "stuSurname",
//     age: 20
// }

// let stu3 = {
//     name: "Murad",
//     surname: "Ceferov",
//     age: 26
// }

// let stu4 = {
//     name: "Hello",
//     surname: "World",
//     age: 32
// }

// let stu5 = {
//     name: "LastStu",
//     surname: "LastStuSurname",
//     age: 15
// }

// let students = [stu1, stu2, stu3, stu4, stu5];

// function calculateAverage(students) {
//     let res = 0;
//     let count = 0;
//     for (const eachStu of students) {
//         res += eachStu.age;
//         count ++;
//     }
//     return res / count;
    
// }

// console.log(calculateAverage(students));

//#region ClassTask

// let user1 = {
//     name: "Musa",
//     surname: "Afandiyev",
//     age: 19
// }

// let user2 = {
//     name: "stuName",
//     surname: "stuSurname",
//     age: 20
// }

// let user3 = {
//     name: "Murad",
//     surname: "Ceferov",
//     age: 26
// }

// let user4 = {
//     name: "Hello",
//     surname: "World",
//     age: 32
// }

// let user5 = {
//     name: "LastStu",
//     surname: "LastStuSurname",
//     age: 15
// }

// let users = [user1, user2, user3, user4, user5];

// const checkAge = num => num.age >= 20;

// function getData(users, calback) {
//     for (const item of users) {
//         if (calback(item)) {
//             let newAge = new Date().getFullYear() - item.age;
//             console.log(`${newAge} ${item.name} ${item.surname}`);
//         }
//     }
// }

// getData(users, checkAge);

//#endregion



