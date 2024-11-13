function toggleNav() {
	let sidepanel = document.getElementById("header-sidepanel");

  if (sidepanel.classList.contains("visually-shown")) {
    sidepanel.classList.remove("visually-shown");
  } else {
    sidepanel.classList.add("visually-shown");
  }
}


function toggleAnswer(button) {
  let answer = button.closest(".faq-content-item").querySelector(".faq-answer");

  if (answer.classList.contains("d-none")) {
      answer.classList.remove("d-none");
  } else {
      answer.classList.add("d-none");
  }
}

// test git push : Will delete this comment later
