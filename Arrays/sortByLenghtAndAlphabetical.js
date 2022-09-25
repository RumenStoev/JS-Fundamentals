function solve(arr) {

    return arr.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b)
    }).join(" ")

}


console.log(
    solve(['alpha','beta','gamma'])
)

->beta alpha gamma
