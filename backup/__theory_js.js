// // integer . float = 정수와 소수점
// // 아무것도 하지 않아도 자동적으로 숫자를 이해함
// // 하지만, str은 따옴표가 필요함

// const x = 3;
// const y = 8;
// let myName ="jwson";
// const amIFat = true;
// let somthing;
// const whatDay = ['mon', 'tue','wed', 'thu', 'fri','sat','sun']
// const gaming = {player : 'jwson', game : 'starcraft'};
// // const amIFat = flase; js = null / py = none

// // const = 변하지 않는 상수, let은 변할 수 있는 변수 , 예전에 사용하던건 var

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(myName);
// console.log(amIFat);
// console.log(somthing);
// console.log(amIFat, somthing, x*y, myName);
// console.log(whatDay);
// console.log(whatDay[1]);

// whatDay.push('happy')
// console.log(whatDay);
// console.log(gaming);
// gaming.player = ['semi','jwson'];
// gaming.player.push('jwsemi')
// gaming.player2 = 'semi';
// console.log(gaming);

// function hello(person, age) {
//     console.log("Hello! " + person +' '+age)
// }

// hello('jwson', 24 );

// // alert()는 관리자가 미리 정해놓은 하나의 function임, 

// const player = {
//     name : 'jwson',
//     sayHello: function(person, age){
//         console.log("Hello! " + person +' '+age)
//     }
// }

// console.log(player.sayHello('jwson',25));

// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// // const krAge = calculateKrAge(age);

// // console.log(krAge);

// const result = calculateKrAge(36)

// console.log(result);

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);

var age = parseInt(prompt("age?"));

console.log(isNaN(age));

if(isNaN(age)){
    console.log("please write number")    
}else if(age<18){
    console.log("fuck you")
}else if(age>=18 && age<=50){
    console.log("let's drink")
}else{
    console.log("you can drink")
}




// if (age === NaN;){
//     return  parseInt(prompt("MODE?"));}


// if (MODE === 'READ'){
//     console.log('READ모드입니다')
// }else if(MODE === 'HAPPY'){
//     console.log('HAPPY모드입니다')
// }
// read