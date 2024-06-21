  // ###################### Function to give a responsive and animated scroll #######################

$(document).ready(function() {
    // Scroll animation
    $('.animate').waypoint(function() {
      $(this.element).addClass('visible');
    }, { offset: '75%' });
  
  });
  

  // ###################### Function to control the active nablinks  #######################

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // To remove 'active' class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // To add 'active' class to the clicked nav link
        this.classList.add('active');
      });
    });
  });
  
