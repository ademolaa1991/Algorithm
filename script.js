        document.addEventListener("DOMContentLoaded", function () {
            analyzeSentence();
        });

        function analyzeSentence() {
            var sentence = "Welcome to Safehouse Universal";

            // Initialize counters
            var lengthOfSentence = 0;
            var numberOfWords = 0;
            var numberOfVowels = 0;

            // Iterate through each character in the sentence
            for (var i = 0; i < sentence.length; i++) {
                // Increment length counter
                lengthOfSentence++;

                // Check for word separation (space)
                if (sentence[i] === ' ') {
                    // Increment word counter
                    numberOfWords++;
                }

                // Check for vowels (assuming English vowels)
                var lowerCaseChar = sentence[i].toLowerCase();
                if (lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u') {
                    // Increment vowel counter
                    numberOfVowels++;
                }
            }

            // Output results
            document.getElementById("output").innerHTML =
                "<p>Length of the sentence: " + lengthOfSentence + "</p>" +
                "<p>Number of words in the sentence: " + (numberOfWords + 1) + "</p>" +
                "<p>Number of vowels in the sentence: " + numberOfVowels + "</p>";
        }