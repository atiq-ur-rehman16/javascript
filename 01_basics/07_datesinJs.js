//Dates

let myDate = Date();
// console.log(myDate.toString());
// const meDate = new Date();
// console.log(meDate.toDateString());
// console.log(meDate.toISOString());
// console.log(meDate.toJSON());
// console.log(meDate.toLocaleDateString());
// console.log(meDate.toLocaleTimeString());
// console.log(meDate.toLocaleString());
// console.log(typeof meDate);


// let myCreatedDate = new Date(2025 , 11 , 30);
// let myCreatedDate = new Date(2025 , 11 , 30 , 5 , 30);
// let myCreatedDate = new Date("2025-12-30");
let myCreatedDate = new Date("12-30-2025");

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());


newDate.toLocaleString('defalt', {
  weekday: 'long',
});