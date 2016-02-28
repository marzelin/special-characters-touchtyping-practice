function RandomWordsGenerator(charactersList) {

    function generateRandomWords(charactersList, wordLength, numberOfWords) {
        var randomWords = [];
        while (randomWords.length < numberOfWords) {
            var randomWord = generateRandomWord(charactersList, wordLength);
            randomWords.push(randomWord);
        }  
    
        return randomWords;
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

    return {
        generate: generateRandomWords.bind(null, charactersList)
    }
}

// tests ////////////////////////////////////////////////////////////

var listOfCharacters = [1, 2, 3, 4, 5];
var stringGenerator = RandomWordsGenerator(listOfCharacters);
var randomString = stringGenerator.generate(4, 10);

console.log(randomString);