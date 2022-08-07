// console.log("hay dom"); //testing
/* Dom manipulation techniques*/

/* 1. Adding elements to the page*/

const bodySodi = document.body;

/* Basic to add string on screen */
// bodySodi.append(`Hello`, "bye", "guys");
// bodySodi.appendChild(`Hello child`);

/////////////////////////////

/* there are one difference in appendChild and append:
in appendChild() -> you can only append elements like div,span and anchor tags.
in append() -> you can append (concat or add) the string
*/

/* so how to append/add a element using append because in real we are not going to add string?*/
/*  for this first we initialize the elements*/

const divInitialize = document.createElement("div");

/* Adding some text in the  initialized div*/
divInitialize.innerText = "Hello, world! by inner text";
divInitialize.textContent = " Hello, world by text content!";

/* how to run html inside div ?*/
divInitialize.innerHTML = "<strong>Hello, world!</strong>";
/* so by using innerHTML we can render html in Javascript but it is huge security problem because 
if you allow users to put user generated content into your html in this case then can write malicious code.  */

/* then connecting that element to body*/
/* so in this scenario both append and appendChild with work without any error*/
bodySodi.append(divInitialize);
// bodySodi.appendChild(divInitialize);

/* another way to do render html*/
const aStrong = document.createElement("strong");
aStrong.innerHTML = "Hello Strong";
divInitialize.append(aStrong);

///////////////////////////////
/**
 phase: 2
 */
const divStyle = document.querySelector("div");
console.log("textContent", divStyle.textContent);
console.log("innerText", divStyle.innerText);

/*
textContent -> it gives the exact element wrapped data along with indentation and spaces
innerText ->  it gives the exact data which is shown in the shown on screen.
*/
