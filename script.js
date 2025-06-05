function flipCard(card) {
    // If card is already flipped, expand it instead of flipping again
    if (card.classList.contains('flipped')) {
        expandCard(card);
        return;
    }
    
    // Flip the card
    card.classList.add('flipped');
}

function closeCard(card) {
    // If card is expanded, just unexpand it
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        document.getElementById('overlay').style.display = 'none';
    } 
    // If card is only flipped, unflip it
    else if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
    }
}

function expandCard(card) {
    card.classList.add('expanded');
    document.getElementById('overlay').style.display = 'block';
}

function closeAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        closeCard(card);
    });
}

// Close card when clicking outside (on overlay)
document.addEventListener('click', function(event) {
    if (!event.target.closest('.card') && !event.target.closest('.close-btn')) {
        closeAllCards();
    }
});

// Close card when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllCards();
    }
});