if (window.location.pathname.includes('mobile')) {
  setTimeout(() => {
    const hder = document.querySelector('#gnav');
    const fter = document.querySelector('#gfter');
    hder.style.display = 'none';
    fter.style.display = 'none';
  }, 10);
}
