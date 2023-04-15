// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

// Contoh:

// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence) 
// mengerjakan: 11 character

function longest(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = longest(sentence);
let amount = longestWord.length;
return console.log(`${longestWord}: ${amount} character`);
