let heightBefore = document.documentElement.clientHeight;
let widthBefore = document.documentElement.clientWidth;
document.getElementsByTagName("html")[0].style.fontSize = widthBefore / 58 + 'px';

function setRemUnit() {
    let heightAfter = document.documentElement.clientHeight;
    let widthAfter = document.documentElement.clientWidth;
    if (widthAfter != widthBefore) {
        document.getElementsByTagName("html")[0].style.fontSize = widthAfter / 58 + 'px';
        widthBefore = widthAfter;
    }
    if (heightAfter != heightBefore && widthAfter > 840) {
        document.getElementsByTagName("html")[0].style.fontSize = heightAfter / 30 + 'px';
        heightBefore = heightAfter;
    }
    else if (heightAfter != heightBefore) {
        document.getElementsByTagName("html")[0].style.fontSize = heightAfter / 58 + 'px';

    }


}

setRemUnit();
window.addEventListener('resize', setRemUnit)
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        setRemUnit()
    }
})