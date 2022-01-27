'use strict';

//     let result = 0;
//   for (let i = 1; i <= 99; i+=2) {

//         result += i;
//   }

//   console.log(result)

// let result = 0;
//   for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         result += i;
//     }
//               }
//       console.log(result)

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= arr[i];
//     result += arr[i];
// }
// console.log(result);

// let arr = [2, 5, 9, -15, 1, -4];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0 ) {
//         result += arr[i]
//           }
//     }
// console.log(result)

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// console.log(result/arr.length)

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
//         console.log(arr[i])
// }
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 5; i > 0 ; i--) {
// console.log(i)
// }

// let arr = [0, 1, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i) {
//         console.log(i)
//     }
// }


// let arr = [0, 1, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(document.write(`${i}<br>`))
// }

// let arr = [0, 1, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//  document.write(`<h2>${i}</h2>`)
// }

//     let weekList = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//     let day = 'Воскресенье'
//     for (let i = 0; i < weekList.length; i++) {
//         if (weekList[i] == day) {
//             document.write(`<p><b>${weekList[i]}</b></p>`)
//     } else {
//         document.write(`<p>${weekList[i]}</p>`)
//     }
// }

//     let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	console.log(elem);
// }


// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let el of arr) {
//     console.log(document.write(`${el}<br>`))
// }

// let arr = [1, 2, 3, 4, 5];
// let sum1 = 0;
// for (let elem of arr) {
//     sum1 += elem;
// }
//   document.write(sum1);

//   let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   for (let el of month) {
//     document.write(`${el} <br>`)
//   }

//   let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   for (let i = 0; i < month.length; i++) {
//     document.write(`${month[i]} <br>`)
//   }

// let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
// let month = 10;

// for (let i = 0; i < months.length; i++){
// if (i == 10){
// document.write('<i>' + months[i] + '</i></br>')
// } else{
// document.write(months[i] + '</br>')
// }
// }

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let sum = 0;
// for (let key in obj) {
// sum += obj[key];
// }
// console.log(sum)

// for (let i = 0, j = 0; i <= 9; i++, j += 2) {
// 	console.log(i, j);
// }

// let arr = [1, 2, 3, -1, 4, 5];
// let sum = 0;
// for (let el of arr) {
//     if (el < 0) {
//         break
//     }
//     sum += el;
// }
// console.log(sum);

// let arr = [1, 2, 3, -1, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] == 3)
//     console.log(i)
// }
let arr = [
1,
2,
3,
4,
5,
6,
7,
8,
9,
10
];

console.log(arr)