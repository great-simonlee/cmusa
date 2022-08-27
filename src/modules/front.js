if (window.location.pathname === '/') {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // Take the user to a different screen here.
    window.location = '/mobile';
  }

  window.addEventListener('DOMContentLoaded', () => {
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

    const NYAreaConvertor = (area) => {
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

    const BOSAreaConvertor = (area) => {
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
    NYlistingRef.orderBy('writetime', 'asc')
      .limit(8)
      .get()
      .then((res) => {
        NYListingDiv.style.display = 'grid';
        res.docs.map((el) => {
          // console.log(el.data());
          NYListingDiv.innerHTML += `
            <a class="frontToListing" href="/detail/?li=${el.data().uid}${
            el.data().writetime
          }" target="blank">
              <div class="main-rent-card">
                <img class="main-rent-img" src="https://drive.google.com/uc?export=view&id=${
                  el.data().pictures[0]
                }" alt="rentExample">
                <div class="main-rent-info">
                  <div>
                    <p class="main-rent-title">${el.data().title}</p>
                    <p class="main-rent-city">${NYAreaConvertor(
                      el.data().area
                    )}</p>
                    <p class="main-rent-term">租期：${el.data().length}</p>
                  </div>
                  <div class="main-rent-price"><p>$ ${stringCon(
                    el.data().price
                  )}/月</p></div>
                </div>
              </div>
            </a>`;
        });
        document.querySelector('#frontPreLoading').style.display = 'none';
      });

    const BOSlistingRef = db.collection('bostonListing');
    BOSlistingRef.orderBy('writetime', 'desc')
      .limit(8)
      .get()
      .then((res) => {
        const BOSListingDiv = document.querySelector('#BOSListingDiv');
        res.docs.map((el) => {
          BOSListingDiv.innerHTML += `
            <div class="main-rent-card">
              <img class="main-rent-img" src="https://drive.google.com/uc?export=view&id=${
                el.data().pictures[0]
              }" alt="rentExample">
              <div class="main-rent-info">
                <div>
                  <p class="main-rent-title">${el.data().title}</p>
                  <p class="main-rent-city">${BOSAreaConvertor(
                    el.data().area
                  )}</p>
                  <p class="main-rent-term">租期：${el.data().length}</p>
                </div>
                <div class="main-rent-price"><p>$ ${stringCon(
                  el.data().price
                )}/月</p></div>
              </div>
            </div>`;
        });
      });
    BOSlistingRef.orderBy('writetime', 'desc')
      .limit(6)
      .get()
      .then((res) => {
        res.docs.map((el) => {
          // console.log(el.data());
        });
      });

    document.querySelector('#mainSearchBtn').addEventListener('click', () => {
      let queryString = '?';
      document.querySelectorAll('.mainSearchSelectOption').forEach((el) => {
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
