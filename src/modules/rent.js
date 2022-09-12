if (window.location.pathname === '/rent/') {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
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
      zoom: 12,
    });

    const db = firebase.firestore();

    // Map marker generator
    const mapMarkerGenerator = (coor) => {
      const marker1 = new mapboxgl.Marker({
        color: '#f78915',
        scale: '0.7',
      })
        .setLngLat(coor)
        .addTo(maplisting);
    };

    // Making listings
    const makeListings = (obj) => {
      // console.log(obj.address);
      // console.log(parseInt(String(obj.writetime).substring(0, 12)));
      const timestamp = new Date(
        parseInt(String(obj.writetime).substring(0, 13))
      );
      // const writeTimeStampTemp = new Date(obj.writetime);
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
        <a class="rlCoorEl" href="/detail/?li=${obj.uid}${
        obj.writetime
      }" target="blank">
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
                <p>发布时间：${
                  timestamp.getMonth() + 1
                }/${timestamp.getDate()}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}</p>
              </div>
            </div>
          </div>
        </a>`;
    };

    // Listing card hover map effect
    const mapHoverEffecter = () => {
      const rentListingCard = document.querySelectorAll('.rl-card');
      for (i = 0; i < rentListingCard.length; i++) {
        rentListingCard[i].addEventListener('mouseenter', (e) => {
          maplisting.flyTo({
            center: e.target.getAttribute('data-coor').split(','),
            essential: true,
            screenSpeed: 5,
          });
        });
      }
    };

    // Search initial query colorizer
    const rentListingDiv = document.querySelector('#rentListingDiv');
    const currentURL = window.location.search;
    // console.log(currentURL);
    const currentParamsURL = new URLSearchParams(currentURL);
    // console.log(currentParamsURL.get('type'));
    const findParamKeyValue = (str) => {
      if (currentParamsURL.get(str) == null) {
        document.querySelector(`#${str}all`).style.color = '#f78915';
      } else {
        document.querySelector(
          `#${str}${currentParamsURL.get(str)}`
        ).style.color = '#f78915';
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
        fbQueryRef = fbQueryRef.where(
          'length',
          '==',
          currentParamsURL.get('length')
        );
      }
    }
    if (currentParamsURL.get('date')) {
      fbQueryRef = fbQueryRef.where(
        'dateMonth',
        '==',
        parseInt(currentParamsURL.get('date'))
      );
    }
    if (currentParamsURL.get('broker')) {
      const modifiedQuery = currentParamsURL.get('broker').replaceAll('z', ' ');
      fbQueryRef = fbQueryRef.where('broker', '==', modifiedQuery);
    }

    // Initialize listing
    const listingContainer = document.querySelector('#listingContainer');
    const listingPagination = document.querySelector('#listingPagination');
    const initializeListing = (type, order) => {
      coorListing = [];

      fbQueryRef
        // .orderBy(type, order) // OrderBy should be rewritten
        .get()
        .then((res) => {
          document.querySelector('#loadingSpinnerDiv').style.display = 'none';
          rentListingDiv.style.display = 'flex';
          listingContainer.innerHTML = '';
          listingPagination.innerHTML = '';
          maplisting.resize();

          res.docs.map((el) => {
            mapMarkerGenerator(el.data().coordinate);
          });

          // Initial listing data
          // Filtered listing doesn't have 10 listings
          // console.log(res.docs.length);

          if (res.docs.length == 0) {
            console.log('No Listings');
          } else if (res.docs.length > 10) {
            for (i = 0; i < 10; i++) {
              makeListings(res.docs[i].data());
              // mapMarkerGenerator(res.docs[i].data().coordinate);
            }
          } else {
            for (i = 0; i < res.docs.length; i++) {
              makeListings(res.docs[i].data());
              // mapMarkerGenerator(res.docs[i].data().coordinate);
            }
          }

          // if (currentURL == '') {
          // } else {
          //   for (i = 0; i < ; i++) {
          //     makeListings(res.docs[i].data());
          //     mapMarkerGenerator(res.docs[i].data().coordinate);
          //   }
          // }

          mapHoverEffecter();

          listingMove(10);

          // Insert pagination
          const totalNum = res.docs.length;
          const pageNum = Math.ceil(totalNum / 10);
          for (i = 0; i < pageNum; i++) {
            listingPagination.innerHTML += `<p class="page-number" data-page="${
              i + 1
            }">${i + 1}</p>`;
          }

          // Pagination data call
          const totalPage = document.querySelectorAll('.page-number');
          totalPage[0].style.color = '#f78915';

          // Listing refresher when pagination clicked
          totalPage.forEach((page) => {
            // When the pagination is clicked
            page.addEventListener('click', (e) => {
              listingContainer.innerHTML = '';
              totalPage.forEach((el) => {
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
              document
                .querySelector('#rentMapContainer')
                .classList.remove('rentStickyEle');

              mapHoverEffecter();

              listingMove(document.querySelectorAll('.rlCoorEl').length);
            });
          });
        });
    };

    // Default listing
    initializeListing('writetime', 'desc');

    // Date filtered listing
    const dateOrderBtn = document.querySelector('#timeOrder');
    dateOrderBtn.addEventListener('click', () => {
      initializeListing('date', 'asc');
    });
    // Price filtered listing
    const priceOrderBtn = document.querySelector('#priceOrder');
    priceOrderBtn.addEventListener('click', () => {
      initializeListing('price', 'asc');
    });

    // Searchbar operator
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
  });

  // Map position while scrolling
  const listingMove = (int) => {
    const contactEle = document.querySelector('#rentMapContainer');
    const stickyTopLoc = contactEle.offsetTop;
    const locEle = document.querySelector('#rentLocContainer');
    const topLocEle = locEle.offsetTop;

    window.onscroll = function () {
      if (window.pageYOffset < stickyTopLoc) {
        contactEle.classList.remove('rentStickyEle');
      } else if (
        (window.pageYOffset > stickyTopLoc) &
        (window.pageYOffset < topLocEle - 720)
      ) {
        contactEle.classList.add('rentStickyEle');
        contactEle.style.top = '0px';
        if ((window.innerWidth >= 768) & (window.innerWidth < 1024)) {
          contactEle.style.right = `7vw`;
          contactEle.style.width = `${window.innerWidth * 0.86 * 0.3}px`;
          contactEle.style.height = '480px';
        } else if ((window.innerWidth >= 1024) & (window.innerWidth < 1440)) {
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
  };

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
}
