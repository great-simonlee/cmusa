<?php get_header(); ?>
<section class="dt-body">
  <div class="detail-ls-cont" id="detailLoadingSpinnerDiv">
    <!-- <h3>正在下载房源信息</h3> -->
    <img class="detail-ls" src="<?php echo get_theme_file_uri('/assets/img/logo/loadingListing.gif') ?>">
  </div> 
  <div class="dt-cont" id="detailContDiv" style="display: none;">
    <div class="dt-desc-cont" id="descContainer">
      <div>
        <p class="dt-listing-cat-title" id="detailTitle">THIS IS TITLE</p>
        <!-- <p><img class="dtd-bm-icon" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-bm-blank.png') ?>" alt="bookmark">收藏（0）｜<img class="dtd-bm-icon" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-view.png') ?>" alt="bookmark">浏览（0）</p> -->
      </div>
      <div class="dtd-ml-display">
        <div class="dtd-pic-cont">
          <img class="dtd-pic-main" id="detailMainImg" alt="main">
          <div class="dtd-pic-sub-cont" id="detailSubImgCont">
              <!-- <img class="dtd-pic-sub" src="<?php echo get_theme_file_uri('/assets/img/example/listing2.png') ?>" alt="example">
              <img class="dtd-pic-sub" src="<?php echo get_theme_file_uri('/assets/img/example/listing3.png') ?>" alt="example">
              <img class="dtd-pic-sub" src="<?php echo get_theme_file_uri('/assets/img/example/listing4.png') ?>" alt="example">
              <img class="dtd-pic-sub" src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>" alt="example">
              <img class="dtd-pic-sub" src="<?php echo get_theme_file_uri('/assets/img/example/listing6.png') ?>" alt="example">
              <img class="dtd-pic-sub" src="<?php echo get_theme_file_uri('/assets/img/example/listing7.png') ?>" alt="example"> -->
          </div>
        </div>
        <div class="dt-info-mob-cont" >
          <div class="dt-info-mob-text-box">
            <p class="dt-info-mob-price">$ <span class="detailPrice">0,000</span>/月</p>
            <div class="dt-info-mob-text">
              <img class="dt-info-mob-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/marker.png') ?>" alt="">
              <p class="detailAddress">4545 Center Blvd, Long Island City, NY 11101</p>
            </div>
            <div class="dt-info-mob-text">
              <img class="dt-info-mob-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/bed.png') ?>" alt="">
              <p><span class="detailBed">0</span> 室</p>
            </div>
            <div class="dt-info-mob-text">
              <img class="dt-info-mob-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/bath.png') ?>" alt="">
              <p><span class="detailBath">0</span> 卫</p>
            </div>
            <div class="dt-info-mob-text">
              <img class="dt-info-mob-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/calendar.png') ?>" alt="">
              <p>入住时间：<br><span class="detailDate"></span></p>
            </div>
            <div class="dt-info-mob-text">
              <img class="dt-info-mob-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/length.png') ?>" alt="">
              <p>租期：<br><span class="detailLength"></span></p>
            </div>
            <div class="dt-info-mob-text">
              <img class="dt-info-mob-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/broker.png') ?>" alt="">
              <p>中介费：<br><span class="detailBroker"></span></p>
            </div>
          </div>
          <!-- <button class="dt-info-btn">现在联系</button> -->
        </div>
      </div>
      <div class="dtd-content-cont">
        <p class="dtd-title">房源简介</p>
        <div class="dtdc-desc">
          <p id="detailDescription">THIS IS DESCRIPTION</p>
        </div>
      </div>
      <div class="dtd-content-cont">
        <p class="dtd-title">房屋配置</p>
        <div class="dtdc-fea-cont" id="detailFeatures">
          <!-- <div class="dtdc-fea-card">
            <img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Washer.png') ?>" alt="">
            <p>洗衣机</p>
          </div> -->
        </div>
      </div>
      <div class="dtd-content-cont">
        <p class="dtd-title">大楼设施</p>
        <div class="dtdc-fea-cont" id="detailAmenities">
          <!-- <div class="dtdc-fea-card">
            <img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Concierge.png') ?>" alt="">
            <p>24h门卫</p>
          </div> -->
        </div>
      </div>
      <div class="dtd-content-cont" id="locContainer">
        <p class="dtd-title">房源位置</p>
        <div class="dtdc-desc">
          <div id="mapDetailDiv"></div>
          <img style="display: none;" class="dtdc-loc" src="<?php echo get_theme_file_uri('/assets/img/example/detailLoc.png') ?>" alt="example">
        </div>
      </div>
      <div class="dtd-content-cont" style="display: none;">
        <p class="dtd-title">类似房源</p>
        <ul class="dtdc-desc">
          <li class="dtdc-rec-listing">
            <img src="<?php echo get_theme_file_uri('/assets/img/example/listing1.png') ?>" alt="">
            <div>
              <p>纽约-长岛市</p>
              <p>$5,800</p>
            </div>
          </li>
          <li class="dtdc-rec-listing">
            <img src="<?php echo get_theme_file_uri('/assets/img/example/listing2.png') ?>" alt="">
            <div>
              <p>纽约-长岛市</p>
              <p>$5,800</p>
            </div>
          </li>
          <li class="dtdc-rec-listing">
            <img src="<?php echo get_theme_file_uri('/assets/img/example/listing3.png') ?>" alt="">
            <div>
              <p>纽约-长岛市</p>
              <p>$5,800</p>
            </div>
          </li>
          <li class="dtdc-rec-listing">
            <img src="<?php echo get_theme_file_uri('/assets/img/example/listing4.png') ?>" alt="">
            <div>
              <p>纽约-长岛市</p>
              <p>$5,800</p>
            </div>
          </li>
          <li class="dtdc-rec-listing">
            <img src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>" alt="">
            <div>
              <p>纽约-长岛市</p>
              <p>$5,800</p>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
    <div class="dt-info-cont" id="infoContainer">
      <div class="dt-info-text-box">
        <p class="dt-info-price">$ <span class="detailPrice"></span>/月</p>
        <div class="dt-info-text">
          <img class="dt-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/marker.png') ?>" alt="">
          <p class="detailAddress"></p>
        </div>
        <div class="dt-info-text">
          <img class="dt-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/bed.png') ?>" alt="">
          <p><span class="detailBed"></span> 室</p>
        </div>
        <div class="dt-info-text">
          <img class="dt-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/bath.png') ?>" alt="">
          <p><span class="detailBed"></span> 卫</p>
        </div>
        <div class="dt-info-text">
          <img class="dt-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/calendar.png') ?>" alt="">
          <p>入住时间：</br><span class="detailDate"></span></p>
        </div>
        <div class="dt-info-text">
          <img class="dt-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/length.png') ?>" alt="">
          <p>租期：<span class="detailLength"></span></p>
        </div>
        <div class="dt-info-text">
          <img class="dt-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/broker.png') ?>" alt="">
          <p>中介费：</br><span class="detailBroker"></span></p>
        </div>
      </div>
      <button class="dt-info-btn">现在联系</button>
    </div>
  </div>
  <img class="dt-wallpaper" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>">
</section>
<div class="m-footer">
  <div class="mf-menu-item">
    <img class="mf-menu-home" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-footer-home.png') ?>" alt="ChinaMovesUSA">
    <p>首页</p>
  </div>
  <div class="mf-menu-item ft-more">
    <img class="mf-menu-more" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-footer-more.png') ?>" alt="ChinaMovesUSA">
  </div>
  <div class="mf-menu-item">      
    <img class="mf-menu-home" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-footer-my.png') ?>" alt="ChinaMovesUSA">
    <p>我的</p>
  </div>
</div>
<?php get_footer(); ?>
