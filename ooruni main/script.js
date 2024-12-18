
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('#navbarDropdownMenuLink');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // Prevent dropdown menu from closing when clicking on items
    dropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the dropdown from closing
    });

    // Change background color on click and revert
    dropdownMenu.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var previouslyActive = dropdownMenu.querySelector('.active');
            if (previouslyActive) {
                previouslyActive.classList.remove('active');
            }
            this.classList.add('active');

            // Optional: remove class after some time
            setTimeout(() => {
                this.classList.remove('active');
            }, 500); // Adjust time as necessary
        });
    });
});
