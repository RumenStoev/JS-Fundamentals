function deserializeString(arr) {
    let result = [];
    let output = arr;

    output.forEach(str => {
        let value = str.split(":")
        let char = value.shift();

        value.forEach(item => {
            let separateItem = item.split("/");

            separateItem.forEach(index => {
                (!isNaN(index)) ? result[index] = char : false
            })

        })

    })

    return result.join("")
}

console.log(
    deserializeString([
        "a:0/3/5/11",

        "v:1/4",

        "j:2",

        "m:6/9/15",

        "s:7/13",

        "d:8/14",

        "c:10",

        "l:12",

        "end"
    ])
)

-> avjavamsdmcalsdm
