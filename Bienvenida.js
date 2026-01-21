const cursor = document.querySelector('.custom-cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

  cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

if (window.innerWidth < 768) {
  cursor.style.display = 'none';
  document.body.style.cursor = 'auto';
}
