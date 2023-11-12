let text = document.getElementById("title")
let right = document.getElementById("right");
let left1 = document.getElementById("left1");
let left2 = document.getElementById("left2");
let left3 = document.getElementById("left3");
let left4 = document.getElementById("left4");

window.addEventListener('scroll', () => {
    let valueV = window.scrollY;

    text.style.marginTop = valueV * 1.7 + 'px';
    right.style.top = valueV * 1.4 + 'px';
    left2.style.top = valueV * 0.7 + 'px';
    left3.style.top = valueV * 1.1 + 'px';
    left4.style.top = valueV * 0.4 + 'px';

})