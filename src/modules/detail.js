if (window.location.pathname === '/detail/') {
  window.addEventListener('DOMContentLoaded', () => {
    const db = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('li');

    const subImgCont = document.querySelector('#detailSubImgCont');

    const translateToChinese = (fea) => {
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

    const stringCon = (num) => {
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

    db.collection('rentListing')
      .doc(myParam)
      .get()
      .then((res) => {
        document.querySelector('#detailLoadingSpinnerDiv').style.display =
          'none';
        document.querySelector('#detailContDiv').style.display = 'flex';

        document.querySelector('#detailTitle').innerHTML = res.data().title;
        document.querySelectorAll('.detailPrice').forEach((el) => {
          el.innerHTML = stringCon(res.data().price);
        });
        document.querySelector('#detailDescription').innerHTML =
          res.data().description;

        res.data().features.forEach((fea) => {
          document.querySelector('#detailFeatures').innerHTML += `
          <div class="dtdc-fea-card">
            <img src="${
              window.location.origin
            }/wp-content/uploads/2022/09/${fea}.png">
            <p>${translateToChinese(fea)}</p>
          </div>
          `;
        });

        res.data().amenities.forEach((fea) => {
          document.querySelector('#detailAmenities').innerHTML += `
          <div class="dtdc-fea-card">
            <img src="${
              window.location.origin
            }/wp-content/uploads/2022/09/${fea}.png">
            <p>${translateToChinese(fea)}</p>
          </div>
          `;
        });

        document.querySelectorAll('.detailBed').forEach((el) => {
          el.innerHTML = res.data().type[0];
        });
        document.querySelectorAll('.detailBath').forEach((el) => {
          el.innerHTML = res.data().type[2];
        });
        document.querySelectorAll('.detailBroker').forEach((el) => {
          el.innerHTML = res.data().broker;
        });

        console.log(res.data().pictures.length);

        if (res.data().pictures.length != 1) {
          document.querySelector(
            '#detailMainImg'
          ).src = `https://drive.google.com/uc?export=view&id=${
            res.data().pictures[1]
          }`;

          // let picArray = [];
          for (i = 1; i < res.data().pictures.length; i++) {
            subImgCont.innerHTML += `<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${
              res.data().pictures[i]
            }" alt="subImg${i}">`;
            // picArray.push(res.data().pictures[i]);
          }
        } else {
          document.querySelector(
            '#detailMainImg'
          ).src = `https://drive.google.com/uc?export=view&id=${
            res.data().pictures[0]
          }`;

          // let picArray = [];
          for (i = 0; i < res.data().pictures.length; i++) {
            subImgCont.innerHTML += `<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${
              res.data().pictures[i]
            }" alt="subImg${i}">`;
            // picArray.push(res.data().pictures[i]);
          }
        }

        // if (!res.data().mgmt) {
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
          subImgs.forEach((el) => {
            el.addEventListener('mouseover', () => {
              document.querySelector('#detailMainImg').src = `${el.getAttribute(
                'src'
              )}`;
            });
          });
        }, 2000);

        document.querySelectorAll('.detailLength').forEach((el) => {
          el.innerHTML = res.data().length;
        });
        document.querySelectorAll('.detailAddress').forEach((el) => {
          el.innerHTML = res.data().daddress;
        });
        document.querySelectorAll('.detailDate').forEach((el) => {
          el.innerHTML = res.data().date;
        });

        var mapDetail = new mapboxgl.Map({
          container: 'mapDetailDiv',
          // style: 'mapbox://styles/mapbox/streets-v11',   F3bYaVhsckVIwgNKTH6zAA3xwnA31659716256469
          style: 'mapbox://styles/mapbox/dark-v10',
          center: res.data().coordinate,
          zoom: 13,
        });

        mapDetail.addControl(new mapboxgl.NavigationControl());

        mapDetail.on('load', () => {
          const center = res.data().coordinate;
          const radius = 0.5;
          const options = {
            steps: 35,
            units: 'kilometers',
          };
          const circle = turf.circle(center, radius, options);

          mapDetail.addSource('circleData', {
            type: 'geojson',
            data: circle,
          });

          // add a layer that displays the data   F3bYaVhsckVIwgNKTH6zAA3xwnA31659715927129
          mapDetail.addLayer({
            id: 'circle-fill',
            type: 'fill',
            source: 'circleData',
            paint: {
              'fill-color': '#f78915',
              // 'fill-color': '#000',
              'fill-opacity': 0.5,
            },
          });
        });

        // ssssssss
        document
          .querySelector('#detailContactUsNow')
          .addEventListener('click', () => {
            document.querySelector('#detailContactUsNow').style.display =
              'none';
            document.querySelector('#detailContactUsNowLS').style.display =
              'block';

            const inquirySubmitForm =
              document.querySelector('#inquirySubmitForm');

            auth.onAuthStateChanged((user) => {
              if (!user) {
                window.location.replace('/member-login');
              } else {
                var proIn = res.data();
                const timestamp = new Date(res.data().writetime);

                db.collection('userInfo')
                  .doc(user.uid)
                  .get()
                  .then((res) => {
                    proIn['request'] = res.data();
                    document.querySelector('#inquiryUsername').value =
                      res.data().username;
                    document.querySelector('#inquiryEmail').value =
                      res.data().email;
                    document.querySelector('#inquiryNumber').value =
                      res.data().number;
                    document.querySelector('#inquiryWeChat').value =
                      res.data().wechat;
                  });

                document.querySelector('#inquiryTitle').value =
                  res.data().title;
                document.querySelector('#inquiryAddress').value =
                  res.data().address;
                document.querySelector('#inquiryType').value = res.data().type;
                document.querySelector('#inquiryPrice').value =
                  res.data().price;
                document.querySelector('#inquiryDate').value = res.data().date;
                document.querySelector('#inquiryTime').value = `${
                  timestamp.getMonth() + 1
                }/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}`;
                // document.querySelector('#inquiry').value =
                // document.querySelector('#inquiry').value =

                setTimeout(() => {
                  emailjs.init('user_02aBegGFQaEbfNQTDpYLP');

                  emailjs
                    .sendForm(
                      'service_un17shn',
                      'template_gjvuym4',
                      inquirySubmitForm
                    )
                    .then(() => {
                      // console.log();
                      document.querySelector(
                        '#detailContactUsNowLS'
                      ).style.display = 'none';
                      document.querySelector(
                        '#inquirySubmissionMsg'
                      ).style.display = 'flex';
                    });

                  // emailjs.sendForm(
                  //   'service_un17shn',
                  //   'template_gjvuym4',
                  //   inquirySubmitForm
                  // );
                }, 1000);
              }
            });
          });

        document
          .querySelector('#mbdetailContactUsNow')
          .addEventListener('click', () => {
            document.querySelector('#mbdetailContactUsNow').style.display =
              'none';
            document.querySelector('#mbdetailContactUsNowLS').style.display =
              'block';

            const inquirySubmitForm =
              document.querySelector('#inquirySubmitForm');

            auth.onAuthStateChanged((user) => {
              if (!user) {
                window.location.replace('/member-login');
              } else {
                var proIn = res.data();
                const timestamp = new Date(res.data().writetime);

                db.collection('userInfo')
                  .doc(user.uid)
                  .get()
                  .then((res) => {
                    proIn['request'] = res.data();
                    document.querySelector('#inquiryUsername').value =
                      res.data().username;
                    document.querySelector('#inquiryEmail').value =
                      res.data().email;
                    document.querySelector('#inquiryNumber').value =
                      res.data().number;
                    document.querySelector('#inquiryWeChat').value =
                      res.data().wechat;
                  });

                document.querySelector('#inquiryTitle').value =
                  res.data().title;
                document.querySelector('#inquiryAddress').value =
                  res.data().address;
                document.querySelector('#inquiryType').value = res.data().type;
                document.querySelector('#inquiryPrice').value =
                  res.data().price;
                document.querySelector('#inquiryDate').value = res.data().date;
                document.querySelector('#inquiryTime').value = `${
                  timestamp.getMonth() + 1
                }/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}`;
                // document.querySelector('#inquiry').value =
                // document.querySelector('#inquiry').value =

                setTimeout(() => {
                  emailjs.init('user_02aBegGFQaEbfNQTDpYLP');

                  emailjs
                    .sendForm(
                      'service_un17shn',
                      'template_gjvuym4',
                      inquirySubmitForm
                    )
                    .then(() => {
                      // console.log();
                      document.querySelector(
                        '#mbdetailContactUsNowLS'
                      ).style.display = 'none';
                      document.querySelector(
                        '#mbinquirySubmissionMsg'
                      ).style.display = 'flex';
                    });

                  // emailjs.sendForm(
                  //   'service_un17shn',
                  //   'template_gjvuym4',
                  //   inquirySubmitForm
                  // );
                }, 1000);
              }
            });
          });

        //////
      })
      .catch((err) => {
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
      } else if (
        (window.pageYOffset > stickyTopLoc) &
        (window.pageYOffset < topLocEle)
      ) {
        contactEle.classList.add('stickyEle');
        contactEle.style.top = '96px';
        contactEle.style.right = '14.6vw';
        descEle.style.marginRight = '264px';
      } else if (window.pageYOffset > topLocEle) {
        contactEle.style.top = `${topLocEle - window.pageYOffset + 96}px`;
      } else {
        contactEle.classList.remove('stickyEle');
      }
    };

    // document
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
