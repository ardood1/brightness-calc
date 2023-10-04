// BRIGHTNESS IPO CALC BY MR. V

// HTML Variables
let rIn1El = document.getElementById("r1-in");
let gIn1El = document.getElementById("g1-in");
let bIn1El = document.getElementById("b1-in");
let bright1El = document.getElementById("bright1");
let preview1El = document.getElementById("preview1");

let rIn2El = document.getElementById("r2-in");
let gIn2El = document.getElementById("g2-in");
let bIn2El = document.getElementById("b2-in");
let bright2El = document.getElementById("bright2");
let preview2El = document.getElementById("preview2");

let rIn3El = document.getElementById("r3-in");
let gIn3El = document.getElementById("g3-in");
let bIn3El = document.getElementById("b3-in");
let bright3El = document.getElementById("bright3");
let preview3El = document.getElementById("preview3");

// Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  processColor(rIn1El, gIn1El, bIn1El, preview1El, bright1El);
  processColor(rIn2El, gIn2El, bIn2El, preview2El, bright2El);
  processColor(rIn3El, gIn3El, bIn3El, preview3El, bright3El);
}
