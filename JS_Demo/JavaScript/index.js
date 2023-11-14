const showTextButton = document.getElementById('show-text-button');
const title = document.querySelector('.title');
const discoLights = document.querySelector('.disco-lights');

showTextButton.addEventListener('click', function() {
  showTextButton.style.display = 'none';
  title.style.display = 'block';
  discoLights.style.display = 'block';
});

// add each letter of the title to a span with a class of "letter"
const letters = title.textContent.split('');
title.textContent = '';
letters.forEach(letter => {
  const span = document.createElement('span');
  span.classList.add('letter');
  span.textContent = letter;
  title.appendChild(span);
});

// add a "bounce" class to each letter every 500ms
setInterval(function() {
  const letters = document.querySelectorAll('.letter');
  letters.forEach(letter => {
    letter.classList.toggle('bounce');
  });
}, 500);

// remove the disco lights after 10 seconds
setTimeout(function() {
  discoLights.style.display = 'none';
}, 10000);
