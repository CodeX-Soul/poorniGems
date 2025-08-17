// Filter gems by type
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.dataset.filter;
    document.querySelectorAll('.gem-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.gemType === filter) ? 'block' : 'none';
    });
  });
});

// Live search functionality
document.getElementById('gemSearch').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  document.querySelectorAll('.gem-card').forEach(card => {
    const textContent = card.textContent.toLowerCase();
    card.style.display = textContent.includes(searchTerm) ? 'block' : 'none';
  });
});