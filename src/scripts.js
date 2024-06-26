document.getElementById('search').addEventListener('keyup', function() {
    let searchValue = this.value.toLowerCase();
    let recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(function(card) {
        let recipeTitle = card.querySelector('h3').textContent.toLowerCase();
        if (recipeTitle.includes(searchValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
