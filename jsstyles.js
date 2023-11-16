document.addEventListener("DOMContentLoaded", function() {
  const aboutme = document.getElementById("aboutme");
  const myquotes = document.getElementById("myquotes");
  const socialmedia1 = document.getElementById("socialmedia1");
  const quotes = document.getElementById("quotes");
  const aboutmecontent = document.getElementById("aboutmecontent");
  const myquotescontent = document.getElementById("myquotescontent");
  const socialmediacontent = document.getElementById("socialmediacontent");
  const quotescontent = document.getElementById("quotescontent")

 

  aboutme.addEventListener("click", function() {
    smoothScroll(aboutmecontent);
  });

  myquotes.addEventListener("click", function() {
    smoothScroll(myquotescontent);
  });

  socialmedia1.addEventListener("click", function() {
    smoothScroll(socialmediacontent);
  });

  quotes.addEventListener("click", function() {
    smoothScroll(quotescontent);
  });
 
  
  
  function smoothScroll(target) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust as needed
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});