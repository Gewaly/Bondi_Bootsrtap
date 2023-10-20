let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
let plane = document.querySelector(".btnn");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    plane.style.display = "block";
  } else {
    plane.style.display = "none";
  }
};
plane.onclick = function () {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
};
