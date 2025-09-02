// Set year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("learnMore").addEventListener("click", function () {
  document.getElementById("programs").scrollIntoView({
    behavior: "smooth"
  });
});


// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
});

// Donation buttons
document.getElementById("donate-500").addEventListener("click", function() {
  alert("Thank you for donating ₹500 ❤️");
});
document.getElementById("donate-1000").addEventListener("click", function() {
  alert("Thank you for donating ₹1000 ❤️");
});
