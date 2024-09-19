document.getElementById('getJoke').addEventListener('click', fetchJoke);
document.getElementById('getQuote').addEventListener('click', fetchQuote);

async function fetchJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    document.getElementById('jokeDisplay').textContent = data.value;
}

