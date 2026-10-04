


const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.style.background = "#fff";
    nav.style.boxShadow = "0 5px 25px rgba(0,0,0,0.1)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
});






const grad = document.createElement("div");
grad.className = "animated-bg";
document.body.appendChild(grad);
const gradStyle = document.createElement("style");
gradStyle.innerHTML = `
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ff6ec4, #7873f5, #4ade80, #00ffff);
  background-size: 400% 400%;
  z-index: -1;
  animation: gradientFlow 15s ease infinite;
}
@keyframes gradientFlow {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}`;
document.head.appendChild(gradStyle);






const cursor = document.createElement("div");
cursor.classList.add("cursor-dot");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
const cursorStyle = document.createElement("style");
cursorStyle.innerHTML = `
.cursor-dot {
  position: fixed;
  width: 15px;
  height: 15px;
  background: rgba(255,255,255,0.8);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: transform 0.15s ease;
}`;
document.head.appendChild(cursorStyle);








const particles = [];
document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.className = "trail";
  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";
  document.body.appendChild(dot);
  particles.push(dot);
  setTimeout(() => {
    dot.remove();
    particles.shift();
  }, 700);
});




const trailStyle = document.createElement("style");
trailStyle.innerHTML = `
.trail {
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.7);
  pointer-events: none;
  transform: translate(-50%, -50%);
  animation: fadeTrail 0.7s ease;
}
@keyframes fadeTrail {
  from {opacity: 1; transform: scale(1);}
  to {opacity: 0; transform: scale(0.2);}
}`;
document.head.appendChild(trailStyle);




const scrollProgress = document.createElement("div");
scrollProgress.classList.add("scroll-progress");
document.body.appendChild(scrollProgress);
window.addEventListener("scroll", () => {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / height) * 100;
  scrollProgress.style.width = `${scrolled}%`;
});
const progressCSS = document.createElement("style");
progressCSS.innerHTML = `
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: linear-gradient(90deg, #f0f, #0ff, #00f);
  width: 0;
  z-index: 1000;
  transition: width 0.2s;
}`;
document.head.appendChild(progressCSS);





if (typeof gsap !== "undefined") {
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });
  });
}






let testimonialSlideIndex = 0;
function slideTestimonials(direction) {
    const container = document.querySelector('.testimonial-cards');
    const items = container.children;
    const itemWidth = items[0].offsetWidth + 40; 
    testimonialSlideIndex += direction;
    if (testimonialSlideIndex < 0) testimonialSlideIndex = items.length - 1;
    if (testimonialSlideIndex >= items.length) testimonialSlideIndex = 0;
    container.style.transform = `translateX(-${testimonialSlideIndex * itemWidth}px)`;
}

