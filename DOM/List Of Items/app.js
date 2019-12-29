function addItem() {
   let btn = document.getElementById("btn")
    let input = document.getElementById("newItemText")
   let ul = document.getElementById("items")
    btn.addEventListener("click",function () {

        let li = document.createElement("li")
        ul.appendChild(li)
      li.innerHTML = input.value
    })
}





document.addEventListener("DOMContentLoaded",addItem)
