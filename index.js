const apiUrl = "https://api.adviceslip.com/advice"
const dice = document.querySelector(".circle")

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the response data here
    document.querySelector("#advice-id").innerHTML = data.slip.id
    document.querySelector("#advice-txt").innerHTML = data.slip.advice
    console.log(data.slip.id);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.log(error);
  });

  dice.addEventListener('click', ()=>{
    fetch(apiUrl)
  })
