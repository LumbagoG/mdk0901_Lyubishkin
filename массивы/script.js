// 11
// function countIdentic(arr) {
//     let count = [];
//     arr.sort();
//     for(let el = 0; el < arr.length-1; el++) {if(arr[el] == arr[el+1]) if(count.indexOf(arr[el]) == -1) count.push(arr[el]);}
//     console.log(count.length);
// }console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]));


// 12
// let arr1 = [1, [2,[3,[4]]]];
// let arr2 = [1, [2], [3, [[4]]],[5,6]];
// function expand(arr) {
//     let i = 0;
//     while(i < arr.length) {
//         arr = arr.reduce(function(a, b) {
//             return a.concat(b);
//         },[]);i++;
//     }console.log(arr);
// }console.log(expand(arr1), expand(arr2))


// 13
// let array1 = [5, 2, 1, -10, 8];
// let array2 = [5, 2, 1, -9, 3, 7]; 
// let union = function(array1, array2) {
//     let array3 = [];
//     array1.concat(array2).forEach(element => {
//         if(array3.indexOf(element) == -1) array3.push(element);
//     });return array3;
// }
// console.log(union(array1, array2));


// 14
// let arr1 = [1, 2, 'a'];
// let arr2 = [1, 2, 3, 4, 'b'];  
// function arrayDiff(arr1, arr2) {
//     let array3 = [];
//     arr1.forEach((item) => {
//         if(!(arr2.includes(item))) array3.push(item)
//     });
//     arr2.forEach((item) => {
//         if(!(arr1.includes(item))) array3.push(item)
//     });console.log(array3);
// }console.log(arrayDiff(arr1, arr2));



// 15
// let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  
// function compareNumbers(arr){console.log(arr.sort((a,b) => a-b));}
// console.log(compareNumbers(numbers));
 

// 16
// let arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];  
// let set = {};
// arr.forEach((item) => {
//     set[item] = set[item] > 0 ? set[item] + 1 : 1;
// });
// let res = Object.entries(set).sort((a,b) => b[1] - a[1]);
// console.log(`${res[0][0]} повторяется ${res[0][1]} раз`);


// 17
// function sumOfSquares(arr) { 
//     return arr.reduce(function (prev, now) {
//         return prev + now * now;
//     })-arr[0]+Math.pow(arr[0],2);
// }console.log(sumOfSquares([1, 2, 3, 4, 5]));


// 18
// let arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];
// let sum = 0;
// let multiply = 1;
// arr.forEach(item => {
//     sum+=item;
//     multiply*=item;
// });
// console.log("Сумма : "+sum + "\nПроизведение : " + multiply);


// 19
// array = [NaN, 0, 77, false, -17, '',undefined, 99, null];
// function filterFalse(arr) {
//     return arr.filter(Boolean);
// }console.log(filterFalse(array));


//20
// let litmir = [ 
//     { author: 'Хэленка', title: 'Улетела сказка'},
//     { author: 'Коул Кресли', title: 'Восстание Аркан'},
//     { author: 'Райчел Мид', title: 'Золотая лилия'}];
// function sortByTitle(arr) {
//     return arr.sort((a, b) => a.title > b.title ? 1 : -1);
// }sortByTitle(litmir);
// for (let i in arr) {console.log(arr[i].title); }


//21
// let num = 5;
// let arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
// function findCouple(array, number) {
//     let mass = {};
//     let result = array.map((elem) => number - elem);
//     array.forEach((elem, i) => {
//         if (result.indexOf(elem) > -1 && !mass[elem]) {
//             mass[elem] = mass[result[i]] = true;
//             console.log(`Ваша пара чисел: ${result[i]} + ${elem}`);}});
// }console.log(findCouple(arr, num));


//22
// let litmir = [ 
//     { author: 'Хэленка', title: 'Улетела сказка'},
//     { author: 'Коул Кресли', title: 'Восстание Аркан'},
//     { author: 'Райчел Мид', title: 'Золотая лилия'}];
// function propertyValue(array, key) {
//     return array.reduce((acc, curr) => acc.concat(curr[key]), [])
// }console.log(propertyValue(litmir, 'author'));


//23
//Программа выводит не только начальную подстроку но и остальную повторяющую ее часть
// let arr = ['Капуста','Капитал'];
// function startingSubstring(inStr, cStr) {
//     let result = inStr.split('').filter(function(letter) {
//         return (cStr.indexOf(letter) > -1);
//     });return result;
// } 
// for (i = 0; i < (arr.length-1); i++) {
//     result = (i == 0) ? startingSubstring(arr[i], arr[i+1]) : startingSubstring(result.join(''), arr[i+1]);
// }console.log(result.join(''));


//24
// function removeItem(arr, num) {
//     for(let i = arr.length - 1; i >= 0; i--) {if(arr[i] === num) arr.splice(i, 1);}
//     console.log(arr);
// }console.log(removeItem([3, 5, 7, 8, 5], 5));


//25
// function randomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }console.log(randomElement([24, 45, 22, 35, 43]));


//26
// function arrayFilled(len, value) {
//     let mass = [];
//     for (let i = 0; i <= len; i++){
//         mass.push(value);
//     }return mass;
// }console.log(arrayFilled(4, 12));


//27
// function moveElement(arr, from, to) {
//     arr.splice(to, 0, arr.splice(from, 1)[0]);
//     console.log(arr)
// };console.log(moveElement([ 'a', 'b', 'c', 'd', 'e'], 3, 1)); 

// 28
// function generateNumbers(start,len){
//     let array = [];
//     for(let i = start; i < start + len; i++ ){
//         array.push(i);
//     }return array;
// }console.log(generateNumbers(0,5));


// 30
// let vegetables = ['Капуста','Репа','Редиска','Морковка'];
// let vegetablesLength = vegetables.map((currentValue) => {
//     return currentValue.length;
// });console.log(vegetablesLength);


// 31
// let numbers = [2,3,5,7,11,13,17,19];
// let newArray = [];
// var result = numbers.reduce(function(sum, current) {
//     newArray.push(sum);
//     return sum + current;
// }, 0);console.log(newArray);


// 32
// let arr = [0,1,2,3,4,5,6,7];
// function sumSeven(arr){
//     let newArray = [];
//     for(let i = 1; i <= arr.length; i++){
//         if(i > arr.length / 2){break;}
//         newArray.push(`${arr[i-1]}:${arr[arr.length - i]}`); 
//     }
//     return newArray;
// }console.log(sumSeven(arr));


//33
// let str = "Каждый охотник желает знать, где сидит фазан.";
// function getFirstLetter(str){
//     let array = [];
//     str = String(str).split(' ');
//     for(let i = 0; i < str.length; i++){
//         array.push(String(str[i]).charAt(0));
//     }
//     return array;
// }console.log(getFirstLetter(str));


// 34
// let strThree = "JavaScript";
// let arrayThreeSym = [];
// let generateThreeSymbols = Array(strThree).map(function(currentValue,index,array){
//     for(let i = - 1; i < strThree.length - 1; i++){
//         arrayThreeSym.push(currentValue.substring(i, i + 3));
//     }
//     return arrayThreeSym;
// });console.log(generateThreeSymbols);


// 35
// let numberics = [5,7,2,9,3,1,8];
// numberics.sort(function (a, b) {
//     return b - a;
// });console.log(numberics);


// 36
// let a = [1,2,3];
// let b = [4,5,6];
// let c = [7,8,9];
// function getArr(a,b,c){
//     let newArray = [...a, ...b, ...c];
//     newArray.sort(function (a, b) {return b - a;});
//     return newArray;
// }console.log(getArr(a,b,c));


    
    


 


