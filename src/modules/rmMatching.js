if (window.location.pathname === '/roommate/') {
  window.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const rmQStep = document.querySelectorAll('.rm-question-step');

    const fNBtn = document.querySelector('#rmFNBtn');
    const rmNStep = document.querySelectorAll('.rmNextBtn');
    rmNStep.forEach((ele) => {
      ele.addEventListener('click', () => {
        if (currentStep < rmQStep.length - 1) {
          rmQStep[currentStep].style.display = 'none';
          currentStep++;
          rmQStep[currentStep].style.display = 'block';
          if (currentStep > 0) {
            fNBtn.style.display = 'none';
            document.querySelector('#paginationBtnBox').style.display = 'block';
          }
          if (currentStep == 15) {
            document.querySelector('#paginationBtnBox').style.display = 'none';
            document.querySelector('#rmSubmitBtn').style.display = 'block';
          }
          if (currentStep == 16) {
            document.querySelector('#paginationBtnBox').style.display = 'none';
            document.querySelector('#rmSubmitBtn').style.display = 'none';
          }
        }
      });
    });
    const rmPStep = document.querySelectorAll('.rmPreviousBtn');
    rmPStep.forEach((ele) => {
      ele.addEventListener('click', () => {
        if (currentStep > 0) {
          rmQStep[currentStep].style.display = 'none';
          currentStep--;
          rmQStep[currentStep].style.display = 'block';
          if (currentStep == 0) {
            fNBtn.style.display = 'block';
            document.querySelector('#paginationBtnBox').style.display = 'none';
          }
        }
      });
    });

    const rmSubmitBtn = document.querySelector('#rmSubmitBtn');
    let roommateCheckList = [];

    const addData = (dt) => {
      if (!dt.value) {
        roommateCheckList.push('');
      } else {
        roommateCheckList.push(dt.value);
      }
    };

    // Input Data
    const appName = document.querySelector('#rmAppName');
    const appContact = document.querySelector('#rmAppContact');
    const appDate = document.querySelector('#rmAppDate');
    const appArea = document.querySelector('#rmAppArea');
    const appBudget = document.querySelector('#rmAppBudget');
    const appSelect = document.querySelectorAll('.rm-radio-btn');

    rmSubmitBtn.addEventListener('click', () => {
      emailjs.init('user_hedHXP5BIDEBqSuAdRcOt');

      addData(appName);
      addData(appContact);
      addData(appDate);
      addData(appArea);
      addData(appBudget);
      appSelect.forEach((el) => {
        if (el.checked) {
          roommateCheckList.push(el.getAttribute('data-input'));
        }
      });

      // Transfer to submit form
      const submissionInputForm = document.querySelectorAll(
        '.roommateSubmissionFormInput'
      );
      for (k = 0; k < roommateCheckList.length; k++) {
        submissionInputForm[k].value = roommateCheckList[k];
      }

      const emailjsSubmission = document.querySelector(
        '#roommateSubmissionForm'
      );
      emailjs.sendForm(
        'service_g17icyc',
        'template_v3ay8bh',
        emailjsSubmission
      );
    });
  });
}
