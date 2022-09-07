if (window.location.pathname === '/user-verify/') {
  window.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();
    const db = firebase.firestore();
    console.log('user-verify');

    const backToMainPage = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // Take the user to a different screen here.
        window.location = '/mobile';
      } else {
        window.location = '/';
      }
    };

    auth.onAuthStateChanged((user) => {
      if (!user) {
        backToMainPage();
      } else {
        document.querySelector('#verifyUsername').value = user.displayName;
        document.querySelector('#verifyUsername').disabled = true;
        document.querySelector('#verifyUsername').style.color = '#c0c0c0';
        document.querySelector('#verifyEmail').value = user.email;
        document.querySelector('#verifyEmail').disabled = true;
        document.querySelector('#verifyEmail').style.color = '#c0c0c0';
        db.collection('userInfo')
          .doc(user.uid)
          .get()
          .then((res) => {
            if (res.data().number && res.data().wechat) {
              document.querySelector('#verifyNumber').value = res.data().number;
              document.querySelector('#verifyNumber').disabled = true;
              document.querySelector('#verifyNumber').style.color = '#c0c0c0';
              document.querySelector('#verifyWeChat').value = res.data().wechat;
              document.querySelector('#verifyWeChat').disabled = true;
              document.querySelector('#verifyWeChat').style.color = '#c0c0c0';
              document.querySelector('#verifyBtn').style.display = 'none';
            } else {
              console.log('no');
            }
          });
        document.querySelector('#verifyBtn').addEventListener('click', () => {
          // console.log('submit');
          document.querySelector('#verifyBtn').innerHTML = ``;
          document.querySelector('#verifyBtn').style.cursor = `wait`;
          db.collection('userInfo')
            .doc(user.uid)
            .set({
              username: user.displayName,
              email: user.email,
              number: document.querySelector('#verifyNumber').value,
              wechat: document.querySelector('#verifyWeChat').value,
              membership: '',
            })
            .then((res) => {
              backToMainPage();
            })
            .catch((err) => {
              console.log(err);
            });
        });
        // Skip back to the main page
        document
          .querySelector('#skipToMainBtn')
          .addEventListener('click', () => {
            backToMainPage();
          });
      }
    });
  });
}
