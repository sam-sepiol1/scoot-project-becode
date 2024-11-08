function toggleNav() {
	let sidepanel = document.getElementById("header-sidepanel");

  if (sidepanel.classList.contains("visually-shown")) {
    sidepanel.classList.remove("visually-shown");
  } else {
    sidepanel.classList.add("visually-shown");
  }
}
