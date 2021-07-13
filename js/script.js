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

const quotes=[
  {
  source: "Oscar Wilde",
  quote: "Be yourself; everyone else is already taken",
  }

  {
  source:"Bernard Baruch",
  quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  }

  {
  source: "Mae West",
  quote: "You only live once, but if you do it right, once is enough."
  }

  {
  source: "Saint Augustine",
  quote: "Do the heaven and earth then contain Thee, since Thou fillest them?",
  citation: "Confessions of Augustine",
  year: "AD 401"
  }

  {
  source: "Ralph Waldo Emerson",
  quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  }
]

function randomquote(quo){
let quote_body=[];
for(let i=0; i<quo.length; i+=1){
  quote_body=.push(quo[i].source);
  

}
return quote_body;

}

console.log(randomquote(products));






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

document.getElementById('load-quote').addEventListener("click", printQuote, false);