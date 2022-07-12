function validateData(string) {
    let result = string;
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
    
   
    while((data = pattern.exec(result)) !== null) {
        let day = data.groups["day"];
        let month = data.groups["month"];
        let year = data.groups["year"];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
   
}

console.log(
    validateData("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")
)

-> Day: 13, Month: Jul, Year: 1928
   Day: 10, Month: Nov, Year: 1934
   Day: 25, Month: Dec, Year: 1937
