
function schoolRegister(arr) {
    let result = {}
    let store = arr.map(x => x.split(", "))
    

    store.map((arr, ind) => {
        let [name, grade, score] = arr
        name = name.split(": ")[1]
        grade = grade.split(": ")[1]
        score = +score.split(": ")[1]
        

        if (score >= 3 && score <= 6) {
            grade = Number(grade) + 1

            if (!result.hasOwnProperty(`${grade} Grade`)) {

                result[`${grade} Grade`] = {
                    "List of students": [],
                    "Average annual score from last year": []
                }
            }
            result[`${grade} Grade`]["List of students"].push(name)

            result[`${grade} Grade`]["Average annual score from last year"].push(score)
        }
    })

    let sumScore = arr => arr.reduce((acc, value, index, array) => acc + value / array.length, 0)
    
    return Object.keys(result).sort((a, b) => {
        let num1 = a.split(" ")[0]
        let num2 = +b.split(" ")[0]

        return num1 - num2

    }).forEach(key => {
        console.log(`${key}`)
        console.log(`List of students: ${result[key]["List of students"].join(", ")}`)

        console.log(`Average annual score from last year: ${sumScore(result[key]["Average annual score from last year"]).toFixed(2)}\n`)

    })

}

console.log(
    schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ])
)


-> 9 Grade
   List of students: Mark, Daryl
   Average annual score from last year :4.16

   10 Grade
   List of students: Ethan, Joey, Bill
   Average annual score from last year :2.75

   11 Grade
   List of students: Steven, Philip, Gavin
   Average annual score from last year :2.05

  12 Grade
  List of students: Bob, Peter
  Average annual score from last year :3.73

