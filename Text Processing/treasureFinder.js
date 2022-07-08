function treasureFinder(arr) {
    let key = arr.shift().split(" ").map(Number)
    let result = []

    let findCharFromCode = str => String.fromCharCode(str);

    function decodeString(str, i) {
        result[i] = ""
        let newString = str.split("");
        let counter = 0;

        newString.forEach((char, index) => {
            let newChar = char.charCodeAt(0) - key[counter];

            result[i] += findCharFromCode(newChar)
            counter++;

            if (counter === key.length) counter = 0;
        })
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "find") break

        decodeString(arr[i], i)
    }



    return result.forEach(str => {

        let keyWord = " "
        let keyNumber = ""

        /////Find indexes of & in the string////////
        let startIndex = str.indexOf("&");
        let lastIndex = str.lastIndexOf("&");
        keyWord = str.substring(startIndex + 1, lastIndex)
        ////////////////////////////////////////////


       ////Find indexes of <> in the String/////////

       let startIndexSecond = str.indexOf("<");
       let endIndexSecond = str.indexOf(">")
       keyNumber = str.substring(startIndexSecond + 1,endIndexSecond)
       ////////////////////////////////////////////////

       console.log(`Found ${keyWord} at ${keyNumber}`)


    })

}

console.log(
    treasureFinder(["1 2 1 3",

        "ikegfp'jpne)bv=41P83X@",

        "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",

        "find"])
)

-> Found gold at 10N70W
   Found Silver at 32S43W
