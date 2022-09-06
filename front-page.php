<?php get_header(); ?>
<section class="main-banner-container">
  <div class="main-banner-search">
    <p class="main-banner-title">MAKE YOUR BEST MOVE</p>
    <div class="main-search">
      <ul class="main-searchbar">
          <li>
            <label for="">城市</label>
            <select name="" id="">
              <option disabled selected value style="display:none"></option>
              <option value="">纽约</option>
              <option value="">波士顿</option>
              <option value="">西雅图</option>
              <option value="">芝加哥</option>
              <option value="">洛杉矶</option>
              <option value="">华盛顿</option>
              <option value="">旧金山</option>
            </select>
          </li>
          <li>
            <label for="">房型</label>
            <select name="" id="">
              <option disabled selected value style="display:none"></option>
              <option class="mainSearchSelectOption" value="type=studio">Studio</option>
              <option class="mainSearchSelectOption" value="type=1b1b">一室一卫</option>
              <option class="mainSearchSelectOption" value="type=1b2b">一室两卫</option>
              <option class="mainSearchSelectOption" value="type=2b1b">两室一卫</option>
              <option class="mainSearchSelectOption" value="type=2b2b">两室两卫</option>
              <option class="mainSearchSelectOption" value="type=3b1b">三室一卫</option>
              <option class="mainSearchSelectOption" value="type=3b2b">三室两卫</option>
              <option class="mainSearchSelectOption" value="type=4b2b">四室两卫</option>
              <option class="mainSearchSelectOption" value="type=etc">其他</option>
            </select>
          </li>
          <li>
            <label for="">租金</label>
            <select name="" id="">
              <option disabled selected value style="display:none"></option>
              <option class="mainSearchSelectOption" value="price=l1">$1,000 以下</option>
              <option class="mainSearchSelectOption" value="price=g1l2">$1,000~$2,000</option>
              <option class="mainSearchSelectOption" value="price=g2l3">$2,000~$3,000</option>
              <option class="mainSearchSelectOption" value="price=g3l4">$3,000~$4,000</option>
              <option class="mainSearchSelectOption" value="price=g4l5">$4,000~$5,000</option>
              <option class="mainSearchSelectOption" value="price=g5l6">$5,000~$6,000</option>
              <option class="mainSearchSelectOption" value="price=g6">$6,000 以上</option>
            </select>
          </li>
          <li>
            <label for="">租期</label>
            <select name="" id="">
              <option disabled selected value style="display:none"></option>
              <option class="mainSearchSelectOption" value="length=12个月">12个月及以上</option>
              <option class="mainSearchSelectOption" value="length=1个月">1个月</option>
              <option class="mainSearchSelectOption" value="length=2个月">2个月</option>
              <option class="mainSearchSelectOption" value="length=3个月">3个月</option>
              <option class="mainSearchSelectOption" value="length=4个月">4个月</option>
              <option class="mainSearchSelectOption" value="length=5个月">5个月</option>
              <option class="mainSearchSelectOption" value="length=6个月">6个月</option>
              <option class="mainSearchSelectOption" value="length=7个月">7个月</option>
              <option class="mainSearchSelectOption" value="length=8个月">8个月</option>
              <option class="mainSearchSelectOption" value="length=9个月">9个月</option>
              <option class="mainSearchSelectOption" value="length=10个月">10个月</option>
              <option class="mainSearchSelectOption" value="length=11个月">11个月</option>
            </select>
          </li>
          <li>
            <label for="">入住时间</label>
            <select name="" id="">
              <option disabled selected value style="display:none"></option>
              <option class="mainSearchSelectOption" value="date=1">1月</option>
              <option class="mainSearchSelectOption" value="date=2">2月</option>
              <option class="mainSearchSelectOption" value="date=3">3月</option>
              <option class="mainSearchSelectOption" value="date=4">4月</option>
              <option class="mainSearchSelectOption" value="date=5">5月</option>
              <option class="mainSearchSelectOption" value="date=6">6月</option>
              <option class="mainSearchSelectOption" value="date=7">7月</option>
              <option class="mainSearchSelectOption" value="date=8">8月</option>
              <option class="mainSearchSelectOption" value="date=9">9月</option>
              <option class="mainSearchSelectOption" value="date=10">10月</option>
              <option class="mainSearchSelectOption" value="date=11">11月</option>
              <option class="mainSearchSelectOption" value="date=12">12月</option>
            </select>
          </li>
          <li>
            <label for="">中介费</label>
            <select name="" id="">
              <option disabled selected value style="display:none"></option>
              <option class="mainSearchSelectOption" value="broker=NozBrokerzFee">无中介费</option>
              <option class="mainSearchSelectOption" value="broker=BrokerzFee">有中介费</option>
            </select>
          </li>
          <div>
            <button id="mainSearchBtn">搜索</button>
          </div>
      </ul>
    </div>
  </div>
</section>
<img class="main-banner-img" src="<?php echo get_theme_file_uri('/assets/img/banner/front-banner.png') ?>" alt="mainBanner">  
<section class="main-sel-con">
  <div class="main-sel-hl" id="frontHotListing">
    <p class="main-sel-title">热门房源</p>
    <p class="main-sel-subtitle">HOT LISTINGS</p>
  </div>
  <div class="main-sel-ha" id="frontHotArea">
    <p class="main-sel-title">热门区域</p>
    <p class="main-sel-subtitle">HOT AREAS</p>
  </div>
</section>
<section class="main-rent">
  <img class="rent-listing-ls" id="frontPreLoading" src="<?php echo get_theme_file_uri('/assets/img/logo/loadingListing.gif') ?>">
  <div class="main-rent-listing" id="NYListingDiv" style="display: none;">
  </div>
  <div class="main-rent-listing" id="HOTAreaCat" style="display: none;">
    <div class="main-rent-card" url-search="/rent/?area=uptown">
      <a href="<?php echo site_url('/rent/?area=uptown') ?>">
        <img class="main-rent-img" src="<?php echo get_theme_file_uri('/assets/img/area/upperman.png') ?>" alt="area">
        <div class="main-area-info"><p>Upper<br>Manhattan</p></div>
      </a>
    </div>
    <div class="main-rent-card" url-search="/rent/?area=midtown">
      <a href="<?php echo site_url('/rent/?area=midtown') ?>">
        <img class="main-rent-img" src="<?php echo get_theme_file_uri('/assets/img/area/midman.png') ?>" alt="area">
        <div class="main-area-info"><p>Midtown<br>Manhattan</p></div>
      </a>
    </div>
    <div class="main-rent-card" url-search="/rent/?area=downtown">
      <a href="<?php echo site_url('/rent/?area=downtown') ?>">
        <img class="main-rent-img" src="<?php echo get_theme_file_uri('/assets/img/area/lowerman.png') ?>" alt="area">
        <div class="main-area-info"><p>Lower<br>Manhattan</p></div>
      </a>
    </div>
    <div class="main-rent-card" url-search="/rent/?area=lic">
      <a href="<?php echo site_url('/rent/?area=lic') ?>">
        <img class="main-rent-img" src="<?php echo get_theme_file_uri('/assets/img/area/lic.png') ?>" alt="area">
        <div class="main-area-info"><p>Long<br>Island<br>City</p></div>
      </a>
    </div>
    <div class="main-rent-card" url-search="/rent/?area=flushing">
      <a href="<?php echo site_url('/rent/?area=flushing') ?>">
        <img class="main-rent-img" style="filter: grayscale(50%);" src="<?php echo get_theme_file_uri('/assets/img/area/flushing.png') ?>" alt="area">
        <div class="main-area-info"><p>Flushing</p></div>
      </a>
    </div>
    <div class="main-rent-card" url-search="/rent/?area=njcity">
      <a href="<?php echo site_url('/rent/?area=njcity') ?>">
        <img class="main-rent-img" src="<?php echo get_theme_file_uri('/assets/img/area/jserseycity.png') ?>" alt="area">
        <div class="main-area-info"><p>Jersey<br>City</p></div>
      </a>
    </div>
    <div class="main-rent-card" url-search="/rent/?area=brooklyn">
      <a href="<?php echo site_url('/rent/?area=brooklyn') ?>">
        <img class="main-rent-img" src="<?php echo get_theme_file_uri('/assets/img/area/bk.png') ?>" alt="area">
        <div class="main-area-info"><p>Brooklyn</p></div>
      </a>
    </div>
    <div class="main-rent-card" url-search="/rent/?area=queens">
      <a href="<?php echo site_url('/rent/?area=queens') ?>">
        <img class="main-rent-img" src="<?php echo get_theme_file_uri('/assets/img/area/queens.png') ?>" alt="area">
        <div class="main-area-info"><p>Queens</p></div>
      </a>
    </div>
  </div>
  <button class="main-rent-more-btn"><a href="/rent" style="color:#fff">查看所有房源 &#160;</a><span class="more-btn-spe">&rsaquo;</span></button>
</section>
<section class="main-short">
  <p class="main-front-title">短租房源</p>
  <p class="main-front-subtitle">SUBLET LISTINGS</p>
  <div class="main-rent-listing" id="BOSListingDiv">
  </div>
  <button class="main-short-more-btn">更多短租房源 &#160;	<span class="more-btn-spe">&rsaquo;</span></button>
</section>
<section class="main-rm">
  <p class="main-front-title">找室友/找合租</p>
  <p class="main-front-subtitle">ROOMMATE</p>
  <a href="<?php echo site_url('/roommate') ?>">
    <div class="main-rm-banner">
      <div class="main-rm-txt">
        <p>想找志同道合的人一起合租？</p>
        <p>想要用最低的预算住自己喜欢的公寓？</p>
        <button>Go</button>
      </div>
      <img class="main-rm-img" src="<?php echo get_theme_file_uri('/assets/img/banner/front-rm.jpg') ?>" alt="roommate">
    </div>
  </a>
</section>
<section class="main-contact">
  <div class="main-con-container">
    <div class="main-con-card">
      <div>
        <p>还没找到你理想的房间？</p>
        <p>留下你的信息</p>
        <p>和我们专业的Agent一对一交流 ！</p>
      </div>
      <img class="main-con-qr" src="<?php echo get_theme_file_uri('/assets/img/example/qr.png') ?>" alt="qr">
      <div>
        <p>扫一扫，加入我们的公众号</p>
        <p>查看更多纽约游玩，租房资讯 ！</p>
      </div>
    </div>
    <div class="main-con-input">
      <label for="">姓名：</label>
      <input type="text">
      <label for="">Email：</label>
      <input type="text">
      <label for="">电话：</label>
      <input type="text">
      <label for="">微信：</label>
      <input type="text">
      <label for="">其他信息：</label>
      <textarea name="" id="" placeholder="例如：房型，预算，入住时间等。"></textarea>
      <button class="main-con-submit">提交</button>
    </div>
  </div>
</section>
<?php get_footer(); ?>
