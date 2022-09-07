<?php get_header(); ?>
<section class="mBody">
  <div class="mBody-cont">
    <h2>CHINA MOVES USA 官网</h2>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/user.png') ?>">  
      <input class="mBody-info-input" id="verifyUsername" type="text" placeholder="姓名">
    </div>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/email.png') ?>">  
      <input class="mBody-info-input" id="verifyEmail" type="email" placeholder="邮箱">
    </div>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/phone.png') ?>">  
      <input class="mBody-info-input" id="verifyNumber" type="text" placeholder="手机号码">
    </div>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/wechat.png') ?>">  
      <input class="mBody-info-input" id="verifyWeChat" type="text" placeholder="微信账号">
    </div>
    <button class="mBody-signup-btn" id="verifyBtn">提交</button>
    <button class="mBody-signup-btn" id="skipToMainBtn">回到主页</button>
  </div>
  <div class="mBody-ban-cont">
    <img class="mBody-ban-img" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>" alt="">
    <div class="mBody-ban-text"><p>MAKE</br>YOUR <span style="color: #f78915; text-shadow: -6px 6px #e9c094;">BEST</span></br>MOVE</p></div>
  </div>
</section>
<?php get_footer(); ?>
