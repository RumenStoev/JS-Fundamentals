function PascalCaseSplitter(str) {

    let text = str.split("");
    let result = [];
    let counter = "";

    let requirements = (str) => str.charAt(0).toUpperCase()

    let findWordUpperCase = (char, i, arr) => {

        if (char.charAt(0) === requirements(char)) {
            if (counter.length > 0) result.push(counter);
            counter = "";
        }

        counter += char;

        if (i === arr.length - 1)   result.push(counter)
                
    }

    text.forEach((char, i, arr) => findWordUpperCase(char, i, arr));
    return result.join(", ")

}

console.log(PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'))

->Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
