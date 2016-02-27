var randomWordsContainer = document.querySelector('.js-insert-random-words');
var userInput = document.querySelector('.js-get-user-response');

var listOfCharacters = [1, 2, 3, 4, 5];
var stringGenerator = RandomStringGenerator(listOfCharacters);
var randomString = stringGenerator.generate(4, 10);

userInput.addEventListener('keyup', logInput);

function logInput(event) {
    if (event.keyIdentifier === 'Enter') {
        var inputValue = userInput.value;
        console.log(inputValue);
    }
}


// tests ///////////////////////////////////////////////////////////////////

randomWordsContainer.textContent = randomString;