document.addEventListener("DOMContentLoaded", function () {
  // Load Header & Footer
  loadComponent("header", "component/header.html");
  loadComponent("footer-container", "componen/footer.html");

  // Book Now Button
  const bookNowBtn = document.querySelector('.book-now');
  if (bookNowBtn) {
    bookNowBtn.addEventListener('click', () => {
      alert("Redirect to booking page");
    });
  }

  // Signup Button
  const signupBtn = document.querySelector('.signup-btn');
  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      alert("Redirect to sign-up page");
    });
  }

  // Login Button
  const loginBtn = document.querySelector('.login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      alert("Redirect to login page");
    });
  }

  // Order Now Button
  const orderNowBtn = document.querySelector('.order-now');
  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
      alert("Redirect to order page");
    });
  }

  // See All Button
  const seeAllBtn = document.querySelector('.see-all');
  if (seeAllBtn) {
    seeAllBtn.addEventListener('click', () => {
      alert("See all available menu items or packages");
    });
  }
});

function loadComponent(containerId, file, callback) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("HTTP error " + response.status);
      return response.text();
    })
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => console.error("Error loading " + file, error));
}
