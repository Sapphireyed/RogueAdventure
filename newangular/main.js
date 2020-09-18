function toggleMenu() {
  var menu = document.getElementById("header")
  if (menu.style.height !== "120px") {
   menu.style.height = "120px"
} else {
  menu.style.height = "45px"
}
}

function comment() {
  document.getElementById('commentHere').value= "";
}
