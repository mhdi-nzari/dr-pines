////variable
//select burger icon
const burgers = document.querySelector(".menu--burger"),
  asidemenu = document.querySelector(".style"),
  matchmedia = window.matchMedia("(min-width: 968px)"),
  maintag = document.querySelector("main");

////listener

// functions

burgers.onclick = function () {
  asidemenu.classList.toggle("open");
};




mediaquery();
function mediaquery() {
  let start =  document.querySelector(".style");
  console.log(start);
  if (matchmedia.matches) {
    start.classList.add("open");
  }
   else {
    start.classList.remove("close");
   
  }
}
