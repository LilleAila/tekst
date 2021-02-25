var vmin, vmax, vh, vw;

function vminmax() {
    if (window.innerHeight > window.innerWidth) {
        vmax = window.innerHeight;
        vmin = window.innerWidth;
    } else {
        vmax = window.innerWidth;
        vmin = window.innerHeight;
    }

    vh = window.innerHeight;
    vw = window.innerWidth;
    // console.log(vmin);
    // console.log(vmax);
}

function resizeText() {
    let textElements = document.querySelectorAll(".resize");
    for (var i = 0; i < textElements.length; i++) {
        let element = textElements[i];
        let textWidth = element.clientWidth;
        let textCharacters = element.innerText.length;
        element.style.fontSize = textWidth / textCharacters + "px";
    }
}

$(function () {
    vminmax();
    resizeText();
});

$("window").resize(function () {
    vminmax();
    resizeText();
});