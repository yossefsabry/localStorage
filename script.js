let lis = document.querySelectorAll("ul li");
let box = document.querySelector(".box");

if (window.localStorage.getItem("color")) {
  // first check if there a color in localstorage and add the color to the box
  box.style.backgroundColor = window.localStorage.getItem("color");

  // second
  // remove the class list from all lis when i foucs in it
  lis.forEach((li) => {
    li.classList.remove("active");
  });

    // [3] add the color to the li class active to the li form localstorage
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active")

} else {
  console.log("no");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // remove the class list from all lis when i foucs in it
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // add class active to the foucs item
    e.currentTarget.classList.add("active");
    // add the color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    box.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
