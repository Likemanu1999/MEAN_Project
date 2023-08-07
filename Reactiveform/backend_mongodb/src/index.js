// let array = [1,2,1,3,9,5,1,2,7,9,0,3,6,9,8]
//  function countfrequncy(array){
//     let frequency = new Map();
//     for(let element of array){
//         if(frequency.has(element)){
//             frequency.set(element,
//                 frequency.get(element)+1);
//         }else{
//             frequency.set(element,1)
//         }
//     }
//     return frequency
//  }
//  let freq = countfrequncy(array);
//  for(let [element , frequency] of freq){
//     console.log(`${element}: ${frequency}`)
//  }

//  const users = [{    id: 1,    salary: 50000,    name: "A"  },
//   {    id: 2,    salary: 60000,    name: "B"  },
//   {    id: 3,    salary: 45000,    name: "C"  },
//   {    id: 4,    salary: 50000,    name: "D"  },
//   {    id: 5,   salary: 45000,    name: "E"  },
//   {    id: 6,    salary: 60000,    name: "F"  },
//   {    id: 7,    salary: 50000,    name: "G"  }]

// function higestsecondsalary(users){  
//     let data = users.map(user =>  user.salary)
//     let uniquesSalary = new Set(data );
//     let sortSalary = [...uniquesSalary].sort((a,b)=>b-a);
//     if(sortSalary.length<2){
//         // return null
//     }
//     let secondHigest= sortSalary[1];
//     return users.find(users=>users.salary===secondHigest);   
// }
// let empwithsecondsalry = higestsecondsalary(users);
// console.log(empwithsecondsalry)


// let flag=false;
// setTimeout(()=>{
//     flag=true;
//     console.log('hi')
// },100);
// while(flag){
//     console.log(flag);
// }
// console.log('finish---------------------')