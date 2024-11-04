document.body.onkeydown = function(keypress_event) {
  var key = keypress_event.key;
  document.getElementById("key_display").innerHTML = key;
  if (key === 'g') {
      // Change background color
      document.body.style.backgroundColor = '#d1f0ff'; // Light blue
  } else if (key === 'r') {
      // Change font color of all <p> elements
      document.querySelectorAll('p').forEach(p => p.style.color = '#333333'); // Dark grey
  } else if (key === 'a') {
      // Target all elements with a specific class and change their color
      document.querySelectorAll('.indented').forEach(el => el.style.color = '#FFFFFF'); // Dark purple
  } else if (key === 'p') {
      // Target all <p> elements and adjust font size and line height
      document.querySelectorAll('p').forEach(p => {
          p.style.fontSize = '1.2em';
          p.style.lineHeight = '1.4';
      });
  } else if (key === 'e') {
      // Change multiple properties on the body
      document.body.style.backgroundColor = '#333333'; // Dark background
      document.body.style.color = '#FFFFFF'; // White text
      document.body.style.fontFamily = 'Courier New, monospace'; // Monospace font
  } else if (key === 's') {
    // Reset all styles to their original values
    document.body.style.backgroundColor = ''; // Reset background color
    document.body.style.color = ''; // Reset font color
    document.body.style.fontFamily = ''; // Reset font family

    document.querySelectorAll('p').forEach(p => {
        p.style.color = ''; // Reset paragraph color
        p.style.fontSize = ''; // Reset font size
        p.style.lineHeight = ''; // Reset line height
    });

    document.querySelectorAll('.indented').forEach(el => {
        el.style.color = ''; // Reset color for indented elements
    });
}};
