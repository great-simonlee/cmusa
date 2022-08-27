if (window.location.pathname === '/rent/') {
  window.addEventListener('DOMContentLoaded', () => {
    // mapbox
    var maplisting = new mapboxgl.Map({
      container: 'rentListingMap',
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: ['-73.98917', '40.74358'],
      zoom: 12,
    });

    const db = firebase.firestore();
    // Filter variables
    var currentFilter = 0;
    // Pagination variables
    var defaultCurrentPage = 1;
    var timeCurrentPage = 1;
    var priceCurrentPage = 1;
    // Listing variables
    const listingContainer = document.querySelector('#listingContainer');
    const coorListing = [];
    const coorListingPrice = [];
    const coorListingTime = [];

    // Rent Listing Pagination
    const listingPagination = document.querySelector('#listingPagination');
    db.collection('rentListing')
      .get()
      .then((res) => {
        const totalNum = res.docs.length;
        console.log(totalNum);
        const pageNum = Math.ceil(res.docs.length / 10);
        for (i = 0; i < pageNum; i++) {
          listingPagination.innerHTML += `<p class="page-number" data-page="${
            i + 1
          }">${i + 1}</p>`;
        }

        // Initial listing
        for (i = 0; i < 9; i++) {
          coorListing.push(res.docs[i].data().coordinate);

          const timestamp = new Date(res.docs[i].data().writetime);
          const year = timestamp.getFullYear();
          const month = timestamp.getMonth() + 1;
          const date = timestamp.getDate();
          const hour = timestamp.getHours();
          const minute = timestamp.getMinutes();
          listingContainer.innerHTML += `
          <a class="rlCoorEl" href="/detail/?li=${res.docs[i].data().uid}${
            res.docs[i].data().writetime
          }">
            <div class="rl-card" data-coor="${res.docs[i].data().coordinate}">
              <div class="rl-card-cont">
                <img class="rl-card-img" src="https://drive.google.com/uc?export=view&id=${
                  res.docs[i].data().pictures[0]
                }">
                <div class="rl-card-info">
                  <div class="rlc-info-text">
                    <p>${res.docs[i].data().type[0]} Bedroom</p>
                    <p>${res.docs[i].data().type[2]} Bathroom</p>
                  </div>
                  <p>$ ${res.docs[i].data().price}/Month</p>
                </div>
              </div>
              <div class="rl-card-desc">
                <h4>${res.docs[i].data().title}</h4>
                <div>
                  <p>租期：${res.docs[i].data()['length']}</p>
                  <p>入住时间：${res.docs[i].data().date}</p>
                  <p>发布时间：${month}/${date}/${year} ${hour}:${minute}</p>
                </div>
              </div>
            </div>
          </a>`;
        }
        coorListing.forEach((el) => {
          const marker1 = new mapboxgl.Marker({
            color: '#b40219',
          })
            .setLngLat(el)
            .addTo(maplisting);
        });
        listingMove();

        const totalPage = document.querySelectorAll('.page-number');
        totalPage.forEach((page) => {
          // When the pagination is clicked
          page.addEventListener('click', (e) => {
            listingContainer.innerHTML = '';
            defaultCurrentPage = e.target.getAttribute('data-page');
            console.log(defaultCurrentPage);
            let startingPoint = 10 * (defaultCurrentPage - 1);
            console.log(startingPoint);
            let pageVerify = 10;

            if (defaultCurrentPage == pageNum) {
              pageVerify = totalNum % 10;
            }

            db.collection('rentListing')
              .orderBy('writetime')
              .startAfter(res.docs[startingPoint])
              .limit(pageVerify)
              .get()
              .then((result) => {
                console.log('START LISTING: ' + startingPoint);
                console.log('LISTING NUMBER: ' + pageVerify);
                // TEXT TO SPINNER OR VICE VERSA

                result.docs.map((doc) => {
                  coorListing.push(doc.data().coordinate);

                  const timestamp = new Date(doc.data().writetime);
                  const year = timestamp.getFullYear();
                  const month = timestamp.getMonth() + 1;
                  const date = timestamp.getDate();
                  const hour = timestamp.getHours();
                  const minute = timestamp.getMinutes();

                  listingContainer.innerHTML += `
                <a class="rlCoorEl" href="/detail/?li=${doc.data().uid}${
                    doc.data().writetime
                  }">
                  <div class="rl-card" data-coor="${doc.data().coordinate}">
                    <div class="rl-card-cont">
                      <img class="rl-card-img" src="https://drive.google.com/uc?export=view&id=${
                        doc.data().pictures[0]
                      }">
                      <div class="rl-card-info">
                        <div class="rlc-info-text">
                          <p>${doc.data().type[0]} Bedroom</p>
                          <p>${doc.data().type[2]} Bathroom</p>
                        </div>
                        <p>$ ${stringCon(doc.data().price)}/Month</p>
                      </div>
                    </div>
                    <div class="rl-card-desc">
                      <h4>${doc.data().title}</h4>
                      <div>
                        <p>租期：${doc.data()['length']}</p>
                        <p>入住时间：${doc.data().date}</p>
                        <p>发布时间：${month}/${date}/${year} ${hour}:${minute}</p>
                      </div>
                    </div>
                  </div>
                </a>`;
                });
                coorListing.forEach((el) => {
                  const marker1 = new mapboxgl.Marker({
                    color: '#b40219',
                  })
                    .setLngLat(el)
                    .addTo(maplisting);
                });
                listingMove();
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });

    if (window.location.search == '') {
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      console.log(window.location.search);
      console.log(urlParams);
      const paramType = urlParams.get('type');
      console.log(paramType);
    }

    const priceOrderBtn = document.querySelector('#priceOrder');
    priceOrderBtn.addEventListener('click', () => {
      listingContainer.innerHTML = '';
      db.collection('rentListing')
        .orderBy('price', 'asc') // desc
        .limit(10)
        .get()
        .then((result) => {
          // TEXT TO SPINNER OR VICE VERSA
          result.docs.map((doc) => {
            coorListingPrice.push(doc.data().coordinate);

            const timestamp = new Date(doc.data().writetime);
            const year = timestamp.getFullYear();
            const month = timestamp.getMonth() + 1;
            const date = timestamp.getDate();
            const hour = timestamp.getHours();
            const minute = timestamp.getMinutes();

            listingContainer.innerHTML += `
                  <a class="rlCoorEl" href="/detail/?li=${doc.data().uid}${
              doc.data().writetime
            }">
                    <div class="rl-card" data-coor="${doc.data().coordinate}">
                      <div class="rl-card-cont">
                        <img class="rl-card-img" src="https://drive.google.com/uc?export=view&id=${
                          doc.data().pictures[0]
                        }">
                        <div class="rl-card-info">
                          <div class="rlc-info-text">
                            <p>${doc.data().type[0]} Bedroom</p>
                            <p>${doc.data().type[2]} Bathroom</p>
                          </div>
                          <p>$ ${stringCon(doc.data().price)}/Month</p>
                        </div>
                      </div>
                      <div class="rl-card-desc">
                        <h4>${doc.data().title}</h4>
                        <div>
                          <p>租期：${doc.data()['length']}</p>
                          <p>入住时间：${doc.data().date}</p>
                          <p>发布时间：${month}/${date}/${year} ${hour}:${minute}</p>
                        </div>
                      </div>
                    </div>
                  </a>`;
          });
          listingMove();
        });

      coorListingPrice.forEach((el) => {
        const marker1 = new mapboxgl.Marker({
          color: '#b40219',
        })
          .setLngLat(el)
          .addTo(maplisting);
      });
    });
    const timeOrderBtn = document.querySelector('#timeOrder');
    timeOrderBtn.addEventListener('click', () => {
      listingContainer.innerHTML = '';
      db.collection('rentListing')
        .orderBy('date', 'asc') //asc
        .limit(10)
        .get()
        .then((result) => {
          // TEXT TO SPINNER OR VICE VERSA
          result.docs.map((doc) => {
            coorListingTime.push(doc.data().coordinate);

            const timestamp = new Date(doc.data().writetime);
            const year = timestamp.getFullYear();
            const month = timestamp.getMonth() + 1;
            const date = timestamp.getDate();
            const hour = timestamp.getHours();
            const minute = timestamp.getMinutes();

            listingContainer.innerHTML += `
                  <a class="rlCoorEl" href="/detail/?li=${doc.data().uid}${
              doc.data().writetime
            }">
                    <div class="rl-card" data-coor="${doc.data().coordinate}">
                      <div class="rl-card-cont">
                        <img class="rl-card-img" src="https://drive.google.com/uc?export=view&id=${
                          doc.data().pictures[0]
                        }">
                        <div class="rl-card-info">
                          <div class="rlc-info-text">
                            <p>${doc.data().type[0]} Bedroom</p>
                            <p>${doc.data().type[2]} Bathroom</p>
                          </div>
                          <p>$ ${stringCon(doc.data().price)}/Month</p>
                        </div>
                      </div>
                      <div class="rl-card-desc">
                        <h4>${doc.data().title}</h4>
                        <div>
                          <p>租期：${doc.data()['length']}</p>
                          <p>入住时间：${doc.data().date}</p>
                          <p>发布时间：${month}/${date}/${year} ${hour}:${minute}</p>
                        </div>
                      </div>
                    </div>
                  </a>`;
          });
          listingMove();
        });

      coorListingTime.forEach((el) => {
        const marker1 = new mapboxgl.Marker({
          color: '#b40219',
        })
          .setLngLat(el)
          .addTo(maplisting);
      });
    });

    const listingMove = () => {
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

      const contactEle = document.querySelector('#rentMapContainer');
      const stickyTopLoc = contactEle.offsetTop;
      const locEle = document.querySelector('#rentLocContainer');
      const topLocEle = locEle.offsetTop;
      window.onscroll = function () {
        if (window.pageYOffset < stickyTopLoc) {
          contactEle.classList.remove('rentStickyEle');
        } else if (
          (window.pageYOffset > stickyTopLoc) &
          (window.pageYOffset < topLocEle - window.pageYOffset + 1500)
        ) {
          contactEle.classList.add('rentStickyEle');
          contactEle.style.top = '0px';
          contactEle.style.right = '14.9vw';
          contactEle.style.width = '304px';
          contactEle.style.height = '400px';
        } else {
          contactEle.style.top = `${topLocEle - window.pageYOffset - 670}px`;
        }
      };
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
  });

  // PAGINATION
  // limit(10).startAfter(10).get()

  // maptest.flyTo({
  //   center: newPostingObj.coordinate,
  //   essential: true,
  //   screenSpeed: 3,
  // });

  // const marker1 = new mapboxgl.Marker({
  //   color: '#b40219',
  // })
  //   .setLngLat(newPostingObj.coordinate)
  //   .addTo(maptest);
}
