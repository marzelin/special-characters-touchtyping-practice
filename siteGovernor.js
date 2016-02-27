var randomWordsContainer = document.querySelector('.js-insert-random-words');
var listOfCharacters = [1, 2, 3, 4, 5];
var stringGenerator = RandomStringGenerator(listOfCharacters);
var randomString = stringGenerator.generate(4, 10);


// tests ///////////////////////////////////////////////////////////////////

randomWordsContainer.textContent = randomString;