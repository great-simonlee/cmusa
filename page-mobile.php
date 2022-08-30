<?php get_header(); ?>
<!-- NAVIGATION BAR --><!-- NAVIGATION BAR -->
<!-- <nav class="m-header">
  <div class="mh-space"></div>
  <div class="mh-nav">
    <div class="mh-city">
      <img class="mh-loc-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-location.png') ?>" alt="ChinaMovesUSA">
      <p>选择城市</p>
      <img class="mh-dtri-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-downtri.png') ?>" alt="ChinaMovesUSA">
    </div>
    <img class="mh-logo-img" src="<?php echo get_theme_file_uri('/assets/img/logo/china moves logo(white w_ trans)_937x97.png') ?>" alt="ChinaMovesUSA">
    <div class="mh-menu">
      <img class="mh-menu-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-menu.png') ?>" alt="ChinaMovesUSA">
    </div>
  </div>
</nav> -->
<!-- BODY CONTENTS --><!-- BODY CONTENTS -->
<section class="m-body">
  <div class="mb-cont">
    <div class="mb-banner">
      <img class="mb-banner-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing4.png') ?>" alt="ChinaMovesUSA">
    </div>
    <div class="mb-search">
      <img class="mb-search-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-search-icon.png') ?>" alt="ChinaMovesUSA">
      <input class="mb-search-input" type="text">
    </div>
  </div>
  <div class="mb-main-menu">
    <div class="mb-menu-item">长租</div>
    <div class="mb-menu-item" style="color: #c9c9c9;">短租</div>
    <div class="mb-menu-item" style="color: #c9c9c9;">室友</div>
  </div>
  <div class="mb-menu-select">
    <div class="mb-menu-selected"></div>
    <div class="mb-menu-selected" style="visibility: hidden;"></div>
    <div class="mb-menu-selected" style="visibility: hidden;"></div>
  </div>
  <div class="mb-filter-cont">
    <div class="mb-filter">
      <div class="mb-filter-item" id="mobile-filter-time"><span>房型</span><img class="mb-filter-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-downtri-bl2.png') ?>" alt="ChinaMovesUSA"></div>
      <div class="mb-filter-item" id="mobile-filter-area"><span>选择区域</span><img class="mb-filter-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-downtri-bl2.png') ?>" alt="ChinaMovesUSA"></div>
      <div class="mb-filter-item" id="mobile-filter-price"><span>选择价位</span><img class="mb-filter-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-downtri-bl2.png') ?>" alt="ChinaMovesUSA"></div>
    </div>
    <div class="mb-filter-item-detail-div" id="mobileFilterDiv" style="display: none;">
      <div class="mb-filter-item-detail" style="visibility: hidden;">
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtypeall" search-type="type" data-search="all" >全部</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtypestudio" search-type="type" data-search="studio">Studio</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtype1b1b" search-type="type" data-search="1b1b">一室一卫</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtype1b2b" search-type="type" data-search="1b2b">一室两卫</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtype2b1b" search-type="type" data-search="2b1b">两室一卫</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtype2b2b" search-type="type" data-search="2b2b">两室两卫</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtype3b1b" search-type="type" data-search="3b1b">三室一卫</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtype3b2b" search-type="type" data-search="3b2b">三室两卫</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtype4b2b" search-type="type" data-search="4b2b">四室两卫</p>
          <p class="mb-filter-item-detail-list mobSearchType" id="mobtypeetc" search-type="type" data-search="etc">其他</p>
      </div>
      <div class="mb-filter-item-detail" style="visibility: hidden;">
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareaall" search-type="area" data-search="all" >全部</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareadowntown" search-type="area" data-search="downtown" >曼哈顿-下城</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareamidtown" search-type="area" data-search="midtown" >曼哈顿-中城</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareauptown" search-type="area" data-search="uptown" >曼哈顿-上城</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobarealic" search-type="area" data-search="lic" >长岛市</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareanjcity" search-type="area" data-search="njcity" >新泽西</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareaqueens" search-type="area" data-search="queens" >皇后区</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareaflushing" search-type="area" data-search="flushing" >法拉盛</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareabrooklyn" search-type="area" data-search="brooklyn" >布鲁克林</p>
          <!-- <p class="mb-filter-item-detail-list mobSearchArea" id="mobareastatenisland" search-type="area" data-search="statenisland" >斯塔滕岛</p>
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareabronx" search-type="area" data-search="bronx" >布朗克斯</p> -->
          <p class="mb-filter-item-detail-list mobSearchArea" id="mobareaetc" search-type="area" data-search="etc" >其他</p>
      </div>
      <div class="mb-filter-item-detail" style="visibility: hidden;">
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpriceall" search-type="price" data-search="all" >全部</p>
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpricel1" search-type="price" data-search="l1">$1k 以下</p>
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpriceg1l2" search-type="price" data-search="g1l2">$1k ~ $2k</p>
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpriceg2l3" search-type="price" data-search="g2l3">$2k ~ $3k</p>
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpriceg3l4" search-type="price" data-search="g3l4">$3k ~ $4k</p>
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpriceg4l5" search-type="price" data-search="g4l5">$4k ~ $5k</p>
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpriceg5l6" search-type="price" data-search="g5l6">$5k ~ $6k</p>
          <p class="mb-filter-item-detail-list mobSearchPrice" id="mobpriceg6" search-type="price" data-search="g6">$6k 以上</p>
      </div>
    </div>
  </div>
  <div class="mb-card-cont" id="mobileListingCont">
    <div class="mb-front-ls-div" id="mobileFrontLoadingSpinnerDiv">
      <img class="mb-front-ls" src="<?php echo get_theme_file_uri('/assets/img/logo/loadingListing.gif') ?>">
    </div> 
    <!-- <div class="mb-card">
      <img class="mb-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing1.png') ?>" alt="ChinaMovesUSA">
      <div class="mb-card-desc">
        <p class="mbc-desc-title">让价转租 个人转租【JP 1b1b 客厅】 自带家具，领包入住，白菜价</p>
        <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 地址：2830 Jackson Park，11101</p>
        <p class="mbc-desc-price">$3000/月</p>
      </div>
    </div>
    <div class="mb-card">
      <img class="mb-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing2.png') ?>" alt="ChinaMovesUSA">
      <div class="mb-card-desc">
        <p class="mbc-desc-title">让价转租 个人转租【JP 1b1b 客厅】 自带家具，领包入住，白菜价</p>
        <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 地址：2830 Jackson Park，11101</p>
        <p class="mbc-desc-price">$3000/月</p>
      </div>
    </div>
    <div class="mb-card">
      <img class="mb-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing3.png') ?>" alt="ChinaMovesUSA">
      <div class="mb-card-desc">
        <p class="mbc-desc-title">让价转租 个人转租【JP 1b1b 客厅】 自带家具，领包入住，白菜价</p>
        <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 地址：2830 Jackson Park，11101</p>
        <p class="mbc-desc-price">$3000/月</p>
      </div>
    </div>
    <div class="mb-card">
      <img class="mb-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing4.png') ?>" alt="ChinaMovesUSA">
      <div class="mb-card-desc">
        <p class="mbc-desc-title">让价转租 个人转租【JP 1b1b 客厅】 自带家具，领包入住，白菜价</p>
        <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 地址：2830 Jackson Park，11101</p>
        <p class="mbc-desc-price">$3000/月</p>
      </div>
    </div>
    <div class="mb-card">
      <img class="mb-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>" alt="ChinaMovesUSA">
      <div class="mb-card-desc">
        <p class="mbc-desc-title">让价转租 个人转租【JP 1b1b 客厅】 自带家具，领包入住，白菜价</p>
        <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 地址：2830 Jackson Park，11101</p>
        <p class="mbc-desc-price">$3000/月</p>
      </div>
    </div>
    <div class="mb-card">
      <img class="mb-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing6.png') ?>" alt="ChinaMovesUSA">
      <div class="mb-card-desc">
        <p class="mbc-desc-title">让价转租 个人转租【JP 1b1b 客厅】 自带家具，领包入住，白菜价</p>
        <p class="mbc-desc-content">个人转租 【JP 1b1b 客厅】 租金：1600/月 带家具 电网费自理 租期可议：4/7-8/7 地址：2830 Jackson Park，11101</p>
        <p class="mbc-desc-price">$3000/月</p>
      </div>
    </div> -->
  </div>
  <div class="m-footer">
    <a href="<?php echo site_url('/mobile') ?>">
      <div class="mf-menu-item">
        <img class="mf-menu-home" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-footer-home.png') ?>" alt="ChinaMovesUSA">
        <p>首页</p>
      </div>
    </a>
    <div class="mf-menu-item ft-more">
      <img class="mf-menu-more" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-footer-more.png') ?>" alt="ChinaMovesUSA">
    </div>
    <a href="<?php echo site_url('/mypage') ?>">
      <div class="mf-menu-item">      
        <img class="mf-menu-home" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-footer-my.png') ?>" alt="ChinaMovesUSA">
        <p>我的</p>
      </div>
    </a>
  </div>

</section>
<?php get_footer(); ?>


