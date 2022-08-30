(()=>{var e,t={966:(e,t,o)=>{"use strict";o(465),o(845),o(926),o(667),o(876),o(512),o(126),o(121),o(99),o(903),o(290)},99:()=>{"/detail/"===window.location.pathname&&window.addEventListener("DOMContentLoaded",(()=>{console.log("detail");const e=firebase.firestore(),t=(firebase.storage(),firebase.auth(),new URLSearchParams(window.location.search).get("li")),o=document.querySelector("#detailSubImgCont");console.log(t),e.collection("rentListing").doc(t).get().then((e=>{console.log(e.data()),document.querySelector("#detailLoadingSpinnerDiv").style.display="none",document.querySelector("#detailContDiv").style.display="flex",document.querySelector("#detailTitle").innerHTML=e.data().title,document.querySelectorAll(".detailPrice").forEach((t=>{t.innerHTML=(e=>{const t=String(e);let o="";if(t>3){for(i=0;i<t.length-3;i++)o+=t[i];for(o+=",",i=t.length-3;i<t.length;i++)o+=t[i]}return o})(e.data().price)})),document.querySelector("#detailDescription").innerHTML=e.data().description,document.querySelectorAll(".detailBed").forEach((t=>{t.innerHTML=e.data().type[0]})),document.querySelectorAll(".detailBath").forEach((t=>{t.innerHTML=e.data().type[2]})),document.querySelectorAll(".detailBroker").forEach((t=>{t.innerHTML=e.data().broker})),document.querySelector("#detailMainImg").src=`https://drive.google.com/uc?export=view&id=${e.data().pictures[0]}`;let t=[];for(i=0;i<e.data().pictures.length;i++)o.innerHTML+=`<img class="dtd-pic-sub subImg" src="https://drive.google.com/uc?export=view&id=${e.data().pictures[i]}" alt="subImg${i}">`,t.push(e.data().pictures[i]);setTimeout((()=>{document.querySelectorAll(".subImg").forEach((e=>{e.addEventListener("mouseover",(()=>{document.querySelector("#detailMainImg").src=`${e.getAttribute("src")}`}))}))}),1e3),document.querySelectorAll(".detailLength").forEach((t=>{t.innerHTML=e.data().length})),document.querySelectorAll(".detailAddress").forEach((t=>{t.innerHTML=e.data().daddress})),document.querySelectorAll(".detailDate").forEach((t=>{t.innerHTML=e.data().date}));var n=new mapboxgl.Map({container:"mapDetailDiv",style:"mapbox://styles/mapbox/dark-v10",center:e.data().coordinate,zoom:13});n.addControl(new mapboxgl.NavigationControl),n.on("load",(()=>{const t=e.data().coordinate,o=turf.circle(t,.5,{steps:35,units:"kilometers"});n.addSource("circleData",{type:"geojson",data:o}),n.addLayer({id:"circle-fill",type:"fill",source:"circleData",paint:{"fill-color":"#f78915","fill-opacity":.5}})}))})).catch((e=>{console.log(e)}));const n=document.querySelector("#infoContainer"),r=n.offsetTop,a=document.querySelector("#locContainer").offsetTop,l=document.querySelector("#descContainer");window.onscroll=function(){window.pageYOffset<r?(n.classList.remove("stickyEle"),l.style.marginRight="0px"):window.pageYOffset>r&window.pageYOffset<a?(n.classList.add("stickyEle"),n.style.top="96px",n.style.right="14.6vw",l.style.marginRight="264px"):window.pageYOffset>a?n.style.top=a-window.pageYOffset+96+"px":n.classList.remove("stickyEle")}}))},845:()=>{window.addEventListener("DOMContentLoaded",(()=>{const e=firebase.auth();e.onAuthStateChanged((t=>{if(t){const t=document.querySelector("#signUpLogInDiv"),o=document.querySelector("#userMenuDiv"),n=document.querySelector("#userMenu"),r=document.querySelector("#dd-menu-cont"),i=document.querySelector("#logOutBtn");t.style.display="none",o.style.display="flex",n.addEventListener("click",(()=>{"none"==r.style.display?r.style.display="flex":r.style.display="none"})),i.addEventListener("click",(()=>{e.signOut(),t.style.display="flex",o.style.display="none"})),"/member-login/"!==window.location.pathname&&"/member-signup/"!==window.location.pathname||(document.location.href="/")}else{if("/member-login/"===window.location.pathname){const t=document.querySelector("#logInEmail"),o=document.querySelector("#logInPassword");document.querySelector("#logInBtn").addEventListener("click",(()=>{e.signInWithEmailAndPassword(t.value,o.value).then((e=>{document.location.href="/"})).catch((e=>{window.alert(e)}))})),o.addEventListener("keypress",(function(n){"Enter"===n.key&&e.signInWithEmailAndPassword(t.value,o.value).then((e=>{document.location.href="/"})).catch((e=>{window.alert(e)}))})),document.querySelector("#resetPWbtn").addEventListener("click",(()=>{console.log("forgot PW?"),document.querySelector("#logInBox").style.display="none",document.querySelector("#forgotBtnBox").style.display="none",document.querySelector("#logInBtn").style.display="none",document.querySelector("#resetPWBox").style.display="flex",document.querySelector("#forgotEmailSubmitBtn").addEventListener("click",(()=>{const t=document.querySelector("#resetPWEmail").value;e.sendPasswordResetEmail(t).then((e=>{console.log(e),console.log("Email sent"),document.querySelector("#resetPWMsg").style.display="block",document.querySelector("#forgotEmailSubmitBtn").style.display="none"})).catch((e=>{e.code,e.message}))}))})),document.querySelector("#backToLogIn").addEventListener("click",(()=>{document.querySelector("#logInBox").style.display="block",document.querySelector("#forgotBtnBox").style.display="flex",document.querySelector("#logInBtn").style.display="block",document.querySelector("#resetPWBox").style.display="none"}))}if("/member-signup/"===window.location.pathname){const o=document.querySelector("#signUpUsername"),n=document.querySelector("#signUpEmail"),r=document.querySelector("#signUpPassword"),i=document.querySelector("#signUpPasswordCheck"),a=document.querySelector("#userAgreement");document.querySelector("#signUpBtn").addEventListener("click",(()=>{console.log("Clicked"),r.value!=i.value?window.alert("Please check the password again"):a.checked?(e.createUserWithEmailAndPassword(n.value,r.value).then((e=>{e.user.updateProfile({displayName:o.value}).then((()=>{document.location.href="/"}))})).catch((e=>{window.alert(e.message)})),console.log("Checked")):window.alert("Please check the user agreement")})),firebase.firestore().collection("userInfo").doc(t.uid).set({username:t.displayName,email:t.email,number:"",wechat:"",membership:""}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}"/mypage/"===window.location.pathname&&(document.location.href="/")}}))}))},465:()=>{window.addEventListener("DOMContentLoaded",(()=>{firebase.initializeApp({apiKey:"AIzaSyDAjXdbYphJwzZ9mUDFsTWBQDz81xh9opA",authDomain:"koreamovesusa.firebaseapp.com",projectId:"koreamovesusa",storageBucket:"koreamovesusa.appspot.com",messagingSenderId:"171734962463",appId:"1:171734962463:web:12ef0531328c38b2e2e02a",measurementId:"G-KFFWZ5Q1SY"})}))},926:()=>{"/"===window.location.pathname&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&(window.location="/mobile"),window.addEventListener("DOMContentLoaded",(()=>{const e=firebase.firestore(),t=(firebase.auth(),e=>{const t=String(e);let o="";if(t>3){for(i=0;i<t.length-3;i++)o+=t[i];for(o+=",",i=t.length-3;i<t.length;i++)o+=t[i]}return o}),o=e.collection("rentListing"),n=document.querySelector("#NYListingDiv");o.orderBy("writetime","asc").limit(8).get().then((e=>{n.style.display="grid",e.docs.map((e=>{n.innerHTML+=`\n            <a class="frontToListing" href="/detail/?li=${e.data().uid}${e.data().writetime}" target="blank">\n              <div class="main-rent-card">\n                <img class="main-rent-img" src="https://drive.google.com/uc?export=view&id=${e.data().pictures[0]}" alt="rentExample">\n                <div class="main-rent-info">\n                  <div>\n                    <p class="main-rent-title">${e.data().title}</p>\n                    <p class="main-rent-city">${(e=>{let t;switch(e){case"uptown":t="纽约-曼哈顿-上城";break;case"midtown":t="纽约-曼哈顿-中城";break;case"downtown":t="纽约-曼哈顿-下城";break;case"lic":t="纽约-长岛市";break;case"queens":t="纽约-皇后区";break;case"flushing":t="纽约-法拉盛";break;case"brooklyn":t="纽约-布鲁克林";break;case"bronx":t="纽约-布朗克斯";break;case"etc":t="纽约-其他"}return t})(e.data().area)}</p>\n                    <p class="main-rent-term">租期：${e.data().length}</p>\n                  </div>\n                  <div class="main-rent-price"><p>$ ${t(e.data().price)}/月</p></div>\n                </div>\n              </div>\n            </a>`})),document.querySelector("#frontPreLoading").style.display="none"}));const r=e.collection("bostonListing");r.orderBy("writetime","desc").limit(8).get().then((e=>{const o=document.querySelector("#BOSListingDiv");e.docs.map((e=>{o.innerHTML+=`\n            <div class="main-rent-card">\n              <img class="main-rent-img" src="https://drive.google.com/uc?export=view&id=${e.data().pictures[0]}" alt="rentExample">\n              <div class="main-rent-info">\n                <div>\n                  <p class="main-rent-title">${e.data().title}</p>\n                  <p class="main-rent-city">${(e=>{let t;switch(e){case"allston":t="波士顿-奥斯顿";break;case"backbay":t="波士顿-后湾";break;case"brighton":t="波士顿-布莱顿";break;case"brookline":t="波士顿-布鲁克莱恩";break;case"cambridge":t="波士顿-剑桥";break;case"downtown":t="波士顿-下城";break;case"fenway":t="波士顿-芬威";break;case"northend":t="波士顿-北端";break;case"malden":t="波士顿-莫尔登";break;case"southend":t="波士顿-南端";break;case"somerville":t="波士顿-萨默维尔";break;case"etc":t="波士顿-其他"}return t})(e.data().area)}</p>\n                  <p class="main-rent-term">租期：${e.data().length}</p>\n                </div>\n                <div class="main-rent-price"><p>$ ${t(e.data().price)}/月</p></div>\n              </div>\n            </div>`}))})),r.orderBy("writetime","desc").limit(6).get().then((e=>{e.docs.map((e=>{}))})),document.querySelector("#mainSearchBtn").addEventListener("click",(()=>{let e="?";document.querySelectorAll(".mainSearchSelectOption").forEach((t=>{t.selected&&(1==e.length?e+=t.value:e+="&"+t.value)})),window.location="/rent/"+e}));const a=document.querySelector("#frontHotListing"),l=document.querySelector("#frontHotArea"),c=document.querySelector("#HOTAreaCat");a.addEventListener("click",(()=>{l.style.backgroundColor="rgb(0, 0, 0, 0.8)",l.children[0].style.color="#fff",a.style.backgroundColor="rgb(255, 255, 255)",a.children[0].style.color="#000",n.style.display="grid",c.style.display="none"})),l.addEventListener("click",(()=>{a.style.backgroundColor="rgb(0, 0, 0, 0.8)",a.children[0].style.color="#fff",l.style.backgroundColor="rgb(255, 255, 255)",l.children[0].style.color="#000",n.style.display="none",c.style.display="grid"}))})))},512:()=>{window.location.pathname.includes("genlisting")&&console.log(" THIS IS THE PLACE")},121:()=>{window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#mobileDropDownMenuIcon"),t=document.querySelector("#mobile-dd-detail");e.addEventListener("click",(()=>{0==e.getAttribute("menu-active")?(e.setAttribute("menu-active",1),t.style.display="flex"):(e.setAttribute("menu-active",0),t.style.display="none")}));const o=firebase.auth(),n=(firebase.firestore(),document.querySelectorAll(".member-menu")),r=document.querySelectorAll(".non-member-menu"),i=document.querySelector("#mobile-dd-logout");o.onAuthStateChanged((e=>{e?(n.forEach((e=>{e.style.display="flex"})),r.forEach((e=>{e.style.display="none"})),i.addEventListener("click",(()=>{o.signOut()}))):(n.forEach((e=>{e.style.display="none"})),r.forEach((e=>{e.style.display="block"})))}))}))},290:()=>{"/mobile/"===window.location.pathname&&window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#gnav"),t=document.querySelector("#gfter");e.style.display="none",t.style.display="none";const o=firebase.firestore(),n=(firebase.auth(),window.location.search),r=new URLSearchParams(n);var a=o.collection("rentListing");const l=e=>{null==r.get(e)?document.querySelector(`#mob${e}all`).style.color="#f78915":document.querySelector(`#mob${e}${r.get(e)}`).style.color="#f78915"};if(l("type"),l("price"),l("area"),r.get("area")&&(a=a.where("area","==",r.get("area"))),r.get("type")&&(a=a.where("type","==",r.get("type"))),r.get("price"))switch(r.get("price")){case"l1":a=a.where("price","<","1000");break;case"g1l2":a=(a=a.where("price",">=","1000")).where("price","<","2000");break;case"g2l3":a=(a=a.where("price",">=","2000")).where("price","<","3000");break;case"g3l4":a=(a=a.where("price",">=","3000")).where("price","<","4000");break;case"g4l5":a=(a=a.where("price",">=","4000")).where("price","<","5000");break;case"g5l6":a=(a=a.where("price",">=","5000")).where("price","<","6000");break;case"g6":a=a.where("price",">=","6000")}const c=e=>{e.forEach((e=>{e.addEventListener("click",(e=>{var t=new URLSearchParams(window.location.search);"all"==e.target.getAttribute("data-search")?(t.delete(String(e.target.getAttribute("search-type"))),window.location.search=t):(t.set(String(e.target.getAttribute("search-type")),String(e.target.getAttribute("data-search"))),window.location.search=t)}))}))},s=document.querySelectorAll(".mobSearchType"),d=document.querySelectorAll(".mobSearchArea"),u=document.querySelectorAll(".mobSearchPrice");c(s),c(d),c(u);const p=document.querySelector("#mobileFilterDiv"),m=document.querySelectorAll(".mb-filter-item-detail");document.querySelector("#mobile-filter-time").addEventListener("click",(()=>{p.style.display="flex",m.forEach((e=>{e.style.visibility="hidden"})),m[0].style.visibility="visible"})),document.querySelector("#mobile-filter-area").addEventListener("click",(()=>{p.style.display="flex",m.forEach((e=>{e.style.visibility="hidden"})),m[1].style.visibility="visible"})),document.querySelector("#mobile-filter-price").addEventListener("click",(()=>{p.style.display="flex",m.forEach((e=>{e.style.visibility="hidden"})),m[2].style.visibility="visible"}));const y=document.querySelector("#mobileListingCont");var g;a.limit(10).get().then((e=>{document.querySelector("#mobileFrontLoadingSpinnerDiv").style.display="none",e.docs.map((e=>{y.innerHTML+=`\n          <a class="mobileListingAnchor" href="/detail/?li=${e.data().uid}${e.data().writetime}">\n            <div class="mb-card">\n              <img class="mb-card-img" src="https://drive.google.com/uc?export=view&id=${e.data().pictures[0]}" alt="CMMobileListingImg">\n              <div class="mb-card-desc">\n                <p class="mbc-desc-title">${e.data().title}</p>\n                <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 <br> 地址：${e.data().daddress}</p>\n                <p class="mbc-desc-price">$ ${(e=>{const t=String(e);let o="";if(t>3){for(i=0;i<t.length-3;i++)o+=t[i];for(o+=",",i=t.length-3;i<t.length;i++)o+=t[i]}return o})(e.data().price)}/月</p>\n              </div>\n            </div>\n          </a>`}))}));const h=document.querySelectorAll(".mb-menu-category-item"),f=document.querySelectorAll(".mb-menu-category-selected"),b=document.querySelector("#mb-front-rentListing"),v=document.querySelector("#mb-front-shortterm"),w=document.querySelector("#mb-front-roommate");h.forEach((e=>{e.addEventListener("click",(e=>{for(e.target.style.color="#000",g=e.target.getAttribute("cate-index"),i=0;i<e.target.parentNode.children.length;i++)e.target.parentNode.children[i].style.color="#c9c9c9";for(i=0;i<e.target.parentNode.children.length;i++)f[i].style.visibility="hidden";f[g].style.visibility="visible",e.target.parentNode.children[g].style.color="#000",0==g?(b.style.display="block",v.style.display="none",w.style.display="none"):1==g?(b.style.display="none",v.style.display="block",w.style.display="none"):2==g&&(b.style.display="none",v.style.display="none",w.style.display="block")}))}))}))},667:()=>{"/mypage/"===window.location.pathname&&window.addEventListener("DOMContentLoaded",(()=>{firebase.auth().onAuthStateChanged((e=>{if(e){const t=firebase.firestore(),o=e.uid,n=t.collection("rentListing"),r=t.collection("userInfo"),i=document.querySelector("#myListingDiv"),a=document.querySelector("#mbMyListing");n.where("uid","==",o).get().then((e=>{e.docs.map((e=>{const t=new Date(parseInt(String(e.data().writetime).substring(0,13)));if("studio"==e.data().type)var o="Studio",n="1 Bath";else o=e.data().type[0]+" Bed",n=e.data().type[2]+" Bath";i.innerHTML+=`\n                <div class="myp-lising-card">\n                  <a class="myListingAnchor" href="/detail/?li=${e.data().uid}${e.data().writetime}" target="_blank">\n                    <div class="myp-card-left">\n                      <img class="myp-card-img" src="https://drive.google.com/uc?export=view&id=${e.data().pictures[0]}">\n                      <div class="myp-card-img-desc">\n                        <div class="myp-card-type">\n                          <p>${o}</p>\n                          <p>${n}</p>\n                        </div>\n                        <div class="myp-card-price">$ ${e.data().price}/月</div>\n                      </div>\n                    </div>\n                  </a>\n                  <a class="myListingAnchor" href="/detail/?li=${e.data().uid}${e.data().writetime}" target="blank">\n                    <div class="myp-card-desc">\n                      <div class="myp-card-detail">\n                        <p>${e.data().title}</p>\n                        <p>租期：${e.data().length}</p>\n                        <p>入住时间：${e.data().date}</p>\n                        <p>发布时间：${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class="myp-card-editdelete">\n                    <i class="fa fa-pencil-square-o editdelete" aria-hidden="true" data-search="${e.data().uid}${e.data().writetime}"><span>&nbsp;编辑</span></i>\n                    <i class="fa fa-trash-o editdelete deleteDiv" aria-hidden="true" data-search="${e.data().uid}${e.data().writetime}"><span>&nbsp;删除</span></i>\n                  </div>\n                </div>\n              `,a.innerHTML+=`\n              <div class="mb-mypage-card">\n                <a href="/detail/?li=${e.data().uid}${e.data().writetime}">\n                  <div class="mb-mypage-card-cont">\n                    <img class="mb-mypage-card-img" src="https://drive.google.com/uc?export=view&id=${e.data().pictures[0]}">\n                    <div class="mb-mypage-card-desc">\n                      <p class="mb-mypage-card-title">${e.data().title}</p>\n                      <div class="mb-mypage-card-info">\n                        <p>${o}</p>\n                        <p>${n}</p>\n                        <p>$ ${e.data().price}/月</p>\n                      </div>\n                    </div>\n                  </div>\n                </a>\n                <div class="mb-mypage-card-editdelete">\n                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>\n                  <i class="fa fa-trash-o" aria-hidden="true"></i>\n                </div>\n              </div>\n              `})),document.querySelectorAll(".editDiv").forEach((e=>{e.addEventListener("click",(()=>{console.log("edit"),console.log(e.getAttribute("data-search"))}))})),document.querySelectorAll(".deleteDiv").forEach((e=>{e.addEventListener("click",(()=>{n.doc(e.getAttribute("data-search")).delete().then((()=>{console.log("Successfully deleted"),location.reload()})).catch((e=>{console.log(e)}))}))}))})),r.doc(o).get().then((e=>{const t=document.querySelector("#mpEmail");t.style.color="#fff",t.value=e.data().email,t.disabled=!0;const o=document.querySelector("#mpUsername");o.style.color="#fff",o.value=e.data().username,o.disabled=!0;const n=document.querySelector("#mpPhone");n.style.color="#fff",n.value=e.data().number,n.disabled=!0;const r=document.querySelector("#mpWeixin");r.style.color="#fff",r.value=e.data().wechat,r.disabled=!0}))}else window.location.replace("/")}));const e=document.querySelectorAll(".mpcat-item"),t=document.querySelectorAll(".mypage-section");e.forEach((o=>{o.addEventListener("click",(n=>{let r=[...e].indexOf(o);t.forEach((e=>{e.style.display="none"})),t[r].style.display="flex",e.forEach((e=>{e.style.backgroundColor="#fff",e.style.color="#000"})),e[r].style.color="#fff",e[r].style.backgroundColor="rgb(0, 0, 0, 0.8)"}))})),"?mylist"===window.location.search&&(t.forEach((e=>{e.style.display="none"})),t[2].style.display="flex",e.forEach((e=>{e.style.backgroundColor="#fff",e.style.color="#000"})),e[2].style.color="#fff",e[2].style.backgroundColor="rgb(0, 0, 0, 0.8)");const o=document.querySelectorAll(".mob-mpcat-item");o.forEach((e=>{e.addEventListener("click",(n=>{let r=[...o].indexOf(e);t.forEach((e=>{e.style.display="none"})),t[r].style.display="flex",o.forEach((e=>{e.style.backgroundColor="#fff",e.style.color="#000"})),o[r].style.color="#fff",o[r].style.backgroundColor="rgb(0, 0, 0, 0.8)"}))})),"?mylist"===window.location.search&&(t.forEach((e=>{e.style.display="none"})),t[2].style.display="flex",o.forEach((e=>{e.style.backgroundColor="#fff",e.style.color="#000"})),o[2].style.color="#fff",o[2].style.backgroundColor="rgb(0, 0, 0, 0.8)")}))},126:()=>{"/register/"===window.location.pathname&&window.addEventListener("DOMContentLoaded",(()=>{const e=firebase.firestore();firebase.storage(),firebase.auth().onAuthStateChanged((t=>{if(t){var o=new mapboxgl.Map({container:"maptestDiv",style:"mapbox://styles/mapbox/dark-v10",center:[121.5003576,31.2185876],zoom:12});o.addControl(new mapboxgl.NavigationControl);const n=new mapboxgl.Marker({color:"#b40219"}).setLngLat([121.5003576,31.2185876]).addTo(o),r={features:[],amenities:[],address:""},a=t.uid,l=(new Date).getTime();console.log(a),console.log(l);const c=document.querySelector("#rq-city"),s=document.querySelector("#rq-address"),d=document.querySelector("#rq-zip");s.addEventListener("focusout",(()=>{n.remove(),console.log("work?");const e=String(s.value+", "+c.value+", "+d.value+"united states");if(""!=s.value){const t=new XMLHttpRequest;let n=e.replaceAll(",","").replaceAll(" ","%20");console.log(n),t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);r.address=e.features[0].place_name,r.coordinate=e.features[0].center}};const i=`https://api.mapbox.com/geocoding/v5/mapbox.places/${n}.json?access_token=pk.eyJ1IjoiZ3JlYXQtc2ltb25sZWUiLCJhIjoiY2t6b2szZ2U5NjA0ZjJwdHZiY3Q1OHNtcyJ9.qdLhsMCScxxfzT9CYywRUQ`;t.open("GET",i,!0),t.send();const a=setInterval((()=>{o.flyTo({center:r.coordinate,essential:!0,screenSpeed:3}),new mapboxgl.Marker({color:"#b40219"}).setLngLat(r.coordinate).addTo(o),null!=r.coordinate&&clearInterval(a)}),500)}}));const u=document.querySelector("#rq-area");c.addEventListener("focusout",(()=>{switch(c.value){case"newyork":u.innerHTML="",u.innerHTML+='\n              <option value="downtown" map-point="">曼哈顿-下城(Downtown)</option>\n              <option value="midtown" map-point="">曼哈顿-中城(Midtown)</option>\n              <option value="uptown" map-point="">曼哈顿-上城(Uptown)</option>\n              <option value="lic" map-point="">长岛市(LIC)</option>\n              <option value="queens" map-point="">皇后区(Queens)</option>\n              <option value="flushing" map-point="">法拉盛(Flushing)</option>\n              <option value="brooklyn" map-point="">布鲁克林(Brooklyn)</option>\n              <option value="bronx" map-point="">布朗克斯(Bronx)</option>\n              <option value="etc" map-point="">其他</option>\n              ';break;case"boston":u.innerHTML="",u.innerHTML+='\n                <option value="allston" map-point="">奥斯顿(Allston)</option>\n                <option value="backbay" map-point="">后湾(Back Bay)</option>\n                <option value="brighton" map-point="">布莱顿(Brighton)</option>\n                <option value="brookline" map-point="">布鲁克莱恩(Brookline)</option>\n                <option value="cambridge" map-point="">剑桥(Cambridge)</option>\n                <option value="downtown" map-point="">下城(Downtown)</option>\n                <option value="fenway" map-point="">芬威(Fenway)</option>\n                <option value="northend" map-point="">北端(North End)</option>\n                <option value="malden" map-point="">莫尔登(Malden)</option>\n                <option value="southend" map-point="">南端(South End)</option>\n                <option value="somerville" map-point="">萨默维尔(Somerville)</option>\n                <option value="etc" map-point="">其他</option>\n                ';break;case"newjersey":u.innerHTML="",u.innerHTML+='\n                  <option value="" map-point="">爱迪生(Edison)</option>\n                  <option value="" map-point="">蒙哥马利(Montgomery)</option>\n                  <option value="" map-point="">普林斯顿(Princeton)</option>\n                  <option value="" map-point="">西温莎(West Windsor)</option>\n                  <option value="" map-point="">平原市(Plainsboro)</option>\n                  <option value="" map-point="">帕拉默斯(Paramus)</option>\n                  <option value="" map-point="">利堡(Fort Lee)</option>\n                  <option value="" map-point="">锡考克斯(Secaucus)</option>\n                  <option value="" map-point="">泽西市(Jersey City)</option>\n                  <option value="" map-point="">(West New York)</option>\n                  <option value="" map-point="">(Union City)</option>\n                  <option value="" map-point="">霍博肯(Hoboken)</option>\n                  <option value="Etc" map-point="">其他</option>\n                  '}})),document.querySelector("#googleIframeDiv").innerHTML=`<iframe id="reg-ifr" src="\n        https://script.google.com/macros/s/AKfycbxg3R42l7YoL-zXFPzLEfPcydvRWyjf1gQGZaLn-3f4lzRNWAA0vRWbGG33t1__HMNGyw/exec?usr=${a}&time=${l}" frameborder="0" style="width: 100%; height: 400px; background-color: #0f0f0f;"></iframe>`;const p=document.querySelector("#regSubmitBtn"),m=document.querySelector("#rq-city"),y=document.querySelector("#rq-area"),g=document.querySelector("#rq-title"),h=document.querySelector("#rq-price"),f=document.querySelector("#rq-type"),b=document.querySelector("#rq-length"),v=document.querySelector("#rq-movdate"),w=document.querySelector("#rq-movdate").split("-"),S=document.querySelector("#rq-contact"),q=document.querySelectorAll(".rq-fea"),k=document.querySelectorAll(".rq-ame"),L=document.querySelector("#rq-desc"),E=document.querySelector("#rq-dAddress"),A=document.querySelector("#rq-broker");p.addEventListener("click",(()=>{const e=new XMLHttpRequest,t=`https://script.google.com/macros/s/AKfycbyRKwuMenCZ2kN6jJwtPxKoZ9_1odODfqWwPkoKvK71yeUL1_qsxEPUcQdWWj0E3Jld/exec?uid=${a}&time=${l}`;e.open("GET",t,!0),e.onload=function(){const t=JSON.parse(e.responseText),o=[];for(i=0;i<t.length;i++)for(j=0;j<t.length;j++)i==t[j].order&&o.push(t[j].path);r.pictures=o,x(r)},e.send(),r.city=m.value,r.area=y.value,r.prop=regProp.value,r.title=g.value,r.price=h.value,r.type=f.value,r.length=b.value,r.date=v.value,r.dateMonth=w[1],r.contact=S.value,r.description=L.value,r.uid=a,r.writetime=l,r.web="cm",r.daddress=E.value,r.broker=A.value,q.forEach((e=>{e.checked&&r.features.push(e.getAttribute("data-input"))})),k.forEach((e=>{e.checked&&r.amenities.push(e.getAttribute("data-input"))}))}));const x=e=>{for(console.log(e),i=0;i<Object.values(e).length;i++)if(""===Object.values(e)[i])switch(Object.keys(e)[i]){case"address":document.getElementById("rq-address").scrollIntoView(),document.getElementById("rq-address").style.border="red solid 3px";break;case"prop":document.getElementById("rq-city").scrollIntoView(),document.getElementById("rq-city").style.border="red solid 3px";break;case"title":document.getElementById("rq-title").scrollIntoView(),document.getElementById("rq-title").style.border="red solid 3px";break;case"price":document.getElementById("rq-price").scrollIntoView(),document.getElementById("rq-price").style.border="red solid 3px";break;case"type":document.getElementById("rq-type").scrollIntoView(),document.getElementById("rq-type").style.border="red solid 3px";break;case"length":document.getElementById("rq-length").scrollIntoView(),document.getElementById("rq-length").style.border="red solid 3px";break;case"date":document.getElementById("rq-movdate").scrollIntoView(),document.getElementById("rq-movdate").style.border="red solid 3px";break;case"contact":document.getElementById("rq-contact").scrollIntoView(),document.getElementById("rq-contact").style.border="red solid 3px";break;case"description":document.getElementById("rq-desc").scrollIntoView(),document.getElementById("rq-desc").style.border="red solid 3px";break;case"daddress":document.getElementById("rq-dAddress").scrollIntoView(),document.getElementById("rq-dAddress").style.border="red solid 3px"}else B(r)},B=t=>{const o=String(a)+String(l);e.collection("rentListing").doc(o).set(t).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}else document.location.href="/member-login"}))}))},903:()=>{if("/rent/"===window.location.pathname){/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&(window.location="/mobile"),window.addEventListener("DOMContentLoaded",(()=>{var t=new mapboxgl.Map({container:"rentListingMap",style:"mapbox://styles/mapbox/dark-v10",center:["-73.98917","40.74358"],zoom:12});const o=firebase.firestore(),n=e=>{new mapboxgl.Marker({color:"#f78915",scale:"0.7"}).setLngLat(e).addTo(t)},r=e=>{const t=new Date(parseInt(String(e.writetime).substring(0,13)));if("studio"==e.type)var o="Studio",n="1 Bathroom";else o=e.type[0]+" Bedroom",n=e.type[2]+" Bathroom";p.innerHTML+=`\n        <a class="rlCoorEl" href="/detail/?li=${e.uid}${e.writetime}" target="blank">\n          <div class="rl-card" data-coor="${e.coordinate}">\n            <div class="rl-card-cont">\n              <img class="rl-card-img" src="https://drive.google.com/uc?export=view&id=${e.pictures[0]}">\n              <div class="rl-card-info">\n                <div class="rlc-info-text">\n                  <p>${o}</p>\n                  <p>${n}</p>\n                </div>\n                <p>$ ${e.price}/Month</p>\n              </div>\n            </div>\n            <div class="rl-card-desc">\n              <h4>${e.title}</h4>\n              <div>\n                <p>租期：${e.length}</p>\n                <p>入住时间：${e.date}</p>\n                <p>发布时间：${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}</p>\n              </div>\n            </div>\n          </div>\n        </a>`},a=()=>{const e=document.querySelectorAll(".rl-card");for(i=0;i<e.length;i++)e[i].addEventListener("mouseenter",(e=>{t.flyTo({center:e.target.getAttribute("data-coor").split(","),essential:!0,screenSpeed:5})}))},l=document.querySelector("#rentListingDiv"),c=window.location.search,s=new URLSearchParams(c),d=e=>{null==s.get(e)?document.querySelector(`#${e}all`).style.color="#f78915":document.querySelector(`#${e}${s.get(e)}`).style.color="#f78915"};d("type"),d("price"),d("length"),d("date"),d("broker"),d("area");var u=o.collection("rentListing");if(s.get("area")&&(u=u.where("area","==",s.get("area"))),s.get("type")&&(u=u.where("type","==",s.get("type"))),s.get("price"))switch(s.get("price")){case"l1":u=u.where("price","<","1000");break;case"g1l2":u=(u=u.where("price",">=","1000")).where("price","<","2000");break;case"g2l3":u=(u=u.where("price",">=","2000")).where("price","<","3000");break;case"g3l4":u=(u=u.where("price",">=","3000")).where("price","<","4000");break;case"g4l5":u=(u=u.where("price",">=","4000")).where("price","<","5000");break;case"g5l6":u=(u=u.where("price",">=","5000")).where("price","<","6000");break;case"g6":u=u.where("price",">=","6000")}if(s.get("length")&&(u="12个月"==s.get("length")?u.where("length","==","12个月及以上"):u.where("length","==",s.get("length"))),s.get("date")&&(u=u.where("dateMonth","==",parseInt(s.get("date")))),s.get("broker")){const e=s.get("broker").replaceAll("z"," ");u=u.where("broker","==",e)}const p=document.querySelector("#listingContainer"),m=document.querySelector("#listingPagination"),y=(o,c)=>{coorListing=[],u.get().then((o=>{if(document.querySelector("#loadingSpinnerDiv").style.display="none",l.style.display="flex",p.innerHTML="",m.innerHTML="",t.resize(),o.docs.map((e=>{n(e.data().coordinate)})),0==o.docs.length)console.log("No Listings");else if(o.docs.length>10)for(i=0;i<10;i++)r(o.docs[i].data());else for(i=0;i<o.docs.length;i++)r(o.docs[i].data());a(),e(10);const c=o.docs.length,s=Math.ceil(c/10);for(i=0;i<s;i++)m.innerHTML+=`<p class="page-number" data-page="${i+1}">${i+1}</p>`;const d=document.querySelectorAll(".page-number");d[0].style.color="#f78915",d.forEach((t=>{t.addEventListener("click",(t=>{p.innerHTML="",d.forEach((e=>{e.style.color="#fff"})),t.target.style.color="#f78915";let l=t.target.getAttribute("data-page"),u=10*(l-1),m=c%10;if(l!=s)for(i=0;i<10;i++)n(o.docs[i].data().coordinate),r(o.docs[u+i].data());else for(i=0;i<m;i++)n(o.docs[i].data().coordinate),r(o.docs[u+i].data());t.target.style.color="#f78915",g.scrollIntoView(),document.querySelector("#rentMapContainer").classList.remove("rentStickyEle"),a(),e(document.querySelectorAll(".rlCoorEl").length)}))}))}))};y();const g=document.querySelector("#timeOrder");g.addEventListener("click",(()=>{y()})),document.querySelector("#priceOrder").addEventListener("click",(()=>{y()}));const h=e=>{e.forEach((e=>{e.addEventListener("click",(e=>{var t=new URLSearchParams(window.location.search);"all"==e.target.getAttribute("data-search")?(t.delete(String(e.target.getAttribute("search-type"))),window.location.search=t):(t.set(String(e.target.getAttribute("search-type")),String(e.target.getAttribute("data-search"))),window.location.search=t)}))}))},f=document.querySelectorAll(".searchPropType"),b=document.querySelectorAll(".searchPrice"),v=document.querySelectorAll(".searchLength"),w=document.querySelectorAll(".searchDate"),S=document.querySelectorAll(".searchBroker"),q=document.querySelectorAll(".searchArea");h(f),h(b),h(v),h(w),h(S),h(q)}));const e=e=>{const t=document.querySelector("#rentMapContainer"),o=t.offsetTop,n=document.querySelector("#rentLocContainer").offsetTop;window.onscroll=function(){window.pageYOffset<o?t.classList.remove("rentStickyEle"):window.pageYOffset>o&window.pageYOffset<n-720?(t.classList.add("rentStickyEle"),t.style.top="0px",t.style.right="14.9vw",t.style.width="304px",t.style.height="640px"):t.style.top=n-window.pageYOffset-720+"px"}}}},876:()=>{"/roommate/"===window.location.pathname&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&(window.location="/mobile"),window.addEventListener("DOMContentLoaded",(()=>{let e=0;const t=document.querySelectorAll(".rm-question-step"),o=document.querySelector("#rmFNBtn");document.querySelectorAll(".rmNextBtn").forEach((n=>{n.addEventListener("click",(()=>{e<t.length-1&&(t[e].style.display="none",e++,t[e].style.display="block",e>0&&(o.style.display="none",document.querySelector("#paginationBtnBox").style.display="block"),15==e&&(document.querySelector("#paginationBtnBox").style.display="none",document.querySelector("#rmSubmitBtn").style.display="block"),16==e&&(document.querySelector("#paginationBtnBox").style.display="none",document.querySelector("#rmSubmitBtn").style.display="none"))}))})),document.querySelectorAll(".rmPreviousBtn").forEach((n=>{n.addEventListener("click",(()=>{e>0&&(t[e].style.display="none",e--,t[e].style.display="block",0==e&&(o.style.display="block",document.querySelector("#paginationBtnBox").style.display="none"))}))}));const n=document.querySelector("#rmSubmitBtn");let r=[];const i=e=>{e.value?r.push(e.value):r.push("")},a=document.querySelector("#rmAppName"),l=document.querySelector("#rmAppContact"),c=document.querySelector("#rmAppDate"),s=document.querySelector("#rmAppArea"),d=document.querySelector("#rmAppBudget"),u=document.querySelectorAll(".rm-radio-btn");n.addEventListener("click",(()=>{emailjs.init("user_hedHXP5BIDEBqSuAdRcOt"),i(a),i(l),i(c),i(s),i(d),u.forEach((e=>{e.checked&&r.push(e.getAttribute("data-input"))}));const e=document.querySelectorAll(".roommateSubmissionFormInput");for(k=0;k<r.length;k++)e[k].value=r[k];const t=document.querySelector("#roommateSubmissionForm");emailjs.sendForm("service_g17icyc","template_v3ay8bh",t)}))})))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,a=o[0],l=o[1],c=o[2],s=0;if(a.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var d=c(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self.webpackChunkcmu=self.webpackChunkcmu||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[431],(()=>n(966)));r=n.O(r)})();