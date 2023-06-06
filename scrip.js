// Array of jokes
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What's the best time to go to the dentist? Tooth-hurty!",
  "How do you organize a space party? You planet!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "Why don't eggs tell jokes? Because they might crack up!"
];

// Function to generate a random joke
function generateJoke() {
  const jokeContainer = document.getElementById("joke-container");
  const jokeText = document.getElementById("joke-text");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  jokeText.textContent = randomJoke;
}

// Event listener for the button click
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateJoke);

