const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.retailer-card').forEach(card => {
    observer.observe(card);
});



if(localStorage.getItem("VAISH_recent_submit")==="true"){
  document.getElementById("banner").style.display="block";
  setTimeout(()=>{document.getElementById("banner").style.display="none";},4500);
  localStorage.removeItem("VAISH_recent_submit");
}


