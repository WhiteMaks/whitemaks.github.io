const maxScrolledNotSwap = 100;

let scrolled;

window.onscroll = function() {
    let headerElement = document.getElementsByTagName("header")[0];
    let headerNavigationElement = document.getElementsByClassName("header_navigation")[0];

    scrolled = window.scrollY || document.documentElement.scrollTop;

    if (scrolled > maxScrolledNotSwap) {
        removeOldAndSetNewClass(headerElement, "header_top", "header_bottom");
        removeOldAndSetNewClass(headerNavigationElement, "header_navigation_top", "header_navigation_bottom");
    }

    if (scrolled < maxScrolledNotSwap) {
        removeOldAndSetNewClass(headerElement, "header_bottom", "header_top");
        removeOldAndSetNewClass(headerNavigationElement, "header_navigation_bottom", "header_navigation_top");
    }
}

function removeOldAndSetNewClass(element, oldClassName, newClassName) {
    element.classList.remove(oldClassName);
    element.classList.add(newClassName);
}