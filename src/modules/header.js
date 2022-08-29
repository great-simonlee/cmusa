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

  const auth = firebase.auth();
  const db = firebase.firestore();
  const userMenu = document.querySelectorAll('.member-menu');
  const nonUserMenu = document.querySelectorAll('.non-member-menu');
  const userLogOut = document.querySelector('#mobile-dd-logout');

  auth.onAuthStateChanged((user) => {
    if (!user) {
      userMenu.forEach((el) => {
        el.style.display = 'none';
      });
      nonUserMenu.forEach((el) => {
        el.style.display = 'block';
      });
    } else {
      userMenu.forEach((el) => {
        el.style.display = 'flex';
      });
      nonUserMenu.forEach((el) => {
        el.style.display = 'none';
      });
      userLogOut.addEventListener('click', () => {
        auth.signOut();
      });
    }
  });
});
