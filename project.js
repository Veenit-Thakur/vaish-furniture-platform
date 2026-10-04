
alert("Welcome to Vaish World Baby \u{1FA91}")

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("nav-active");
  } else {
    nav.classList.remove("nav-active");
  }
});





const typeText = ["Designer.", "Developer.", "Dreamer.", "Doer."];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typing = document.createElement("h2");
typing.className = "typing-text";
const headerContainer = document.querySelector("header .content-container");
if (headerContainer){
  headerContainer.appendChild(typing);
  type();
}




function type() {
  currentText = typeText[i];
  typing.innerHTML = currentText.substring(0, j) + "|";
  if (!isDeleting && j < currentText.length) j++;
  else if (isDeleting && j > 0) j--;
  else if (!isDeleting && j === currentText.length) { isDeleting = true; setTimeout(type, 1200); return; }
  else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % typeText.length; }
  setTimeout(type, isDeleting ? 60 : 120);
}
type();




window.addEventListener("scroll", () => {
  const hero = document.querySelector("header .img-container");
  let offset = window.scrollY * 0.3;
  hero.style.transform = `translateY(${offset}px)`;
});



// --background ---
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
  background: linear-gradient(to right, #C5796D, #DBE6F6);
  background-size: 300% 300%;
  z-index: -1;
  animation: gradientFlow 18s ease-in-out infinite;
  filter: brightness(1.08) contrast(1.03) saturate(1.12);
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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





const VAISH_DATA = {
  home: "Home Page: Humari handmade premium chairs ka full showcase. Clean layout, soft colors, modern + traditional feel. &#127800;",
  about: "About Page: VAISH ek platform hai jo local carpenters ko digital market deta hai. Hum craft ko modern design ke sath jodte hain. &#128150;",
  products: "Products Page: Indoor chairs, workshop chairs, premium wood, strong joints, smooth polish, custom finish options sab available. &#128293;",
  gallery: "Gallery Page: High-quality chair images, close-up shots, texture details, color samples. &#128247;",
  register: "Register Page: Customer + Carpenter dono register kar sakte hain. Simple form, fast support. &#9997;&#65039;",
  contact: "Contact Page: Aap query bhej sakte ho. 24-48 hours me response. Email + form both options. &#128231;",
  delivery: "Delivery mostly free hoti hai, pin-code check hota hai. Speed city ke hisab se. &#128666;",
  warranty: "Quality Guarantee + Free Repair Service for limited period. &#128295;",
  custom: "Custom Colors, Polish, Size, Joint design customization available. &#127912;",
  price: "Prices model and finish par depend karte hain. Affordable + premium quality. &#128178;",
  carpenter: "Carpenter Page: Local experts ke profiles, unka kaam, ratings, aur custom orders ka option. &#128736;&#65039;",
  faq: "FAQ Page: Common questions like delivery time, pricing, polish, customization, repair, returns. &#10067;",
  default: "Ye info specific pages me mil jayegi. Products ya About page check karo. &#128149;"
};

function botMsg(txt){
  return `<div class="bot-msg">${txt}</div>`;
}

function userMsg(txt){
  return `<div class="user-msg">${txt}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("vaish-bubble");
  const box = document.getElementById("vaish-chatbox");
  const body = document.getElementById("vc-body");
  const input = document.getElementById("vc-input");

  function showWelcome(){
    body.innerHTML = "";
    body.innerHTML += botMsg("Hello ji &#127800;<br>Aapko VAISH me kya dekhna hai?");

    body.innerHTML += `
      <div class="option-btn" data-val="home">Home Page</div>
      <div class="option-btn" data-val="about">About Us</div>
      <div class="option-btn" data-val="products">Products</div>
      <div class="option-btn" data-val="gallery">Gallery</div>
      <div class="option-btn" data-val="register">Register</div>
      <div class="option-btn" data-val="contact">Contact Us</div>
      <div class="option-btn" data-val="delivery">Delivery Info</div>
      <div class="option-btn" data-val="warranty">Warranty</div>
      <div class="option-btn" data-val="custom">Customization</div>
      <div class="option-btn" data-val="carpenter">Carpenters Page</div>
      <div class="option-btn" data-val="faq">FAQ</div>
      <div class="option-btn" data-val="price">Price Details</div>
    `;
  }

  bubble.onclick = () => {
    box.style.display = box.style.display === "flex" ? "none" : "flex";
    if(box.style.display === "flex") showWelcome();
  };

  body.addEventListener("click", (e)=>{
    if(e.target.classList.contains("option-btn")){
      const key = e.target.getAttribute("data-val");
      body.innerHTML += userMsg(e.target.innerText);
      body.innerHTML += botMsg(VAISH_DATA[key] || VAISH_DATA.default);
      body.scrollTop = body.scrollHeight;
    }
  });

  input.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
      const txt = input.value.trim();
      if(!txt) return;
      body.innerHTML += userMsg(txt);
      input.value = "";
      body.innerHTML += botMsg(VAISH_DATA.default);
      body.scrollTop = body.scrollHeight;
    }
  });

});
