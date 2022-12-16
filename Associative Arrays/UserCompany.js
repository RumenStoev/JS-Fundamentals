function userCompany(arr) {
    let result = new Map();

    arr.reduce((acc, value, index, array) => {
        let [company, employeeID] = value.split(" -> ");

        if (!acc.has(company)) {
            acc.set(company, new Map().set(employeeID))
        } else {
            acc.get(company, acc.get(company).set(employeeID))
        }
        return acc
    }, result)
    
    return [...result].sort().forEach((item, key) => {
        console.log(item[0])

        item[1].forEach((item, key) => {
            console.log(`-- ${key}`)
        })
    })

}

console.log(
    userCompany([

        'SoftUni -> AA12345',

        'SoftUni -> BB12345',

        'Microsoft -> CC12345',

        'HP -> BB12345',


    ])
)

->HP
  --BB12345
  Microsoft
  --CC12345
  SoftUni
  --AA12345
  --BB12345
