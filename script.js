const keys = document.querySelectorAll(".keys");
capsLock = false;
shift = false;
display = "";

for (let i = 0; i < keys.length; i++) {
  let displayBox = document.querySelector(".display");
  keys[i].addEventListener("click", () => {
    keys[i].classList.add("keypress");
    if (
      keys[i].children.length === 1 &&
      keys[i].querySelector("span").innerText !== "shift" &&
      keys[i].querySelector("span").innerText !== "caps lock" &&
      keys[i].querySelector("span").innerText !== "delete" &&
      keys[i].querySelector("span").innerText !== "tab" &&
      keys[i].querySelector("span").innerText != "space"
    ) {
      !capsLock
        ? (display += keys[i].querySelector("span").innerText.toLowerCase())
        : (display += keys[i].querySelector("span").innerText);
    } else if (keys[i].querySelector("span").innerText === "shift") {
      shift = !shift;
    } else if (keys[i].querySelector("span").innerText === "caps lock") {
      capsLock = !capsLock;
    } else if (keys[i].querySelector("span").innerText === "delete") {
      display = display.slice(0, -1);
    } else if (keys[i].querySelector("span").innerText === "tab") {
      display = display + "   ";
    } else if (keys[i].querySelector("span").innerText === "space") {
      display = display + " ";
    } else {
      !shift
        ? (display += keys[i].querySelector("span:last-child").innerText)
        : (display += keys[i].querySelector("span:first-child").innerText);
    }
    setTimeout(() => {
      keys[i].classList.remove("keypress");
    }, 100);
    // console.log(display);
    displayBox.innerText = display;
  });
}
