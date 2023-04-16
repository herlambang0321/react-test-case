// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
// Contoh:

// INPUT = ['xc', 'dz', 'bbb', 'dz']  
// QUERY = ['bbb', 'ac', 'dz']  

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

function wordOccurrences(input, query) {
    const occurrences = [];

    for (let i = 0; i < query.length; i++) {
        let count = 0;
        const queryWord = query[i];

        for (let j = 0; j < input.length; j++) {
            if (input[j] === queryWord) {
                count++;
            }
        }
        occurrences.push(count);
    }

    return occurrences;
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const occurrences = wordOccurrences(input, query);
console.log(occurrences);
