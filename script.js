// script.js
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for your message, Bala will reach out to you soon!");
  this.reset();
});
