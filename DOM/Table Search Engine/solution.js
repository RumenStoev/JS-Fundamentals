function solve() {
    let button = document.getElementById("searchBtn");
    let input = document.getElementById("searchField")


    button.addEventListener("click", search)

    function search() {
        let elementTR = Array.from(document.querySelectorAll(" tbody > tr >td "))
        elementTR.map((x) => {
            if(x.innerHTML === input.value) {
                x.parentElement.className = "select"
            }
        })
        input.value = ""
    }
}



