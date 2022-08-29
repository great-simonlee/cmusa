<?php get_header(); ?>
<section class="mypage-body">
  <div class="mypage-category">
    <div class="mpcat-item" style="background-color: rgb(0, 0, 0, 0.8); color: white; border-top-left-radius: 24px;">基本信息</div>
    <div class="mpcat-item" style="background-color: #fff;">修改密码</div>
    <div class="mpcat-item" style="background-color: #fff;">我的房源</div>
    <div class="mpcat-item" style="background-color: #fff; border-bottom-left-radius: 24px;">我的收藏</div>
  </div>
  <div class="mobile-mypage-category">
    <div class="mob-mpcat-item" style="background-color: rgb(0, 0, 0, 0.8); color: white; border-top-left-radius: 12px;">基本信息</div>
    <div class="mob-mpcat-item" style="background-color: #fff;">修改密码</div>
    <div class="mob-mpcat-item" style="background-color: #fff;">我的房源</div>
    <div class="mob-mpcat-item" style="background-color: #fff; border-top-right-radius: 12px;">我的收藏</div>
  </div>
  <div class="mypage-section">
    <img class="mypage-avatar" src="<?php echo get_theme_file_uri('/assets/img/icon/userMenu.png') ?>">
    <div class="mypage-input-cont">
      <label class="mypage-label" for="mpUsername"><span style="color: red;">*</span>用户名：</label>
      <input class="mypage-input" id="mpUsername" type="text">
    </div>
    <div class="mypage-input-cont">
      <label class="mypage-label" for="mpEmail"><span style="color: red;">*</span>邮箱：</label>
      <input class="mypage-input" id="mpEmail" type="text">
    </div>
    <div class="mypage-input-cont">
      <label class="mypage-label" for="mpPhone"><span style="color: red;">*</span>手机号：</label>
      <input class="mypage-input" id="mpPhone" type="text">
    </div>
    <div class="mypage-input-cont">
      <label class="mypage-label" for="mpWeixin">微信：</label>
      <input class="mypage-input" id="mpWeixin" type="text">
    </div>
    <button class="mypage-submit-btn">提交</button>
  </div>
  <div class="mypage-section" style="display: none;">
    <img class="mypage-avatar" src="<?php echo get_theme_file_uri('/assets/img/icon/userMenu.png') ?>">
    <div class="mypage-input-cont">
      <label class="mypage-label" for="currentPW"><span style="color: red;">*</span>旧密码：</label>
      <input class="mypage-input" id="currentPW" type="password">
    </div>
    <div class="mypage-input-cont">
      <label class="mypage-label" for="newPW"><span style="color: red;">*</span>新密码：</label>
      <input class="mypage-input" id="newPW" type="password">
    </div>
    <div class="mypage-input-cont">
      <label class="mypage-label" for="newPWCheck"><span style="color: red;">*</span>确认密码：</label>
      <input class="mypage-input" id="newPWCheck" type="password">
    </div>
    <button class="mypage-submit-btn">提交</button>
  </div>

  <div class="mypage-section listing-section" style="display: none;">
    <div class="laptop-listing-div" id="myListingDiv">
      <!-- <div class="myp-lising-card">
        <a class="myListingAnchor" target="_blank">
          <div class="myp-card-left">
            <img class="myp-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing6.png') ?>">
            <div class="myp-card-img-desc">
              <div class="myp-card-type">
                <p>1 Bedroom</p>
                <p>1 Bathroom</p>
              </div>
              <div class="myp-card-price">$3000/月</div>
            </div>
          </div>
        </a>
        <a class="myListingAnchor" target="blank">
          <div class="myp-card-desc">
            <div class="myp-card-detail">
              <p>纽约上西3b1b次卧超低价转租近地铁周围生活设施齐全</p>
              <p>租期：1年</p>
              <p>入住时间：05/17/2022</p>
              <p>发布时间：05/17/2022 3:15pm</p>
            </div>
          </div>
        </a>
        <div class="myp-card-editdelete">
          <i class="fa fa-pencil-square-o editdelete" aria-hidden="true"><span>&nbsp;编辑</span></i>
          <i class="fa fa-trash-o editdelete deleteDiv" aria-hidden="true"><span>&nbsp;删除</span></i>
        </div>
      </div> -->
    </div>
    <div class="mob-listing-div" id="mbMyListing">
      <!-- <div class="mb-mypage-card">
        <a href="">
          <div class="mb-mypage-card-cont">
            <img class="mb-mypage-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing6.png') ?>">
            <div class="mb-mypage-card-desc">
              <p class="mb-mypage-card-title">纽约上西3b1b次卧超低价转租近地铁周围生活设施齐全</p>
              <div class="mb-mypage-card-info">
                <p>1 Bed</p>
                <p>1 Bath</p>
                <p>$3000/月</p>
              </div>
            </div>
          </div>
        </a>
        <div class="mb-mypage-card-editdelete">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div> -->
    </div>
  </div>

  <div class="mypage-section listing-section" style="display: none;">
    <!-- <div class="myp-lising-card">
      <a class="myListingAnchor" target="_blank">
        <div class="myp-card-left">
          <img class="myp-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing6.png') ?>">
          <div class="myp-card-img-desc">
            <div class="myp-card-type">
              <p>1 Bedroom</p>
              <p>1 Bathroom</p>
            </div>
            <div class="myp-card-price">$3000/月</div>
          </div>
        </div>
      </a>
      <a class="myListingAnchor" target="blank">
        <div class="myp-card-desc">
          <div class="myp-card-detail">
            <p>纽约上西3b1b次卧超低价转租近地铁周围生活设施齐全</p>
            <p>租期：1年</p>
            <p>入住时间：05/17/2022</p>
            <p>发布时间：05/17/2022 3:15pm</p>
          </div>
        </div>
      </a>
      <div class="myp-card-editdelete">
        <i class="fa fa-pencil-square-o editdelete" aria-hidden="true"><span>&nbsp;编辑</span></i>
        <i class="fa fa-trash-o editdelete deleteDiv" aria-hidden="true"><span>&nbsp;删除</span></i>
      </div>
    </div> -->
  </div>
</section>
<img class="mp-wallpaper" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>">
<?php get_footer(); ?>
