var mediaQuery = window.matchMedia("(max-width: 800px)");
var media2 = window.matchMedia("(min-width: 800px)");
window.onresize = resize();
var resizeTimeout;
window.addEventListener("resize", function (event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    window.location.reload();
  }, 1);
});
function resize() {
  var mediaQuery = window.matchMedia("(max-width: 800px)");
  var media2 = window.matchMedia("(min-width: 800px)");
}
let x = document.getElementById("sidenav");
let y = document.getElementById("bodymain");
let z = document.getElementById("sidecontent");
if (mediaQuery.matches) {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentState = button.getAttribute("data-state");

      if (!currentState || currentState === "closed") {
        button.setAttribute("data-state", "opened");
        button.setAttribute("aria-expanded", "true");
      } else {
        button.setAttribute("data-state", "closed");
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
  var a = 0;
  if (x.style.width === "0%") {
    var a = 1;
  }
  function opentool() {
    if (a == 1) {
      x.style.width = "0%";
      x.style.visibility = "hidden";
      z.style.visibility = "hidden";
      y.style.filter = "blur(0px)";
      z.style.opacity = "0";
      z.style.transition = "all 0.3s";
      x.style.transition = "all 1s";
      y.style.transition = "all 0.3s";
      return (a = 0);
    } else {
      x.style.width = "70%";

      x.style.visibility = "visible";
      z.style.visibility = "visible";
      y.style.filter = "blur(10px)";
      x.style.transition = "all 1s";
      z.style.opacity = "1";
      z.style.transition = "all 0.3s";
      z.style.transitionDelay = "0.4s";
      y.style.transition = "all 0.3s";

      return (a = 1);
    }
  }
}
if (media2.matches) {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentState = button.getAttribute("data-state");

      if (!currentState || currentState === "opened") {
        button.setAttribute("data-state", "closed");
        button.setAttribute("aria-expanded", "false");
      } else {
        button.setAttribute("data-state", "opened");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
  var a = 1;
  if (x.style.visibility === "visible") {
    var a = 0;
  }
  function opentool() {
    if (a == 1) {
      x.style.width = "0%";
      x.style.visibility = "hidden";
      z.style.visibility = "hidden";
      y.style.width = "100%";
      y.style.marginLeft = "0%";
      z.style.opacity = "0";

      x.style.transitionDelay = "0.4s";
      z.style.transition = "all 0.3s";
      x.style.transition = "all 0.8s";
      y.style.transition = "all 0.8s";
      return (a = 0);
    } else {
      y.style.width = "80%";
      y.style.marginLeft = "20%";
      x.style.width = "20%";
      x.style.visibility = "visible";
      z.style.visibility = "visible";
      x.style.transition = "all 0.8s";
      z.style.opacity = "1";
      z.style.transition = "all 0.3s";
      z.style.transitionDelay = "0.4s";
      y.style.transition = "all 0.8s";
      return (a = 1);
    }
  }
}
