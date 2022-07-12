function Furniture(array) {

    let totalPrice = 0;

    console.log(`Bought furniture:`)

    array.forEach(string => {

        const pattern = />>(?<name>.+)<<(?<price>[\d]+\.?[\d]+)!(?<quantity>[\d]+)/g;
        const matches = pattern.exec(string);

        if (matches) {
            const { name, price, quantity } = matches.groups

            console.log(`${name}`)

            totalPrice += Number(price) * Number(quantity)

        }

    })

    return `Total money spend: ${totalPrice.toFixed(2)}`

}

console.log(
    Furniture([">>Sofa<<312.23!3",
        ">>TV<<300!5",
        ">Invalid<<!5 Purchase"])
)

->Bought furniture:
  Sofa
  TV
  Total money spend: 2436.69
