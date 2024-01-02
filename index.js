const canvas = document.getElementById("canvas");
const ctxt = canvas.getContext("2d");
const d = (canvas.width = window.innerWidth - 100);
const f = (canvas.height = window.innerHeight - 300);
ctxt.fillStyle = "white";
ctxt.fillRect(0, 0, d, f);
ctxt.fillStyle = "black";
let brushColor = "black";
let brushSize = 3;

const color = document
  .getElementById("color")
  .addEventListener("change", function () {
    brushColor = this.value;
  });

const cntrl = document
  .getElementById("brush")
  .addEventListener("change", function () {
    brushSize = this.value;
  });

let painting = false;

function paintingStart(e) {
  painting = true;
  draw(e);
}

function paintingStop(e) {
  painting = false;
  ctxt.beginPath();
}

function draw(e) {
  if (painting == false) return;
  const rect = canvas.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  ctxt.lineWidth = brushSize;
  ctxt.lineCap = "round";
  ctxt.lineTo(x, y);
  ctxt.strokeStyle = brushColor;
  ctxt.stroke();
}
function clearCanvas() {
  ctxt.clearRect(0, 0, canvas.width, canvas.height);
}
//
canvas.addEventListener("mousedown", paintingStart);
canvas.addEventListener("mouseup", paintingStop);
canvas.addEventListener("mousemove", draw);
clr = document.getElementById("clr");
clr.addEventListener("click", clearCanvas);

