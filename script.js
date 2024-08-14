let menu = document.querySelector('#menu-bar');
let head = document.querySelector('.head .navbar');

menu.onclick = () => {
    head.classList.toggle('active');
};

window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
};

// Request permission to send notifications
function requestNotificationPermission() {
    if (Notification.permission === "default") {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
  }
  
  // Call this function when appropriate (e.g., on page load or user action)
 requestNotificationPermission();

 // login form
 // Add this to your existing script.js or create a new file for login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate a login request (replace with actual API call)
    console.log('Logging in with', email, password);
    alert('Logged in!');
    
    // Redirect to home or dashboard
    window.location.href = 'index.html'; // Update as necessary
});
//event registration
// Add this to your existing script.js or create a new file for event registration functionality
document.getElementById('registerEventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventId = document.getElementById('eventId').value;
    const userName = document.getElementById('userName').value;
    
    // Simulate a registration request (replace with actual API call)
    console.log('Registering for event:', eventId, 'by', userName);
    alert('Registered for event!');
    
    // Redirect or reset form
    window.location.href = 'index.html'; // Update as necessary
});
