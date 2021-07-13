/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
      source: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken",
  },
  
  {
      source:"Bernard Baruch",
      quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  
  {
      source: "Saint Augustine",
      quote: "Do the heaven and earth then contain Thee, since Thou fillest them?",
      citation: "Confessions of Augustine",
      year: "AD 401"
  }
  
  ];
  
  function getRandomQuote(quo){
   let quoteBody = [];
   let randomQuotes = Math.floor(Math.random() * quoteBody)
   for (let i=0; i<quo.length; i+=1) {
    quoteBody.push(quo[i].source);
    quoteBody.push(quo[i].quote);
    quoteBody.push(quo[i].citation);
    quoteBody.push(quo[i].year);
   }
  return randomQuotes;
  }
  
  console.log(getRandomQuote(quotes))






/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);