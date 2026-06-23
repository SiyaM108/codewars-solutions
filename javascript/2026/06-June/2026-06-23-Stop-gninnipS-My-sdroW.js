function spinWords(string){
  //TODO Have fun :)
  let words = [];
  let word = "";
  let newWords = [];
  let answer = "";

  words = string.split(" ");
  for(let i = 0; i < words.length; i++) {
      word = words[i];
      if (word.length < 5) {
          newWords.push(word);
      } else {
          let spun = spin(word);
          newWords.push(spun);
      }
  }
  answer = newWords.join(" ");
  return answer;
}

function spin(aWord) {
    return aWord.split("").reverse().join("");
}
