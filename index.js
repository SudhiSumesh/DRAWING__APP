
 
 const canvas=document.getElementById("canvas")
const ctxt =canvas.getContext("2d")
ctxt.fillStyle="white"
ctxt.fillRect(0,0,500,500)
ctxt.fillStyle="black"
let brushColor="black"
let brushSize=3;
const color=document.getElementById("color").addEventListener("change",()=>{
    brushColor=this.value
})
const cntrl=document.getElementById("brush").addEventListener("change",()=>{
    brushSize=this .value
})
let painting=false
//
function paintingStart(e){
    painting=true
}
function paintingStop(e){
    painting=false
}

function drow(event){
    if(painting==false) return
    let x=event.clientX;
    let y=event.clientY;
 ctxt.lineWidth =brushSize;
 ctxt.lineCap="round"
 ctxt.lineTo(x,y)
 ctxt.strokeStyle=brushColor;
 ctxt.stroke();
    



}
//
canvas.addEventListener("mousedown",()=>{
   paintingStart('mousedown')



})
canvas.addEventListener("mouseup",()=>{
    
    paintingStop('mouseup')

})
canvas.addEventListener("mousemove",()=>{
    
    

})