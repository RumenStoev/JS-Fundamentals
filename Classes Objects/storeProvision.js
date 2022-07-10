function storeProvision(arr1, arr2) {
    let result = {};
    let array = arr1.concat(arr2);

    array.reduce((acc, value, index, arr) => {
        if (isNaN(value) && !acc.hasOwnProperty(value)) {
            acc[value] = +arr[index + 1]
        } else if (acc.hasOwnProperty(value)) {
            acc[value] += +arr[index + 1]
        }
        return acc
    }, result)

    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`)
    }
}


console.log(
    createObject([
            'Chips',    '5',
            'CocaCola', '9',
            'Bananas',  '14',
            'Pasta',    '4',
            'Beer',     '2'
        ], [
            'Flour',    '44',
                'Oil',      '12',
                'Pasta',    '7',
                'Tomatoes', '70',
                'Bananas',  '30'
            ]
    )
)

->Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70
