const quotes=[
    {
    source: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken",
    },
  
    {
    source:"Bernard Baruch",
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    },
  
    {
    source: "Mae West",
    quote: "You only live once, but if you do it right, once is enough."
    },
  
    {
    source: "Saint Augustine",
    quote: "Do the heaven and earth then contain Thee, since Thou fillest them?",
    citation: "Confessions of Augustine",
    year: "AD 401"
    },
  
    {
    source: "Ralph Waldo Emerson",
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    },
  ];
  
  function randomquote(quo){
  let quote_body=[];
  for(let i=0; i<quo.length; i+=1){
    quote_body= push(quo[i].source);
    
  
  }
  return quote_body;
  
  }
  
  console.log(randomquote(quotes));