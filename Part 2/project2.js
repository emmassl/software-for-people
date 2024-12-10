// DATE: Function to display today's date in the format: "Month Day, Year"
function displayDate() {
    const dateElement = document.getElementById("current-date");
    const today = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = today.toLocaleDateString('en-US', options);

    dateElement.textContent = formattedDate;
}
// CALL TO DATE: Call the function to display the date on page load
displayDate();


// List of names and corresponding phone numbers
const contacts = [
  { name: "Emma", phone: "XXXXXXXXXX" },
  { name: "Mattie", phone: "XXXXXXXXXX" },
  { name: "Erika", phone: "XXXXXXXXXX" },
  { name: "Ruby", phone: "XXXXXXXXXX" },
  { name: "Gillian", phone: "XXXXXXXXXX" },
  { name: "Kiki", phone: "XXXXXXXXXX" },
  { name: "Haruna", phone: "XXXXXXXXXX" },
  { name: "Suhaila", phone: "XXXXXXXXXX" },
  { name: "T8luh", phone: "XXXXXXXXXX" },
  { name: "Danika", phone: "XXXXXXXXXX" },
  { name: "Ailee", phone: "XXXXXXXXXX" },
  { name: "Tilde", phone: "XXXXXXXXXX" },
  { name: "Kiana", phone: "XXXXXXXXXX" },
  { name: "Jairus", phone: "XXXXXXXXXX" },
  { name: "Sam", phone: "XXXXXXXXXX" }
];

// List of prompts
const prompts = [
  "Something you learned recently",
  "Bananas",
  "Recent songs",
  "Peculiar happenings",
  "Distant aspirations",
  "Goals for today",
  "The largest and smallest animals you've ever seen",
  "Something you'd like to get rid of",
  "A recent dream",
  "Something funny you saw or overheard recently",
  "Your last Google search",
  "Something you miss right now",
  "Your latest obsession",
  "The last book or article read",
  "A recent unexpected surprise",
  "Something you're proud of",
  "Something you've been procrastinating",
  "A random memory",
  "The most beautiful thing you saw this week",
  "Something you don't understand",
];

// Function to pick a random name and prompt
function getRandomDailyContent() {
  const nameElement = document.getElementById("name");
  const promptElement = document.getElementById("prompt");
  const callButton = document.getElementById("call-btn");
  const textButton = document.getElementById("text-btn");

  // Pick random contact and prompt
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

  // Update the page with the random contact and prompt
  nameElement.textContent = randomContact.name;
  promptElement.textContent = `About: ${randomPrompt}`;

  // Set call and text actions
  callButton.onclick = () => {
    //alert(`Calling ${randomContact.name} at ${randomContact.phone}`);
    window.location.href = `tel:${randomContact.phone}`;
  };

  textButton.onclick = () => {
    //alert(`Texting ${randomContact.name} at ${randomContact.phone}`);
    window.location.href = `sms:${randomContact.phone}`;
  };
}

// Initialize the page 
document.addEventListener("DOMContentLoaded", () => {
  displayDate();
  getRandomDailyContent();
});

//gcal prompt
// document.getElementById('addReminderLink').addEventListener('click', function (event) {
//   event.preventDefault(); // Prevent the default anchor link behavior

//   // Event details
//   const title = encodeURIComponent('Daily AERIN Reminder');
//   const description = encodeURIComponent('Call a friend today!');

//   // Get today's date in YYYYMMDD format
//   const today = new Date();
//   const year = today.getUTCFullYear();
//   const month = String(today.getUTCMonth() + 1).padStart(2, '0');
//   const day = String(today.getUTCDate()).padStart(2, '0');

//   const startDate = `${year}${month}${day}`;

//   // Define start and end times in HHMMSS format (9:00 AM to 9:30 AM UTC)
//   const startTime = '090000Z';
//   const endTime = '093000Z';

//   // Full date-time strings for Google Calendar link
//   const startDateTime = `${startDate}T${startTime}`;
//   const endDateTime = `${startDate}T${endTime}`;

//   // Google Calendar event link with daily recurrence
//   const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&dates=${startDateTime}/${endDateTime}&recur=RRULE:FREQ=DAILY`;

//   // Open the link in a new tab
//   window.open(googleCalendarLink, '_blank');
// });





// // Add an event listener for a tap/click
// document.querySelector(".screen").addEventListener("click", () => {
//   alert("Welcome, Aerin!"); // You can replace this with any functionality
// });
  
// JAVA TO TRANSITION TEXT
// document.addEventListener("DOMContentLoaded", () => {
//   const textElement = document.getElementById("text");
//   const messages = [
//     "Welcome to AERIN, Aerin! since it’s your first time here, let me show you how this works.",
//     "AERIN, named after you, is an web application designed specifically for, and only for, you.",
//     "AERIN works by suggesting a new contact each day for you to call or text, paired with a fun prompt to discuss within your conversation.",
//     "On a deeper level,  it’s designed to help in mindfully maintaining connections with those you care about."
//   ];
//   let currentIndex = 0;

//   function changeText() {
//     // Fade out
//     textElement.style.opacity = "0";

//     setTimeout(() => {
//       // Change text after fade-out
//       currentIndex = (currentIndex + 1) % messages.length;
//       textElement.textContent = messages[currentIndex];

//       // Fade back in
//       textElement.style.opacity = "1";
//     }, 1000); // Match the duration of the CSS transition (1s)
//   }

//   // Automatically change text every 3 seconds
//   setInterval(changeText, 3000);
// });


// jAVA TO CHECK IF VISITOR HAS VISITED
// document.addEventListener("DOMContentLoaded", () => {
//   const firstVisitDiv = document.getElementById("first-visit");
//   const mainContentDiv = document.getElementById("main-content");
//   const continueButton = document.getElementById("continue");

//   // Check if the user has visited before using localStorage
//   if (localStorage.getItem("visited")) {
//     // User has visited before, show the main content
//     mainContentDiv.style.display = "block";
//   } else {
//     // User has not visited, show the first-visit page
//     firstVisitDiv.style.display = "block";

//     // Mark the site as visited when the user clicks "Continue"
//     continueButton.addEventListener("click", () => {
//       localStorage.setItem("visited", "true");
//       firstVisitDiv.style.display = "none";
//       mainContentDiv.style.display = "block";
//     });
//   }
// });



// UNUSED: 
// function addContact() {
//     // Prompt user for name and phone number
//     const name = prompt("Enter the contact's name:");
//     if (!name) return; // Exit if name is not provided

//     const phone = prompt("Enter the contact's phone number:");
//     if (!phone) return; // Exit if phone is not provided

//     // Create a new <p> element with the contact details
//     const contactList = document.getElementById("contact-list");
//     const newContact = document.createElement("p");
//     newContact.innerHTML = `${name} <span>${phone}</span>`;

//     // Append the new contact to the contact list
//     contactList.appendChild(newContact);
// }