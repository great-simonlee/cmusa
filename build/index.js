/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _src_modules_fbinit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/fbinit.js */ "./src/modules/fbinit.js");
/* harmony import */ var _src_modules_fbinit_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_modules_fbinit_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_modules_fbase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/fbase.js */ "./src/modules/fbase.js");
/* harmony import */ var _src_modules_fbase_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_modules_fbase_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_modules_front_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/front.js */ "./src/modules/front.js");
/* harmony import */ var _src_modules_front_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_modules_front_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_modules_mypage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/modules/mypage.js */ "./src/modules/mypage.js");
/* harmony import */ var _src_modules_mypage_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_modules_mypage_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_modules_rmMatching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/modules/rmMatching */ "./src/modules/rmMatching.js");
/* harmony import */ var _src_modules_rmMatching__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_modules_rmMatching__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_modules_genListing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/modules/genListing.js */ "./src/modules/genListing.js");
/* harmony import */ var _src_modules_genListing_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_modules_genListing_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_modules_register_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/modules/register.js */ "./src/modules/register.js");
/* harmony import */ var _src_modules_register_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_modules_register_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_modules_header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _src_modules_header_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_modules_header_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_modules_detail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/modules/detail.js */ "./src/modules/detail.js");
/* harmony import */ var _src_modules_detail_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_modules_detail_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_modules_rent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/modules/rent.js */ "./src/modules/rent.js");
/* harmony import */ var _src_modules_rent_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_modules_rent_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_modules_verify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/modules/verify.js */ "./src/modules/verify.js");
/* harmony import */ var _src_modules_verify_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_modules_verify_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_modules_mobile_mobile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/modules/mobile/mobile.js */ "./src/modules/mobile/mobile.js");
/* harmony import */ var _src_modules_mobile_mobile_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_modules_mobile_mobile_js__WEBPACK_IMPORTED_MODULE_12__);
// CSS
 // JS











 // Mobile



/***/ }),

/***/ "./src/modules/detail.js":
/*!*******************************!*\
  !*** ./src/modules/detail.js ***!
  \*******************************/
/***/ (() => {

if (window.location.pathname === '/detail/') {
  window.addEventListener('DOMContentLoaded', () => {
    const db = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('li');
    const subImgCont = document.querySelector('#detailSubImgCont');

    const translateToChinese = fea => {
      switch (fea) {
        case 'Washer':
          return '洗衣机';
          break;

        case 'Dryer':
          return '烘干机';
          break;

        case 'Dishwasher':
          return '洗碗机';
          break;

        case 'AC':
          return '空调';
          break;

        case 'Rangehood':
          return '抽油烟机';
          break;

        case 'Balcony':
          return '阳台';
          break;

        case 'Concierge':
          return '24h门卫';
          break;

        case 'Gym':
          return '健身房';
          break;

        case 'Lounge':
          return 'Lobby';
          break;

        case 'Elevator':
          return '电梯';
          break;

        case 'Garage':
          return '车库/车位';
          break;

        case 'PetFriendly':
          return '宠物友好';
          break;

        case 'RooftopDeck':
          return '景观露台';
          break;

        case 'LaundryRoom':
          return '洗衣房';
          break;

        case 'Basketball':
          return '篮球场';
          break;

        case 'BBQ':
          return 'BBQ';
          break;

        case 'Billiard':
          return '台球场';
          break;

        case 'Golf':
          return '高尔夫';
          break;

        case 'Kitchen':
          return '公用厨房';
          break;

        case 'Pool':
          return '泳池';
          break;

        case 'Tennis':
          return '网球场';
          break;

        case 'Theater':
          return '观影室';
          break;

        case 'Wifi':
          return '公共无线网';
          break;

        default:
          break;
      }
    };

    const stringCon = num => {
      const numst = String(num);
      let numed = '';

      if (numst > 3) {
        for (i = 0; i < numst.length - 3; i++) {
          numed += numst[i];
        }

        numed += ',';

        for (i = numst.length - 3; i < numst.length; i++) {
          numed += numst[i];
        }
      }

      return numed;
    };

    db.collection('rentListing').doc(myParam).get().then(res => {
      document.querySelector('#detailLoadingSpinnerDiv').style.display = 'none';
      document.querySelector('#detailContDiv').style.display = 'flex';
      document.querySelector('#detailTitle').innerHTML = res.data().title;
      document.querySelectorAll('.detailPrice').forEach(el => {
        el.innerHTML = stringCon(res.data().price);
      });
      document.querySelector('#detailDescription').innerHTML = res.data().description;
      res.data().features.forEach(fea => {
        document.querySelector('#detailFeatures').innerHTML += `
          <div class="dtdc-fea-card">
            <img src="${window.location.origin}/wp-content/uploads/2022/09/${fea}.png">
            <p>${translateToChinese(fea)}</p>
          </div>
          `;
      });
      res.data().amenities.forEach(fea => {
        document.querySelector('#detailAmenities').innerHTML += `
          <div class="dtdc-fea-card">
            <img src="${window.location.origin}/wp-content/uploads/2022/09/${fea}.png">
            <p>${translateToChinese(fea)}</p>
          </div>
          `;
      });
      document.querySelectorAll('.detailBed').forEach(el => {
        el.innerHTML = res.data().type[0];
      });
      document.querySelectorAll('.detailBath').forEach(el => {
        el.innerHTML = res.data().type[2];
      });
      document.querySelectorAll('.detailBroker').forEach(el => {
        el.innerHTML = res.data().broker;
      });
      console.log(res.data().pictures.length);

      if (res.data().pictures.length != 1) {
        document.querySelector('#detailMainImg').src = `https://drive.google.com/uc?export=view&id=${res.data().pictures[1]}`; // let picArray = [];

        for (i = 1; i < res.data().pictures.length; i++) {
          subImgCont.innerHTML += `<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${res.data().pictures[i]}" alt="subImg${i}">`; // picArray.push(res.data().pictures[i]);
        }
      } else {
        document.querySelector('#detailMainImg').src = `https://drive.google.com/uc?export=view&id=${res.data().pictures[0]}`; // let picArray = [];

        for (i = 0; i < res.data().pictures.length; i++) {
          subImgCont.innerHTML += `<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${res.data().pictures[i]}" alt="subImg${i}">`; // picArray.push(res.data().pictures[i]);
        }
      } // if (!res.data().mgmt) {
      //   document.querySelector(
      //     '#detailMainImg'
      //   ).src = `https://drive.google.com/uc?export=view&id=${
      //     res.data().pictures[0]
      //   }`;
      //   let picArray = [];
      //   for (i = 0; i < res.data().pictures.length; i++) {
      //     subImgCont.innerHTML += `<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${
      //       res.data().pictures[i]
      //     }" alt="subImg${i}">`;
      //     picArray.push(res.data().pictures[i]);
      //   }
      // } else {
      //   console.log('this is cent prop');
      //   const xhr = new XMLHttpRequest();
      //   const JSONurl = `https://script.google.com/macros/s/AKfycby-PhLr60KvBz2Qqe5VZRGs7rEsOpPNlok0WjYnPP3qkWw5avrBoVBVy56AWZGONQTd/exec?ad=124ridgest&un=8`;
      //   // const JSONurl = `https://script.google.com/macros/s/AKfycbwqMDaMXo2b6nY9FTsTHDjo9pTsFijQTC7DViMj7V7CUYxSFiFXS3lgBdHafe_-Lz02/exec?uid=${uid}&time=${time}`;
      //   xhr.open('GET', JSONurl, true);
      //   xhr.onload = function () {
      //     const getResult = JSON.parse(xhr.responseText);
      //     console.log(getResult);
      //     // const picOrder = [];
      //     // for (i = 0; i < getResult.length; i++) {
      //     //   for (j = 0; j < getResult.length; j++) {
      //     //     if (i == getResult[j].order) {
      //     //       picOrder.push(getResult[j].path);
      //     //     }
      //     //   }
      //     // }
      //     document.querySelector(
      //       '#detailMainImg'
      //     ).src = `https://drive.google.com/uc?export=view&id=${getResult[0]}`;
      //     // let picArray = [];
      //     for (i = 0; i < getResult.length; i++) {
      //       subImgCont.innerHTML += `<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${getResult[i]}" alt="subImg${i}">`;
      //       // picArray.push(getResult[i]);
      //     }
      //   };
      //   xhr.send();
      // }


      setTimeout(() => {
        const subImgs = document.querySelectorAll('.subImg');
        subImgs.forEach(el => {
          el.addEventListener('mouseover', () => {
            document.querySelector('#detailMainImg').src = `${el.getAttribute('src')}`;
          });
        });
      }, 2000);
      document.querySelectorAll('.detailLength').forEach(el => {
        el.innerHTML = res.data().length;
      });
      document.querySelectorAll('.detailAddress').forEach(el => {
        el.innerHTML = res.data().daddress;
      });
      document.querySelectorAll('.detailDate').forEach(el => {
        el.innerHTML = res.data().date;
      });
      var mapDetail = new mapboxgl.Map({
        container: 'mapDetailDiv',
        // style: 'mapbox://styles/mapbox/streets-v11',   F3bYaVhsckVIwgNKTH6zAA3xwnA31659716256469
        style: 'mapbox://styles/mapbox/dark-v10',
        center: res.data().coordinate,
        zoom: 13
      });
      mapDetail.addControl(new mapboxgl.NavigationControl());
      mapDetail.on('load', () => {
        const center = res.data().coordinate;
        const radius = 0.5;
        const options = {
          steps: 35,
          units: 'kilometers'
        };
        const circle = turf.circle(center, radius, options);
        mapDetail.addSource('circleData', {
          type: 'geojson',
          data: circle
        }); // add a layer that displays the data   F3bYaVhsckVIwgNKTH6zAA3xwnA31659715927129

        mapDetail.addLayer({
          id: 'circle-fill',
          type: 'fill',
          source: 'circleData',
          paint: {
            'fill-color': '#f78915',
            // 'fill-color': '#000',
            'fill-opacity': 0.5
          }
        });
      }); // ssssssss

      document.querySelector('#detailContactUsNow').addEventListener('click', () => {
        document.querySelector('#detailContactUsNow').style.display = 'none';
        document.querySelector('#detailContactUsNowLS').style.display = 'block';
        const inquirySubmitForm = document.querySelector('#inquirySubmitForm');
        auth.onAuthStateChanged(user => {
          if (!user) {
            window.location.replace('/member-login');
          } else {
            var proIn = res.data();
            const timestamp = new Date(res.data().writetime);
            db.collection('userInfo').doc(user.uid).get().then(res => {
              proIn['request'] = res.data();
              document.querySelector('#inquiryUsername').value = res.data().username;
              document.querySelector('#inquiryEmail').value = res.data().email;
              document.querySelector('#inquiryNumber').value = res.data().number;
              document.querySelector('#inquiryWeChat').value = res.data().wechat;
            });
            document.querySelector('#inquiryTitle').value = res.data().title;
            document.querySelector('#inquiryAddress').value = res.data().address;
            document.querySelector('#inquiryType').value = res.data().type;
            document.querySelector('#inquiryPrice').value = res.data().price;
            document.querySelector('#inquiryDate').value = res.data().date;
            document.querySelector('#inquiryTime').value = `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}`; // document.querySelector('#inquiry').value =
            // document.querySelector('#inquiry').value =

            setTimeout(() => {
              emailjs.init('user_02aBegGFQaEbfNQTDpYLP');
              emailjs.sendForm('service_un17shn', 'template_gjvuym4', inquirySubmitForm).then(() => {
                // console.log();
                document.querySelector('#detailContactUsNowLS').style.display = 'none';
                document.querySelector('#inquirySubmissionMsg').style.display = 'flex';
              }); // emailjs.sendForm(
              //   'service_un17shn',
              //   'template_gjvuym4',
              //   inquirySubmitForm
              // );
            }, 1000);
          }
        });
      });
      document.querySelector('#mbdetailContactUsNow').addEventListener('click', () => {
        document.querySelector('#mbdetailContactUsNow').style.display = 'none';
        document.querySelector('#mbdetailContactUsNowLS').style.display = 'block';
        const inquirySubmitForm = document.querySelector('#inquirySubmitForm');
        auth.onAuthStateChanged(user => {
          if (!user) {
            window.location.replace('/member-login');
          } else {
            var proIn = res.data();
            const timestamp = new Date(res.data().writetime);
            db.collection('userInfo').doc(user.uid).get().then(res => {
              proIn['request'] = res.data();
              document.querySelector('#inquiryUsername').value = res.data().username;
              document.querySelector('#inquiryEmail').value = res.data().email;
              document.querySelector('#inquiryNumber').value = res.data().number;
              document.querySelector('#inquiryWeChat').value = res.data().wechat;
            });
            document.querySelector('#inquiryTitle').value = res.data().title;
            document.querySelector('#inquiryAddress').value = res.data().address;
            document.querySelector('#inquiryType').value = res.data().type;
            document.querySelector('#inquiryPrice').value = res.data().price;
            document.querySelector('#inquiryDate').value = res.data().date;
            document.querySelector('#inquiryTime').value = `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}`; // document.querySelector('#inquiry').value =
            // document.querySelector('#inquiry').value =

            setTimeout(() => {
              emailjs.init('user_02aBegGFQaEbfNQTDpYLP');
              emailjs.sendForm('service_un17shn', 'template_gjvuym4', inquirySubmitForm).then(() => {
                // console.log();
                document.querySelector('#mbdetailContactUsNowLS').style.display = 'none';
                document.querySelector('#mbinquirySubmissionMsg').style.display = 'flex';
              }); // emailjs.sendForm(
              //   'service_un17shn',
              //   'template_gjvuym4',
              //   inquirySubmitForm
              // );
            }, 1000);
          }
        });
      }); //////
    }).catch(err => {
      console.log(err);
    });
    const contactEle = document.querySelector('#infoContainer');
    const stickyTopLoc = contactEle.offsetTop;
    const locEle = document.querySelector('#locContainer');
    const topLocEle = locEle.offsetTop;
    const descEle = document.querySelector('#descContainer');

    window.onscroll = function () {
      if (window.pageYOffset < stickyTopLoc) {
        contactEle.classList.remove('stickyEle');
        descEle.style.marginRight = '0px';
      } else if (window.pageYOffset > stickyTopLoc & window.pageYOffset < topLocEle) {
        contactEle.classList.add('stickyEle');
        contactEle.style.top = '96px';
        contactEle.style.right = '14.6vw';
        descEle.style.marginRight = '264px';
      } else if (window.pageYOffset > topLocEle) {
        contactEle.style.top = `${topLocEle - window.pageYOffset + 96}px`;
      } else {
        contactEle.classList.remove('stickyEle');
      }
    }; // document
    //   .querySelector('#detailContactUsNow')
    //   .addEventListener('click', () => {
    //     console.log('hello');
    //     document.querySelector('#detailContactActive').style.display = 'flex';
    //   });
    // document.querySelector('#closeModalBtn').addEventListener('click', () => {
    //   document.querySelector('#detailContactActive').style.display = 'none';
    // });
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     document.querySelector('#contactUsNowName').value = user.displayName;
    //     document.querySelector('#contactUsNowEmail').value = user.email;
    //     // console.log(user);
    //     db.collection('userInfo')
    //       .doc(user.uid)
    //       .get()
    //       .then((res) => {
    //         document.querySelector('#contactUsNowNumber').value =
    //           res.data().number;
    //         document.querySelector('#contactUsNowWeChat').value =
    //           res.data().wechat;
    //       });
    //   }
    // });

  });
}

/***/ }),

/***/ "./src/modules/fbase.js":
/*!******************************!*\
  !*** ./src/modules/fbase.js ***!
  \******************************/
/***/ (() => {

window.addEventListener('DOMContentLoaded', () => {
  const auth = firebase.auth();

  const backToMainPage = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      // Take the user to a different screen here.
      window.location = '/mobile';
    } else {
      window.location = '/';
    }
  };

  auth.onAuthStateChanged(user => {
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

      if (window.location.pathname === '/member-login/' || window.location.pathname === '/member-signup/') {
        backToMainPage();
      } // if (window.location.pathname === '/member-signup/') {
      //   document.location.href = '/user-verify';
      // }

    } else {
      if (window.location.pathname === '/member-login/') {
        const logInEmail = document.querySelector('#logInEmail');
        const logInPassword = document.querySelector('#logInPassword');
        const logInBtn = document.querySelector('#logInBtn');
        logInBtn.addEventListener('click', () => {
          auth.signInWithEmailAndPassword(logInEmail.value, logInPassword.value).then(result => {
            // location.reload();
            document.location.href = '/'; // console.log(auth.currentUser);
          }).catch(err => {
            window.alert(err);
          });
        });
        logInPassword.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            auth.signInWithEmailAndPassword(logInEmail.value, logInPassword.value).then(result => {
              backToMainPage();
            }).catch(err => {
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
          document.querySelector('#forgotEmailSubmitBtn').addEventListener('click', () => {
            const resetEmailAddress = document.querySelector('#resetPWEmail').value;
            auth.sendPasswordResetEmail(resetEmailAddress).then(res => {
              console.log(res);
              console.log('Email sent');
              document.querySelector('#resetPWMsg').style.display = 'block';
              document.querySelector('#forgotEmailSubmitBtn').style.display = 'none';
            }).catch(error => {
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
        const signUpPasswordCheck = document.querySelector('#signUpPasswordCheck');
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
              auth.createUserWithEmailAndPassword(signUpEmail.value, signUpPassword.value).then(result => {
                result.user.updateProfile({
                  displayName: signUpUsername.value
                }).then(() => {
                  backToMainPage(); // window.location = '/user-verify';
                });
              }).catch(err => {
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
}); // if (window.location.pathname === '/member-login/') {
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

/***/ }),

/***/ "./src/modules/fbinit.js":
/*!*******************************!*\
  !*** ./src/modules/fbinit.js ***!
  \*******************************/
/***/ (() => {

window.addEventListener('DOMContentLoaded', () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDAjXdbYphJwzZ9mUDFsTWBQDz81xh9opA',
    authDomain: 'koreamovesusa.firebaseapp.com',
    projectId: 'koreamovesusa',
    storageBucket: 'koreamovesusa.appspot.com',
    messagingSenderId: '171734962463',
    appId: '1:171734962463:web:12ef0531328c38b2e2e02a',
    measurementId: 'G-KFFWZ5Q1SY'
  };
  firebase.initializeApp(firebaseConfig); // const db = firebase.firestore();
  // const storage = firebase.storage();
  // const auth = firebase.auth();
});

/***/ }),

/***/ "./src/modules/front.js":
/*!******************************!*\
  !*** ./src/modules/front.js ***!
  \******************************/
/***/ (() => {

if (window.location.pathname === '/') {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // Take the user to a different screen here.
    window.location = '/mobile';
  }

  window.addEventListener('DOMContentLoaded', () => {
    const db = firebase.firestore();
    const auth = firebase.auth(); // Convert price into string

    const stringCon = num => {
      const numst = String(num);
      let numed = '';

      if (numst > 3) {
        for (i = 0; i < numst.length - 3; i++) {
          numed += numst[i];
        }

        numed += ',';

        for (i = numst.length - 3; i < numst.length; i++) {
          numed += numst[i];
        }
      }

      return numed;
    };

    const NYAreaConvertor = area => {
      let NYAreaInChinese;

      switch (area) {
        case 'uptown':
          NYAreaInChinese = '纽约-曼哈顿-上城';
          break;

        case 'midtown':
          NYAreaInChinese = '纽约-曼哈顿-中城';
          break;

        case 'downtown':
          NYAreaInChinese = '纽约-曼哈顿-下城';
          break;

        case 'lic':
          NYAreaInChinese = '纽约-长岛市';
          break;

        case 'queens':
          NYAreaInChinese = '纽约-皇后区';
          break;

        case 'flushing':
          NYAreaInChinese = '纽约-法拉盛';
          break;

        case 'brooklyn':
          NYAreaInChinese = '纽约-布鲁克林';
          break;

        case 'bronx':
          NYAreaInChinese = '纽约-布朗克斯';
          break;

        case 'etc':
          NYAreaInChinese = '纽约-其他';
          break;

        default:
          break;
      }

      return NYAreaInChinese;
    };

    const BOSAreaConvertor = area => {
      let BOSAreaInChinese;

      switch (area) {
        case 'allston':
          BOSAreaInChinese = '波士顿-奥斯顿';
          break;

        case 'backbay':
          BOSAreaInChinese = '波士顿-后湾';
          break;

        case 'brighton':
          BOSAreaInChinese = '波士顿-布莱顿';
          break;

        case 'brookline':
          BOSAreaInChinese = '波士顿-布鲁克莱恩';
          break;

        case 'cambridge':
          BOSAreaInChinese = '波士顿-剑桥';
          break;

        case 'downtown':
          BOSAreaInChinese = '波士顿-下城';
          break;

        case 'fenway':
          BOSAreaInChinese = '波士顿-芬威';
          break;

        case 'northend':
          BOSAreaInChinese = '波士顿-北端';
          break;

        case 'malden':
          BOSAreaInChinese = '波士顿-莫尔登';
          break;

        case 'southend':
          BOSAreaInChinese = '波士顿-南端';
          break;

        case 'somerville':
          BOSAreaInChinese = '波士顿-萨默维尔';
          break;

        case 'etc':
          BOSAreaInChinese = '波士顿-其他';
          break;

        default:
          break;
      }

      return BOSAreaInChinese;
    };

    const NYlistingRef = db.collection('rentListing');
    const NYListingDiv = document.querySelector('#NYListingDiv');
    NYlistingRef.orderBy('writetime', 'asc').limit(8).get().then(res => {
      NYListingDiv.style.display = 'grid';
      res.docs.map(el => {
        // console.log(el.data());
        NYListingDiv.innerHTML += `
            <a class="frontToListing" href="/detail/?li=${el.data().uid}${el.data().writetime}" target="blank">
              <div class="main-rent-card">
                <img class="main-rent-img" src="https://drive.google.com/uc?export=view&id=${el.data().pictures[0]}" alt="rentExample">
                <div class="main-rent-info">
                  <div>
                    <p class="main-rent-title">${el.data().title}</p>
                    <p class="main-rent-city">${NYAreaConvertor(el.data().area)}</p>
                    <p class="main-rent-term">租期：${el.data().length}</p>
                  </div>
                  <div class="main-rent-price"><p>$ ${stringCon(el.data().price)}/月</p></div>
                </div>
              </div>
            </a>`;
      });
      document.querySelector('#frontPreLoading').style.display = 'none';
    });
    const BOSlistingRef = db.collection('bostonListing');
    BOSlistingRef.orderBy('writetime', 'desc').limit(8).get().then(res => {
      const BOSListingDiv = document.querySelector('#BOSListingDiv');
      res.docs.map(el => {
        BOSListingDiv.innerHTML += `
            <div class="main-rent-card">
              <img class="main-rent-img" src="https://drive.google.com/uc?export=view&id=${el.data().pictures[0]}" alt="rentExample">
              <div class="main-rent-info">
                <div>
                  <p class="main-rent-title">${el.data().title}</p>
                  <p class="main-rent-city">${BOSAreaConvertor(el.data().area)}</p>
                  <p class="main-rent-term">租期：${el.data().length}</p>
                </div>
                <div class="main-rent-price"><p>$ ${stringCon(el.data().price)}/月</p></div>
              </div>
            </div>`;
      });
    });
    BOSlistingRef.orderBy('writetime', 'desc').limit(6).get().then(res => {
      res.docs.map(el => {// console.log(el.data());
      });
    });
    document.querySelector('#mainSearchBtn').addEventListener('click', () => {
      let queryString = '?';
      document.querySelectorAll('.mainSearchSelectOption').forEach(el => {
        if (el.selected) {
          if (queryString.length == 1) {
            queryString += el.value;
          } else {
            queryString += '&' + el.value;
          }
        }
      });
      window.location = '/rent/' + queryString;
    });
    const hotListingDiv = document.querySelector('#frontHotListing');
    const hotAreaDiv = document.querySelector('#frontHotArea');
    const HOTAreaCat = document.querySelector('#HOTAreaCat');
    hotListingDiv.addEventListener('click', () => {
      hotAreaDiv.style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
      hotAreaDiv.children[0].style.color = '#fff';
      hotListingDiv.style.backgroundColor = 'rgb(255, 255, 255)';
      hotListingDiv.children[0].style.color = '#000';
      NYListingDiv.style.display = 'grid';
      HOTAreaCat.style.display = 'none';
    });
    hotAreaDiv.addEventListener('click', () => {
      hotListingDiv.style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
      hotListingDiv.children[0].style.color = '#fff';
      hotAreaDiv.style.backgroundColor = 'rgb(255, 255, 255)';
      hotAreaDiv.children[0].style.color = '#000';
      NYListingDiv.style.display = 'none';
      HOTAreaCat.style.display = 'grid';
    });
  });
}

/***/ }),

/***/ "./src/modules/genListing.js":
/*!***********************************!*\
  !*** ./src/modules/genListing.js ***!
  \***********************************/
/***/ (() => {

if (window.location.pathname.includes('genlisting')) {
  console.log(' THIS IS THE PLACE');
}

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ (() => {

window.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('#mobileDropDownMenuIcon');
  const mobileDDList = document.querySelector('#mobile-dd-detail');
  mobileMenu.addEventListener('click', () => {
    if (mobileMenu.getAttribute('menu-active') == 0) {
      mobileMenu.setAttribute('menu-active', 1);
      mobileDDList.style.display = 'flex';
    } else {
      mobileMenu.setAttribute('menu-active', 0);
      mobileDDList.style.display = 'none';
    }
  });
  const auth = firebase.auth();
  const db = firebase.firestore();
  const userMenu = document.querySelectorAll('.member-menu');
  const nonUserMenu = document.querySelectorAll('.non-member-menu');
  const userLogOut = document.querySelector('#mobile-dd-logout');
  auth.onAuthStateChanged(user => {
    if (!user) {
      userMenu.forEach(el => {
        el.style.display = 'none';
      });
      nonUserMenu.forEach(el => {
        el.style.display = 'block';
      });
    } else {
      userMenu.forEach(el => {
        el.style.display = 'flex';
      });
      nonUserMenu.forEach(el => {
        el.style.display = 'none';
      });
      userLogOut.addEventListener('click', () => {
        auth.signOut();
      });
    }
  });
});

/***/ }),

/***/ "./src/modules/mobile/mobile.js":
/*!**************************************!*\
  !*** ./src/modules/mobile/mobile.js ***!
  \**************************************/
/***/ (() => {

if (window.location.pathname === '/mobile/') {
  window.addEventListener('DOMContentLoaded', () => {
    const hder = document.querySelector('#gnav');
    const fter = document.querySelector('#gfter');
    hder.style.display = 'none';
    fter.style.display = 'none';
    const db = firebase.firestore();
    const auth = firebase.auth(); // Convert price into string

    const stringCon = num => {
      const numst = String(num);
      let numed = '';

      if (numst > 3) {
        for (i = 0; i < numst.length - 3; i++) {
          numed += numst[i];
        }

        numed += ',';

        for (i = numst.length - 3; i < numst.length; i++) {
          numed += numst[i];
        }
      }

      return numed;
    }; // URL Param variables


    const currentURL = window.location.search;
    const currentParamsURL = new URLSearchParams(currentURL);
    var NYRef = db.collection('rentListing'); // Mobile Filter Section

    const findParamKeyValue = str => {
      if (currentParamsURL.get(str) == null) {
        document.querySelector(`#mob${str}all`).style.color = '#f78915';
      } else {
        document.querySelector(`#mob${str}${currentParamsURL.get(str)}`).style.color = '#f78915';
      }
    };

    const getParamKey = () => {
      findParamKeyValue('type');
      findParamKeyValue('price');
      findParamKeyValue('area');
    };

    getParamKey();

    if (currentParamsURL.get('area')) {
      NYRef = NYRef.where('area', '==', currentParamsURL.get('area'));
    }

    if (currentParamsURL.get('type')) {
      NYRef = NYRef.where('type', '==', currentParamsURL.get('type'));
    }

    if (currentParamsURL.get('price')) {
      switch (currentParamsURL.get('price')) {
        case 'l1':
          NYRef = NYRef.where('price', '<', '1000');
          break;

        case 'g1l2':
          NYRef = NYRef.where('price', '>=', '1000');
          NYRef = NYRef.where('price', '<', '2000');
          break;

        case 'g2l3':
          NYRef = NYRef.where('price', '>=', '2000');
          NYRef = NYRef.where('price', '<', '3000');
          break;

        case 'g3l4':
          NYRef = NYRef.where('price', '>=', '3000');
          NYRef = NYRef.where('price', '<', '4000');
          break;

        case 'g4l5':
          NYRef = NYRef.where('price', '>=', '4000');
          NYRef = NYRef.where('price', '<', '5000');
          break;

        case 'g5l6':
          NYRef = NYRef.where('price', '>=', '5000');
          NYRef = NYRef.where('price', '<', '6000');
          break;

        case 'g6':
          NYRef = NYRef.where('price', '>=', '6000');
          break;
      }
    }

    const searchElSelector = elGroup => {
      elGroup.forEach(el => {
        el.addEventListener('click', e => {
          var params = new URLSearchParams(window.location.search);

          if (e.target.getAttribute('data-search') == 'all') {
            params.delete(String(e.target.getAttribute('search-type')));
            window.location.search = params;
          } else {
            params.set(String(e.target.getAttribute('search-type')), String(e.target.getAttribute('data-search')));
            window.location.search = params;
          }
        });
      });
    };

    const searchType = document.querySelectorAll('.mobSearchType');
    const searchArea = document.querySelectorAll('.mobSearchArea');
    const searchPrice = document.querySelectorAll('.mobSearchPrice');
    searchElSelector(searchType);
    searchElSelector(searchArea);
    searchElSelector(searchPrice);
    const fileterDiv = document.querySelector('#mobileFilterDiv');
    const filterDivDetail = document.querySelectorAll('.mb-filter-item-detail');
    const mobileTimeFilter = document.querySelector('#mobile-filter-time');
    mobileTimeFilter.addEventListener('click', () => {
      fileterDiv.style.display = 'flex';
      filterDivDetail.forEach(el => {
        el.style.visibility = 'hidden';
      });
      filterDivDetail[0].style.visibility = 'visible';
    });
    const mobileAreaFilter = document.querySelector('#mobile-filter-area');
    mobileAreaFilter.addEventListener('click', () => {
      fileterDiv.style.display = 'flex';
      filterDivDetail.forEach(el => {
        el.style.visibility = 'hidden';
      });
      filterDivDetail[1].style.visibility = 'visible';
    });
    const mobilePriceFilter = document.querySelector('#mobile-filter-price');
    mobilePriceFilter.addEventListener('click', () => {
      fileterDiv.style.display = 'flex';
      filterDivDetail.forEach(el => {
        el.style.visibility = 'hidden';
      });
      filterDivDetail[2].style.visibility = 'visible';
    }); // Actual Listing Showing

    const mobileListingCont = document.querySelector('#mobileListingCont');
    NYRef.limit(10).get().then(res => {
      // Mobile LS Disappear
      document.querySelector('#mobileFrontLoadingSpinnerDiv').style.display = 'none';
      res.docs.map(doc => {
        let thumbnailPic;

        if (doc.data().pictures.length != 1) {
          thumbnailPic = doc.data().pictures[1];
        } else {
          thumbnailPic = doc.data().pictures[0];
        }

        mobileListingCont.innerHTML += `
          <a class="mobileListingAnchor" href="/detail/?li=${doc.data().uid}${doc.data().writetime}">
            <div class="mb-card">
              <div class="mb-card-img-cont">
                <img class="mb-card-img" src="https://drive.google.com/uc?export=view&id=${thumbnailPic}" alt="CMMobileListingImg">
              </div>
              <div class="mb-card-desc">
                <p class="mbc-desc-title">${doc.data().title}</p>
                <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 <br> 地址：${doc.data().daddress}</p>
                <p class="mbc-desc-price">$ ${stringCon(doc.data().price)}/月</p>
              </div>
            </div>
          </a>`;
      });
    }); //

    var selectedCategory;
    const mobileFrontCategory = document.querySelectorAll('.mb-menu-category-item');
    const underlineCategory = document.querySelectorAll('.mb-menu-category-selected');
    const mobileFrontRentListingDiv = document.querySelector('#mb-front-rentListing');
    const mobileFrontShorterm = document.querySelector('#mb-front-shortterm');
    const mobileFrontRoommate = document.querySelector('#mb-front-roommate');
    mobileFrontCategory.forEach(el => {
      // el.style.color = '#c9c9c9';
      el.addEventListener('click', e => {
        e.target.style.color = '#000';
        selectedCategory = e.target.getAttribute('cate-index');

        for (i = 0; i < e.target.parentNode.children.length; i++) {
          e.target.parentNode.children[i].style.color = '#c9c9c9';
        }

        for (i = 0; i < e.target.parentNode.children.length; i++) {
          underlineCategory[i].style.visibility = 'hidden';
        }

        underlineCategory[selectedCategory].style.visibility = 'visible';
        e.target.parentNode.children[selectedCategory].style.color = '#000';

        if (selectedCategory == 0) {
          mobileFrontRentListingDiv.style.display = 'block';
          mobileFrontShorterm.style.display = 'none';
          mobileFrontRoommate.style.display = 'none';
        } else if (selectedCategory == 1) {
          mobileFrontRentListingDiv.style.display = 'none';
          mobileFrontShorterm.style.display = 'block';
          mobileFrontRoommate.style.display = 'none';
        } else if (selectedCategory == 2) {
          mobileFrontRentListingDiv.style.display = 'none';
          mobileFrontShorterm.style.display = 'none';
          mobileFrontRoommate.style.display = 'block';
        }
      });
    });
    const mobileFooterMoreDefault = document.querySelector('#mobileFooterMoreDefault');
    const mobileFooterDetail = document.querySelector('#mobileFooterDetail');
    const mobileFooterDetailMenu = document.querySelector('#mobileFooterDetailMenu');
    mobileFooterMoreDefault.addEventListener('click', () => {
      console.log('more btn');
      mobileFooterMoreDefault.style.display = 'none';
      mobileFooterDetail.style.display = 'flex';
      mobileFooterDetailMenu.style.visibility = 'visible';
      mobileFooterDetailMenu.style.opacity = '1';
    });
    mobileFooterDetail.addEventListener('click', () => {
      console.log('detail');
      mobileFooterMoreDefault.style.display = 'flex';
      mobileFooterDetail.style.display = 'none';
      mobileFooterDetailMenu.style.visibility = 'hidden';
      mobileFooterDetailMenu.style.opacity = '0';
    }); //
  });
}

/***/ }),

/***/ "./src/modules/mypage.js":
/*!*******************************!*\
  !*** ./src/modules/mypage.js ***!
  \*******************************/
/***/ (() => {

if (window.location.pathname === '/mypage/') {
  window.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if (!user) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
          // Take the user to a different screen here.
          window.location = '/mobile';
        } else {
          window.location.replace('/');
        }
      } else {
        const db = firebase.firestore();
        const uid = user.uid;
        const listingRef = db.collection('rentListing');
        const userRef = db.collection('userInfo');
        const myListingDiv = document.querySelector('#myListingDiv');
        const mbMyListing = document.querySelector('#mbMyListing');
        listingRef.where('uid', '==', uid).get().then(res => {
          res.docs.map(el => {
            // console.log(el.data());
            const timestamp = new Date(parseInt(String(el.data().writetime).substring(0, 13)));

            if (el.data().type == 'studio') {
              var objPropBed = 'Studio';
              var objPropBath = '1 Bath';
            } else {
              var objPropBed = el.data().type[0] + ' Bed';
              var objPropBath = el.data().type[2] + ' Bath';
            }

            myListingDiv.innerHTML += `
                <div class="myp-lising-card">
                  <a class="myListingAnchor" href="/detail/?li=${el.data().uid}${el.data().writetime}" target="_blank">
                    <div class="myp-card-left">
                      <img class="myp-card-img" src="https://drive.google.com/uc?export=view&id=${el.data().pictures[0]}">
                      <div class="myp-card-img-desc">
                        <div class="myp-card-type">
                          <p>${objPropBed}</p>
                          <p>${objPropBath}</p>
                        </div>
                        <div class="myp-card-price">$ ${el.data().price}/月</div>
                      </div>
                    </div>
                  </a>
                  <a class="myListingAnchor" href="/detail/?li=${el.data().uid}${el.data().writetime}" target="blank">
                    <div class="myp-card-desc">
                      <div class="myp-card-detail">
                        <p>${el.data().title}</p>
                        <p>租期：${el.data().length}</p>
                        <p>入住时间：${el.data().date}</p>
                        <p>发布时间：${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}</p>
                      </div>
                    </div>
                  </a>
                  <div class="myp-card-editdelete">
                    <i class="fa fa-pencil-square-o editdelete" aria-hidden="true" data-search="${el.data().uid}${el.data().writetime}"><span>&nbsp;编辑</span></i>
                    <i class="fa fa-trash-o editdelete deleteDiv" aria-hidden="true" data-search="${el.data().uid}${el.data().writetime}"><span>&nbsp;删除</span></i>
                  </div>
                </div>
              `;
            mbMyListing.innerHTML += `
              <div class="mb-mypage-card">
                <a href="/detail/?li=${el.data().uid}${el.data().writetime}">
                  <div class="mb-mypage-card-cont">
                    <img class="mb-mypage-card-img" src="https://drive.google.com/uc?export=view&id=${el.data().pictures[0]}">
                    <div class="mb-mypage-card-desc">
                      <p class="mb-mypage-card-title">${el.data().title}</p>
                      <div class="mb-mypage-card-info">
                        <p>${objPropBed}</p>
                        <p>${objPropBath}</p>
                        <p>$ ${el.data().price}/月</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="mb-mypage-card-editdelete">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </div>
              </div>
              `;
          }); // Edit and Delete btn activation

          const editDiv = document.querySelectorAll('.editDiv');
          editDiv.forEach(el => {
            el.addEventListener('click', () => {
              console.log('edit');
              console.log(el.getAttribute('data-search'));
            });
          });
          const deleteDiv = document.querySelectorAll('.deleteDiv');
          deleteDiv.forEach(el => {
            el.addEventListener('click', () => {
              listingRef.doc(el.getAttribute('data-search')).delete().then(() => {
                console.log('Successfully deleted');
                location.reload();
              }).catch(err => {
                console.log(err);
              });
            });
          });
        });
        const userEmailInput = document.querySelector('#mpEmail');
        userEmailInput.style.color = '#fff';
        userEmailInput.value = user.email;
        userEmailInput.disabled = true;
        const userName = document.querySelector('#mpUsername');
        userName.style.color = '#fff';
        userName.value = user.displayName;
        userName.disabled = true; // userRef
        //   .doc(uid)
        //   .get()
        //   .then((res) => {
        //     const userEmailInput = document.querySelector('#mpEmail');
        //     userEmailInput.style.color = '#fff';
        //     userEmailInput.value = res.data().email;
        //     userEmailInput.disabled = true;
        //     const userName = document.querySelector('#mpUsername');
        //     userName.style.color = '#fff';
        //     userName.value = res.data().username;
        //     userName.disabled = true;
        //     const userPhone = document.querySelector('#mpPhone');
        //     userPhone.style.color = '#fff';
        //     userPhone.value = res.data().number;
        //     userPhone.disabled = true;
        //     const userWechat = document.querySelector('#mpWeixin');
        //     userWechat.style.color = '#fff';
        //     userWechat.value = res.data().wechat;
        //     userWechat.disabled = true;
        //   });
      }
    });
    const mypageCateBtn = document.querySelectorAll('.mpcat-item');
    const mypageSection = document.querySelectorAll('.mypage-section');
    mypageCateBtn.forEach(el => {
      el.addEventListener('click', e => {
        let index = [...mypageCateBtn].indexOf(el);
        mypageSection.forEach(ele => {
          ele.style.display = 'none';
        });
        mypageSection[index].style.display = 'flex';
        mypageCateBtn.forEach(ele => {
          ele.style.backgroundColor = '#fff';
          ele.style.color = '#000';
        });
        mypageCateBtn[index].style.color = '#fff';
        mypageCateBtn[index].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
      });
    });

    if (window.location.search === '?mylist') {
      mypageSection.forEach(ele => {
        ele.style.display = 'none';
      });
      mypageSection[2].style.display = 'flex';
      mypageCateBtn.forEach(ele => {
        ele.style.backgroundColor = '#fff';
        ele.style.color = '#000';
      });
      mypageCateBtn[2].style.color = '#fff';
      mypageCateBtn[2].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
    }

    const mobMypageCateBtn = document.querySelectorAll('.mob-mpcat-item');
    mobMypageCateBtn.forEach(el => {
      el.addEventListener('click', e => {
        let index = [...mobMypageCateBtn].indexOf(el);
        mypageSection.forEach(ele => {
          ele.style.display = 'none';
        });
        mypageSection[index].style.display = 'flex';
        mobMypageCateBtn.forEach(ele => {
          ele.style.backgroundColor = '#fff';
          ele.style.color = '#000';
        });
        mobMypageCateBtn[index].style.color = '#fff';
        mobMypageCateBtn[index].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
      });
    });

    if (window.location.search === '?mylist') {
      mypageSection.forEach(ele => {
        ele.style.display = 'none';
      });
      mypageSection[2].style.display = 'flex';
      mobMypageCateBtn.forEach(ele => {
        ele.style.backgroundColor = '#fff';
        ele.style.color = '#000';
      });
      mobMypageCateBtn[2].style.color = '#fff';
      mobMypageCateBtn[2].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
    }
  });
}

/***/ }),

/***/ "./src/modules/register.js":
/*!*********************************!*\
  !*** ./src/modules/register.js ***!
  \*********************************/
/***/ (() => {

if (window.location.pathname === '/register/') {
  window.addEventListener('DOMContentLoaded', () => {
    // firebase
    const db = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if (user) {
        // mapbox
        var maptest = new mapboxgl.Map({
          container: 'maptestDiv',
          // style: 'mapbox://styles/mapbox/streets-v11',
          style: 'mapbox://styles/mapbox/dark-v10',
          center: [121.5003576, 31.2185876],
          zoom: 12
        });
        maptest.addControl(new mapboxgl.NavigationControl());
        const marker1 = new mapboxgl.Marker({
          color: '#b40219'
        }).setLngLat([121.5003576, 31.2185876]).addTo(maptest);
        const newPostingObj = {
          features: [],
          amenities: [],
          address: ''
        };
        const uid = user.uid;
        const time = new Date().getTime();
        const poster = user.email; // console.log(uid);
        // console.log(time);

        const pointMapCity = document.querySelector('#rq-city');
        const pointMapAddress = document.querySelector('#rq-address');
        const pointMapZip = document.querySelector('#rq-zip');
        pointMapAddress.addEventListener('focusout', () => {
          marker1.remove();
          console.log('work?');
          const searchMap = String(pointMapAddress.value + ', ' + pointMapCity.value + ', ' + pointMapZip.value + 'united states');

          if (pointMapAddress.value != '') {
            // LONGITUDE AND LATITUTDE
            const xmlhttp = new XMLHttpRequest();
            let addressReq1 = searchMap.replaceAll(',', '');
            let addressReq = addressReq1.replaceAll(' ', '%20');
            console.log(addressReq);

            xmlhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                newPostingObj.address = myArr.features[0].place_name;
                newPostingObj.coordinate = myArr.features[0].center;
              }
            };

            const corReqURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressReq}.json?access_token=pk.eyJ1IjoiZ3JlYXQtc2ltb25sZWUiLCJhIjoiY2t6b2szZ2U5NjA0ZjJwdHZiY3Q1OHNtcyJ9.qdLhsMCScxxfzT9CYywRUQ`;
            xmlhttp.open('GET', corReqURL, true);
            xmlhttp.send();
            const coorCheck = setInterval(() => {
              maptest.flyTo({
                center: newPostingObj.coordinate,
                essential: true,
                screenSpeed: 3
              });
              const marker1 = new mapboxgl.Marker({
                color: '#f78915'
              }).setLngLat(newPostingObj.coordinate).addTo(maptest);

              if (newPostingObj.coordinate != undefined) {
                clearInterval(coorCheck);
              }
            }, 500);
          }
        });
        const pointArea = document.querySelector('#rq-area');
        pointMapCity.addEventListener('focusout', () => {
          // console.log(pointArea.children.length);
          switch (pointMapCity.value) {
            case 'newyork':
              pointArea.innerHTML = '';
              pointArea.innerHTML += `
              <option value="downtown" map-point="">曼哈顿-下城(Downtown)</option>
              <option value="midtown" map-point="">曼哈顿-中城(Midtown)</option>
              <option value="uptown" map-point="">曼哈顿-上城(Uptown)</option>
              <option value="lic" map-point="">长岛市(LIC)</option>
              <option value="queens" map-point="">皇后区(Queens)</option>
              <option value="flushing" map-point="">法拉盛(Flushing)</option>
              <option value="brooklyn" map-point="">布鲁克林(Brooklyn)</option>
              <option value="bronx" map-point="">布朗克斯(Bronx)</option>
              <option value="etc" map-point="">其他</option>
              `;
              break;

            case 'boston':
              pointArea.innerHTML = '';
              pointArea.innerHTML += `
                <option value="allston" map-point="">奥斯顿(Allston)</option>
                <option value="backbay" map-point="">后湾(Back Bay)</option>
                <option value="brighton" map-point="">布莱顿(Brighton)</option>
                <option value="brookline" map-point="">布鲁克莱恩(Brookline)</option>
                <option value="cambridge" map-point="">剑桥(Cambridge)</option>
                <option value="downtown" map-point="">下城(Downtown)</option>
                <option value="fenway" map-point="">芬威(Fenway)</option>
                <option value="northend" map-point="">北端(North End)</option>
                <option value="malden" map-point="">莫尔登(Malden)</option>
                <option value="southend" map-point="">南端(South End)</option>
                <option value="somerville" map-point="">萨默维尔(Somerville)</option>
                <option value="etc" map-point="">其他</option>
                `;
              break;

            case 'newjersey':
              pointArea.innerHTML = '';
              pointArea.innerHTML += `
                  <option value="" map-point="">爱迪生(Edison)</option>
                  <option value="" map-point="">蒙哥马利(Montgomery)</option>
                  <option value="" map-point="">普林斯顿(Princeton)</option>
                  <option value="" map-point="">西温莎(West Windsor)</option>
                  <option value="" map-point="">平原市(Plainsboro)</option>
                  <option value="" map-point="">帕拉默斯(Paramus)</option>
                  <option value="" map-point="">利堡(Fort Lee)</option>
                  <option value="" map-point="">锡考克斯(Secaucus)</option>
                  <option value="" map-point="">泽西市(Jersey City)</option>
                  <option value="" map-point="">(West New York)</option>
                  <option value="" map-point="">(Union City)</option>
                  <option value="" map-point="">霍博肯(Hoboken)</option>
                  <option value="Etc" map-point="">其他</option>
                  `;
              break;
          }
        }); // Google scripts iframe

        const googleIframeDiv = document.querySelector('#googleIframeDiv');
        googleIframeDiv.innerHTML = `<iframe id="reg-ifr" src="
        https://script.google.com/macros/s/AKfycbxXw1TdvVmWiy1wwhrafKsFWoMHtICEkKIIfNVonlZHO_v14TXt43C_ThqqURpQiYj24g/exec?usr=${uid}&time=${time}" frameborder="0" style="width: 100%; height: 400px; background-color: #0f0f0f;"></iframe>`;
        const regSubmitBtn = document.querySelector('#regSubmitBtn');
        const regCity = document.querySelector('#rq-city');
        const regArea = document.querySelector('#rq-area');
        const regTitle = document.querySelector('#rq-title');
        const regPrice = document.querySelector('#rq-price');
        const regType = document.querySelector('#rq-type');
        const regLength = document.querySelector('#rq-length');
        const regDate = document.querySelector('#rq-movdate');
        const regDateMonth = document.querySelector('#rq-movdate').split('-');
        const regContact = document.querySelector('#rq-contact');
        const regFea = document.querySelectorAll('.rq-fea');
        const regAme = document.querySelectorAll('.rq-ame');
        const regDesc = document.querySelector('#rq-desc');
        const regDAddress = document.querySelector('#rq-dAddress');
        const regBrokerFee = document.querySelector('#rq-broker');
        regSubmitBtn.addEventListener('click', () => {
          const xhr = new XMLHttpRequest(); // const JSONurl = `https://script.google.com/macros/s/AKfycbyRKwuMenCZ2kN6jJwtPxKoZ9_1odODfqWwPkoKvK71yeUL1_qsxEPUcQdWWj0E3Jld/exec?uid=F3bYaVhsckVIwgNKTH6zAA3xwnA3&time=1659711629275`;

          const JSONurl = `https://script.google.com/macros/s/AKfycbyRKwuMenCZ2kN6jJwtPxKoZ9_1odODfqWwPkoKvK71yeUL1_qsxEPUcQdWWj0E3Jld/exec?uid=${uid}&time=${time}`;
          xhr.open('GET', JSONurl, true);

          xhr.onload = function () {
            const getResult = JSON.parse(xhr.responseText);
            const picOrder = [];

            for (i = 0; i < getResult.length; i++) {
              for (j = 0; j < getResult.length; j++) {
                if (i == getResult[j].order) {
                  picOrder.push(getResult[j].path);
                }
              }
            }

            newPostingObj.pictures = picOrder;
            validateInput(newPostingObj);
          };

          xhr.send();
          newPostingObj.city = regCity.value;
          newPostingObj.area = regArea.value;
          newPostingObj.prop = regProp.value;
          newPostingObj.title = regTitle.value;
          newPostingObj.price = regPrice.value;
          newPostingObj.type = regType.value;
          newPostingObj.length = regLength.value;
          newPostingObj.date = regDate.value;
          newPostingObj.dateMonth = regDateMonth[1];
          newPostingObj.contact = regContact.value;
          newPostingObj.description = regDesc.value;
          newPostingObj.uid = uid;
          newPostingObj.writetime = time;
          newPostingObj.web = 'cm';
          newPostingObj.daddress = regDAddress.value;
          newPostingObj.broker = regBrokerFee.value;
          newPostingObj.poster = poster;
          regFea.forEach(el => {
            if (el.checked) {
              newPostingObj.features.push(el.getAttribute('data-input'));
            }
          });
          regAme.forEach(el => {
            if (el.checked) {
              newPostingObj.amenities.push(el.getAttribute('data-input'));
            }
          });
        });

        const validateInput = obj => {
          console.log(obj);

          for (i = 0; i < Object.values(obj).length; i++) {
            if (Object.values(obj)[i] === '') {
              switch (Object.keys(obj)[i]) {
                case 'address':
                  document.getElementById('rq-address').scrollIntoView();
                  document.getElementById('rq-address').style.border = 'red solid 3px';
                  break;

                case 'prop':
                  document.getElementById('rq-city').scrollIntoView();
                  document.getElementById('rq-city').style.border = 'red solid 3px';
                  break;

                case 'title':
                  document.getElementById('rq-title').scrollIntoView();
                  document.getElementById('rq-title').style.border = 'red solid 3px';
                  break;

                case 'price':
                  document.getElementById('rq-price').scrollIntoView();
                  document.getElementById('rq-price').style.border = 'red solid 3px';
                  break;

                case 'type':
                  document.getElementById('rq-type').scrollIntoView();
                  document.getElementById('rq-type').style.border = 'red solid 3px';
                  break;

                case 'length':
                  document.getElementById('rq-length').scrollIntoView();
                  document.getElementById('rq-length').style.border = 'red solid 3px';
                  break;

                case 'date':
                  document.getElementById('rq-movdate').scrollIntoView();
                  document.getElementById('rq-movdate').style.border = 'red solid 3px';
                  break;

                case 'contact':
                  document.getElementById('rq-contact').scrollIntoView();
                  document.getElementById('rq-contact').style.border = 'red solid 3px';
                  break;

                case 'description':
                  document.getElementById('rq-desc').scrollIntoView();
                  document.getElementById('rq-desc').style.border = 'red solid 3px';
                  break;

                case 'daddress':
                  document.getElementById('rq-dAddress').scrollIntoView();
                  document.getElementById('rq-dAddress').style.border = 'red solid 3px';
                  break;
              }
            } else {
              uploadListingInf(newPostingObj);
            }
          }
        };

        const uploadListingInf = obj => {
          const docName = String(uid) + String(time); // console.log(docName);
          // console.log(obj);
          // access the db

          db.collection('rentListing').doc(docName).set(obj).then(result => {
            // TEXT TO SPINNER OR VICE VERSA
            console.log(result);
          }).catch(err => {
            console.log(err);
          });
        };
      } else {
        document.location.href = '/member-login';
      }
    });
  });
}

/***/ }),

/***/ "./src/modules/rent.js":
/*!*****************************!*\
  !*** ./src/modules/rent.js ***!
  \*****************************/
/***/ (() => {

if (window.location.pathname === '/rent/') {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // Take the user to a different screen here.
    window.location = '/mobile';
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Initialize map
    var maplisting = new mapboxgl.Map({
      container: 'rentListingMap',
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: ['-73.98917', '40.74358'],
      zoom: 12
    });
    const db = firebase.firestore(); // Map marker generator

    const mapMarkerGenerator = coor => {
      const marker1 = new mapboxgl.Marker({
        color: '#6c6c6c',
        scale: '0.7'
      }).setLngLat(coor).addTo(maplisting);
    }; // Making listings


    const makeListings = obj => {
      // console.log(obj.address);
      // console.log(parseInt(String(obj.writetime).substring(0, 12)));
      const timestamp = new Date(parseInt(String(obj.writetime).substring(0, 13))); // const writeTimeStampTemp = new Date(obj.writetime);
      // const strTimeStamp = obj.writetime.substring(0, 12);
      // console.log(strTimeStamp);
      // const timestamp = new Date(strTimeStamp);
      // const writeTimeStamp = String(writeTimeStampTemp).slice(0, 9);

      if (obj.type == 'studio') {
        var objPropBed = 'Studio';
        var objPropBath = '1 Bathroom';
      } else {
        var objPropBed = obj.type[0] + ' Bedroom';
        var objPropBath = obj.type[2] + ' Bathroom';
      }

      let thumbnailPic;

      if (obj.pictures.length != 1) {
        thumbnailPic = obj.pictures[1];
      } else {
        thumbnailPic = obj.pictures[0];
      }

      listingContainer.innerHTML += `
        <a class="rlCoorEl" href="/detail/?li=${obj.uid}${obj.writetime}" target="blank">
          <div class="rl-card" data-coor="${obj.coordinate}">
            <div class="rl-card-cont">
              <img class="rl-card-img" src="https://drive.google.com/uc?export=view&id=${thumbnailPic}">
              <div class="rl-card-info">
                <div class="rlc-info-text">
                  <p>${objPropBed}</p>
                  <p>${objPropBath}</p>
                </div>
                <p>$ ${obj.price}/Month</p>
              </div>
            </div>
            <div class="rl-card-desc">
              <h4>${obj.title}</h4>
              <div>
                <p>租期：${obj['length']}</p>
                <p>入住时间：${obj.date}</p>
                <p>发布时间：${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}</p>
              </div>
            </div>
          </div>
        </a>`;
    }; // Listing card hover map effect


    const mapHoverEffecter = () => {
      const rentListingCard = document.querySelectorAll('.rl-card');

      for (i = 0; i < rentListingCard.length; i++) {
        const markerTarget = new mapboxgl.Marker({
          color: '#f78915',
          scale: '0.9'
        });
        rentListingCard[i].addEventListener('mouseenter', e => {
          maplisting.flyTo({
            center: e.target.getAttribute('data-coor').split(','),
            essential: true,
            screenSpeed: 5
          });
          markerTarget.setLngLat(e.target.getAttribute('data-coor').split(',')).addTo(maplisting);
        });
        rentListingCard[i].addEventListener('mouseleave', e => {
          markerTarget.addTo(maplisting).setLngLat([0, 0]).remove();
        });
      }
    }; // Search initial query colorizer


    const rentListingDiv = document.querySelector('#rentListingDiv');
    const currentURL = window.location.search; // console.log(currentURL);

    const currentParamsURL = new URLSearchParams(currentURL); // console.log(currentParamsURL.get('type'));

    const findParamKeyValue = str => {
      if (currentParamsURL.get(str) == null) {
        document.querySelector(`#${str}all`).style.color = '#f78915';
      } else {
        document.querySelector(`#${str}${currentParamsURL.get(str)}`).style.color = '#f78915';
      }
    };

    const getParamKey = () => {
      findParamKeyValue('type');
      findParamKeyValue('price');
      findParamKeyValue('length');
      findParamKeyValue('date');
      findParamKeyValue('broker');
      findParamKeyValue('area');
    };

    getParamKey();
    var fbQueryRef = db.collection('rentListing');

    if (currentParamsURL.get('area')) {
      fbQueryRef = fbQueryRef.where('area', '==', currentParamsURL.get('area'));
    }

    if (currentParamsURL.get('type')) {
      fbQueryRef = fbQueryRef.where('type', '==', currentParamsURL.get('type'));
    }

    if (currentParamsURL.get('price')) {
      switch (currentParamsURL.get('price')) {
        case 'l1':
          fbQueryRef = fbQueryRef.where('price', '<', '1000');
          break;

        case 'g1l2':
          fbQueryRef = fbQueryRef.where('price', '>=', '1000');
          fbQueryRef = fbQueryRef.where('price', '<', '2000');
          break;

        case 'g2l3':
          fbQueryRef = fbQueryRef.where('price', '>=', '2000');
          fbQueryRef = fbQueryRef.where('price', '<', '3000');
          break;

        case 'g3l4':
          fbQueryRef = fbQueryRef.where('price', '>=', '3000');
          fbQueryRef = fbQueryRef.where('price', '<', '4000');
          break;

        case 'g4l5':
          fbQueryRef = fbQueryRef.where('price', '>=', '4000');
          fbQueryRef = fbQueryRef.where('price', '<', '5000');
          break;

        case 'g5l6':
          fbQueryRef = fbQueryRef.where('price', '>=', '5000');
          fbQueryRef = fbQueryRef.where('price', '<', '6000');
          break;

        case 'g6':
          fbQueryRef = fbQueryRef.where('price', '>=', '6000');
          break;
      }
    }

    if (currentParamsURL.get('length')) {
      if (currentParamsURL.get('length') == '12个月') {
        // fbQueryRef = fbQueryRef.where('length', '==', '1年以上');
        fbQueryRef = fbQueryRef.where('length', '==', '12个月及以上');
      } else {
        fbQueryRef = fbQueryRef.where('length', '==', currentParamsURL.get('length'));
      }
    }

    if (currentParamsURL.get('date')) {
      fbQueryRef = fbQueryRef.where('dateMonth', '==', parseInt(currentParamsURL.get('date')));
    }

    if (currentParamsURL.get('broker')) {
      const modifiedQuery = currentParamsURL.get('broker').replaceAll('z', ' ');
      fbQueryRef = fbQueryRef.where('broker', '==', modifiedQuery);
    } // Initialize listing


    const listingContainer = document.querySelector('#listingContainer');
    const listingPagination = document.querySelector('#listingPagination');

    const initializeListing = (type, order) => {
      coorListing = [];
      fbQueryRef // .orderBy(type, order) // OrderBy should be rewritten
      .get().then(res => {
        document.querySelector('#loadingSpinnerDiv').style.display = 'none';
        rentListingDiv.style.display = 'flex';
        listingContainer.innerHTML = '';
        listingPagination.innerHTML = '';
        maplisting.resize();
        res.docs.map(el => {
          mapMarkerGenerator(el.data().coordinate);
        }); // Initial listing data
        // Filtered listing doesn't have 10 listings
        // console.log(res.docs.length);

        if (res.docs.length == 0) {
          console.log('No Listings');
        } else if (res.docs.length > 10) {
          for (i = 0; i < 10; i++) {
            makeListings(res.docs[i].data()); // mapMarkerGenerator(res.docs[i].data().coordinate);
          }
        } else {
          for (i = 0; i < res.docs.length; i++) {
            makeListings(res.docs[i].data()); // mapMarkerGenerator(res.docs[i].data().coordinate);
          }
        } // if (currentURL == '') {
        // } else {
        //   for (i = 0; i < ; i++) {
        //     makeListings(res.docs[i].data());
        //     mapMarkerGenerator(res.docs[i].data().coordinate);
        //   }
        // }


        mapHoverEffecter();
        listingMove(10); // Insert pagination

        const totalNum = res.docs.length;
        const pageNum = Math.ceil(totalNum / 10);

        for (i = 0; i < pageNum; i++) {
          listingPagination.innerHTML += `<p class="page-number" data-page="${i + 1}">${i + 1}</p>`;
        } // Pagination data call


        const totalPage = document.querySelectorAll('.page-number');
        totalPage[0].style.color = '#f78915'; // Listing refresher when pagination clicked

        totalPage.forEach(page => {
          // When the pagination is clicked
          page.addEventListener('click', e => {
            listingContainer.innerHTML = '';
            totalPage.forEach(el => {
              el.style.color = '#fff';
            });
            e.target.style.color = '#f78915';
            let clickedCurrentPage = e.target.getAttribute('data-page');
            let startingPoint = 10 * (clickedCurrentPage - 1);
            let lastPageListingNumber = totalNum % 10;

            if (clickedCurrentPage != pageNum) {
              for (i = 0; i < 10; i++) {
                mapMarkerGenerator(res.docs[i].data().coordinate);
                makeListings(res.docs[startingPoint + i].data());
              }
            } else {
              for (i = 0; i < lastPageListingNumber; i++) {
                mapMarkerGenerator(res.docs[i].data().coordinate);
                makeListings(res.docs[startingPoint + i].data());
              }
            }

            e.target.style.color = '#f78915';
            dateOrderBtn.scrollIntoView();
            document.querySelector('#rentMapContainer').classList.remove('rentStickyEle');
            mapHoverEffecter();
            listingMove(document.querySelectorAll('.rlCoorEl').length);
          });
        });
      });
    }; // Default listing


    initializeListing('writetime', 'desc'); // Date filtered listing

    const dateOrderBtn = document.querySelector('#timeOrder');
    dateOrderBtn.addEventListener('click', () => {
      initializeListing('date', 'asc');
    }); // Price filtered listing

    const priceOrderBtn = document.querySelector('#priceOrder');
    priceOrderBtn.addEventListener('click', () => {
      initializeListing('price', 'asc');
    }); // Searchbar operator

    const searchElSelector = elGroup => {
      elGroup.forEach(el => {
        el.addEventListener('click', e => {
          var params = new URLSearchParams(window.location.search);

          if (e.target.getAttribute('data-search') == 'all') {
            params.delete(String(e.target.getAttribute('search-type')));
            window.location.search = params;
          } else {
            params.set(String(e.target.getAttribute('search-type')), String(e.target.getAttribute('data-search')));
            window.location.search = params;
          }
        });
      });
    };

    const searchPropTypeEl = document.querySelectorAll('.searchPropType');
    const searchPrice = document.querySelectorAll('.searchPrice');
    const searchLength = document.querySelectorAll('.searchLength');
    const searchDate = document.querySelectorAll('.searchDate');
    const searchBroker = document.querySelectorAll('.searchBroker');
    const searchArea = document.querySelectorAll('.searchArea');
    searchElSelector(searchPropTypeEl);
    searchElSelector(searchPrice);
    searchElSelector(searchLength);
    searchElSelector(searchDate);
    searchElSelector(searchBroker);
    searchElSelector(searchArea);
  }); // Map position while scrolling

  const listingMove = int => {
    const contactEle = document.querySelector('#rentMapContainer');
    const stickyTopLoc = contactEle.offsetTop;
    const locEle = document.querySelector('#rentLocContainer');
    const topLocEle = locEle.offsetTop;

    window.onscroll = function () {
      if (window.pageYOffset < stickyTopLoc) {
        contactEle.classList.remove('rentStickyEle');
      } else if (window.pageYOffset > stickyTopLoc & window.pageYOffset < topLocEle - 720) {
        contactEle.classList.add('rentStickyEle');
        contactEle.style.top = '0px';

        if (window.innerWidth >= 768 & window.innerWidth < 1024) {
          contactEle.style.right = `7vw`;
          contactEle.style.width = `${window.innerWidth * 0.86 * 0.3}px`;
          contactEle.style.height = '480px';
        } else if (window.innerWidth >= 1024 & window.innerWidth < 1440) {
          contactEle.style.right = `7vw`;
          contactEle.style.width = `${window.innerWidth * 0.86 * 0.34}px`;
          contactEle.style.height = '640px';
        } else if (window.innerWidth >= 1440) {
          contactEle.style.right = `${window.innerWidth / 2 - 607}px`;
          contactEle.style.width = '304px';
          contactEle.style.height = '640px';
        }
      } else {
        contactEle.style.top = `${topLocEle - window.pageYOffset - 720}px`;
      }
    };
  }; // Convert price into string


  const stringCon = num => {
    const numst = String(num);
    let numed = '';

    if (numst > 3) {
      for (i = 0; i < numst.length - 3; i++) {
        numed += numst[i];
      }

      numed += ',';

      for (i = numst.length - 3; i < numst.length; i++) {
        numed += numst[i];
      }
    }

    return numed;
  };
}

/***/ }),

/***/ "./src/modules/rmMatching.js":
/*!***********************************!*\
  !*** ./src/modules/rmMatching.js ***!
  \***********************************/
/***/ (() => {

if (window.location.pathname === '/roommate/') {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // Take the user to a different screen here.
    window.location = '/mobile';
  }

  window.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const rmQStep = document.querySelectorAll('.rm-question-step');
    const fNBtn = document.querySelector('#rmFNBtn');
    const rmNStep = document.querySelectorAll('.rmNextBtn');
    rmNStep.forEach(ele => {
      ele.addEventListener('click', () => {
        if (currentStep < rmQStep.length - 1) {
          rmQStep[currentStep].style.display = 'none';
          currentStep++;
          rmQStep[currentStep].style.display = 'block';

          if (currentStep > 0) {
            fNBtn.style.display = 'none';
            document.querySelector('#paginationBtnBox').style.display = 'block';
          }

          if (currentStep == 15) {
            document.querySelector('#paginationBtnBox').style.display = 'none';
            document.querySelector('#rmSubmitBtn').style.display = 'block';
          }

          if (currentStep == 16) {
            document.querySelector('#paginationBtnBox').style.display = 'none';
            document.querySelector('#rmSubmitBtn').style.display = 'none';
          }
        }
      });
    });
    const rmPStep = document.querySelectorAll('.rmPreviousBtn');
    rmPStep.forEach(ele => {
      ele.addEventListener('click', () => {
        if (currentStep > 0) {
          rmQStep[currentStep].style.display = 'none';
          currentStep--;
          rmQStep[currentStep].style.display = 'block';

          if (currentStep == 0) {
            fNBtn.style.display = 'block';
            document.querySelector('#paginationBtnBox').style.display = 'none';
          }
        }
      });
    });
    const rmSubmitBtn = document.querySelector('#rmSubmitBtn');
    let roommateCheckList = [];

    const addData = dt => {
      if (!dt.value) {
        roommateCheckList.push('');
      } else {
        roommateCheckList.push(dt.value);
      }
    }; // Input Data


    const appName = document.querySelector('#rmAppName');
    const appContact = document.querySelector('#rmAppContact');
    const appDate = document.querySelector('#rmAppDate');
    const appArea = document.querySelector('#rmAppArea');
    const appBudget = document.querySelector('#rmAppBudget');
    const appSelect = document.querySelectorAll('.rm-radio-btn');
    rmSubmitBtn.addEventListener('click', () => {
      emailjs.init('user_hedHXP5BIDEBqSuAdRcOt');
      addData(appName);
      addData(appContact);
      addData(appDate);
      addData(appArea);
      addData(appBudget);
      appSelect.forEach(el => {
        if (el.checked) {
          roommateCheckList.push(el.getAttribute('data-input'));
        }
      }); // Transfer to submit form

      const submissionInputForm = document.querySelectorAll('.roommateSubmissionFormInput');

      for (k = 0; k < roommateCheckList.length; k++) {
        submissionInputForm[k].value = roommateCheckList[k];
      }

      const emailjsSubmission = document.querySelector('#roommateSubmissionForm');
      emailjs.sendForm('service_g17icyc', 'template_v3ay8bh', emailjsSubmission);
    });
  });
}

/***/ }),

/***/ "./src/modules/verify.js":
/*!*******************************!*\
  !*** ./src/modules/verify.js ***!
  \*******************************/
/***/ (() => {

if (window.location.pathname === '/user-verify/') {
  window.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();
    const db = firebase.firestore();
    console.log('user-verify');

    const backToMainPage = () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // Take the user to a different screen here.
        window.location = '/mobile';
      } else {
        window.location = '/';
      }
    };

    auth.onAuthStateChanged(user => {
      if (!user) {
        backToMainPage();
      } else {
        document.querySelector('#verifyUsername').value = user.displayName;
        document.querySelector('#verifyUsername').disabled = true;
        document.querySelector('#verifyUsername').style.color = '#c0c0c0';
        document.querySelector('#verifyEmail').value = user.email;
        document.querySelector('#verifyEmail').disabled = true;
        document.querySelector('#verifyEmail').style.color = '#c0c0c0';
        db.collection('userInfo').doc(user.uid).get().then(res => {
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
          db.collection('userInfo').doc(user.uid).set({
            username: user.displayName,
            email: user.email,
            number: document.querySelector('#verifyNumber').value,
            wechat: document.querySelector('#verifyWeChat').value,
            membership: ''
          }).then(res => {
            backToMainPage();
          }).catch(err => {
            console.log(err);
          });
        }); // Skip back to the main page

        document.querySelector('#skipToMainBtn').addEventListener('click', () => {
          backToMainPage();
        });
      }
    });
  });
}

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcmu"] = self["webpackChunkcmu"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map