// ハンバーガーメニュー
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
    
    // アニメーション
    const spans = hamburger.querySelectorAll("span");
    if (hamburger.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(8px, 8px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(8px, -8px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });
}

// ナビゲーションリンククリックでメニューを閉じる
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// スクロールアニメーション（Intersection Observer）
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// すべての.fade-in要素を監視
const fadeElements = document.querySelectorAll(".fade-in, .service-card, .work-card");
fadeElements.forEach(el => observer.observe(el));

// ヘッダーのスクロール効果（常に表示、背景のみ変化）
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  // スクロール位置によって背景の不透明度を変更
  if (currentScroll > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 12px 40px rgba(59, 130, 246, 0.15)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.8)";
    header.style.boxShadow = "0 8px 32px rgba(59, 130, 246, 0.1)";
  }
  
  lastScroll = currentScroll;
});

// スムーススクロール（アンカーリンク用）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // "#"のみの場合はページトップへ
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // それ以外のアンカーリンク
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = 100;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// パララックス効果（背景の浮遊図形）
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    const speed = 0.1 + (index * 0.05);
    const yPos = -(scrolled * speed);
    shape.style.transform = `translateY(${yPos}px)`;
  });
});

// 作品カードのホバーエフェクト強化
const workCards = document.querySelectorAll('.work-card');

workCards.forEach(card => {
  card.addEventListener('mouseenter', function(e) {
    this.style.zIndex = '10';
  });
  
  card.addEventListener('mouseleave', function(e) {
    this.style.zIndex = '1';
  });
  
  // マウス位置に応じて傾き効果
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// サービスカードのスタッガーアニメーション
const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => {
  card.style.animationPlayState = 'paused';
  serviceObserver.observe(card);
});

// ページロードアニメーション
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// パフォーマンス最適化：リサイズ時のデバウンス
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // リサイズ後の処理
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  }, 250);
});
