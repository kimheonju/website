function checkLoginStatus() {
    var user_id = localStorage.getItem('user_id');
    var loginItem = document.getElementById('loginItem');
    var logoutItem = document.getElementById('logoutItem');
  
    if (user_id) {
      loginItem.style.display = 'none';
      logoutItem.style.display = 'block';
    } else {
      loginItem.style.display = 'block';
      logoutItem.style.display = 'none';
    }
  }
  function logoutMain() {
    localStorage.removeItem('user_id');
    window.location.href = '../HTML/main.html';
  }
  
  window.addEventListener('load', checkLoginStatus);
