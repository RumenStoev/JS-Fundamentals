function solve(arr) {
     let row = 0;
     let column = 0;

     for(let i = 0; i < arr.length; i++) {
         row+= arr[i][i];
         column+= arr[i][arr.length-1-i]

     }
     return row === column ? "true" : "false"

}


console.log(
    solve([[4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]])
)

->false
