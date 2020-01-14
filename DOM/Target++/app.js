function solve() {
    let button = document.getElementById("clock");
    let a = document.getElementsByTagName("A")[0];
    button.addEventListener("click", function () {


     a.innerHTML = Number(a.innerHTML)+ 1;

    })
}
solve()
