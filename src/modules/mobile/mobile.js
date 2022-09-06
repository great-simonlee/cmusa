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
      fileterDiv.style.display = 'flex';
      filterDivDetail.forEach((el) => {
        el.style.visibility = 'hidden';
      });
      filterDivDetail[0].style.visibility = 'visible';
    });
    const mobileAreaFilter = document.querySelector('#mobile-filter-area');
    mobileAreaFilter.addEventListener('click', () => {
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

    //
    var selectedCategory;
    const mobileFrontCategory = document.querySelectorAll(
      '.mb-menu-category-item'
    );
    const underlineCategory = document.querySelectorAll(
      '.mb-menu-category-selected'
    );
    const mobileFrontRentListingDiv = document.querySelector(
      '#mb-front-rentListing'
    );
    const mobileFrontShorterm = document.querySelector('#mb-front-shortterm');
    const mobileFrontRoommate = document.querySelector('#mb-front-roommate');

    mobileFrontCategory.forEach((el) => {
      // el.style.color = '#c9c9c9';
      el.addEventListener('click', (e) => {
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

    const mobileFooterMoreDefault = document.querySelector(
      '#mobileFooterMoreDefault'
    );
    const mobileFooterDetail = document.querySelector('#mobileFooterDetail');
    const mobileFooterDetailMenu = document.querySelector(
      '#mobileFooterDetailMenu'
    );
    mobileFooterMoreDefault.addEventListener('click', () => {
      console.log('more btn');
      mobileFooterMoreDefault.style.display = 'none';
      mobileFooterDetail.style.display = 'flex';
      mobileFooterDetailMenu.style.display = 'flex';
    });
    mobileFooterDetail.addEventListener('click', () => {
      console.log('detail');
      mobileFooterMoreDefault.style.display = 'flex';
      mobileFooterDetail.style.display = 'none';
      mobileFooterDetailMenu.style.display = 'none';
    });
    //
  });
}
