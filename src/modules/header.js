window.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('#mobileDropDownMenuIcon');
  const mobileDDList = document.querySelector('#mobile-dd-detail');
  mobileMenu.addEventListener('click', () => {
    if (mobileMenu.getAttribute('menu-active') == 0) {
      console.log('closed');
      mobileMenu.setAttribute('menu-active', 1);
      mobileDDList.style.display = 'flex';
    } else {
      console.log('open');
      mobileMenu.setAttribute('menu-active', 0);
      mobileDDList.style.display = 'none';
    }
  });
});
