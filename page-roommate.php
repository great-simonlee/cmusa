<?php get_header(); ?>
<section class="main-banner-container">
  <div class="main-banner-search">
    <p class="main-banner-title">MAKE YOUR BEST MOVE</p>
    <div class="rm-question-cont">
      <div class="rm-question-step" id="rmQOne">
        <p class="rm-question-title">你是否正在寻找可以一起申请公寓的室友？China Moves地产团队可以帮忙！</p>
        <p class="rm-question-subtitle">* 此问卷不会超过3分钟</p>
        <p class="rm-question-subtitle">* China Moves地产团队绝对不会和任何人分享有关您的信息。</p>
      </div>
      <div class="rm-question-step" id="rmQTwo" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont"><p class="rmq-subtitle">名字：</p><input class="rmq-input" type="text" id="rmAppName"></div>
      </div>
      <div class="rm-question-step" id="rmQThree" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont"><p class="rmq-subtitle">联系方式：</p><input class="rmq-input" type="text" id="rmAppContact"></div>
      </div>
      <div class="rm-question-step" id="rmQFour" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont"><p class="rmq-subtitle">入住时间：</p><input class="rmq-input" type="date" id="rmAppDate"></div>
      </div>
      <div class="rm-question-step" id="rmQFours" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont"><p class="rmq-subtitle">预算：</p><input class="rmq-input" type="number" id="rmAppBudget"></div>
      </div>
      <div class="rm-question-step" id="rmQFive" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont"><p class="rmq-subtitle">区域：</p><input class="rmq-input" type="text" placeholder="ex) Midtown West" id="rmAppArea"></div>
      </div>
      <div class="rm-question-step" id="rmQSix" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">性别：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ap-gender" class="rm-radio-btn" id="rma-gen-male" data-input="Male">
              <label class="rm-radio-label" for="rma-gen-male">男</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-gender" class="rm-radio-btn" id="rma-gen-female" data-input="Female">
              <label class="rm-radio-label" for="rma-gen-female">女</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-gender" class="rm-radio-btn" id="rma-gen-na" data-input="Prefer not to say">
              <label class="rm-radio-label" for="rma-gen-na">Prefer not to say</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ap-gender" class="rm-radio-btn" id="rma-gen-empty" data-input="Simon" checked>
              <label class="rm-radio-label" for="rma-gen-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQSeven" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">年龄：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ap-age" class="rm-radio-btn" id="rma-age-19" data-input="Under 19">
              <label class="rm-radio-label" for="rma-age-19">19岁以下</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-age" class="rm-radio-btn" id="rma-age-2029" data-input="20-29yrs old">
              <label class="rm-radio-label" for="rma-age-2029">20-29岁</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-age" class="rm-radio-btn" id="rma-age-3039" data-input="30-39yrs old">
              <label class="rm-radio-label" for="rma-age-3039">30-39岁</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-age" class="rm-radio-btn" id="rma-age-4049" data-input="40-49yrs old">
              <label class="rm-radio-label" for="rma-age-4049">40-49岁</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-age" class="rm-radio-btn" id="rma-age-50" data-input="Over 50">
              <label class="rm-radio-label" for="rma-age-50">50岁以上</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ap-age" class="rm-radio-btn" id="rma-age-empty" data-input="Simon" checked>
              <label class="rm-radio-label" for="rma-age-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQEight" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">就业状况：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ap-job" class="rm-radio-btn" id="rma-job-student" data-input="Student">
              <label class="rm-radio-label" for="rma-job-student">学生</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-job" class="rm-radio-btn" id="rma-job-pro" data-input="Professional">
              <label class="rm-radio-label" for="rma-job-pro">工作</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-job" class="rm-radio-btn" id="rma-job-na" data-input="Prefer not to say">
              <label class="rm-radio-label" for="rma-job-na">Prefer not to say</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ap-job" class="rm-radio-btn" id="rma-job-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-job-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQNine" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">是否有宠物：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ap-pet" class="rm-radio-btn" id="rma-pet-dog" data-input="Dog">
              <label class="rm-radio-label" for="rma-pet-dog">狗</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-pet" class="rm-radio-btn" id="rma-pet-cat" data-input="Cat">
              <label class="rm-radio-label" for="rma-pet-cat">猫</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-pet" class="rm-radio-btn" id="rma-pet-other" data-input="Other">
              <label class="rm-radio-label" for="rma-pet-other">Other</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ap-pet" class="rm-radio-btn" id="rma-pet-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-pet-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQTen" style="display: none;">
        <p class="rm-question-title">Step 1. 介绍你自己</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">是否吸烟：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ap-ciga" class="rm-radio-btn" id="rma-ciga-yes" data-input="Smoke">
              <label class="rm-radio-label" for="rma-ciga-yes">吸烟</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-ciga" class="rm-radio-btn" id="rma-ciga-no" data-input="Non-smoke">
              <label class="rm-radio-label" for="rma-ciga-no">非吸烟</label>
            </div>
            <div>
              <input type="radio" name="rm-ap-ciga" class="rm-radio-btn" id="rma-ciga-na" data-input="Prefer not to say">
              <label class="rm-radio-label" for="rma-ciga-na">Prefer not to say</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ap-ciga" class="rm-radio-btn" id="rma-ciga-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-ciga-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQOneOne" style="display: none;">
        <p class="rm-question-title">Step 2. 预期室友</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">性别：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ex-gender" class="rm-radio-btn" id="rma-ex-gen-male" data-input="Male">
              <label class="rm-radio-label" for="rma-ex-gen-male">男</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-gender" class="rm-radio-btn" id="rma-ex-gen-female" data-input="Female">
              <label class="rm-radio-label" for="rma-ex-gen-female">女</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-gender" class="rm-radio-btn" id="rma-ex-gen-na" data-input="Prefer not to say">
              <label class="rm-radio-label" for="rma-ex-gen-na">Prefer not to say</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ex-gender" class="rm-radio-btn" id="rma-ex-gen-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-ex-gen-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQOneTwo" style="display: none;">
        <p class="rm-question-title">Step 2. 预期室友</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">年龄：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ex-age" class="rm-radio-btn" id="rma-ex-age-19" data-input="Under 19">
              <label class="rm-radio-label" for="rma-ex-age-19">19岁以下</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-age" class="rm-radio-btn" id="rma-ex-age-2029" data-input="20-29yrs old">
              <label class="rm-radio-label" for="rma-ex-age-2029">20-29岁</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-age" class="rm-radio-btn" id="rma-ex-age-3039" data-input="30-39yrs old">
              <label class="rm-radio-label" for="rma-ex-age-3039">30-39岁</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-age" class="rm-radio-btn" id="rma-ex-age-4049" data-input="40-49yrs old">
              <label class="rm-radio-label" for="rma-ex-age-4049">40-49岁</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-age" class="rm-radio-btn" id="rma-ex-age-50" data-input="Over 50">
              <label class="rm-radio-label" for="rma-ex-age-50">50岁以上</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ex-age" class="rm-radio-btn" id="rma-ex-age-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-ex-age-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQOneThree" style="display: none;">
        <p class="rm-question-title">Step 2. 预期室友</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">就业状况：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ex-job" class="rm-radio-btn" id="rma-ex-job-student" data-input="Student">
              <label class="rm-radio-label" for="rma-ex-job-student">学生</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-job" class="rm-radio-btn" id="rma-ex-job-pro" data-input="Professional">
              <label class="rm-radio-label" for="rma-ex-job-pro">工作</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-job" class="rm-radio-btn" id="rma-ex-job-na" data-input="No preferences">
              <label class="rm-radio-label" for="rma-ex-job-na">No Preferences</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ex-job" class="rm-radio-btn" id="rma-ex-job-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-ex-job-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQOneFour" style="display: none;">
        <p class="rm-question-title">Step 2. 预期室友</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">是否可以有宠物：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ex-pet" class="rm-radio-btn" id="rma-ex-pet-dog" data-input="Dog">
              <label class="rm-radio-label" for="rma-ex-pet-dog">狗</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-pet" class="rm-radio-btn" id="rma-ex-pet-cat" data-input="Cat">
              <label class="rm-radio-label" for="rma-ex-pet-cat">猫</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-pet" class="rm-radio-btn" id="rma-ex-pet-other" data-input="Other">
              <label class="rm-radio-label" for="rma-ex-pet-other">其他</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-pet" class="rm-radio-btn" id="rma-ex-pet-na" data-input="No preferences">
              <label class="rm-radio-label" for="rma-ex-pet-na">No Preferences</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ex-pet" class="rm-radio-btn" id="rma-ex-pet-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-ex-pet-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQOneFive" style="display: none;">
        <p class="rm-question-title">Step 2. 预期室友</p>
        <div class="rmq-input-cont">
          <p class="rmq-subtitle">是否可以吸烟：</p>
          <div class="rmq-radio-box">
            <div>
              <input type="radio" name="rm-ex-ciga" class="rm-radio-btn" id="rma-ex-ciga-yes" data-input="Smoke">
              <label class="rm-radio-label" for="rma-ex-ciga-yes">是</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-ciga" class="rm-radio-btn" id="rma-ex-ciga-no" data-input="Non-smoke">
              <label class="rm-radio-label" for="rma-ex-ciga-no">否</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-ciga" class="rm-radio-btn" id="rma-ex-ciga-out" data-input="Only Outside">
              <label class="rm-radio-label" for="rma-ex-ciga-out">可以室外</label>
            </div>
            <div>
              <input type="radio" name="rm-ex-ciga" class="rm-radio-btn" id="rma-ex-ciga-na" data-input="No preferences">
              <label class="rm-radio-label" for="rma-ex-ciga-na">No Preferences</label>
            </div>
            <div style="display: none;">
              <input type="radio" name="rm-ex-ciga" class="rm-radio-btn" id="rma-ex-ciga-empty" checked data-input="Simon">
              <label class="rm-radio-label" for="rma-ex-ciga-empty"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="rm-question-step" id="rmQOneSix" style="display: none;">
        <p class="rm-question-title">China Moves USA 团队已经收到你的申请，我们会有专业的Agent尽快联系你！</p>
      </div>
    </div>
    <button class="rmq-next-btn rmNextBtn" id="rmFNBtn">开始</button>
    <div id="paginationBtnBox" style="display: none;">
      <button class="rmq-next-btn rmPreviousBtn">上一页</button>
      <button class="rmq-next-btn rmNextBtn">下一页</button>
    </div>
    <button id="rmSubmitBtn" class="rmq-next-btn rmNextBtn" style="display: none;">提交</button>
  </div>
  <form id="roommateSubmissionForm">
    <div style="display: none;">
      <input type="text" class="roommateSubmissionFormInput" name="app_name">
      <input type="text" class="roommateSubmissionFormInput" name="app_contact">
      <input type="text" class="roommateSubmissionFormInput" name="app_date">
      <input type="text" class="roommateSubmissionFormInput" name="app_area">
      <input type="text" class="roommateSubmissionFormInput" name="app_budget">
      <input type="text" class="roommateSubmissionFormInput" name="app_sex">
      <input type="text" class="roommateSubmissionFormInput" name="app_age">
      <input type="text" class="roommateSubmissionFormInput" name="app_job">
      <input type="text" class="roommateSubmissionFormInput" name="app_pet">
      <input type="text" class="roommateSubmissionFormInput" name="app_smoke">
      <input type="text" class="roommateSubmissionFormInput" name="rm_sex">
      <input type="text" class="roommateSubmissionFormInput" name="rm_age">
      <input type="text" class="roommateSubmissionFormInput" name="rm_job">
      <input type="text" class="roommateSubmissionFormInput" name="rm_pet">
      <input type="text" class="roommateSubmissionFormInput" name="rm_smoke">
      <input type="text" class="roommateSubmissionFormInput" name="source_website" value="China Moves">
      <input type="text" value="simon@newyorkmovesre.com" name="reply_to1">
      <input type="text" value="rainie@newyorkmovesre.com" name="reply_to2">
    </div>
  </form>
</section>
<img class="main-banner-img" src="<?php echo get_theme_file_uri('/assets/img/banner/front-banner.png') ?>" alt="mainBanner">  
<section class="rm-desc-cont">
  <img class="rm-desc-icon" src="<?php echo get_theme_file_uri('/assets/img/icon/rm.png') ?>">
  <p class="rm-desc-text">一站式租房服务，为您提供最新最真实的租房信息。</p>
</section>
<?php get_footer(); ?>
