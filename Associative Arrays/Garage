function Garage(arr) {
    let garage = new Map();

    arr.forEach(item => {
        let [number, array] = item.split(" - ")
        if (!garage.hasOwnProperty(number)) {
            garage[number] = [];
        }

        garage[number].push(array)

    })

    return Object.entries(garage).forEach((item, index) => {
        let OutputPattern = item[1].reduce((acc, value, index, array) => {
            let pattern = value.split(",").map((x) => {
                let [type, name] = x.split(": ")
                return `${type} - ${name}`
            })

            acc.push(pattern)
            return acc
        }, [])

        console.log(`Garage № ${item[0]}`)
        console.log(`--- ${OutputPattern.join("\n--- ")}`)

    })
}


console.log(
    Garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
)

-> Garage № 1
 --- color - blue, fuel type - diesel
 --- color - red, manufacture - Audi
   Garage № 2
 --- fuel type - petrol
   Garage № 4
 --- color - dark blue, fuel type - diesel, manufacture - Fiat


