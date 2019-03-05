// List of Words in Game
var selectableWords = 
[
    "dua lipa",
    "bruno mars",
    "cardi b",
    "john legend",
    "beyonce",
    "rihanna",
    "jason aldean",
    "the chainsmokers",
    "bts",
    "drake",
    "the weeknd"
];
// Total number of tries the user has
const maxTries = 10;

// Letters the user has guessed
var guessedLetters = [];

// Index of the current word in the array
var currentWordIndex;

// This will be the word we build to match the current word
var guessingWord = [];

// Number of tries the user has left
var remainingGuesses = 0;

// Sign to tell if the game has started
var gameStarted = false;

// Sign for 'press any key to try again'
var hasFinished = false;

// Wins the player has accumulated
var wins = 0;

