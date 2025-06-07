const dot = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  dot.style.transform = `translate(${x}px, ${y}px)`;
  ring.style.transform = `translate(${x - 16}px, ${y - 16}px)`; // リングは中央を合わせる
});
