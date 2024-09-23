// Get all the navigation links
const navLinks = document.querySelectorAll('#nav a');

// Get the checkbox
const checkbox = document.getElementById('check');

// Add click event listener to all nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false; // Uncheck the checkbox to close the menu
  });
});



// // Smooth scrolling and active link highlighting
// // Select all nav links
// Add click event listener to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Smooth scroll to the corresponding section
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//dark-mode
const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
body.classList.toggle("dark");
});

// ........About-popup.........
  //popup show
  let popup = document.getElementById("popup");
  let container = document.getElementById("container");

  function openPopup(){ 
    popup.classList.add("open-popup");
    body.classList.add("popupblur");// Add blur class to body
  }
  
  function closePopup(){
    popup.classList.remove("open-popup");
    body.classList.remove('popupblur'); // Remove blur class
  }


//Hero-section
    var typed = new Typed('#element', {
        strings: ['Front-End Developer','c++ Developer','IOT Developer'],
        typeSpeed: 50,  // Speed at which characters are typed
        loop: true,     // Enable looping
        loopCount: Infinity,  // Loop infinitely (default)
        backDelay: 1000,  // Delay before starting to erase text
      });

// ........Show Toast Notification..............
document.getElementById("toastBtn").addEventListener("click", function() {
  var toast = document.getElementById("toast");
  toast.className = "toast show";
  
  // Remove the toast after 3 seconds
  setTimeout(function(){
    toast.className = toast.className.replace("show", "");
  }, 5000);
});






