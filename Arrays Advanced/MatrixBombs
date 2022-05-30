
function bunnyKill(arr) {
    let coordinates = arr.pop().split(" ").map(arr => arr.split(",").map(Number));//???
    let matrix = arr.map(row => row.split(" ").map(Number)) //This can be in one loop with statements
    let result = [];
    let counter = 0;

    if (matrix.length < 0 || matrix.length > 1000) {
        return
    }


    coordinates.map((arr, index) => {
        if (arr[0] > matrix.length - 1 || arr[1] > matrix.length - 1 || arr[0] < 0 || arr[1] < 0) {
            return
        }
        result.push(matrix[arr[0]][arr[1]])
        for (let row = Math.max(arr[0] - 1, 0); row <= Math.min(arr[0] + 1, matrix.length - 1); row++) {
            for (let column = Math.max(arr[1] - 1, 0); column <= Math.min(arr[1] + 1, matrix.length - 1); column++) {

                if (matrix[row][column] - result[index] > 0) {
                    counter += matrix[row][column] - result[index];
                    matrix[row][column] = 0
                } else {
                    matrix[row][column] = 0
                }

            }
        }

    })

    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0) {

                counter += matrix[i][j]
            }
        }
         
    }
    result.map(x => counter += x)

    return `${counter}\n${counter / 10}`

}

console.log(
    bunnyKill(['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '21,2 0,11'])
)

-> 70
   7
