var mediaQuery = window.matchMedia("(max-width: 800px)");
let userAgent = navigator.userAgent;
var browserName = (function (agent) {
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "MS Edge";
    case agent.indexOf("edg/") > -1:
      return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr:
      return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      return "Chrome";
    case agent.indexOf("trident") > -1:
      return "MS IE";
    case agent.indexOf("firefox") > -1:
      return "Mozilla Firefox";
    case agent.indexOf("safari") > -1:
      return "Safari";
    default:
      return "other";
  }
})(window.navigator.userAgent.toLowerCase());
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  var phone = true;
} else {
  var phone = false;
}

var medianew = window.innerWidth;
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
      y.style.filter = "blur(0px)";
      x.style.transitionDelay = "0.4s";
      z.style.transition = "all 0.3s";
      x.style.transition = "all 0.8s";
      y.style.transition = "all 0.8s";

      return (a = 0);
    } else {
      if (browserName === "Safari" && phone === true) {
        x.style.width = "60%";
        x.style.visibility = "visible";
        z.style.visibility = "visible";
        y.style.filter = "blur(10px)";
        x.style.transition = "all 0.8s";
        z.style.opacity = "1";
        z.style.transition = "all 0.3s";
        z.style.transitionDelay = "0.4s";
        y.style.transition = "all 0.8s";

        return (a = 1);
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
}
