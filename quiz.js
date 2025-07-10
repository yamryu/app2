document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();    // ページリロードを防止
  // 本来はここで認証処理を書くけど、今回は無視
  location.href = 'menu.html';  // メニュー画面へ遷移
});
