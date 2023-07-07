function login() {
    var user_id = document.getElementById('id').value;
    var user_pw = document.getElementById('password').value;
  
    var warningMessage = document.getElementById('login-warning');
  
    if (user_id === '' || user_pw === '') {
        alert('아이디와 비밀번호를 입력해주세요.');
    } else if (user_id === 'standardshop' && user_pw === '1234') {
        alert("환영합니다!");
        localStorage.setItem('user_id', user_id);
        window.location.href = '../HTML/main.html';
    } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
}
