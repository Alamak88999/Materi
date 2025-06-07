function flipCard(card) {
    // Jika kartu sudah expanded, jangan lakukan apa-apa
    if (card.classList.contains('expanded')) return;
    
    // Tutup semua kartu yang terbuka terlebih dahulu
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        if (c !== card && c.classList.contains('flipped')) {
            c.classList.remove('flipped');
        }
    });
    
    // Buka/tutup kartu yang diklik
    card.classList.toggle('flipped');
}

function expandCard(event, button) {
    event.stopPropagation();
    const card = button.closest('.card');
    
    // Tutup semua kartu yang terbuka terlebih dahulu
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        if (c !== card && c.classList.contains('expanded')) {
            c.classList.remove('expanded');
            c.classList.remove('flipped');
        }
    });
    
    // Expand kartu yang diklik
    card.classList.add('expanded');
    document.body.classList.add('has-expanded-card');
    
    // Buat overlay
    if (!document.querySelector('.overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.onclick = function() {
            closeAllExpandedCards();
        };
        document.body.appendChild(overlay);
    }
}

function closeExpanded(event, button) {
    event.stopPropagation();
    const card = button.closest('.card');
    card.classList.remove('expanded');
    document.body.classList.remove('has-expanded-card');
}

function closeAllExpandedCards() {
    const expandedCards = document.querySelectorAll('.card.expanded');
    expandedCards.forEach(card => {
        card.classList.remove('expanded');
    });
    document.body.classList.remove('has-expanded-card');
}

function nextPage(event, button) {
    event.stopPropagation();
    const currentPage = button.closest('.page');
    const nextPage = currentPage.nextElementSibling;
    
    if (nextPage && nextPage.classList.contains('page')) {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
    }
}

function prevPage(event, button) {
    event.stopPropagation();
    const currentPage = button.closest('.page');
    const prevPage = currentPage.previousElementSibling;
    
    if (prevPage && prevPage.classList.contains('page')) {
        currentPage.classList.remove('active');
        prevPage.classList.add('active');
    }
}

// Tutup expanded card ketika menekan ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllExpandedCards();
    }
});