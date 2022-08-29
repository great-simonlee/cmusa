if (window.location.pathname === '/mypage/') {
  window.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.replace('/');
      } else {
        const db = firebase.firestore();
        const uid = user.uid;
        const listingRef = db.collection('rentListing');
        const userRef = db.collection('userInfo');

        const myListingDiv = document.querySelector('#myListingDiv');
        const mbMyListing = document.querySelector('#mbMyListing');

        listingRef
          .where('uid', '==', uid)
          .get()
          .then((res) => {
            res.docs.map((el) => {
              // console.log(el.data());
              const timestamp = new Date(
                parseInt(String(el.data().writetime).substring(0, 13))
              );

              if (el.data().type == 'studio') {
                var objPropBed = 'Studio';
                var objPropBath = '1 Bath';
              } else {
                var objPropBed = el.data().type[0] + ' Bed';
                var objPropBath = el.data().type[2] + ' Bath';
              }

              myListingDiv.innerHTML += `
                <div class="myp-lising-card">
                  <a class="myListingAnchor" href="/detail/?li=${
                    el.data().uid
                  }${el.data().writetime}" target="_blank">
                    <div class="myp-card-left">
                      <img class="myp-card-img" src="https://drive.google.com/uc?export=view&id=${
                        el.data().pictures[0]
                      }">
                      <div class="myp-card-img-desc">
                        <div class="myp-card-type">
                          <p>${objPropBed}</p>
                          <p>${objPropBath}</p>
                        </div>
                        <div class="myp-card-price">$ ${
                          el.data().price
                        }/月</div>
                      </div>
                    </div>
                  </a>
                  <a class="myListingAnchor" href="/detail/?li=${
                    el.data().uid
                  }${el.data().writetime}" target="blank">
                    <div class="myp-card-desc">
                      <div class="myp-card-detail">
                        <p>${el.data().title}</p>
                        <p>租期：${el.data().length}</p>
                        <p>入住时间：${el.data().date}</p>
                        <p>发布时间：${
                          timestamp.getMonth() + 1
                        }/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}</p>
                      </div>
                    </div>
                  </a>
                  <div class="myp-card-editdelete">
                    <i class="fa fa-pencil-square-o editdelete" aria-hidden="true" data-search="${
                      el.data().uid
                    }${el.data().writetime}"><span>&nbsp;编辑</span></i>
                    <i class="fa fa-trash-o editdelete deleteDiv" aria-hidden="true" data-search="${
                      el.data().uid
                    }${el.data().writetime}"><span>&nbsp;删除</span></i>
                  </div>
                </div>
              `;

              mbMyListing.innerHTML += `
              <div class="mb-mypage-card">
                <a href="/detail/?li=${el.data().uid}${el.data().writetime}">
                  <div class="mb-mypage-card-cont">
                    <img class="mb-mypage-card-img" src="https://drive.google.com/uc?export=view&id=${
                      el.data().pictures[0]
                    }">
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
            });

            // Edit and Delete btn activation
            const editDiv = document.querySelectorAll('.editDiv');
            editDiv.forEach((el) => {
              el.addEventListener('click', () => {
                console.log('edit');
                console.log(el.getAttribute('data-search'));
              });
            });
            const deleteDiv = document.querySelectorAll('.deleteDiv');
            deleteDiv.forEach((el) => {
              el.addEventListener('click', () => {
                listingRef
                  .doc(el.getAttribute('data-search'))
                  .delete()
                  .then(() => {
                    console.log('Successfully deleted');
                    location.reload();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            });
          });
        userRef
          .doc(uid)
          .get()
          .then((res) => {
            const userEmailInput = document.querySelector('#mpEmail');
            userEmailInput.style.color = '#fff';
            userEmailInput.value = res.data().email;
            userEmailInput.disabled = true;
            const userName = document.querySelector('#mpUsername');
            userName.style.color = '#fff';
            userName.value = res.data().username;
            userName.disabled = true;
            const userPhone = document.querySelector('#mpPhone');
            userPhone.style.color = '#fff';
            userPhone.value = res.data().number;
            userPhone.disabled = true;
            const userWechat = document.querySelector('#mpWeixin');
            userWechat.style.color = '#fff';
            userWechat.value = res.data().wechat;
            userWechat.disabled = true;
          });
      }
    });

    const mypageCateBtn = document.querySelectorAll('.mpcat-item');
    const mypageSection = document.querySelectorAll('.mypage-section');

    mypageCateBtn.forEach((el) => {
      el.addEventListener('click', (e) => {
        let index = [...mypageCateBtn].indexOf(el);
        mypageSection.forEach((ele) => {
          ele.style.display = 'none';
        });
        mypageSection[index].style.display = 'flex';
        mypageCateBtn.forEach((ele) => {
          ele.style.backgroundColor = '#fff';
          ele.style.color = '#000';
        });
        mypageCateBtn[index].style.color = '#fff';
        mypageCateBtn[index].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
      });
    });

    if (window.location.search === '?mylist') {
      mypageSection.forEach((ele) => {
        ele.style.display = 'none';
      });
      mypageSection[2].style.display = 'flex';
      mypageCateBtn.forEach((ele) => {
        ele.style.backgroundColor = '#fff';
        ele.style.color = '#000';
      });
      mypageCateBtn[2].style.color = '#fff';
      mypageCateBtn[2].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
    }

    const mobMypageCateBtn = document.querySelectorAll('.mob-mpcat-item');

    mobMypageCateBtn.forEach((el) => {
      el.addEventListener('click', (e) => {
        let index = [...mobMypageCateBtn].indexOf(el);
        mypageSection.forEach((ele) => {
          ele.style.display = 'none';
        });
        mypageSection[index].style.display = 'flex';
        mobMypageCateBtn.forEach((ele) => {
          ele.style.backgroundColor = '#fff';
          ele.style.color = '#000';
        });
        mobMypageCateBtn[index].style.color = '#fff';
        mobMypageCateBtn[index].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
      });
    });

    if (window.location.search === '?mylist') {
      mypageSection.forEach((ele) => {
        ele.style.display = 'none';
      });
      mypageSection[2].style.display = 'flex';
      mobMypageCateBtn.forEach((ele) => {
        ele.style.backgroundColor = '#fff';
        ele.style.color = '#000';
      });
      mobMypageCateBtn[2].style.color = '#fff';
      mobMypageCateBtn[2].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
    }
  });
}
