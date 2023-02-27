const unplashApi = 'https://source.unsplash.com/1600x900?dream';
const quotes = [
  'Wherever you go, no matter what the weather, always bring your own sunshine.',
  'You\’re awesome.',
  'Happiness is the only thing that multiplies when you share it.',
  'It always seems impossible until it is done.',
  'Let your unique positive energy inspire confidence in others.',
  'The best is yet to come.',
  'You\'re capable of more than you can even dream.',
  'You deserve the best.',
  'Keep going, you\'re doing well.',
  'Stay positive; stay hopeful'
];

async function displayQuote() {
  let quote;

  try {
    // Fetch quote object from API
    const image = await fetch(unplashApi);
    
    // Preload image
    response = await fetch(image.headers.location);
    const iblob = await response.blob()
    quote.image = URL.createObjectURL(iblob);
  } catch (error) {
    quote = { text: `Could not get image: ${error.message}` };
  }

  // Update background image
  document.body.style.background = quote.image ? `url(${quote.image}) center / cover` : '#f43';

  // Update text
  const div = document.getElementById('quote');
  div.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

displayQuote();
