// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseAlphabet(str) {
    let alphabets = '';
    let numbers = '';
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            alphabets += str[i];
        } else {
            numbers += str[i];
        }
    }
    alphabets = alphabets.split('').reverse().join('');
    return alphabets + numbers;
}

const input = "NEGIE1";
const reversed = reverseAlphabet(input);
console.log(reversed);