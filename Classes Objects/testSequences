Has to repair!!!

function Sequences(arr) {
    let result = [];

   
    for (let i = 1; i < arr.length; i++) {
        let currentArray = JSON.parse(arr[i - 1]);
        let secondArray = JSON.parse(arr[i])

        if (currentArray.every(num => secondArray.includes(num))) {
            result.push(true)
            
        }else {
            result.push(secondArray)
        }
        if(result.length === arr.length -1 && result.every(x => x === true)) {
         console.log(`[${result = currentArray.sort((a,b) => b - a).join(", ")}]`)
         return
        
        }
        

    }
    return result.forEach(arr => {
        console.log(`[${arr.sort((a,b) => a.length - b.length).sort((a,b) => b - a).join(", ")}]`)
        
    })
}


console.log(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"])

->[80.099, 7.339, 7.18, 7.14]
