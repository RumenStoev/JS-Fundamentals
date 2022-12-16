function solve(arr) {
    let result = new Map()

    arr.forEach((item) => {
        let [product, price] = item.split(" ")
        if (!result.has(product)) {
            result.set(product, +price)
        } else {
            let existProduct = +result.get(product);
            result.set(product, (existProduct + Number(price)))
        }
    })


    result.forEach((key, value) => {
        console.log(`${value} -> ${key}`)
    })

}
console.log(
    solve(['tomatoes 10',

        'coffee 5',

        'olives 100',

        'coffee 40'])
) 


-> tomatoes -> 10
   coffee -> 45
   olives -> 100
