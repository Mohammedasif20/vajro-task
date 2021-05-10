$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            console.log('jello');
            $("nav").css({ "background-color": "white" });
        }
        else {
            $("nav").css({ "background-color": "transparent" });
            console.log($(window).scrollTop());
        }

    })
})






let opacity = [];
for (var i = 1; i <= 8; i++) {
    opacity.push(document.getElementById(`op-${i}`));
}
const hoverAnimation = (element) => {
    opacity.map((a) => {
        if (a.id != element.id) {
            a.style.opacity = 0.4
        }
        else a.style.opacity = 1
    });
};
const backToNomral = (element) => {
    opacity.map((a) => {
        a.style.opacity = 1
    });
};


