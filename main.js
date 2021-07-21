let sidebarButton = document.querySelector("#sidebar-show-button")
let sidebarList = document.querySelector(".sidebar-list")
let sidebarListItem = document.querySelectorAll(".sidebar-item")

const showHideSidebar = () => {
    if (sidebarList.classList.contains("show-sidebar")) {
        sidebarList.classList.remove("show-sidebar")

    } else {
        sidebarList.classList.add("show-sidebar")
    }

}
sidebarButton.addEventListener("click", showHideSidebar)
sidebarListItem.forEach(item => item.addEventListener("click", showHideSidebar))
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

