function toggleContrast() {
    this.event.preventDefault();
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
        sessionStorage.setItem("contrast", "light");
    } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        sessionStorage.setItem("contrast", "dark");
    }
}

function scrollToTop() {
    this.event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    this.event.preventDefault();
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = sessionStorage.getItem("contrast");

    if (savedTheme) {
        document.documentElement.setAttribute("data-bs-theme", savedTheme);
    }
});