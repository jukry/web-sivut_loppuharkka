const menuButton = document.getElementById("menu-toggle")
const menuElement = document.getElementById("navi")
const line2 = document.getElementById("line2")
let valikkoAuki = false
menuButton.addEventListener("click", () => {
    if (valikkoAuki == false) {
        menuElement.classList.add("navi")
        line2.classList.add("line2-active")
        valikkoAuki = true
    } else {
        menuElement.classList.remove("navi")
        line2.classList.remove("line2-active")
        valikkoAuki = false
    }
    }
)