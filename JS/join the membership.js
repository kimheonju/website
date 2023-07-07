
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // 폼 전송 방지
    alert("회원 가입을 축하합니다!");
    window.location.href = "login.html"; // 회원가입 후 메인 페이지로 이동
});   

