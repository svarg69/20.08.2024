let pal = 'А роза упала на лапу Азора';
let pal2 = 'Bdfy';


// let array1 = [1, 2, 3, 4, 5];
// let array2 = array1;

// array1[25] = 10;

// for (const item of array2) {
//     console.log(item);
// }


// 
// или реплейсАлл/ в сплите пустая строка говорит нарезать по одному знаку
// оператор три точки -спред, позволяет слева направо циклом возвращать значения элементов и копировать а не ссылкой целиком весь массив,
// а потом метод реверс.
function checkPal(pal) {
    pal = pal.toLowerCase();
    while (pal.indexOf(' ') != -1){
        pal = pal.replace(' ', '');
    }

    pal = pal.split('');  
    // pal = pal.reverse();

    let revPal = [...pal].reverse();
    // или let revPal = [...pal].reverse().toString();

    return pal.toString == revPal.toString ? true : false;

    // console.log(pal);
    // console.log(revPal); ретерн сразу отрубает консольлоги, после него неработает ничо

    // мы сразу применяем в ретёрне метод ту стринг так как массивы сравниваются по ссылке, а нам надо по значению.

    // ту стринг не трогает исходные данные, делает "копию"
    
}

console.log (checkPal(pal));
console.log (checkPal(pal2));



let profile = {
    name: 'Alex',
    age: 25
};

profile[0] = 'Ivan';
// profile.name = 'Oleg'
let profile2 = {...profile};
profile2.name = 'Lex';
console.log(profile);
console.log(profile2);
console.log(profile == profile2);