const registerLink = document.querySelector('.registerlink');
const loginLink = document.querySelector('.loginlink');

const signUp = document.querySelector('#signup');
const signIn = document.querySelector('#signin');

registerLink.addEventListener('click', () => {
  signUp.style.display = 'block';
  signIn.style.display = 'none';
});

loginLink.addEventListener('click', () => {
  signUp.style.display = 'none';
  signIn.style.display = 'block';
});