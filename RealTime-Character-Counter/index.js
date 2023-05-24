const textAreaEl = document.getElementById("textArea");
const totalCounterEl = document.getElementById("total-counter")
const remainingEl = document.getElementById("remaining-counter")

textAreaEl.addEventListener("keyup", ()=>{
    updateCounter()

});
   updateCounter()

function updateCounter (){
  totalCounterEl.innerText =  textAreaEl.value.length;
  remainingEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}