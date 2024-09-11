document.addEventListener("DOMContentLoaded", function () {
    // Get all radio buttons and game elements
    const radioButtons = document.querySelectorAll('input[name="category"]');
    const games = document.querySelectorAll('.game-link');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            const selectedCategory = this.id; // Get the selected category (id of radio)
            console.log(`Selected category: ${selectedCategory}`); // Debugging output

            games.forEach(game => {
                const gameCategory = game.getAttribute('data-category'); // Get game's category
                console.log(`Game category: ${gameCategory}`); // Debugging output

                // Show or hide the game based on the selected category
                if (selectedCategory === 'all' || selectedCategory === gameCategory) {
                    game.style.display = 'block';
                } else {
                    game.style.display = 'none';
                }
            });
        });
    });
});