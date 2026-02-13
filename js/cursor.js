// カスタムカーソル
const dot = document.getElementById("cursorDot");
const glow = document.getElementById("cursorGlow");

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let glowX = 0;
let glowY = 0;

// マウス位置を追跡
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// スムーズなカーソル追従アニメーション
function animate() {
  // ドットは速く追従
  const dotSpeed = 0.2;
  dotX += (mouseX - dotX) * dotSpeed;
  dotY += (mouseY - dotY) * dotSpeed;
  
  // グローはゆっくり追従
  const glowSpeed = 0.1;
  glowX += (mouseX - glowX) * glowSpeed;
  glowY += (mouseY - glowY) * glowSpeed;
  
  if (dot && glow) {
    dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
    glow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px)`;
  }
  
  requestAnimationFrame(animate);
}

animate();

// インタラクティブ要素でカーソルを拡大
const interactiveElements = document.querySelectorAll('a, button, .card, .work-card, .service-card');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (dot) dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px) scale(1.5)`;
    if (glow) glow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px) scale(1.5)`;
  });
  
  el.addEventListener('mouseleave', () => {
    if (dot) dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px) scale(1)`;
    if (glow) glow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px) scale(1)`;
  });
});
