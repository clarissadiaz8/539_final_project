document.addEventListener('DOMContentLoaded', function() {
  // Creating variables for the style switcher button and the theme stylesheet
  var styleSwitcherButton = document.getElementById('style-switcher');
  var themeStylesheet = document.getElementById('theme-stylesheet');
// Adding an event listener to the style switcher button
  styleSwitcherButton.addEventListener('click', function() {
    if (themeStylesheet.getAttribute('href') == "css/style.css") {
      themeStylesheet.href = "css/throwback-style.css"; // Change to the new style
      this.textContent = 'Modern'; // Change the button text to "Modern"
    } else {
      themeStylesheet.href = "css/style.css"; // Switch back to the original style
      this.textContent = 'Throwback'; // Change the button text to "Throwback"
    }
  });
});
