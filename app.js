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

async function getImage() {
  return new Promise((resolve, reject) => {
    https.get(unplashApi, (response) => {
      // API returns a HTTP 302 code, we only want the final image URL
      resolve(response.headers.location);
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}

async function displayQuote() {
  let quote;

  try {
    // Fetch quote object from API
    const image = await getImage();
    const text = quotes[Math.floor(Math.random() * quotes.length)];
    
    let response = await fetch('/api/quote');
    quote = await response.json();

    // Preload image
    response = await fetch(quote.image);
    const iblob = await response.blob()
    quote.image = URL.createObjectURL(iblob);
  } catch (error) {
    quote = { text: `Could not get image: ${error.message}` };
  }

  // Update background image
  document.body.style.background = quote.image ? `url(${quote.image}) center / cover` : '#f43';

  // Update text
  const div = document.getElementById('quote');
  div.textContent = text;
}

displayQuote();
