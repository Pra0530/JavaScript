// let users=[
//     {
//         name: "Praphul",
//         age: 21,
//     },
//     {
//         name: "Ragampeta",
//         age: 22,
//     },
//     {
//         name: "VNR",
//         age: 23,
//     }
// ]
// // for (let userobj of users){
// //     console.log(userobj)
// // }
// // inserting an element at the beginning of the array
// // let l1=users.unshift({name: "New User", age: 24});
// // console.log(users,l1);
// users.splice(1,1,{name:'sathish', age: 25});
// console.log(users);
let user=[
    {
        name: "Praphul",
        age: 21,
    },
    {
        name: "Ragampeta",
        age: 16,
    },
    {
        name: "VNR",
        age: 18,
    }
]
let l1=user.filter(userobj=> userobj.age <19);
console.log(l1);