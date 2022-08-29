if (window.location.pathname === '/mobile/') {
  window.addEventListener('DOMContentLoaded', () => {
    const hder = document.querySelector('#gnav');
    const fter = document.querySelector('#gfter');
    hder.style.display = 'none';
    fter.style.display = 'none';

    const db = firebase.firestore();
    const auth = firebase.auth();

    // Convert price into string
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

    const NYRef = db.collection('rentListing');
    const mobileListingCont = document.querySelector('#mobileListingCont');
    NYRef.limit(10)
      .get()
      .then((res) => {
        // Mobile LS Disappear
        document.querySelector('#mobileFrontLoadingSpinnerDiv').style.display =
          'none';
        res.docs.map((doc) => {
          console.log(doc.data());
          mobileListingCont.innerHTML += `
          <a class="mobileListingAnchor" href="/detail/?li=${doc.data().uid}${
            doc.data().writetime
          }">
            <div class="mb-card">
              <img class="mb-card-img" src="https://drive.google.com/uc?export=view&id=${
                doc.data().pictures[0]
              }" alt="CMMobileListingImg">
              <div class="mb-card-desc">
                <p class="mbc-desc-title">${doc.data().title}</p>
                <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 <br> 地址：${
                  doc.data().daddress
                }</p>
                <p class="mbc-desc-price">$ ${stringCon(
                  doc.data().price
                )}/月</p>
              </div>
            </div>
          </a>`;
        });
      });
  });
}
