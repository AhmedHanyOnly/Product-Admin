// Click tog-show
if (document.querySelector(".tog-show")) {
  let togglesShow = document.querySelectorAll(".tog-show");
  togglesShow.forEach((e) => {
    let togg = true;
    e.addEventListener("click", (evt) => {
      let listItem = document.querySelector(e.getAttribute("data-show"));
      if (togg == true) {
        listItem.style.display = "flex";
        togg = false;
      } else {
        listItem.style.display = "none";
        togg = true;
      }
    });
  });
}
