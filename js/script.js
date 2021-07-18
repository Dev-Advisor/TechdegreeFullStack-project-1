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

var quotes = [
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
  
  /***
 * `getRandomQuote` function
***/
  
function getRandomQuote () {
let randomNumber = Math.floor(Math.random() * 3)

let qoute = quotes[randomNumber];

return qoute

};

/***
 * `printQuote` function
***/

function printQuote () {
 let randomQuote = getRandomQuote();
  let createQuote;
      if (randomQuote === randomQuote.quote & randomQuote === randomQuote.source){
              
                   createQuote =  `<p class="quote">${randomQuote.quote}</p>, 
                                   <p class="source">${randomQuote.source}</p>`,
                     
                   } else if(randomQuote === randomQuote.citation & randomQuote === randomQuote.year ) {
                         createQuote = 
                         `<p class="quote"> ${randomQuote.quote} </p>
                          <p class="source"> ${randomQuote.source}
                          <span class="citation"> ${randomQuote.citation} </span>
                          <span class="year">${randomQuote.year} </span>
                          </p>`;
                          }; 
                    
document.getElementById('quote-box').innerHTML = createQuote; 

};














/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);