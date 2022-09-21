// Code your solutions in this file
function writeCards() {
  const cards = ["Guadalupe", "Ollie", "Aki"];
  const surprise = [];
  for (let i = 0; i < cards.length; i++) {
    surprise[i] = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
  }
  return surprise;
}

function countDown() {
  let countdown = 10;
  while (countdown >= 0) {
    console.log(countdown--);
  }
}
