const rBody = document.body;
// rBody.append("Hay");
const divRm = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// to remove elements
/* removeChild(name of element which want to remove),
 but generally prefer -> element which  want to delete.remove()
 */

divRm.removeChild(spanHi);
spanBye.remove();

// to add removed elements
// Note appendChild will also work here
divRm.append(spanBye);
