// ハンバーガーメニュー
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("active");
  });
  
  // スクロールアニメーション
  const fadeEls = document.querySelectorAll(".fade-in");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });
  
  fadeEls.forEach(el => observer.observe(el));
  
  // ナビゲーション内のリンククリックでメニューを閉じる
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});
