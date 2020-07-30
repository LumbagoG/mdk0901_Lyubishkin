//1
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
//     return arr.slice(0);
// };var arr1 = arrayClone(vegetables);
// arr1.push('Картфофель');
// console.log(arr1);


//2
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let newVegetablesOne = vegetables.join(',');
// let newVegetablesTwo = vegetables.toString();
// console.log(newVegetablesOne);
// console.log(newVegetablesTwo);


//3
// const num = prompt('Введите число', 55);
// function colonOdd (num) {
//     let newNum = '';
//     for (i = 0; i < num.length; i++) {
//         if ((num[i] % 2 !== 0) && (num[i + 1] % 2 !== 0) && (num[i + 1])) newNum += num[i] + ';';
//         else newNum += num[i];
//     }return newNum;
// }console.log(colonOdd(num));


//4
// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
// function changeRegister (str) { 
//     let newNum = str.split('');
//     let newStr = newNum.map(function(item) {
//         if (item == item.toUpperCase()) return item.toLowerCase();
//         else return item.toUpperCase();
//     });return newStr.join('');
// }console.log(changeRegister(str));


//5
// let arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
// function removeDuplicates(arr) {
//     for (item in arr){
//         return arr.filter(function(item) {
//         return arr.hasOwnProperty(item) ? false: (arr[item] = true);});} 
// }console.log(removeDuplicates(arr));


//6
// function chooseYears(start, end) {
//     for (let i = start; i <= end; i++){
//        console.log(new Date(i, 1, 29).getDate() === 29);
//     }
// }console.log(chooseYears(2000,2018));
    

//7
// let array = [0,1,2,3,4,5,6,7,8,9];
// function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = arr.sort(function(i) {
//             return Math.floor(Math.random() * (i + 1));
//         });return j;
//     }return arr;
// }console.log(shuffle(array));


//8
// let array = [1,2,3,4,5,6,7,8,9];
// function getFirst(array, n) {
//     for (let i = array.length - 1; i > 0; i--){
//         for (let i = 0; i <= n; i++) return array[i];
//     }
// };console.log(getFirst(array, 4));







