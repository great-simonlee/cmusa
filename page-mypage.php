<?php get_header(); ?>
<section class="mypage-body">
  <div class="mypage-category">
    <div class="mpcat-item" style="background-color: rgb(0, 0, 0, 0.8); color: white; border-top-left-radius: 24px;">基本信息</div>
    <div class="mpcat-item" style="background-color: #fff;">修改密码</div>
    <div class="mpcat-item" style="background-color: #fff;">我的房源</div>
    <div class="mpcat-item" style="background-color: #fff; border-bottom-left-radius: 24px;">我的收藏</div>
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

  <div class="mypage-section listing-section" id="myListingDiv" style="display: none;">
    <!-- <div class="myp-lising-card">
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
      <div class="myp-card-desc">
        <p>纽约上西3b1b次卧超低价转租近地铁周围生活设施齐全</p>
        <div class="myp-card-detail">
          <p>租期：1年</p>
          <p>入住时间：05/17/2022</p>
          <p>发布时间：05/17/2022 3:15pm</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between;align-items: center; padding: 4px 0">
        <div class="deleteDiv" id="deleteDiv" style="display: flex; flex-direction: column; justify-content: center;align-items: center;">
          <img class="deleteIcon" >
          <p>Delete</p>
        </div>
        <div class="editDiv" id="editDiv" style="display: flex; flex-direction: column; justify-content: center;align-items: center;">
          <img class="editIcon">
          <p>Edit</p>
        </div>
      </div>
    </div>
    <div class="myp-lising-card">
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
      <div class="myp-card-desc">
        <p>纽约上西3b1b次卧超低价转租近地铁周围生活设施齐全</p>
        <div class="myp-card-detail">
          <p>租期：1年</p>
          <p>入住时间：05/17/2022</p>
          <p>发布时间：05/17/2022 3:15pm</p>
        </div>
      </div>
    </div> -->
  </div>

<div class="mypage-section listing-section" style="display: none;">
  <div class="myp-lising-card">
    <div class="myp-card-left">
      <img class="myp-card-img" src="<?php echo get_theme_file_uri('/assets/img/example/listing2.png') ?>">
      <div class="myp-card-img-desc">
        <div class="myp-card-type">
          <p>1 Bedroom</p>
          <p>1 Bathroom</p>
        </div>
        <div class="myp-card-price">$3000/月</div>
      </div>
    </div>
    <div class="myp-card-desc">
      <p>纽约上西3b1b次卧超低价转租近地铁周围生活设施齐全</p>
      <div class="myp-card-detail">
        <p>租期：1年</p>
        <p>入住时间：05/17/2022</p>
        <p>发布时间：05/17/2022 3:15pm</p>
      </div>
    </div>
  </div>
</div>
</section>
<img class="mp-wallpaper" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>">
<?php get_footer(); ?>
