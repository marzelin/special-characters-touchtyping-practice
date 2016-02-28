var randomWordsContainer = document.querySelector('.js-insert-random-words');
var userInput = document.querySelector('.js-get-user-response');
var resultsContainer = document.querySelector('.js-show-results');

var listOfCharacters = [1, 2, 3, 4, 5, 6];
var wordsGenerator = RandomWordsGenerator(listOfCharacters);
var randomWords = wordsGenerator.generate(4, 5);
var randomString = randomWords.join(' ');

userInput.addEventListener('keyup', showResults);

function showResults(event) {
    if (event.keyIdentifier === 'Enter') {
        if (randomString === userInput.value) {
        resultsContainer.textContent = 'Good job!';
        } else {
        resultsContainer.textContent = 'Try again!';            
        }
    }
}

// tests ///////////////////////////////////////////////////////////////////

randomWordsContainer.textContent = randomString;