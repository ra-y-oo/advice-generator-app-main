const apiUrl = "https://api.adviceslip.com/advice"
const dice = document.querySelector(".circle")
let previousAdvice = [];


function fetchRandomQuote(){
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the response data here
      const adviceId = data.slip.id;
      const advice = data.slip.advice;

      if (!previousAdvice.includes(adviceId, advice)){
        previousAdvice.push(adviceId, advice)
        document.querySelector("#advice-id").innerHTML = adviceId;
        document.querySelector("#advice-txt").innerHTML = advice;
      } else {
        fetchRandomQuote();
      }

/*       console.log(data.slip.id); */
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.log(error);
    });
}

dice.addEventListener("click", ()=> {fetchRandomQuote()});

fetchRandomQuote();