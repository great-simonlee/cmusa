<?php get_header(); ?>
<section class="rent-banner-container">
  <div class="rent-banner-search">
    <!-- <div class="rent-search">
      <img class="rent-search-mag" src="<?php echo get_theme_file_uri('/assets/img/icon/mag.png') ?>">
      <input class="rent-search-input" type="text" placeholder="搜索区域，地点名称开始找房">
      <button class="rent-search-btn">搜索</button>
    </div> -->
    <div class="rent-sel-con">
      <div class="rs-con-cat">
        <p>城市 ：</p>
        <p>区域位置 ：</p>
        <p>房型 ：</p>
        <p>租金 ：</p>
        <p>租期 ：</p>
        <p>入住时间 ：</p>
        <p>中介费 ：</p>
      </div>
      <div class="rs-opt-cont">
        <div class="rent-sel-opt" id="searchCityDiv">
          <p class="searchCity" id="cityny" search-type="city" data-search="ny">纽约</p>
          <!-- <p class="searchCity" id="citynj" search-type="city" data-search="nj">新泽西</p> -->
          <p class="searchCity" id="cityboston" search-type="city" data-search="boston">波士顿</p>
          <!-- <p>西雅图</p>
          <p>芝加哥</p>
          <p>洛杉矶</p>
          <p>华盛顿</p>
          <p>旧金山</p> -->
        </div>
        <div class="rent-sel-opt" id="searchAreaDiv">
          <p class="searchArea" id="areaall" search-type="area" data-search="all" >全部</p>
          <p class="searchArea" id="areadowntown" search-type="area" data-search="downtown" >曼哈顿-下城</p>
          <p class="searchArea" id="areamidtown" search-type="area" data-search="midtown" >曼哈顿-中城</p>
          <p class="searchArea" id="areauptown" search-type="area" data-search="uptown" >曼哈顿-上城</p>
          <p class="searchArea" id="arealic" search-type="area" data-search="lic" >长岛市</p>
          <p class="searchArea" id="areanjcity" search-type="area" data-search="njcity" >新泽西</p>
          <p class="searchArea" id="areaqueens" search-type="area" data-search="queens" >皇后区</p>
          <p class="searchArea" id="areaflushing" search-type="area" data-search="flushing" >法拉盛</p>
          <p class="searchArea" id="areabrooklyn" search-type="area" data-search="brooklyn" >布鲁克林</p>
          <!-- <p class="searchArea" id="areastatenisland" search-type="area" data-search="statenisland" >斯塔滕岛</p>
          <p class="searchArea" id="areabronx" search-type="area" data-search="bronx" >布朗克斯</p> -->
          <p class="searchArea" id="areaetc" search-type="area" data-search="etc" >其他</p>
        </div>
        <div class="rent-sel-opt">
          <p class="searchPropType" id="typeall" search-type="type" data-search="all" >全部</p>
          <p class="searchPropType" id="typestudio" search-type="type" data-search="studio">Studio</p>
          <p class="searchPropType" id="type1b1b" search-type="type" data-search="1b1b">一室一卫</p>
          <p class="searchPropType" id="type1b2b" search-type="type" data-search="1b2b">一室两卫</p>
          <p class="searchPropType" id="type2b1b" search-type="type" data-search="2b1b">两室一卫</p>
          <p class="searchPropType" id="type2b2b" search-type="type" data-search="2b2b">两室两卫</p>
          <p class="searchPropType" id="type3b1b" search-type="type" data-search="3b1b">三室一卫</p>
          <p class="searchPropType" id="type3b2b" search-type="type" data-search="3b2b">三室两卫</p>
          <p class="searchPropType" id="type4b2b" search-type="type" data-search="4b2b">四室两卫</p>
          <p class="searchPropType" id="typeetc" search-type="type" data-search="etc">其他</p>
        </div>
        <div class="rent-sel-opt">
          <p class="searchPrice" id="priceall" search-type="price" data-search="all" >全部</p>
          <p class="searchPrice" id="pricel1" search-type="price" data-search="l1">$1,000 以下</p>
          <p class="searchPrice" id="priceg1l2" search-type="price" data-search="g1l2">$1,000~$2,000</p>
          <p class="searchPrice" id="priceg2l3" search-type="price" data-search="g2l3">$2,000~$3,000</p>
          <p class="searchPrice" id="priceg3l4" search-type="price" data-search="g3l4">$3,000~$4,000</p>
          <p class="searchPrice" id="priceg4l5" search-type="price" data-search="g4l5">$4,000~$5,000</p>
          <p class="searchPrice" id="priceg5l6" search-type="price" data-search="g5l6">$5,000~$6,000</p>
          <p class="searchPrice" id="priceg6" search-type="price" data-search="g6">$6,000 以上</p>
        </div>
        <div class="rent-sel-opt">
          <p class="searchLength" id="lengthall" search-type="length" data-search="all" >全部</p>
          <p class="searchLength" id="length12个月" search-type="length" data-search="12个月">12个月及以上</p>
          <p class="searchLength" id="length1个月" search-type="length" data-search="1个月">1个月</p>
          <p class="searchLength" id="length2个月" search-type="length" data-search="2个月">2个月</p>
          <p class="searchLength" id="length3个月" search-type="length" data-search="3个月">3个月</p>
          <p class="searchLength" id="length4个月" search-type="length" data-search="4个月">4个月</p>
          <p class="searchLength" id="length5个月" search-type="length" data-search="5个月">5个月</p>
          <p class="searchLength" id="length6个月" search-type="length" data-search="6个月">6个月</p>
          <p class="searchLength" id="length7个月" search-type="length" data-search="7个月">7个月</p>
          <p class="searchLength" id="length8个月" search-type="length" data-search="8个月">8个月</p>
          <p class="searchLength" id="length9个月" search-type="length" data-search="9个月">9个月</p>
          <p class="searchLength" id="length10个月" search-type="length" data-search="10个月">10个月</p>
          <p class="searchLength" id="length11个月" search-type="length" data-search="11个月">11个月</p>
        </div>
        <div class="rent-sel-opt">
          <p class="searchDate" id="dateall" search-type="date" data-search="all" >全部</p>
          <p class="searchDate" id="date1" search-type="date" data-search="1">1月</p>
          <p class="searchDate" id="date2" search-type="date" data-search="2">2月</p>
          <p class="searchDate" id="date3" search-type="date" data-search="3">3月</p>
          <p class="searchDate" id="date4" search-type="date" data-search="4">4月</p>
          <p class="searchDate" id="date5" search-type="date" data-search="5">5月</p>
          <p class="searchDate" id="date6" search-type="date" data-search="6">6月</p>
          <p class="searchDate" id="date7" search-type="date" data-search="7">7月</p>
          <p class="searchDate" id="date8" search-type="date" data-search="8">8月</p>
          <p class="searchDate" id="date9" search-type="date" data-search="9">9月</p>
          <p class="searchDate" id="date10" search-type="date" data-search="10">10月</p>
          <p class="searchDate" id="date11" search-type="date" data-search="11">11月</p>
          <p class="searchDate" id="date12" search-type="date" data-search="12">12月</p>
        </div>
        <div class="rent-sel-opt">
          <p class="searchBroker" id="brokerall" search-type="broker" data-search="all" >全部</p>
          <p class="searchBroker" id="brokerNozBrokerzFee" search-type="broker" data-search="NozBrokerzFee">无中介费</p>
          <p class="searchBroker" id="brokerBrokerzFee" search-type="broker" data-search="BrokerzFee">有中介费</p>
        </div>
      </div>
    </div>
  </div>
</section>
<img class="rent-banner-img" src="<?php echo get_theme_file_uri('/assets/img/banner/front-banner.png') ?>" alt="mainBanner">  
<div class="rent-order">
  <div class="rent-order-cont">
    <!-- <div class="rent-order-btn">
      
        <div class="rent-order-item">
          <p>综合排序</p>
          <img class="rent-order-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/sort.png') ?>">
        </div>
      
    </div> -->
    <div class="rent-order-btn" id="timeOrder" style="visibility: hidden;">
      
        <div class="rent-order-item">
          <p>时间排序</p>
          <img class="rent-order-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/sort.png') ?>">
        </div>
      
    </div>
    <div class="rent-order-btn" id="priceOrder" style="visibility: hidden;">
      
        <div class="rent-order-item">
          <p>价格排序</p>
          <img class="rent-order-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/sort.png') ?>">
        </div>
      
    </div>
  </div>
</div>
<div class="rent-listing-ls-cont" id="loadingSpinnerDiv">
  <!-- <h3>正在下载房源</h3> -->
  <img class="rent-listing-ls" src="<?php echo get_theme_file_uri('/assets/img/logo/loadingListing.gif') ?>">
</div> 
<div class="rent-listing" id="rentListingDiv" style="display: none;"> 
  
  <div class="rent-listing-cont">
    <div class="rent-listing-card" id="listingContainer">
      <!-- <div class="rl-card">
        <div class="rl-card-cont">
          <img class="rl-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing1.png') ?>">
          <div class="rl-card-info">
            <div class="rlc-info-text">
              <p>1 Bedroom</p>
              <p>1 Bathroom</p>
            </div>
            <p>$3,000/Month</p>
          </div>
        </div>
        <div class="rl-card-desc">
          <h4>纽约上西3b1b次卧超低价转租近地铁周围生活设施齐全</h4>
          <div>
            <p>租期：1年</p>
            <p>入住时间：05/17/2022</p>
            <p>发布时间：05/17/2022 03:15pm</p>
          </div>
        </div>
      </div> -->
    </div>
    <div class="rent-listing-map" id="rentMapContainer">  
      <div class="rent-listing-map-img" id="rentListingMap"></div>
      <!-- <img class="rent-listing-map-img" src="<?php echo get_theme_file_uri('/assets/img/example/exampleMap.png') ?>"> -->
    </div>
  </div>
  <div class="rl-pagination" id="rentLocContainer">
    <img style="visibility: hidden;" class="rl-pagination-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/lessthan.png') ?>">
    <div class="rl-pagination-num" id="listingPagination">
      <!-- <p style="color: #f78915" data-page="1">1</p> -->
    </div>
    <img style="visibility: hidden;" class="rl-pagination-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/morethan.png') ?>">
  </div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<?php get_footer(); ?>
