function solve(arr) {
    let storage = new Map();

    arr.forEach(element => {
        let tokens = element.split(" ");

        if(storage.has(tokens[0])) {
            let oldQnt = storage.get(tokens[0]);
            storage.set(tokens[0],oldQnt + Number(tokens[1]))

        } else {
            storage.set(tokens[0],+tokens[1])
        }
    })
    let entries = Array.from(storage.entries())

    entries.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`)
    })

}


console.log(
    solve([ 'tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40' ])
)

->tomatoes -> 10
coffee -> 45
olives -> 100
