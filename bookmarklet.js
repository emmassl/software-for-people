javascript:(function(){
    // Inject CSS to change word color on hover
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        .hoverable-word { color: black; transition: color 0.3s ease; }
        .hoverable-word:hover { color: white; }
      </style>
    `);
  
    // Function to wrap each word in a span
    function wrapWordsInSpans(element) {
      element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          // Split the text content into words and wrap each in a span
          const words = node.textContent.split(' ').map(word => `<span class="hoverable-word">${word}</span>`).join(' ');
          const wrapper = document.createElement('span');
          wrapper.innerHTML = words;
          node.replaceWith(wrapper);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // Recursively process element nodes
          wrapWordsInSpans(node);
        }
      });
    }
  
    // Apply the function to the entire body
    wrapWordsInSpans(document.body);
  })();