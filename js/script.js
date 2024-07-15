// ボタンの表示/非表示を制御
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
};

// ボタンがクリックされたときにトップに戻る
document.getElementById("scrollTopBtn").onclick = function() {
    document.body.scrollTop = 0; // Safari用
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera用
};