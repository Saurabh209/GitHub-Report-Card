const navbar = document.querySelector('.navbar');
const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', () => {
  navbar.classList.toggle('dark-mode');
});