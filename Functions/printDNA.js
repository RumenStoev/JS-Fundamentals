function printDNA(number) {
    let symbol = "ATCGTTAGGG".match(/.{1,2}/g)
    let counter = 0;
    let counter2 = 0;
    let pattern = {
        "0": (a, b) => `**${a}${b}**`,
        "1": (a, b) => `*${a}--${b}*`,
        "2": (a, b) => `${a}----${b}`,
        "3": (a, b) => `*${a}--${b}*`,

    }
    let result = [];

    while (number !== 0) {

        let element = symbol[counter2].split("")
        result.push(pattern[counter](element[0], element[1]))

        if (counter === 3) {
            counter = -1;
        }
        if (counter2 === 4) {
            counter2 = -1;
        }
        counter2++
        counter++

        number--
    }
    return result.join("\n")
}
**AT**
*C--G*
T----T
*A--G*
**GG**
*A--T*
C----G
*T--T*
**AG**
*G--G*
->
