var buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('click', function() {
  // 장바구니에 상품을 담는 로직을 구현합니다.

  // 테이블의 tbody 요소를 찾습니다.
  var tbody = document.querySelector(".shopping-basket table tbody");

  // tbody의 자식 요소 개수를 확인하여 구매목록이 있는지 체크합니다.
  var itemCount = tbody.childElementCount;

  if (itemCount === 0) {
    // 구매목록이 없는 경우 알림 창으로 메시지를 표시합니다.
    alert("구매목록이 없습니다.");
  } else {
    // 구매목록이 있는 경우 알림 창으로 "구매를 완료하였습니다." 메시지를 표시합니다.
    alert("구매를 완료하였습니다.");

    // 장바구니 목록을 비웁니다.
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }
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
