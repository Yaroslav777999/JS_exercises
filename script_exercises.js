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


// let result = 0;

//     for (let i = 0; i < 100; i++) {
//         result += i;
//         console.log('Нам нужно число ' + i);

//         if (result > 100) {
//             console.log(result);
//             break
//         }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	let result;

// 	if (elem % 2 === 0) {
// 		result = elem * elem;
// 		console.log(result);

// 	} else if (elem % 3 === 0) {
// 		result = elem * elem * elem;
// 		console.log(result);

// 	}
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;

// for (let elem of arr) {
//     if (elem == 'c') {
//         flag = true
//         break
//     }
// }
// if (flag == true) {
//     console.log('Да')
// } else {
//     console.log('Нет')
// }

// let num = 3.53;
// let flag = true;

// for (let i = 2; i < num; i++) {
//     if(num % i === 0) {
//         flag == false;
//         break
//     }
// }
// console.log(flag)

// let num = 20;

// while (num <= 1000) {
//     num = num * 3
// }
// console.log(num)


// for (var num = 11, i = 0; num < 1000; num=num*3, i++);
//     console.log(num, i);

// let str = "";
// for (let i = 0; i < 5; i++) {
//    str+="0";

// }
// console.log(str)

// let str = "";
// for (let i = 1; i < 5; i++) {
//    str+=i;

// }
// console.log(str)

// let str = '';
// for (let i = 9; i > 0; i--) {
//     str+=i;

// }
// console.log(str)

// let str = "";
// for (let i = 1; i <= 9; i++) {
//     str+=-i;
// }
// console.log(str+'-')


// for (let i = 10; i <= 1000; i++) {
// let str = String(i);
// if ((+str[0] + +str[1]) === 5){
//     console.log(i)
// } 

// }

// let result = "";
// for (let i = 1; i < 30; i++) {
//     result += i;
// }
// console.log(result)

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++)
//     document.write(i)
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i,j+' ')
//     }
// }

// let arr = [];
// for(let i = 0; i < 100; i++) {
//     arr[i] = i + 1; 
// }
// console.log(arr)

// let arr = [];
// for (let i = 1, j = 0; i <= 99; i+=2, j++) {
//     arr[j] = i;
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i] * arr[i]

// }
// console.log(arr)

// let arr = [1, 3, 9, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] -= 1;
// }
// console.log(arr)

// let arr = [1, 3, 9, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// arr[i] += 10;

// }
// console.log(arr)
// let arr = [];
// arr.push(1)
// arr.push(2)
// console.log(arr)

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr)

// let arr = [];
// let str = 'x';
// for (let i = 1; i <= 10; i++) {
//     arr.push(str)
// }
// console.log(arr)

// let arr = [-1, -2, 3, 4, 5];
// let newArr = [];
// for (let elem of arr) {
//     if (elem > 0) {
//         newArr.push(elem)
//     }
// } 
// console.log(newArr)

// let arr = [-1, -2, 3, 4, 5];
// arr.reverse()
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = [];

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		result.push(elem);
// 	}
// }

// console.log(result);

// let obj = {};
// obj['понедельник'] = 1;
// obj['вторник'] = 2;
// console.log(obj)

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};

// for (let i = 0; i < 7; i++) {
//     obj[arr2[i]] = arr1[i];
// }
// console.log(obj)

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// let newObj = {};


// for (let key in obj) {
//     if (obj[key] > 10 & obj[key] < 20) {
//         newObj[key] = obj[key]
//     }
// }
// console.log(newObj)

// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};

// let uncWeek = {};

// for (let key in obj) {
//     if (key % 2 == 1) {
//         uncWeek[key] = obj[key];
//     }
// }
// console.log(uncWeek)

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// for (let key in obj) {
//     obj[key] *= obj[key]
// }
// console.log(obj)

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let newObj = {};
// for (let key in obj) {
// newObj[obj[key]] = key
// }
// console.log(newObj)

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for (let key in obj) {
// obj[key] = (obj[key]*1.10)/100
// }


// console.log(obj)
// let obj = {
//     	employee1: 100,
//     	employee2: 200,
//     	employee3: 300,
//     	employee4: 400,
//     	employee5: 500,
//     	employee6: 600,
//     	employee7: 700,
//     };

//     for (let key in obj) {
//         if (obj[key] <= 400) {
//             obj[key] = (obj[key]*1.1)
//         }
//          }
//     console.log(obj)

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let arr3 = {};
// for (let i = 0; i < arr1.length; i++) {
//     arr3[arr1[i]] = arr2[i];
// } 
// console.log(arr3)

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let m1 = [];
// let m2 = [];
// for (let key in obj) {
//     m1.push(obj[key]);
//     m2.push(key);
// }
// console.log(m1, m2);

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

// let sumOfKey = 0;
// let sumOfValue = 0;

// for(let key in obj) {
//     sumOfKey += +key;
//     sumOfValue += +obj[key]
// }
// console.log(sumOfKey/sumOfValue);

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr = [];
// for (let key in obj) {
// let num = String(obj[key])
// if(num[0] == 1 || num[1] == 2) {
// arr.push(num)
// console.log(num)
// }

// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
// let arr2 = i+1
//     obj[arr2]= arr[i]
// }
// console.log(obj)


// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]]= i+1
// }
// console.log(obj)

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

// let counter1 = 0;
// let counter2 = 0;

// for (let elem of arr) {
//     if (elem == 3) {
//         counter1++ 
//     }
//     if (elem == 2) {
//         counter2++ 
//     }

// }
//  console.log(counter1, counter2)

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = {};

// for (let elem of arr) {
//    if (elem[elem] == elem) {
//        count++
//    }
//    console.log(count)
// }
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i+1])
// }

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + arr[i + 1])
//    }

// //    Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 2; i < arr.length; i++) {
//     console.log(arr[i-2], arr[i-1])
// }

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 2; i < arr.length; i++) {
//     console.log(arr[i]+arr[i-2] + arr[i-1])
// }

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 2; i < arr.length; i++) {
//     console.log(arr[i]+arr[i-2] + arr[i-1])
// }

// Фибоначчи 
// let one = 0;
// let two = 1;

// for (let i = 0; i < 10; i++) {
// let current = one + two;
// one = two;
// two = current;
// console.log(current)
// }
// Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.
// let one = 0;
// let two = 1;
// let three = 2;

// for (let i = 0; i < 10; i++) {
//     let current = one + two + three;
// one = two;
// two = three;
// three = current;
// console.log(current)
// }

// Выведите на экран следующую пирамидку:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

// let str = "";
// for(let i = 0; i < 5; i++) {
//     str += "xx";
//     console.log(str)
// }

// Давайте теперь выведем на экран следующую пирамидку:
// 111
// 222
// 333
// 444
// 555
// 666
// 777
// 888
// 999

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i)
//     }
//     document.write(`<br>`)
// }

// Выведите на экран следующую пирамидку:
// 1
// 333
// 55555
// 7777777
// 999999999

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= i; j++) {
//         if (i % 2 == 1)
// 		document.write(i);
// 	}
// 	if (i % 2 == 0)
// 	document.write('<br>');
// }

// Выведите на экран следующую пирамидку:

// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

// for (let i = 5; i >= 1; i--) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += 'x' ;
//     }
//     document.write(str + '<br>');
// }

// Выведите на экран следующую пирамидку:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

// for (let i = 9; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write(i)
//     }
//     document.write( '<br>');
// }


// С помощью цикла сформируйте следующий массив:

// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

// let arr = [];
// let str = '';

// for(let i = 0; i < 5; i++) {
//     str += "x";
//     arr.push(str)
// }
// console.log(arr)

// в первый элемент запишем '1', во второй '22', в третий '333' и так далее.

// let arr = [];

// for (let i = 1; i < 10; i++) {
// 	let str = '';

// 	for (let j = 0; j < i; j++) {
// 		str += i;
// 	}

// 	arr.push(str);
// }

// console.log(arr);

// С помощью цикла сформируйте следующий массив:

// ['11111', '22222', '33333', '44444', '55555']

// let arr = [];
// for (let i = 1; i <= 5; i++) {
// let str = '';
// for (let j = 0; j <= 5; j++) {
//     str += i;
// }
// arr.push(str)
// }
// console.log(arr)

// Выведите с помощью цикла столбец чисел от 1 до 100.

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

// Выведите с помощью цикла столбец чисел от 100 до 1.
// for (let i = 100; i >= 1; i--) {
//     console.log(i)
// }

// Выведите с помощью цикла столбец четных чисел от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// Заполните массив 10-ю иксами с помощью цикла.
// let arr = [];
// let str = '';
// for (let i = 0; i <= 10; i++) {
// str += 'x';
// }
// arr.push(str);
// console.log(arr)

// Заполните массив числами от 1 до 10 с помощью цикла.

// let arr = [];
// let str = 0;
// for (let i = 1; i <= 10; i++) {
// str += 1;
// arr.push(str);
// }
// console.log(arr)

// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// let arr = [-1, 0, 2, 6, -6, 12];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// let arr = [-1, 0, 2, 6, 5, -6, 12];
// let flag = false;
// for (let elem of arr) {
//     if (elem === 5) {
//         flag = true;
//     }
// } (flag === true) ? console.log("В массиве есть элемент со значением 5"): console.log("В массиве нет элемента со значением 5")

