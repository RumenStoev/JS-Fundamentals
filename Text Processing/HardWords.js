function HardWords(arr) {
    let result = arr.shift().split(" ")
    let searchingWords = arr.pop().reduce((acc, value) => {
        let length = value.length
        acc[length] = value;
        return acc;
    }, {});
    
    let checkSymbols = str => (str.charCodeAt(0) >= 31 && str.charCodeAt(0) <= 64) ? true : false

    result.forEach((item, i, array) => {
        if (item.includes("_")) array[i] = searchingWords[`${item.length}`]

        if (item.includes("_") && checkSymbols(item[item.length - 1]) === true) array[i] = `${searchingWords[`${item.length - 1}`]}${item[item.length - 1]}`

    })
    return result.join(" ")
}

console.log(
    HardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])
)
-> Hi, grandma! I'm so glad to write to you. During the winter vacation, so amazing things happened. My dad bought me a sled. Mom started a new job as a pharmacist. My brother's ankle is sprained, and now it bothers me even more. Every night Mom cooks pie on your recipe because it is the most delicious. I hope this year Santa will bring me a robot.
