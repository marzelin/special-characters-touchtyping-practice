var randomWordsContainer = document.querySelector('.js-insert-random-words');
var userInput = document.querySelector('.js-get-user-response');

var listOfCharacters = [1, 2, 3, 4, 5];
var stringGenerator = RandomStringGenerator(listOfCharacters);
var randomString = stringGenerator.generate(4, 10);

userInput.addEventListener('input', logInput);

function logInput(event) {
    var inputValue = userInput.value;
    console.log(inputValue);
}


// tests ///////////////////////////////////////////////////////////////////

randomWordsContainer.textContent = randomString;