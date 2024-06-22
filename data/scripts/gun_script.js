function changeIframe(event, src) {
  event.preventDefault(); // prevent default link behavior
  document.getElementById("iframe").src = src;
  // remove underline from all links
  var links = document.querySelectorAll(".column-1 a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.textDecoration = "none";
  }
  // add underline to selected link
  event.target.style.textDecoration = "underline";
}
