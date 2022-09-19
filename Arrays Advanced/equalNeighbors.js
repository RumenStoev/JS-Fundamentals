function equalNeighbors(matrix) {         // /check pair elements by Row and Column
    let counter = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {

            if (matrix[row][column] === matrix[row][column + 1]) {
                counter++
            }

            if (row + 1 !== matrix.length && matrix[row][column] === matrix[row + 1][column]) {
                counter++

            }

        }
    }
    return counter++
}


console.log(
    equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
    )
)

-> 1 
