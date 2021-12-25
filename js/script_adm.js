//Dropdown navbar
let avatar = document.querySelector(".avatar"),
    notification = document.querySelector(".notification");

//console.log(avatar);

dropMenu(avatar);
dropMenu(notification);

function dropMenu(selector) {
    selector.addEventListener("click", () => {
        let dropDownMenu = selector.querySelector(".dropdown-menu");
        dropDownMenu.classList.contains("active") ? dropDownMenu.classList.remove("active") : dropDownMenu.classList.add("active");
    });
}