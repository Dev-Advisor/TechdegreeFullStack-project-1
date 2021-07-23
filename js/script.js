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
// Quotes array of objects stores 6 quotes.
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
  },

  {
    source: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },

  {
    source:"Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },

  {
    source: "Martin Luther",
    quote: "I cannot and will not recant anything, for to go against conscience is neither right nor safe. Here I stand, I can do no other, so help me God. Amen.",
    citation: "Where God Builds a Church, the Devil Builds a Chapel.",
    year: "1942"
  }
  
  ];
  
  /***
 * `getRandomQuote` function
 *  getRandomQuote takes quotes array object and give a random quote
***/

function getRandomQuote () {
// This varible stores a random number generator.
let randomNumber = Math.floor(Math.random() * 6)

//qoute varible stores quotes array and use randomNumber to generate a random quote.
let qoute = quotes[randomNumber];


return qoute

};

/***
 * `printQuote` function
 printquote take RandomQuote and manipulates the data to print a random quote on the screen.
***/

function printQuote () {
//randomQuote store the random quote generater.
 let randomQuote = getRandomQuote();

 // createQuote combines randomQuote with html to generate a random quote on screen.
  let createQuote =  `<p class="quote">${randomQuote.quote}</p>, 
                      <p class="source">${randomQuote.source}</p>`


  // If statments allow createQuote to have different meta data depending on what randomQuote generates.
   if(randomQuote.citation) {
      createQuote += `<span class="citation"> ${randomQuote.citation} </span>,`;
      }; 

  if(randomQuote.year) {
       createQuote +=  `<span class="citation"> ${randomQuote.year} </span>,`;
       }; 
                                      
    document.getElementById('quote-box').innerHTML = createQuote; 

};














/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);