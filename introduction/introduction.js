let TRIAN = document.querySelectorAll(".container div");
let d = document.querySelectorAll(".d");
let e = document.querySelector(".e");
let d1 = document.querySelectorAll(".d1");
let e1 = document.querySelector(".e1");
let d2 = document.querySelectorAll(".d2");
let e2 = document.querySelector(".e2");
let d3 = document.querySelectorAll(".d3");
let e3 = document.querySelector(".e3");
let a = document.querySelector(".a");
let container = document.querySelectorAll(".container");
const button = document.querySelector(".back");
const char = document.querySelectorAll(".char")

for(let i = 0; i < 4; i++){

    
    TRIAN[i].addEventListener('click',function(){
        for(let j = 0; j < 8; j++)
        {
            char[j].style.display = "none";
        }
        button.style.display = "block";
        TRIAN[i].style.margin = "0 auto";
        TRIAN[i].style.marginTop = "15px";
        if(i > 1){
            container[0].style.display = "none";
            container[1].style.display = "block"; 
            container[1].style.height = "80%";
        }else{
            container[1].style.display = "none";
            container[0].style.display = "block"; 
            container[0].style.height = "80%";
        }
        TRIAN[i-1] && (TRIAN[i-1].style.display = "none");
        TRIAN[i+1] && (TRIAN[i+1].style.display = "none");

        TRIAN[i].style.clipPath = "none";
        TRIAN[i].style.opacity = "1";
        a.style.display = "grid";
        a.style.gridTemplateColumns = "1fr 1fr"; 
        if(i === 0){
            e.style.animation = "transform 0.5s ease-out 0.1s forwards";
            d[0].style.animation = "transform 0.5s ease-out 0.1s forwards";
            d[1].style.animation = "transform 0.5s ease-out 0.2s forwards";
            d[2].style.animation = "transform 0.5s ease-out 0.3s forwards";
            container[0].innerHTML += `<h2 class ="di_title" >NT集团—— 科学家、思想家的摇篮</h2>
            <h2 class = "di_title">Analysts</h2>
            <div class ="dimension"><i>INTJ INTP ENTJ ENTP</i></div>
            <div class ="dimension">NT气质类型的人有着天生的好奇心，喜欢梦想，有独创性、创造力、洞察力、有兴趣获得新知识，有极强的分析问题、解决问题的能力。他们是独立的、理性的、有能力的人。</div>`;
        }
        if(i === 1){
            e1.style.animation = "transform 0.5s ease-out 0.1s forwards";
            d1[0].style.animation = "transform 0.5s ease-out 0.1s forwards";
            d1[1].style.animation = "transform 0.5s ease-out 0.2s forwards";
            d1[2].style.animation = "transform 0.5s ease-out 0.3s forwards";
            container[0].innerHTML += `<h2 class ="di_title" >NF集团—— 理想主义者、精神领袖</h2>
            <h2 class = "di_title">Diplomats</h2>
            <div class = "dimension"><i>INFJ INFP ENFJ ENFP</i></div>
            <div class = "dimension">NF偏好的人在精神上有极强的哲理性，他们善于言辩、充满活力、有感染力、能影响他人的价值观并鼓舞其激情。他们帮助别人成长和进步，具有煽动性，被称为传播者和催化剂。　</div>`;
        }
        if(i === 2){
            e2.style.animation = "transform 0.5s ease-out 0.1s forwards";
            d2[0].style.animation = "transform 0.5s ease-out 0.1s forwards";
            d2[1].style.animation = "transform 0.5s ease-out 0.2s forwards";
            d2[2].style.animation = "transform 0.5s ease-out 0.3s forwards";
            container[1].innerHTML += `<h2 class ="di_title" >SJ集团—— 忠诚的监护人</h2>
            <h2 class = "di_title">Sentinels</h2>
            <div class = "dimension"><i>ISTJ ISFJ ESTJ ESFJ</i></div>
            <div class = "dimension">具有SJ偏向的人他们的共性是有很强的责任心与事业心，他们忠诚、按时完成任务，推崇安全、礼议、规则和服从，他们被一种服务于社会需要的强烈动机所驱使。他们坚定、尊重权威、等级制度，持保守的价值观。</div>`;
        }
        if(i === 3){
            e3.style.animation = "transform 0.5s ease-out 0.1s forwards";
            d3[0].style.animation = "transform 0.5s ease-out 0.1s forwards";
            d3[1].style.animation = "transform 0.5s ease-out 0.2s forwards";
            d3[2].style.animation = "transform 0.5s ease-out 0.3s forwards";
            container[1].innerHTML += `<h2 class ="di_title" >SP集团—— 天才的艺术家</h2>
            <h2 class = "di_title">Explorers</h2>
            <div class = "dimension"><i>ISTP ISFP ESTP ESFP</i></div>
            <div class = "dimension">有SP偏好的人有冒险精神，反应灵敏，在任何要求技巧性强的领域中游刃有余，他们常常被认为是喜欢活在危险边缘寻找刺激的人。他们为行动，冲动和享受现在而活着。</div>`;
        }
    })
}