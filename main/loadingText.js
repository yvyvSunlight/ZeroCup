setTimeout(showElement => {
    let loaderCube = document.getElementsByClassName("loader");
    loaderCube[0].classList.remove("display");
}, 4000)

let content = ['一起来探索MBTI，揭示人性的奥秘。', '我们为你呈现独一无二的个性剖析。', '发现你的内心世界，与他人的共鸣。', 'MBTI，引领你走向更美好的人生旅程。'];
for (let k = 1; k < 5; k++) {
    document.getElementById("contents" + k).innerHTML = content[k - 1];
}

//设置字体的大小
let letterSize = document.documentElement.clientWidth;
document.getElementsByTagName("html")[0].style.fontSize = letterSize / 50 + 'px';
for (let j = 0; j < 4; j++) {
    document.getElementsByTagName("h2")[j].style.height = letterSize / 20 + 'px';
}





