const rBody = document.body;
// rBody.append("Hay");
const divM = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
const spanFine = document.querySelector("#fine");
const spanClass = document.querySelector("#playClass");

console.log(spanHi.getAttribute("id"));
console.log(spanHi.getAttribute("title"));
// or
console.log(spanHi.id);
console.log(spanHi.title);

// set the id or title name

console.log(spanHi.setAttribute("id", "newId"));
console.log(spanHi.setAttribute("title", "newTitle"));

// or set the id or title name like
console.log((spanHi.id = "new1Id"));

// remove attributes
spanHi.removeAttribute("title");

// data attributes
console.log(spanFine.dataset);

// try to understand this line
//  js internally converts the camel case naming convention for data-kux-Bhi-dal-etc
console.log(spanFine.dataset.koboKolHoHp);

// setting new properties
spanFine.dataset.newSetName = "newHi";

// add new class name in span element
spanClass.classList.add("new-class-name");

// remove class name in span element
spanClass.classList.remove("hi1");

// toggle it will remove class name if exists already or add if not exist
spanClass.classList.toggle("hi2");
spanClass.classList.toggle("hi3");

/*  also along with toggle we can pass boolean parameter which: 
 true:  automatically add class
 false:  automatically remove class
*/

spanClass.classList.toggle("hi3", true);

// style
spanHi.style.color = "blue";
spanBye.style.backgroundColor = "red";
// background-color = backgroundColor
