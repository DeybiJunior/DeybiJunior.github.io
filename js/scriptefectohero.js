const overlay = document.querySelector(".hero-overlay, .overlay");
const styles = getComputedStyle(document.documentElement);
const primary = styles.getPropertyValue('--md-background').trim();
const secondary = styles.getPropertyValue('--md-surface-variant').trim();

let hasMouse = false;
let lastMouseMove = Date.now();

// Detecta movimiento de ratón
document.addEventListener("mousemove", (e) => {
  hasMouse = true;
  lastMouseMove = Date.now();

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  overlay.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, ${primary}, ${secondary})`;
});

// Animación aleatoria suave
let currentX = 0.5;
let currentY = 0.5;
let targetX = Math.random();
let targetY = Math.random();
let speed = 0.005;

function animateOverlay() {
  const now = Date.now();
  if (!hasMouse || now - lastMouseMove > 5000) {
    // Interpolación suave hacia el nuevo destino
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    // Cambiar destino cada cierto tiempo cuando cerca
    if (Math.abs(targetX - currentX) < 0.01 && Math.abs(targetY - currentY) < 0.01) {
      targetX = Math.random();
      targetY = Math.random();
    }

    overlay.style.background = `radial-gradient(circle at ${currentX * 100}% ${currentY * 100}%, ${primary}, ${secondary})`;
  }

  requestAnimationFrame(animateOverlay);
}

animateOverlay();

