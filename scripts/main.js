import { useJoke, getJoke, getJokeType } from "./JokeProvider.js";
import { Joke } from "./Joke.js";



const jokeBtn = document.querySelector(".request-joke-btn");
jokeBtn.addEventListener("click", (e) => {
  const contentSetup = document.querySelector(".joke-setup")
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  let jokeType = document.querySelector("#jokeTypes")
  let jokeTypeValue = jokeType.value
  console.log(jokeTypeValue)
  getJokeType(jokeTypeValue).then(_ => { 
    console.log("After Get hjoke")
    const step1 = useJoke()
    console.log("After Get use joke")
    contentSetup.innerHTML = Joke(step1,"setup")
  })
  .then(_ => {
    console.log("Then tester.");
    const jokeBtn2 = document.querySelector(".request-joke-btn2");
    const contentPunchline = document.querySelector(".joke-punchline")
    contentPunchline.innerHTML = ""
    jokeBtn2.addEventListener("click", (f) => {
      console.log("I should be grabbing the punchline now...");
      // TODO: fetch a joke from the Joke API and render it to the DOM
      // getJoke().then(_ => { 
        const contentPunchline = document.querySelector(".joke-punchline")
        const step2 = useJoke()
        console.log("Joked Used",step2)
        contentPunchline.innerHTML = Joke(step2,"punchline")
      // })
    })
  
  })

})


