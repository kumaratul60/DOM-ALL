function changeColor(element) {
  element.style.backgroundColor = "#333";
}

/*
const grandparent = document.getElementById("grandparent-id");
 grandparent.style.backgroundColor = "#333";
changeColor(grandparent);
*/

/*
const parents = Array.from(document.getElementsByClassName("parent"));
// getElementsByClassName() returns elements a collection, so convert it to an array, Array.from() contains forEach ()
parents.forEach(changeColor);

*/

/*
const grandparent = document.querySelector("#grandparent-id");
//  querySelector -> it means i want to select one element
changeColor(grandparent);
*/

/*
const grandparent = document.querySelector(".grandparent");
changeColor(grandparent);
*/

/*
 const parent = document.querySelector(".parent");
changeColor(parent);
// querySelector  select one single element which one first it finds
*/

/*
// if we want to change the color of all the selector so use querySelectorAll()
const parents = document.querySelectorAll(".parent");
parents.forEach(changeColor);
*/

/*
const grandparent = document.querySelector(".grandparent");
const parents = Array.from(grandparent.children)
parents.forEach(changeColor)
*/

/*
const grandparent = document.querySelector(".grandparent");
const parents = Array.from(grandparent.children);
const parentOne = parents[0];
const children = parentOne.children;
changeColor(children[0]);
*/

/*
const grandparent = document.querySelector(".grandparent");
const childOne = grandparent.querySelector(".child");
changeColor(childOne);
*/

/*
// Navigating from grandparent to children
const grandparent = document.querySelector(".grandparent");
const children = grandparent.querySelectorAll(".child");
children.forEach(changeColor);
*/

/*

const childTwo = document.querySelector("#child-two");
changeColor(childTwo);

*/

/*
// start with child and go to grandparent
const childTwo = document.querySelector("#child-two");
const parent = childTwo.parentElement;
changeColor(parent);
*/

/*
// start with child and go to grandparent
const childTwo = document.querySelector("#child-two");
const parent = childTwo.parentElement;
const grandparent = parent.parentElement;
changeColor(grandparent);
*/

/*
// How to skip parent
const childTwo = document.querySelector("#child-two");
 const grandparent = childTwo.closest('.grandparent');
changeColor(grandparent);
*/

/*
//  Moving side-to-side or select sibling elements
//  note: nextElementSibling will give always next element while nextElement will give next node 
// same parentElement vs parent node
 const childTwo = document.querySelector("#child-two");
 const childSib = childTwo.nextElementSibling
 changeColor(childSib);
 */

//  move back-ward a child
const childTwo = document.querySelector("#child-two");
const childBack = childTwo.nextElementSibling;
changeColor(childBack.previousElementSibling);
