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

    // URL Param variables
    const currentURL = window.location.search;
    const currentParamsURL = new URLSearchParams(currentURL);

    var NYRef = db.collection('rentListing');

    // Mobile Filter Section
    const findParamKeyValue = (str) => {
      if (currentParamsURL.get(str) == null) {
        document.querySelector(`#mob${str}all`).style.color = '#f78915';
      } else {
        document.querySelector(
          `#mob${str}${currentParamsURL.get(str)}`
        ).style.color = '#f78915';
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

    const searchElSelector = (elGroup) => {
      elGroup.forEach((el) => {
        el.addEventListener('click', (e) => {
          var params = new URLSearchParams(window.location.search);

          if (e.target.getAttribute('data-search') == 'all') {
            params.delete(String(e.target.getAttribute('search-type')));
            window.location.search = params;
          } else {
            params.set(
              String(e.target.getAttribute('search-type')),
              String(e.target.getAttribute('data-search'))
            );
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
      // mobileListingCont.innerHTML = '';
      fileterDiv.style.display = 'flex';
      filterDivDetail.forEach((el) => {
        el.style.visibility = 'hidden';
      });
      filterDivDetail[0].style.visibility = 'visible';
    });
    const mobileAreaFilter = document.querySelector('#mobile-filter-area');
    mobileAreaFilter.addEventListener('click', () => {
      // mobileListingCont.innerHTML = '';
      fileterDiv.style.display = 'flex';
      filterDivDetail.forEach((el) => {
        el.style.visibility = 'hidden';
      });
      filterDivDetail[1].style.visibility = 'visible';
    });
    const mobilePriceFilter = document.querySelector('#mobile-filter-price');
    mobilePriceFilter.addEventListener('click', () => {
      fileterDiv.style.display = 'flex';
      filterDivDetail.forEach((el) => {
        el.style.visibility = 'hidden';
      });
      filterDivDetail[2].style.visibility = 'visible';
      console.log('price');
    });

    // Actual Listing Showing
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
