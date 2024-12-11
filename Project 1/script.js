// Array of image URLs
const images = [
    '/Pasifika/pasifika.png',
    '/Pasifika/PacifikaLogoNewcopy.png',
    '/Pasifika/8.png',
    '/Pasifika/4.png'
  ];
  
  // Get the main image element
  const hoverImage = document.getElementById('hoverImage');
  
  let currentImageIndex = 0;
  let interval;
  
  // Function to start the image loop
  function startImageLoop() {
    interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      hoverImage.src = images[currentImageIndex];
    }, 200); // Change images every 200ms
  }
  
  // Function to stop the image loop
  function stopImageLoop() {
    clearInterval(interval);
    hoverImage.src = images[0]; // Reset to the first image
  }
  
  // Add hover event listeners
  hoverImage.addEventListener('mouseenter', startImageLoop);
  hoverImage.addEventListener('mouseleave', stopImageLoop);
  