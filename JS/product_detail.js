var slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  var slides = [
    "../detail/product_detail1.jpg",
    "../detail/product_detail2.jpg",
    "../detail/product_detail3.jpg",
    "../detail/product_detail4.jpg",
    "../detail/product_detail5.jpg",
    "../detail/product_detail6.jpg",
    "../detail/product_detail7.jpg",
    "../detail/product_detail8.jpg",
    "../detail/product_detail9.jpg"
  ]; // 이미지 파일 경로 배열로 저장
  var slideImage = document.getElementById("slideImage2");

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
}, 3000); // 3초마다 이미지 변경



var buyButton = document.querySelector('.buy-button');
                  
buyButton.addEventListener('click', function() {
  // 장바구니에 상품을 담는 로직을 구현합니다.

  // 상품을 장바구니에 담았을 때 알림 창으로 메시지를 표시합니다.
  alert("장바구니에 담겼습니다!");
});

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
