





function TravelTime(arr) {
    let result = {};

    arr.forEach(str => {
        let [country, town, cost] = str.split(" > ")
        cost = Number(cost);
        if (!result.hasOwnProperty(country)) {
            result[country] = {};

        }
        
        if (!result[country].hasOwnProperty(town)) {
            result[country][town] = cost;
        }

        if (result[country].hasOwnProperty(town) && result[country][town] > cost) {
            result[country][town] = cost
        }

    })
    return Object.keys(result).sort((a,b) => a.localeCompare(b)).forEach(key => {
        result[key] = Object.entries(result[key]).sort((a, b) => a[1] - b[1])
        console.log(`${key} -> ${result[key].map(x => `${x[0]} -> ${x[1]}`).join(" ")}`)
    })

}

console.log(TravelTime(
    [

        "Bulgaria > Sofia > 25000",
        "aaa > Sofia > 1",
        "aa > Orgrimar > 0",
        "Albania > Tirana > 25000",
        "zz > Aarna > 25010",
        "Bulgaria > Lukovit > 10"

    ]
))

-> aa -> Orgrimar -> 0
   aaa -> Sofia -> 1
   Albania -> Tirana -> 25000
   Bulgaria -> Lukovit -> 10 Sofia -> 25000
   zz -> Aarna -> 25010




function travelTime(arr) {
    let result = new Map()


     arr.reduce((acc, value, index, array) => {
        let [country, town, cost] = value.split(" > ");
       
ndefined
        if (!acc.has(country)) {
            acc.set(country, new Map().set(town, cost))
        } else {
            acc.get(country, acc.get(country).set(town, +cost))
        }
        return acc
    }, result)

    return new Map([...result].sort((a, b) => a[0].localeCompare(b[0]))).forEach((item, key) => {
        let t = [...item.entries()].sort((a, b) =>
            Number(a[1]) - Number(b[1])

        )
            .reduce((acc, value) => {
                let r = `${value[0]} -> ${Number(value[1])} `
                acc.push(r)
                return acc
            }, [])

        console.log(`${key} -> ${t.join("")}`)

    })

}

console.log(
    travelTime([

        "Bulgaria > Sofia > 500",

        "Bulgaria > Sopot > 800",

        "798 > Paris > 2000",

        "Albania > Tirana > 1000",

        "Bulgaria > Sofia > 200"])
)

console.log(
    travelTime([
        "Bulgaria > Sofia > 25000",
        "Bulgaria > Sofia > 25000",
        "Kalimdor > Orgrimar > 25000",
        "Albania > Tirana > 25000",
        "Bulgaria > Varna > 25010",
        "Bulgaria > Lukovit > 10"
    ])
)

->Albania -> Tirana -> 1000 
  Bulgaria -> Sofia -> 200 Sopot -> 800 
  France -> Paris -> 2000 

  Albania -> Tirana -> 25000 
  Bulgaria -> Lukovit -> 10 Sofia -> 25000 Varna -> 25010 
  Kalimdor -> Orgrimar -> 25000 
