function thePianist(arr) {
    let collection = {};

    let initial = arr.shift();
    let existsPieces = arr.splice(0, initial)
    let commands = {
        "Add": (info) => {
            let [piece, composer, key] = info
            if (!collection.hasOwnProperty(piece)) {
                collection[piece] = {
                    composer: composer,
                    key: key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)//here with \n
            } else {
                console.log(`${piece} is already in the collection!`)
            }
        },
        "Remove": (info) => {
            let piece = info;
            if (collection.hasOwnProperty(info)) {
                delete collection[info];
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        },
        "ChangeKey": (info) => {
            let [piece, newKey] = info;
            if (collection.hasOwnProperty(piece)) {
                console.log(`Changed the key of ${piece} to ${newKey}!`)
                collection[piece]["key"] = newKey
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }

    }

    for (let i = 0; i < existsPieces.length; i++) {
        let input = existsPieces[i].split("|");


        let [piece, composer, key] = input;

        if (!collection.hasOwnProperty(piece)) {
            collection[piece] = {
                composer: "",
                key: ""
            }
        }
        collection[piece]["composer"] = composer

        collection[piece]["key"] = key
    }


    for (let i = 0; i < arr.length; i++) {
        let [command, ...info] = arr[i].split("|")

        if (command === "Stop") {
            output(collection)
            return
        }

        commands[command](info)
    }


    function output(obj) {
        return Object.entries(obj).forEach(item => {

            console.log(`${item[0]} -> Composer: ${item[1]["composer"]}, Key: ${item[1]["key"]}`)
        })
    }


}


console.log(
    thePianist([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ])
)

->Sonata No.2 by Chopin in B Minor
 added to the collection!
Hungarian Rhapsody No.2 by Liszt in C# Minor
 added to the collection!
Fur Elise is already in the collection!
Successfully removed Clair de Lune!
Changed the key of Moonlight Sonata to C# Major!
Fur Elise -> Composer:Beethoven, Key:A Minor
Moonlight Sonata -> Composer:Beethoven, Key:C# Major
Sonata No.2 -> Composer:Chopin, Key:B Minor
Hungarian Rhapsody No.2 -> Composer:Liszt, Key:C# Minor
