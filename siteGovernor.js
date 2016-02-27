var randomWordsContainer = document.querySelector('.js-insert-random-words');
var userInput = document.querySelector('.js-get-user-response');
var resultsContainer = document.querySelector('.js-show-results');

var listOfCharacters = [1, 2, 3, 4, 5, 6];
var stringGenerator = RandomStringGenerator(listOfCharacters);
var randomString = stringGenerator.generate(4, 5);

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