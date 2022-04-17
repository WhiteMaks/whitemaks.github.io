function scrollToElementByClassName(className) {
    document.getElementsByClassName(className)[0].scrollIntoView({behavior: "smooth"});
}