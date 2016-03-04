
// DOM ELEMENTS ////////////////////////////////////////////////////

var randomWordsContainer = document.querySelector('.js-insert-random-words');
var userInput = document.querySelector('.js-get-user-response');
var resultsContainer = document.querySelector('.js-show-results');

// -----------------------------------------------------------------


// RANDOM WORDS ////////////////////////////////////////////////////

var listOfCharacters = [1, 2, 3, 4, 5, 6];
var wordsGenerator = RandomWordsGenerator(listOfCharacters);
var randomWords = wordsGenerator.generate(4, 5);
var spans = transformWordsToSpanElements(randomWords);

// -----------------------------------------------------------------


// SITE INITIALIZATION /////////////////////////////////////////////

appendSpans(spans, randomWordsContainer);
userInput.addEventListener('keyup', showResults);

// -----------------------------------------------------------------


// HELPER FUNCTIONS ////////////////////////////////////////////////

function showResults(event) {
    if (event.keyIdentifier === 'Enter') {
        if (randomWordsContainer.textContent === userInput.value) {
        resultsContainer.textContent = 'Good job!';
        } else {
        resultsContainer.textContent = 'Try again!';            
        }
    }
}

function transformWordsToSpanElements(words) {
    var spans = words.map((word) => {
        var span = document.createElement('span');
        span.textContent = word;
        return span;
    });
    
    return spans;
}

function appendSpans(spans, container) {
    var lastSpanIndex = spans.length - 1;
    spans.forEach((span, i) => {
        container.appendChild(span);
        if (i !== lastSpanIndex) {
            var space = document.createTextNode(' ');
            container.appendChild(space);
        }
    });
}

// tests ///////////////////////////////////////////////////////////////////
