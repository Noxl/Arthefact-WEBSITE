// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menuToggle').addEventListener('click', function() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('active');
  });

  // Toggle search bar
  document.getElementById('searchToggle').addEventListener('click', function(event) {
    event.preventDefault();
    const searchWrapper = document.getElementById('searchWrapper');
    searchWrapper.classList.toggle('active');
  });

  // Handle dropdown menu behavior
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const teaDropdown = document.getElementById('teaDropdown');
  
  // Only use click event for mobile
  dropdownToggle.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      teaDropdown.classList.toggle('active');
    }
  });

  // Reset menu and search display on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      document.getElementById('menuItems').classList.remove('active');
      document.getElementById('teaDropdown').classList.remove('active');
      document.getElementById('searchWrapper').classList.remove('active');
    }
  });
});