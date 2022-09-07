<?php get_header(); ?>
<section class="mBody">
  <div class="mBody-cont">
    <h2>CHINA MOVES USA 官网</h2>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/user.png') ?>">  
      <input class="mBody-info-input" id="signUpUsername" type="text" placeholder="姓名">
    </div>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/email.png') ?>">  
      <input class="mBody-info-input" id="signUpEmail" type="email" placeholder="邮箱">
    </div>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/lock.png') ?>">  
      <input class="mBody-info-input" id="signUpPassword" type="password" placeholder="密码">
    </div>
    <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/lock.png') ?>">  
      <input class="mBody-info-input" id="signUpPasswordCheck" type="password" placeholder="确认密码">
    </div>
    <div>
      <label class="mBody-ua-container" for="userAgreement">
        <input type="checkbox" name="" id="userAgreement">
        <div class="mBody-ua-checkmark"></div>
        《 CHINA MOVES USA 房产用户协议 》
      </label>
    </div>
    <div style="margin-top: 24px">
      <span style="color: #fff">已有帐号？ </span><a class="signup-to-login" href="<?php echo site_url('/member-login') ?>">登录</a>
    </div>
    <button class="mBody-signup-btn" id="signUpBtn">注册</button>
  </div>
  <div class="mBody-ban-cont">
    <img class="mBody-ban-img" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>" alt="">
    <div class="mBody-ban-text"><p>MAKE</br>YOUR <span style="color: #f78915; text-shadow: -6px 6px #e9c094;">BEST</span></br>MOVE</p></div>
  </div>
</section>
<?php get_footer(); ?>
