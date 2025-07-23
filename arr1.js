// let marks=[20,30,40];
// // let l1=marks.unshift(50,60,70,80)
// // console.log(marks,l1);
// // inserting an element at the end of the array
// // marks.push(90);
// // console.log(marks);
// // 
// console.log(marks.length);
// // removing the first element of the array
// let l2=marks.shift();
// console.log(marks,l2);
// // removing the last element of the array                   
// // // marks.pop();
// let marks=[40,50,60,70]   
// let rm1=marks.shift;
// console.log(marks);
// console.log(rm1);      
// let marks = [10,20,30,40,50];
// // inserting an element at the end of the array
// let l1=marks.filter(value=> value > 20
// );
// console.log(marks, l1);
// let marks = [10, 20, 30, 40, 50,60,70,80,90];
// let result = marks.map(element => element+50);
// console.log(result);
let hello = [10, 20, 30, 40, 50];
let hii=hello.map(element => {
    if (element >30 )
        return element+10;
    else
        return element+20;
})
console.log(hii);
