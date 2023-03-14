function findZeroSequence(arr) {
    let result = [];
    let containerZero = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            containerZero.push(i)
            result[containerZero[0]] = [containerZero[0], containerZero.length]
        } else {
            containerZero = [];
        }
    }

    return result
        .map((item) => {
            if (Array.isArray(item)) {
                return `Zero start from index ${item[0]} sequences ${item[1]}`;
            }
        })
        .filter(Boolean)
        .join("\n");
}



console.log(
    findZeroSequence([1, 1, 1, 0, 0, 0, 1, 1, 1, 0])
)

->  Zero start from index 3 sequences 3
    Zero start from index 9 sequences 1
