var charactersList = [];

for (var i=0; i < 10; i++) {
  charactersList.push(i);
}

function generateRandomString(charactersList, wordLength, stringLength) {
  var randomString = '';
  while (randomString.length < stringLength) {
  }
}

function generateRandomWord(charactersList, wordLength) {
  var randomWord = '';
  for (var i = 0; i < wordLength; i++) {
    var randomCharacter = getRandomCharacter(charactersList);
  }
}

function getRandomCharacter(charactersList) {
  var listLength = charactersList.length;
  var randomIndex = Math.floor(Math.random() * listLength);
  return charactersList[randomIndex];
}

// tests ////////////////////////////////////////////////////////////

console.log(charactersList);
console.log(getRandomCharacter(charactersList));
