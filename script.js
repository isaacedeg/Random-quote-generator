
const array = [
    {
      "quote": "Have no fear of perfection, you'll never reach it.",
      "author": "-Salvador Dali"
    },
    {
      "quote": "It always seems impossible until it is done.",
      "author": "-Nelson Mandela"
    },
    {
      "quote": "One person can make a difference and everyone should try.",
      "author": "-John F. Kennedy"
    },
    {
      "quote": "Life is not fair and perhaps it is a good thing for most of us.",
      "author": "-Oscar Wilde"
    },
    {
      "quote": "The purpose of our lives is to be happy.",
      "author": "-Dalai Lama"
    },
    {
      "quote": "You will face many defeats in life but never get defeated.",
      "author": "-Maya Angelou"
    },
    {
      "quote": "Life is made of ever so many partings welded together.",
      "author": "-Charles Dickens"
    }
];
function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  document.getElementById("quote").innerHTML = item.quote;
  document.getElementById("author").innerHTML = item.author;
}
