let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());

let newDate = new Date(2005,2,23)
console.log(newDate.toDateString());

let anotherDate = new Date("3-23-2005")
console.log(anotherDate.toDateString());
console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(anotherDate.getTime());        // it is mili-second 
console.log(Math.round(Date.now()/1000)); //convert it into second
