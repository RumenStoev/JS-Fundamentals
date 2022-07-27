
function CardGame(arr) {
    let result = {}

    let firstCounting = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    let secondCounting = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }

    function filterCards(arr, name) {
        arr.filter(x => (!result[name].includes(x)) ? result[name].push(x) : false) //fn
    }

    arr.forEach(item => {
        let [name, points] = item.split(": ");
        let splitPoints = points.split(", ")


        if (!result.hasOwnProperty(name)) {
            result[name] = []
        }

        filterCards(splitPoints, name)
    })

    let sumCurrentCards = arr => {
        let counter = 0;
        arr.forEach(x => { //fn

            var hasNumber = /\d/;
            let [first, second] = (hasNumber.test(x)) ? x.match(/\D+|\d+/g) : x.split("") //fn
            if (!isNaN(first)) {  //fn
                counter += Number(first * secondCounting[second]);
            } else {
                counter += Number(firstCounting[first] * secondCounting[second]) //fn
            }

        })
        return counter;
    }
    Object.keys(result).forEach(item => {
        let counter = sumCurrentCards(result[item])

        console.log(`${item}: ${counter}`);
    })

}
console.log(
    CardGame([

        'Peter: 2C, 4H, 9H, AS, QS',

        'Tomas: 3H, 10S, JC, KD, 5S, 10S',

        'Andrea: QH, QC, QS, QD',

        'Tomas: 6H, 7S, KC, KD, 5S, 10C',

        'Andrea: QH, QC, JS, JD, JC',

        'Peter: JD, JD, JD, JD, JD, JD'

    ])
)

-> Peter: 167
   Tomas: 175
   Andrea: 197

