function factorialOfWordsCount(str) {
    if (typeof str != "string" ) {
        console.log(`Invaid Data :${str}`);
    }
    else{
        let wordCount = str.split(" ");
        let numOfWords = wordCount.length;
        let fact = 1;
        for (let index = numOfWords; index >= 1; index--) {
            fact = fact * index
            
        }
        console.log(`Factorial of words:${numOfWords} in string :${str} is: ${fact}`);
    }
}

factorialOfWordsCount("Revision is the mother of success");
factorialOfWordsCount("We never fail, we always learn");
factorialOfWordsCount(null);
factorialOfWordsCount("");
factorialOfWordsCount("Omkar Chandrakant Sonawane");
factorialOfWordsCount(NaN);
factorialOfWordsCount(undefined);