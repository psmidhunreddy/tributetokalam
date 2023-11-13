var quoteOptions = [{
    quote: "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
    name: "A. P. J. Abdul Kalam"
  }, 
  {
    quote: "You have to dream before your dreams can come true.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "A dream is not that which you see while sleeping, it is something that does not let you sleep.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "You should not give up and we should not allow the problem to defeat us.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "If you want to shine like a sun, first burn like a sun.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "I was willing to accept what I couldn’t change.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "Man needs difficulties in life because they are necessary to enjoy success.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "Let us sacrifice our today so that our children can have a better tomorrow",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "I am not handsome but I can give my hand to someone who needs help… Because beauty is required in the heart, not in face…",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "The best brains of the nation may be found on the last benches of the classroom.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "Excellence happens not by accident. It is a process.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "Winners are not those who never fail but those who never quit.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "Two rules for a peaceful life: Depression in failure should never go to heart, and ego in success should never go to the brain.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "Luxury and Lies have huge maintenance costs. But Truth and Simplicity are self-maintained without any cost.",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "“Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.”",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "“To succeed in your mission, you must have single-minded devotion to your goal.”",
    name: "A. P. J. Abdul Kalam"
  },
  {
    quote: "“If you fail, never give up because Fail means “First Attempt In Learning”.",
    name: "A. P. J. Abdul Kalam"
  }
 ];
  
  function initialize_generate() {
    var sweetspot = Math.floor((Math.random() * quoteOptions.length));
    for (var i = 0; i <= quoteOptions.length; i++) {
  
      if (i === sweetspot) {
        var quoteHtml = generate_html(quoteOptions[i]);
        $(".quote").empty().append(quoteHtml);
         //only include tweet link when button pressed, doesn't make sense for anyone to tweet my placeholder quote that only makes sense within the scope of this app.
      }
    }
  }
  
  function generate_html(quoteObj) {
  
    var quoteHtml = "<i> " + quoteObj["quote"] + " </i> <br> <b> - " + quoteObj["name"] + " </b>";
    return quoteHtml
  }
  