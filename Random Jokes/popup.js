const jokes = [
    `Why did the chicken cross the road?
To get to the other side.`,
    "Why was the math book sad?\nBecause it had too many problems.",
    // Add more jokes to your array
];

document.addEventListener("DOMContentLoaded", function () {
    const jokeDisplay = document.getElementById("jokeDisplay");
    const generateJokeButton = document.getElementById("generateJoke");

    function getRandomJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeDisplay.value = jokes[randomIndex];
    }

    generateJokeButton.addEventListener("click", getRandomJoke);
});
