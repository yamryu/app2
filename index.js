//画面(ログイン・会員登録)切り替え処理
const switchPage = (target) => {
    const login = document.getElementById('loginPage');
    const register = document.getElementById('registerPage');
    if(target === 'login') {
        login.classList.add('active');
        register.classList.remove('active');
        document.title = 'ログイン';
    } else if(target === 'register') {
        register.classList.add('active');
        login.classList.remove('active');
        document.title = '会員登録';
    }
}

