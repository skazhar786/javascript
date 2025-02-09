
const myObject = {
    js : "javascript",
    cpp : "c++",
    py : "python"
}

for (const key in myObject) {
    console.log(`${key} is shortform of ${myObject[key]}`);  // (myobject[key]) is used to get the value from the key
  
}

const programing = ["js","py","java","cpp","rb"]

for (const key in programing) {
   console.log(programing[key]);
}