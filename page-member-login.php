<?php get_header(); ?>
<section class="mBody">
  <div class="mBody-cont">
    <h2>CHINA MOVES USA 官网</h2>
    <div id="logInBox">
      <div class="mBody-info">
        <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/email.png') ?>">  
        <input class="mBody-info-input" id="logInEmail" type="email" placeholder="邮箱">
      </div>
      <div class="mBody-info">
        <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/lock.png') ?>">  
        <input class="mBody-info-input" id="logInPassword" type="password" placeholder="密码">
      </div>
    </div>
    <!-- <div class="mBody-info">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/lock.png') ?>">  
      <input class="mBody-info-input" type="password" placeholder="确认密码">
    </div> -->
    <div id="resetPWBox" style="display: none; flex-direction: column; align-items: center;">
      <div class="mBody-info">
        <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/email.png') ?>">  
        <input class="mBody-info-input" id="resetPWEmail" type="email" placeholder="邮箱">
      </div>
      <div>
        <p class="backToLogIn" style="color: #fff" id="backToLogIn" >Back to the login</p>  
      </div>
      <br>
      <p id="resetPWMsg" style="display: none; color: red">Please check SPAM box in your email accound.</p>
      <button class="mBody-signup-btn" id="forgotEmailSubmitBtn">Reset Password</button>
    </div>
    <div class="pw-re" id="forgotBtnBox">
      <label class="mBody-ua-container" for="userAgreement">
        <input type="checkbox" name="" id="userAgreement">
        <div class="mBody-ua-checkmark"></div>
        &nbsp;记住密码
      </label>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <p class="resetPWbtn" id="resetPWbtn">忘记密码?</p>
    </div>
    <div class="change-signup-login-div">
    <span style="color: #fff">没有帐号？ </span><a class="signup-to-login" href="<?php echo site_url('/member-signup') ?>">立即注册</a>
    </div>
    <!-- <div class="mBody-info m-google-login">
      <img class="mBody-info-icon" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-google.png') ?>">  
      <p class="mBody-google">Google 登陆</p>
    </div> -->
    <button class="mBody-signup-btn" id="logInBtn">登陆</button>
  </div>
  <div class="mBody-ban-cont">
    <img class="mBody-ban-img" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>" alt="">
    <div class="mBody-ban-text"><p>MAKE</br>YOUR <span style="color: #f78915; text-shadow: -6px 6px #e9c094;">BEST</span></br>MOVE</p></div>
  </div>
</section>
<?php get_footer(); ?>
