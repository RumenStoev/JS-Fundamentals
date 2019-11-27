function solve(a) {
    let num = a.lastIndexOf("\\")
    let onePart = a.substr(num)
    let result = []
   let elem = onePart.split(".").forEach((x) => {
       if(x.includes("\\")) {
          result.push(  x.replace("\\",""))
       } else {
           result.push(x)
       }
   })
    console.log(`File name: ${result[0]}`)
    console.log(`File extension: ${result[1]}`)



}
console.log(
    solve("C:\\Internal\\training-internal\\Template.pptx")
)

->File name: Template
File  extension: pptx
