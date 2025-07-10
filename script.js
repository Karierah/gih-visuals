document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  // Filtering logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat)
          ? 'block' : 'none';
      });
    });
  });

  // Lightbox open on click
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
});
// Dark mode toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
