function goNext(url) {
    const page = document.getElementById("page");

    page.classList.add("page-exit-left");

    setTimeout(() => {
        window.location.href = url;
    }, 250);
}

function goBack(url) {
    const page = document.getElementById("page");

    page.classList.add("page-exit-right");

    setTimeout(() => {
        window.location.href = url;
    }, 250);
}