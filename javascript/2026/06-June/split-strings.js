function solution(str){
    let letters;
    let answer = [];
    if (str.length % 2 === 0) {
        // string length even:
        letters = str.split("");
        for (let i = 0; i < letters.length; i++) {
            if (i % 2 !== 0) {
                answer.push(letters[i-1] + letters[i]);
            }
        }
    } else {
        // string length odd:
        letters = str.split("");
        for (let i = 0; i < letters.length; i++) {
            if (i === letters.length-1) {
                answer.push(letters[i] + "_");
            } else if (i % 2 !== 0) {
                answer.push(letters[i-1] + letters[i]);
            }
        }
    }
    return(answer);
}

console.log(solution("abcdefg"));
console.log(solution("abcdef"));
