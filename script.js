var charactersList = [];

for (var i=0; i < 10; i++) {
  charactersList.push(i);
}

function generateRandomString(charactersList, wordLength, numberOfWords) {
    var randomWords = [];
  while (randomWords.length < numberOfWords) {
    var randomWord = generateRandomWord(charactersList, wordLength);
    randomWords.push(randomWord);
  }
  
    var randomString = randomWords.join(' ');
  
    return randomString;
}

function generateRandomWord(charactersList, wordLength) {
  var randomWord = '';

  for (var i = 0; i < wordLength; i++) {
    var randomCharacter = getRandomCharacter(charactersList);
    randomWord += randomCharacter;
  }

  return randomWord;
}

function getRandomCharacter(charactersList) {
  var listLength = charactersList.length;
  var randomIndex = Math.floor(Math.random() * listLength);
  return charactersList[randomIndex];
}

// tests ////////////////////////////////////////////////////////////

console.log(charactersList);
console.log(getRandomCharacter(charactersList));
console.log(generateRandomWord(charactersList, 4));
console.log(generateRandomString(charactersList, 4, 10));