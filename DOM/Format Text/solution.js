function solve() {
let input =  document.getElementById("input");
 let output = document.getElementById("output");
 console.log(typeof  output)
  if(input === null  || output === null) {
      throw new Error("Have some Error!")
  }
  input.innerHTML
      .split(".")
      .forEach(x => {
          let p = document.createElement("p");
          p.innerHTML = x + ".";
           output.appendChild(p)


      })



}
