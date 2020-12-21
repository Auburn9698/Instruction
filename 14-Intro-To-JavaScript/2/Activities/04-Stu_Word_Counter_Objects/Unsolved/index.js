function wordCount(myString) {

    var StringArray = myString.split(" ");

    var wordFrequency = {};

    for (var i = 0; i < StringArray.length; i++ ) {
        var currentWord = StringArray[i];
        if (currentWord in wordFrequency) {
            wordFrequency[currentWord] += 1;
        }
        else {
            wordFrequency[currentWord] = 1
        }
    }

    console.log(wordFrequency);
    return wordFrequency;
}

wordCount("I yam what I yam and always will be what I yam.");



