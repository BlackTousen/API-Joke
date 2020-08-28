// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string
export const Joke = (input,helper) => {
// return `<p class="joke-punchline">${input.setup}${input.punchline}</p>`
    if (helper === "punchline") { 
        // const contentPunchline = document.querySelector(".joke-punchline")
        // contentPunchline.innerHTML += 
        return `<p class="joke-punchline">${input.punchline}</p>` 
    }
    else { return `<p class="joke-setup">${input.setup}</p>` }
}