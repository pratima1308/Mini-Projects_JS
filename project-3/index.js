const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
  "I believe life is an intelligent thing: that things aren't random.",
  "Sometimes life hits you in the head with a brick. Don't lose faith.",
  "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomId = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomId)) continue;

    const quote = quotes[randomId];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomId);
    break;
  }
}
