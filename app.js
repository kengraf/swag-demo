const unsplashApi = 'https://source.unsplash.com/photo/random';
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
  'Stay positive; stay hopeful.',
  'Open your heart and drink in this glorious day.',
  'Am I good enough? Yes i am.',
  'The perfect moment is this one.',
  'Life is about to be incredible.',
  'Nothing can dim the light that shines from within.',
  'You must do things that you think you cannot do.',
  'The secret of attraction is to love yourself.',
  'Look on the bright side, it doesn’t hurt anyone.',
  'Think big and your world will be big.',
  'Embrace the glorious mess that you are.',
  'Nothing is impossible the word itself say “I’m possible”.',
  'The only courage you ever need is the courage to fulfill the dreams of your own life.',
  'Write it on your heart that every day is the best day in the year.',
  'Hold up your head! You were not made for failure, you were made for victory.',
  'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.',
  'You are beatiful.',
  'Your smile is infectious',
  'Be kind to someone today',
  'Being kind is contagious',

];

async function displayQuote() {
  let quoteImage;

  try {
    // Fetch quote object from API
    const image = await fetch(unsplashApi);
    
    // Preload image
    response = await fetch(image.url);
    const iblob = await response.blob()
    quoteImage = URL.createObjectURL(iblob);
  } catch (error) {
    quote = { text: `Could not get image: ${error.message}` };
  }

  // Update background image
  document.body.style.background = quoteImage ? `url(${quoteImage}) center / cover` : '#f43';

  // Update text
  const div = document.getElementById('quote');
  div.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

displayQuote();
