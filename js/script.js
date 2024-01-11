

document.addEventListener('DOMContentLoaded', function () {
    var pageTitle = document.querySelector('.main-page-text-title');

    pageTitle.textContent = 'Welcome to Finsweet!';
});


document.addEventListener('DOMContentLoaded', function () {
    var viewWorkButton = document.querySelector('.main-page-button2');

    viewWorkButton.addEventListener('mouseover', function () {
        viewWorkButton.style.color = '#FF4500';
    });
    viewWorkButton.addEventListener('mouseout', function () {
        viewWorkButton.style.color = '#1B1C2B';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.main-page-menu a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('mouseover', function () {
            menuItem.style.color = '#FF4500';
            menuItem.style.fontSize = '18px';
        });

        menuItem.addEventListener('mouseout', function () {
            menuItem.style.color = 'white';
            menuItem.style.fontSize = '16px';
        });
    });
});




  
    document.querySelector('.form-btn').addEventListener('mouseover', function() {
      
        this.style.color = '#FF5733';
    });

  
    document.querySelector('.form-btn').addEventListener('mouseout', function() {

        this.style.color = '';
    });

