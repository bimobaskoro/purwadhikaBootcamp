//No 1
// let number = 9;
// let limit = 10;
// for(let i = 1; i<= limit; i++){
//     console.log(`${number} * ${i}`);
// }

//No 2
let text = "madam";
let flipText = "";

for (let i=text.length-1; i>=0; i--){
    // console.log(i);
    console.log(text[i])
    flipText += text[i]
}

if (flipText === text){
    console.log("Ini palindrome")
}else{
    console.log("Ini bukan palindrome")
}

//no 3
let cm = 200000;
let msKM = "KM";
const cmToKM = cm/100000;
console.log(cmToKM, msKM);

//No 4
let num = 1000
let newNumerical = num.toString();
console.log(
    num.toLocaleString("in-ID", {
        style:"currency",
        currency:"IDR",
    })
)

//No 5
let inputText = "Hello World";
let deleteText = "";

const deleteHasil = inputText.replace(deleteText, "");
console.log(deleteHasil);

let newText;
for(let i= 0; i < inputText.length; i++){
    console.log(i);
    console.log(inputText[i]);
    
}

console.log(newText);