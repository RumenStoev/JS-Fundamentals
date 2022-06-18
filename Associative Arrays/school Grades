function schoolGrades(arr) {
    let result = new Map();

    arr.forEach((item) => {
        let [name, ...grades] = item.split(" ");
        if (!result.has(name)) {
            result.set(name, grades)
        } else {
            let existName = result.get(name);
            result.set(name, existName.concat(grades))
        }
    })

    return new Map(Array.from([...result]).sort()).forEach((key, value) => {
        let grade = 0;
        let num = Array.from(key.map(Number)).map(x => grade += x)


        console.log(`${value}: ${(grade / num.length).toFixed(2)}`)
    })


}

console.log(
    schoolGrades(['Lilly 4 6 6 5',

        'Tim 5 6',

        'Tammy 2 4 3',

        'Tim 6 6'])
)


-> Lilly: 5.25
   Tammy: 3.00
   Tim: 5.75
