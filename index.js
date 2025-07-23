// function test1(a,b){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
// }
// test1(1,2);

// //
// let sum3=(a,b)=>a+b;
// console.log(sum3(1,2));



// let a=10;
// let name="Praphul";
// function test(){
//     let x=20;
//     a=123;
//     console.log('a is', a);
//     console.log('name is', name);
//     console.log('x is', x);
// }
// console.log(a)
// test();

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(index=0;index<arr.length;index++){
//         console.log(arr[index]);
//     }

// let index=0;
// while(index<arr.length){
//     console.log(arr[index]);
//     index++;
// }
// for(let index of arr){
//     console.log(index);
// }
// objects
// let student={
//     name:"Praphul",
//     age:19,
//     roll:16,
//     subjects:["CSE","MATHS","PHYSICS"],
//     address:{
//         city:"Hyderabad",
//         state:"Telangana",
//         country:"India"
//     }
// }
// console.log(student.subjects)
// console.log(student.address.city);
// for(let info in student){
//     console.log(student[info]);
// }
// console.log('student name: ',student.name);
// console.log('AGE: ',student.age);
// console.log('ROLLNUMBER: ',student.roll);
// console.log('sub-1: ',student.subjects[0]);
// console.log('sub-2: ',student.subjects[1]);
// console.log('sub-3: ',student.subjects[2]);
// let product={
//     pid:16,
//     name:"camera",
//     price: 100000,
//     company:"Sony", 
//     manufacturer:"Sony India Pvt Ltd",
//     address:{
//         city:"Hyderabad",
//         state:"Telangana",
//         country:"India"
//     },
//     getproductname: function(){
//         console.log(this.company );
//     }
// }
// product.getproductname();
let marks=[20,30,40];
// for (let element of marks) {
//     console.log(element);
// }
//insertion
let l1=marks.unshift(50,60,70,80)
console.log(marks,l1);