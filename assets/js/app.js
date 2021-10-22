//After Scroll Navbar
const navbar = document.querySelector(".navbar");
const navLogo = document.querySelector(".navbar__logo");

window.onscroll = () => {
  if (document.body.scrollTop > 46 || document.documentElement.scrollTop > 46) {
    Object.assign(navbar.style, {
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      background: "black",
      transition: ".3s linear",
    });
    navLogo.style.display = "none";
  } else {
    navLogo.style.display = "block";
    Object.assign(navbar.style, {
      background: "transparent",
      top: 0,
    });
  }
};
