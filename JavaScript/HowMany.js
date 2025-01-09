// A sentence is made up of a group of words. Each word is a sequence of letters, ('a'-'z', 'A'-'Z'), that may
// contain one or more hyphens and may end in a punctuation mark: period (.), comma (,), question mark
// (?), or exclamation point (!). Words will be separated by one or more white space characters. Hyphens
// join two words into one and should be retained while the other punctuation marks should be stripped.
// Determine the number of words in a given sentence.

// Example
// s = 'How many eggs are in a half-dozen, 13?'
// The list of words in the string is ['How', 'many', 'eggs', 'are', in', 'a', 'half-dozen'] and the number of words
// is 7. Notice that the numeric string, '13', is not a word because it is not within the allowed character set.

// Input: Sentence (string)
// Initialize a variables to hold word count, index of sentence and length of sentence
// Iterate through the characters of sentence (while loop)
// Initialize a variables to hold letter/hyphen count, total count of characters in word, and punctuation count 
// Identify words letter characters and valid hyphened characters 
// Count valid punctuation 
// Count total characters in word
// Validate the word, seeing if min 1 alpha character 
// Check if the sum of letter characters and valid punctuation equal total character in words
// If word is valid increase word count
// Skip spaces
// Output: Count of words in string


const howMany = (sentence) => {
    let count = 0; // Word count
    let index = 0; // Index in the sentence
    let senLength = sentence.length // Total length of the sentence 

    while (index < senLength) {
        // While index is less than the length of the sentence iterate over it
        // For each word tack: (alphaCount + punctuationCount === totalCount)
        let alphaCount = 0; // Count of valid alphabetic characters and hyphens
        let punctuationCount = 0; // Count of punctuation
        let totalCount = 0; // Total characters in a word (letters, - , ? ! .)

        // Iterate to process each word
        while (index < senLength && sentence[index] !== ' ') {
            const characters = sentence[index];

            if (
                characters >= 'a' && characters <= 'z' ||
                characters >= 'A' && characters <= 'Z' ||
                characters === '-') {
                alphaCount++;

            } else if (characters === ',' || characters === '.' || characters === '?' || characters === '!') {
                punctuationCount++;
            }
            totalCount++;
            index++;
        }

        // Checking validation of each word
        if (alphaCount > 0 && alphaCount + punctuationCount === totalCount) {
            count++
        }
        // Skip spaces
        while (index < senLength && senLength !== ' ') {
            index++
        }
    }
    return count;
}

console.log(howMany("How many eggs are in a half-dozen, 13?"));
