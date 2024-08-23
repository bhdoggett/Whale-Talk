var input = 'I like to eat, eat, eat, apples and bananas';
// var input = prompt();
input = input.toLocaleLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);

    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }

    for (let j = 0; j < vowels.length; j++) {
        // const vowel = vowels[j];
        // console.log(j)
        if (vowels[j] === input[i]) {
            resultArray.push(input[i]);
        }

    }
}
// console.log(resultArray)

var resultString = resultArray.join('').toUpperCase();

console.log(input);
console.log(resultString);
