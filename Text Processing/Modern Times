function reavealWorld(par1) {
    let words =  par1.split(" ")
    //     .forEach((x) => {
    // //     if(x.includes("#" && x.length >1 )) {
    // //         console.log(x)
    // //     }
    // // })
    // // return words
    let result = []
    for(let element of words) {
        if(element.includes("#") && element.length >1) {
            result.push(element)
        }
    }

    let tranformeWord= []
     for(let e of result) {
        if(e.includes("#")) {
            tranformeWord.push( e.replace("#"," "))
        }
     }
     return tranformeWord.join("\n")


}

console.log(
    reavealWorld("Nowadays everyone uses # to tag a #special word in #socialMedia")
)

-> special
 socialMedia
