

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






//Another solution

function deleteElement(input) {
    let elementItems = Array.from(document.querySelectorAll("#customers > tbody > tr > td"))
        elementItems.map(x =>{
            if(x.innerHTML === input.value) {
                x.parentNode.remove()
            }})

}

function solve() {
    let button  = document.getElementById("btn")
   let input = document.querySelector("body > label > input[type=text]");
    if(button === null || input === null ) {
        throw new Error("Have a some Error!!!")
    }
    button.addEventListener("click",deleteElement.bind(undefined,input))
}



