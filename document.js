// Documents and Appointments Page Functionality

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Document filtering functionality
function initializeDocumentFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const documentCards = document.querySelectorAll('.document-card');
    const searchInput = document.getElementById('documentSearch');

    // Filter by category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            documentCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });    
        });
    });
}

        function toggleNavbar() {
            let nav = document.getElementById("navbar");
            nav.classList.toggle("responsive");
        }
