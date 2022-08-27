if (window.location.pathname === '/rent/') {
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

    const url = window.location;
    const paramsStr = url.search;
    const getQueryString = new URLSearchParams(paramsStr);
    // console.log(params);
    const findParamKeyValue = (str) => {
      if (getQueryString.get(str) == null) {
        document.querySelector(`#${str}all`).style.color = '#f78915';
      } else {
        document.querySelector(
          `#${str}${getQueryString.get(str)}`
        ).style.color = '#f78915';
      }
    };

    const getParamKey = () => {
      findParamKeyValue('type');
      findParamKeyValue('price');
      findParamKeyValue('length');
      findParamKeyValue('date');
      findParamKeyValue('broker');
    };

    getParamKey();

    // get access to the db
    const defaultRef = db.collection('rentListing');
    var lastPageNumber;
    var startingPoint;
    defaultRef.get().then((res) => {
      // console.log(res.docs.length);
      // Insert pagination
      lastPageNumber = Math.ceil(res.docs.length / 10);
      for (i = 0; i < lastPageNumber; i++) {
        listingPagination.innerHTML += `<p class="page-number" data-page="${
          i + 1
        }">${i + 1}</p>`;
      }

      // Pagination data call
      const totalPage = document.querySelectorAll('.page-number');

      if (
        !parseInt(getQueryString.get('listingPage')) ||
        parseInt(getQueryString.get('listingPage')) == 1
      ) {
        totalPage[0].style.color = '#f78915';
      } else {
        totalPage[parseInt(getQueryString.get('listingPage'))].style.color =
          '#f78915';
      }
      // Listing refresher when pagination clicked
      totalPage.forEach((page) => {
        // When the pagination is clicked
        page.addEventListener('click', (e) => {
          listingContainer.innerHTML = '';
          totalPage.forEach((el) => {
            el.style.color = '#fff';
          });
          // e.target.style.color = '#f78915';
          let clickedCurrentPage = e.target.getAttribute('data-page');
          startingPoint = 10 * (clickedCurrentPage - 1);
          // let lastPageListingNumber = totalNum % 10;

          getQueryString.set('listingPage', String(clickedCurrentPage));

          window.location.search = getQueryString;
          // if (clickedCurrentPage != pageNum) {
          //   for (i = 0; i < 10; i++) {
          //     mapMarkerGenerator(res.docs[i].data().coordinate);
          //     makeListings(res.docs[startingPoint + i].data());
          //   }
          // } else {
          //   for (i = 0; i < lastPageListingNumber; i++) {
          //     mapMarkerGenerator(res.docs[i].data().coordinate);
          //     makeListings(res.docs[startingPoint + i].data());
          //   }
          // }

          // dateOrderBtn.scrollIntoView();
          // mapHoverEffecter();
          // console.log(res.docs.length);
          // listingMove(res.docs.length);
        });
      });
    });

    // Making listings
    const makeListings = (obj) => {
      console.log(obj.address);
      const timestamp = new Date(obj.writetime);
      if (obj.type == 'studio') {
        var objPropBed = 'Studio';
        var objPropBath = '1 Bathroom';
      } else {
        var objPropBed = obj.type[0] + ' Bedroom';
        var objPropBath = obj.type[2] + ' Bathroom';
      }
      listingContainer.innerHTML += `
        <a class="rlCoorEl" href="/detail/?li=${obj.uid}${obj.writetime}">
          <div class="rl-card" data-coor="${obj.coordinate}">
            <div class="rl-card-cont">
              <img class="rl-card-img" src="https://drive.google.com/uc?export=view&id=${
                obj.pictures[0]
              }">
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

    // // Map marker generator
    // const mapMarkerGenerator = (coor) => {
    //   const marker1 = new mapboxgl.Marker({
    //     color: '#b40219',
    //   })
    //     .setLngLat(coor)
    //     .addTo(maplisting);
    // };

    // // Listing card hover map effect
    // const mapHoverEffecter = () => {
    //   const rentListingCard = document.querySelectorAll('.rl-card');
    //   for (i = 0; i < rentListingCard.length; i++) {
    //     rentListingCard[i].addEventListener('mouseenter', (e) => {
    //       maplisting.flyTo({
    //         center: e.target.getAttribute('data-coor').split(','),
    //         essential: true,
    //         screenSpeed: 5,
    //       });
    //     });
    //   }
    // };

    if (
      !getQueryString.get('listingPage') ||
      parseInt(getQueryString.get('listingPage')) == 1
    ) {
      console.log(parseInt(getQueryString.get('listingPage')));
      console.log('First page');
      defaultRef
        .orderBy('writetime', 'desc')
        .limit(10)
        .get()
        .then((res) => {
          res.docs.map((listing) => {
            makeListings(listing.data());
            // console.log(.address);
          });
        });
    } else if (
      parseInt(getQueryString.get('listingPage')) > 1 ||
      parseInt(getQueryString.get('listingPage')) < lastPageNumber
    ) {
      const currnetPageNum = parseInt(getQueryString.get('listingPage'));
      console.log(currnetPageNum);
      // prevPageLastEl = defaultRef.get().then((res) => {
      //   res.docs[(currnetPageNum - 1) * 10];
      // });
      // [];
      // console.log(prevPageLastEl);
      // defaultRef
      //   .orderBy('writetime', 'desc')
      //   .startAt(prevPageLastEl)
      //   .limit(10)
      //   .get()
      //   .then((res) => {
      //     res.docs.map((listing) => {
      //       console.log(listing.data());
      //       // makeListings(listing.data());
      //       // console.log(.address);
      //     });
      //   });
      // console.log(getQueryString.get('listingPage'));
    } else {
      console.log(lastPageNumber);
    }
  });
}
