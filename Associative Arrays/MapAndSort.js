function grade(arr) {

    let data = new Map();

    for(let element of arr) {
        let tokens = element.split(" ")
        let key = tokens.shift();
        let value = tokens.map(Number);

        if(data.has(key)) {
            let oldValue = data.get(key)
            data.set(key,oldValue.concat(value))
        } else {
            data.set(key,value)
        }
    }
   let sorted = Array.from(data.entries()).sort((a,b) => {
       average(a[1]) - average(b[1])
   })
    sorted.forEach(element => {
        console.log(`${element[0]}: ${element[1].join(", ")}`)
    })
    
}
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    })
    return sum / arr.length
}

console.log(
    grade(
        [ 'Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6' ]
    )
)

->Lilly: 4, 6, 6, 5
Tim: 5, 6, 6, 6
Tammy: 2, 4, 3
