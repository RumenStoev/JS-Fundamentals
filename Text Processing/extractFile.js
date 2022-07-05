
function extractFile(str) {
    let sentence = str.split("\\");
    let result = sentence[sentence.length - 1].split(".");
    let fileExtension = result.pop();
    let fileName = result.join(".")

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)


}

console.log(
    extractFile('C:\\Internal\\training-internal\\Template.pptx')
)

->File name: Template
  File extension: pptx
