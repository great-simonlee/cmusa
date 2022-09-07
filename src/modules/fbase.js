window.addEventListener('DOMContentLoaded', () => {
  const auth = firebase.auth();

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
    if (user) {
      const signUpLogInDiv = document.querySelector('#signUpLogInDiv');
      const userMenuDiv = document.querySelector('#userMenuDiv');
      const userMenu = document.querySelector('#userMenu');
      const ddMenu = document.querySelector('#dd-menu-cont');
      const logOutBtn = document.querySelector('#logOutBtn');
      signUpLogInDiv.style.display = 'none';
      userMenuDiv.style.display = 'flex';

      userMenu.addEventListener('click', () => {
        if (ddMenu.style.display == 'none') {
          ddMenu.style.display = 'flex';
        } else {
          ddMenu.style.display = 'none';
        }
      });

      logOutBtn.addEventListener('click', () => {
        auth.signOut();
        signUpLogInDiv.style.display = 'flex';
        userMenuDiv.style.display = 'none';
      });

      if (window.location.pathname === '/member-login/') {
        backToMainPage();
      }

      if (window.location.pathname === '/member-signup/') {
        document.location.href = '/user-verify';
      }
    } else {
      if (window.location.pathname === '/member-login/') {
        const logInEmail = document.querySelector('#logInEmail');
        const logInPassword = document.querySelector('#logInPassword');

        const logInBtn = document.querySelector('#logInBtn');
        logInBtn.addEventListener('click', () => {
          auth
            .signInWithEmailAndPassword(logInEmail.value, logInPassword.value)
            .then((result) => {
              // location.reload();
              document.location.href = '/';
              // console.log(auth.currentUser);
            })
            .catch((err) => {
              window.alert(err);
            });
        });
        logInPassword.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            auth
              .signInWithEmailAndPassword(logInEmail.value, logInPassword.value)
              .then((result) => {
                backToMainPage();
              })
              .catch((err) => {
                window.alert(err);
              });
          }
        });
        document.querySelector('#resetPWbtn').addEventListener('click', () => {
          console.log('forgot PW?');
          document.querySelector('#logInBox').style.display = 'none';
          document.querySelector('#forgotBtnBox').style.display = 'none';
          document.querySelector('#logInBtn').style.display = 'none';
          document.querySelector('#resetPWBox').style.display = 'flex';
          document
            .querySelector('#forgotEmailSubmitBtn')
            .addEventListener('click', () => {
              const resetEmailAddress =
                document.querySelector('#resetPWEmail').value;
              auth
                .sendPasswordResetEmail(resetEmailAddress)
                .then((res) => {
                  console.log(res);
                  console.log('Email sent');
                  document.querySelector('#resetPWMsg').style.display = 'block';
                  document.querySelector(
                    '#forgotEmailSubmitBtn'
                  ).style.display = 'none';
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                });
            });
        });
        document.querySelector('#backToLogIn').addEventListener('click', () => {
          document.querySelector('#logInBox').style.display = 'block';
          document.querySelector('#forgotBtnBox').style.display = 'flex';
          document.querySelector('#logInBtn').style.display = 'block';
          document.querySelector('#resetPWBox').style.display = 'none';
        });
      }
      if (window.location.pathname === '/member-signup/') {
        const signUpUsername = document.querySelector('#signUpUsername');
        const signUpEmail = document.querySelector('#signUpEmail');
        const signUpPassword = document.querySelector('#signUpPassword');
        const signUpPasswordCheck = document.querySelector(
          '#signUpPasswordCheck'
        );
        const signUpNumber = document.querySelector('#signUpNumber');
        const signUpWeChat = document.querySelector('#signUpWeChat');
        const signUpAgreement = document.querySelector('#userAgreement');

        const signUpBtn = document.querySelector('#signUpBtn');
        signUpBtn.addEventListener('click', () => {
          console.log('Clicked');
          if (signUpPassword.value != signUpPasswordCheck.value) {
            window.alert('Please check the password again');
          } else {
            // Display the passwords are different
            if (!signUpAgreement.checked) {
              window.alert('Please check the user agreement');
            } else {
              auth
                .createUserWithEmailAndPassword(
                  signUpEmail.value,
                  signUpPassword.value
                )
                .then((result) => {
                  result.user
                    .updateProfile({
                      displayName: signUpUsername.value,
                    })
                    .then(() => {
                      window.location = '/user-verify';
                    });
                })
                .catch((err) => {
                  window.alert(err.message);
                });
              console.log('Checked');
            }
          }
        });
      }

      if (window.location.pathname === '/mypage/') {
        backToMainPage();
      }
    }
  });
});

// if (window.location.pathname === '/member-login/') {
//   window.addEventListener('DOMContentLoaded', () => {
//     const auth = firebase.auth();

//     auth.onAuthStateChanged((user) => {
//       if (!user) {
//       } else {
//         // document.location.href = '/';
//         console.log(user);
//         setTimeout(() => {
//           console.log(user);
//         }, 2000);
//       }
//     });
//   });
// }

// if (window.location.pathname === '/member-signup/') {
//   window.addEventListener('DOMContentLoaded', () => {
//     const auth = firebase.auth();

//   });
// }

// if (window.location.pathname === '/member-login/') {
//   window.addEventListener('DOMContentLoaded', () => {
//     console.log('login');
//   });
// }

// auth
//   .createUserWithEmailAndPassword(signUpEmail.value, signUpPassword.value)
//   .then((result) => {
//     result.user.updateProfile({
//       displayName: signUpUsername.value,
//     });
//     // location.reload();
//     result.user
//       .sendEmailVerification()
//       .then(() => {
//         window.alert(
//           '본인인증을 위해 회원가입에 사용하신 이메일의 본인인증 확인 링크를 클릭하여 주시기 바랍니다.'
//         );
//         veriBtnLSOff();
//       })
//       .catch((err) => {
//         console.error(err.message);
//         veriBtnLSOff();
//       });
//   })
//   .catch((err) => {
//     console.error(err.message);
//     window.alert(err.message);
//     veriBtnLSOff();
//   });
