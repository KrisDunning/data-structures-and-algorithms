'use strict';

function repeatedWords(stringParam) {
  let firstReapeatedWord;
  let wordArray = stringParam.split(' ');
  let theMap = new Map();
  wordArray.forEach(word => {
    if(theMap.has(word) && !firstReapeatedWord){
      firstReapeatedWord=word;
    }
    theMap.set(word,'1');
  });
  if(firstReapeatedWord)
    return firstReapeatedWord;
  else
    return 'No repeated words';
}

// console.log(repeatedWords('The first thing I made was a thing to do stuff'));
// console.log(repeatedWords('A bird pooped on my car, so I gave it the bird'));
// console.log(repeatedWords('The first thing I made was a plan'));

module.exports= {repeatedWords};
