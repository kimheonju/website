
var slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
var slides = [
"../img/img1.jpg",
"../img/img2.jpg",
"../img/img3.jpg"
]; // 이미지 파일 경로 배열로 저장
var slideImage = document.getElementById("slideImage");

if (n >= slides.length) {
slideIndex = 0;
} else if (n < 0) {
slideIndex = slides.length - 1;
} else {
slideIndex = n;
}

slideImage.src = slides[slideIndex];
}

// 일정 시간마다 이미지를 자동으로 변경하기 위한 코드
setInterval(function() {
slideIndex++;
showSlide(slideIndex);
}, 5000); // 3초마다 이미지 변경

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
