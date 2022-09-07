if (window.location.pathname === '/register/') {
  window.addEventListener('DOMContentLoaded', () => {
    // firebase
    const db = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();

    auth.onAuthStateChanged((user) => {
      if (user) {
        // mapbox
        var maptest = new mapboxgl.Map({
          container: 'maptestDiv',
          // style: 'mapbox://styles/mapbox/streets-v11',
          style: 'mapbox://styles/mapbox/dark-v10',
          center: [121.5003576, 31.2185876],
          zoom: 12,
        });

        maptest.addControl(new mapboxgl.NavigationControl());

        const marker1 = new mapboxgl.Marker({
          color: '#b40219',
        })
          .setLngLat([121.5003576, 31.2185876])
          .addTo(maptest);

        const newPostingObj = { features: [], amenities: [], address: '' };

        const uid = user.uid;
        const time = new Date().getTime();
        const poster = user.email;
        // console.log(uid);
        // console.log(time);

        const pointMapCity = document.querySelector('#rq-city');
        const pointMapAddress = document.querySelector('#rq-address');
        const pointMapZip = document.querySelector('#rq-zip');
        pointMapAddress.addEventListener('focusout', () => {
          marker1.remove();

          console.log('work?');
          const searchMap = String(
            pointMapAddress.value +
              ', ' +
              pointMapCity.value +
              ', ' +
              pointMapZip.value +
              'united states'
          );

          if (pointMapAddress.value != '') {
            // LONGITUDE AND LATITUTDE
            const xmlhttp = new XMLHttpRequest();
            let addressReq1 = searchMap.replaceAll(',', '');
            let addressReq = addressReq1.replaceAll(' ', '%20');
            console.log(addressReq);
            xmlhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                newPostingObj.address = myArr.features[0].place_name;
                newPostingObj.coordinate = myArr.features[0].center;
              }
            };
            const corReqURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressReq}.json?access_token=pk.eyJ1IjoiZ3JlYXQtc2ltb25sZWUiLCJhIjoiY2t6b2szZ2U5NjA0ZjJwdHZiY3Q1OHNtcyJ9.qdLhsMCScxxfzT9CYywRUQ`;
            xmlhttp.open('GET', corReqURL, true);
            xmlhttp.send();

            const coorCheck = setInterval(() => {
              maptest.flyTo({
                center: newPostingObj.coordinate,
                essential: true,
                screenSpeed: 3,
              });

              const marker1 = new mapboxgl.Marker({
                color: '#b40219',
              })
                .setLngLat(newPostingObj.coordinate)
                .addTo(maptest);

              if (newPostingObj.coordinate != undefined) {
                clearInterval(coorCheck);
              }
            }, 500);
          }
        });

        const pointArea = document.querySelector('#rq-area');
        pointMapCity.addEventListener('focusout', () => {
          // console.log(pointArea.children.length);
          switch (pointMapCity.value) {
            case 'newyork':
              pointArea.innerHTML = '';
              pointArea.innerHTML += `
              <option value="downtown" map-point="">曼哈顿-下城(Downtown)</option>
              <option value="midtown" map-point="">曼哈顿-中城(Midtown)</option>
              <option value="uptown" map-point="">曼哈顿-上城(Uptown)</option>
              <option value="lic" map-point="">长岛市(LIC)</option>
              <option value="queens" map-point="">皇后区(Queens)</option>
              <option value="flushing" map-point="">法拉盛(Flushing)</option>
              <option value="brooklyn" map-point="">布鲁克林(Brooklyn)</option>
              <option value="bronx" map-point="">布朗克斯(Bronx)</option>
              <option value="etc" map-point="">其他</option>
              `;
              break;
            case 'boston':
              pointArea.innerHTML = '';
              pointArea.innerHTML += `
                <option value="allston" map-point="">奥斯顿(Allston)</option>
                <option value="backbay" map-point="">后湾(Back Bay)</option>
                <option value="brighton" map-point="">布莱顿(Brighton)</option>
                <option value="brookline" map-point="">布鲁克莱恩(Brookline)</option>
                <option value="cambridge" map-point="">剑桥(Cambridge)</option>
                <option value="downtown" map-point="">下城(Downtown)</option>
                <option value="fenway" map-point="">芬威(Fenway)</option>
                <option value="northend" map-point="">北端(North End)</option>
                <option value="malden" map-point="">莫尔登(Malden)</option>
                <option value="southend" map-point="">南端(South End)</option>
                <option value="somerville" map-point="">萨默维尔(Somerville)</option>
                <option value="etc" map-point="">其他</option>
                `;
              break;
            case 'newjersey':
              pointArea.innerHTML = '';
              pointArea.innerHTML += `
                  <option value="" map-point="">爱迪生(Edison)</option>
                  <option value="" map-point="">蒙哥马利(Montgomery)</option>
                  <option value="" map-point="">普林斯顿(Princeton)</option>
                  <option value="" map-point="">西温莎(West Windsor)</option>
                  <option value="" map-point="">平原市(Plainsboro)</option>
                  <option value="" map-point="">帕拉默斯(Paramus)</option>
                  <option value="" map-point="">利堡(Fort Lee)</option>
                  <option value="" map-point="">锡考克斯(Secaucus)</option>
                  <option value="" map-point="">泽西市(Jersey City)</option>
                  <option value="" map-point="">(West New York)</option>
                  <option value="" map-point="">(Union City)</option>
                  <option value="" map-point="">霍博肯(Hoboken)</option>
                  <option value="Etc" map-point="">其他</option>
                  `;
              break;
          }
        });

        // Google scripts iframe
        const googleIframeDiv = document.querySelector('#googleIframeDiv');
        googleIframeDiv.innerHTML = `<iframe id="reg-ifr" src="
        https://script.google.com/macros/s/AKfycbxXw1TdvVmWiy1wwhrafKsFWoMHtICEkKIIfNVonlZHO_v14TXt43C_ThqqURpQiYj24g/exec?usr=${uid}&time=${time}" frameborder="0" style="width: 100%; height: 400px; background-color: #0f0f0f;"></iframe>`;

        const regSubmitBtn = document.querySelector('#regSubmitBtn');

        const regCity = document.querySelector('#rq-city');
        const regArea = document.querySelector('#rq-area');
        const regTitle = document.querySelector('#rq-title');
        const regPrice = document.querySelector('#rq-price');
        const regType = document.querySelector('#rq-type');
        const regLength = document.querySelector('#rq-length');
        const regDate = document.querySelector('#rq-movdate');
        const regDateMonth = document.querySelector('#rq-movdate').split('-');
        const regContact = document.querySelector('#rq-contact');
        const regFea = document.querySelectorAll('.rq-fea');
        const regAme = document.querySelectorAll('.rq-ame');
        const regDesc = document.querySelector('#rq-desc');
        const regDAddress = document.querySelector('#rq-dAddress');
        const regBrokerFee = document.querySelector('#rq-broker');

        regSubmitBtn.addEventListener('click', () => {
          const xhr = new XMLHttpRequest();
          // const JSONurl = `https://script.google.com/macros/s/AKfycbyRKwuMenCZ2kN6jJwtPxKoZ9_1odODfqWwPkoKvK71yeUL1_qsxEPUcQdWWj0E3Jld/exec?uid=F3bYaVhsckVIwgNKTH6zAA3xwnA3&time=1659711629275`;
          const JSONurl = `https://script.google.com/macros/s/AKfycbyRKwuMenCZ2kN6jJwtPxKoZ9_1odODfqWwPkoKvK71yeUL1_qsxEPUcQdWWj0E3Jld/exec?uid=${uid}&time=${time}`;
          xhr.open('GET', JSONurl, true);
          xhr.onload = function () {
            const getResult = JSON.parse(xhr.responseText);
            const picOrder = [];
            for (i = 0; i < getResult.length; i++) {
              for (j = 0; j < getResult.length; j++) {
                if (i == getResult[j].order) {
                  picOrder.push(getResult[j].path);
                }
              }
            }
            newPostingObj.pictures = picOrder;

            validateInput(newPostingObj);
          };
          xhr.send();

          newPostingObj.city = regCity.value;
          newPostingObj.area = regArea.value;
          newPostingObj.prop = regProp.value;
          newPostingObj.title = regTitle.value;
          newPostingObj.price = regPrice.value;
          newPostingObj.type = regType.value;
          newPostingObj.length = regLength.value;
          newPostingObj.date = regDate.value;
          newPostingObj.dateMonth = regDateMonth[1];
          newPostingObj.contact = regContact.value;
          newPostingObj.description = regDesc.value;
          newPostingObj.uid = uid;
          newPostingObj.writetime = time;
          newPostingObj.web = 'cm';
          newPostingObj.daddress = regDAddress.value;
          newPostingObj.broker = regBrokerFee.value;
          newPostingObj.poster = poster;

          regFea.forEach((el) => {
            if (el.checked) {
              newPostingObj.features.push(el.getAttribute('data-input'));
            }
          });
          regAme.forEach((el) => {
            if (el.checked) {
              newPostingObj.amenities.push(el.getAttribute('data-input'));
            }
          });
        });

        const validateInput = (obj) => {
          console.log(obj);
          for (i = 0; i < Object.values(obj).length; i++) {
            if (Object.values(obj)[i] === '') {
              switch (Object.keys(obj)[i]) {
                case 'address':
                  document.getElementById('rq-address').scrollIntoView();
                  document.getElementById('rq-address').style.border =
                    'red solid 3px';
                  break;
                case 'prop':
                  document.getElementById('rq-city').scrollIntoView();
                  document.getElementById('rq-city').style.border =
                    'red solid 3px';
                  break;
                case 'title':
                  document.getElementById('rq-title').scrollIntoView();
                  document.getElementById('rq-title').style.border =
                    'red solid 3px';
                  break;
                case 'price':
                  document.getElementById('rq-price').scrollIntoView();
                  document.getElementById('rq-price').style.border =
                    'red solid 3px';
                  break;
                case 'type':
                  document.getElementById('rq-type').scrollIntoView();
                  document.getElementById('rq-type').style.border =
                    'red solid 3px';
                  break;
                case 'length':
                  document.getElementById('rq-length').scrollIntoView();
                  document.getElementById('rq-length').style.border =
                    'red solid 3px';
                  break;
                case 'date':
                  document.getElementById('rq-movdate').scrollIntoView();
                  document.getElementById('rq-movdate').style.border =
                    'red solid 3px';
                  break;
                case 'contact':
                  document.getElementById('rq-contact').scrollIntoView();
                  document.getElementById('rq-contact').style.border =
                    'red solid 3px';
                  break;
                case 'description':
                  document.getElementById('rq-desc').scrollIntoView();
                  document.getElementById('rq-desc').style.border =
                    'red solid 3px';
                  break;
                case 'daddress':
                  document.getElementById('rq-dAddress').scrollIntoView();
                  document.getElementById('rq-dAddress').style.border =
                    'red solid 3px';
                  break;
              }
            } else {
              uploadListingInf(newPostingObj);
            }
          }
        };

        const uploadListingInf = (obj) => {
          const docName = String(uid) + String(time);

          // console.log(docName);
          // console.log(obj);

          // access the db
          db.collection('rentListing')
            .doc(docName)
            .set(obj)
            .then((result) => {
              // TEXT TO SPINNER OR VICE VERSA
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
        };
      } else {
        document.location.href = '/member-login';
      }
    });
  });
}
