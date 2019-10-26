function main(arr) {
    let sum = arr[0].reduce((a,b) => a + b);
    let isMagic = true;

    for(let i = 0; i<arr.length; i++) {
        let sumRows = arr[i].reduce((a,b) => a + b);
        let sumCols = arr.map(x =>x[i]).reduce((a,b ) => a + b)

         if(sumRows!== sumCols) {
             isMagic=false
         } else {
             isMagic
         }

    }
    return isMagic



}

console.log(
    main(
        [[4,5,6],
            [6,5,4],
            [5,5,5]]
    )
)

->true
