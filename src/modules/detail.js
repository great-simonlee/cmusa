if (window.location.pathname === '/detail/') {
  window.addEventListener('DOMContentLoaded', () => {
    console.log('detail');
    const db = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('li');

    const subImgCont = document.querySelector('#detailSubImgCont');

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

    console.log(myParam);

    db.collection('rentListing')
      .doc(myParam)
      .get()
      .then((res) => {
        console.log(res.data());
        document.querySelector('#detailLoadingSpinnerDiv').style.display =
          'none';
        document.querySelector('#detailContDiv').style.display = 'flex';

        document.querySelector('#detailTitle').innerHTML = res.data().title;
        document.querySelectorAll('.detailPrice').forEach((el) => {
          el.innerHTML = stringCon(res.data().price);
        });
        document.querySelector('#detailDescription').innerHTML =
          res.data().description;
        document.querySelectorAll('.detailBed').forEach((el) => {
          el.innerHTML = res.data().type[0];
        });
        document.querySelectorAll('.detailBath').forEach((el) => {
          el.innerHTML = res.data().type[2];
        });
        document.querySelectorAll('.detailBroker').forEach((el) => {
          el.innerHTML = res.data().broker;
        });
        document.querySelector(
          '#detailMainImg'
        ).src = `https://drive.google.com/uc?export=view&id=${
          res.data().pictures[0]
        }`;

        let picArray = [];
        for (i = 0; i < res.data().pictures.length; i++) {
          subImgCont.innerHTML += `<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${
            res.data().pictures[i]
          }" alt="subImg${i}">`;
          picArray.push(res.data().pictures[i]);
        }

        setTimeout(() => {
          const subImgs = document.querySelectorAll('.subImg');
          subImgs.forEach((el) => {
            el.addEventListener('mouseover', () => {
              document.querySelector('#detailMainImg').src = `${el.getAttribute(
                'src'
              )}`;
            });
          });
        }, 1000);

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
  });
}
