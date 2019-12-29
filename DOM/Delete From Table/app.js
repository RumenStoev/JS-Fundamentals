

function solve() {
    let button  = document.getElementById("btn")
   let input = document.querySelector("body > label > input[type=text]");

    button.addEventListener("click",function() {
        let elementItems = Array.from(document.querySelectorAll("#customers > tbody > tr > td"))
       elementItems.map(x =>{
           if(x.innerHTML === input.value) {
            x.parentNode.remove()
        }})
    })
}










document.addEventListener("DOMContentLoaded",solve)
