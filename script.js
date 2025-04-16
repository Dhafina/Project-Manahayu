document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-link.active').classList.remove('active');
            this.classList.add('active');
        });
    });
});

// Fungsi untuk memuat komponen header & footer
function loadComponent(containerId, file, callback) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
          if (callback) callback();
      })
      .catch(error => console.error("Error loading " + file, error));
}
-                                                                          
// Add any JS functionality as needed
document.querySelector('.book-now').addEventListener('click', () => {
    alert("Redirect to booking page");
  });
  
  document.querySelector('.signup-btn').addEventListener('click', () => {
    alert("Redirect to sign-up page");
  });
  
  document.querySelector('.login-btn').addEventListener('click', () => {
    alert("Redirect to login page");
  });

  // Add any JS functionality as needed
document.querySelector('.order-now').addEventListener('click', () => {
    alert("Redirect to order page");
  });
  
  document.querySelector('.see-all').addEventListener('click', () => {
    alert("See all available menu items or packages");
  });