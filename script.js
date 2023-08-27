const API_URL = "https://api.chucknorris.io/jokes/random";

const btnJoke = document.querySelector("#fetchJokeButton");
const jokeText = document.querySelector("#jokeText");

async function fetchJoke() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    jokeText.textContent = data.value;
  } catch (err) {
    console.error(err);
    jokeText.textContent = "Error fetching joke. Please try again.";
  }
}

btnJoke.addEventListener("click", fetchJoke);
