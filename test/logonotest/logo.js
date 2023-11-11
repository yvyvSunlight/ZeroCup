


function GetRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}


var Xcir=1,Ycir=1
var galaxy=document.getElementById("galaxy");
var ptx=galaxy.getContext("2d");
galaxy.width=0.35*window.innerWidth
galaxy.height=0.35*window.innerHeight
var planets = []
var radius=200
var ox=parseInt(0.5*galaxy.width),oy=parseInt(0.5*galaxy.height);

function newplanet(){
    let a=GetRandom(0,255),b=GetRandom(0,255),c=GetRandom(0,255);
        // alert("c"+a+","+b+","+c)
    planets.push({
        lines:[{
            x:ox,
            y:oy-radius,
        }],
        life:parseInt(Math.random()*300)+300,
        age:0,
        color:{
            R:a,
            G:b,
            B:c,
        },
    })
}
function planetinit()
{
    newplanet();
}

function drawplanet()
{
    ptx.clearRect(0,0,galaxy.width,galaxy.height)
    for(let i=0;i<planets.length;i++)
    {
        let planet=planets[i]
        lines=planet.lines
        // alert(meteor.color.R)
        for(let j=0;j< lines.length;j++)
        {
            if(lines[j].y>=oy)
            // ptx.fillStyle="rgb(255,255,255,"+j/lines.length+")";
                ptx.fillStyle="rgb(237,28,36,"+j/lines.length+")";
            else
                ptx.fillStyle="rgb(115,251,253,"+j/lines.length+")";
            ptx.fillRect(lines[j].x,lines[j].y,2,2);
        }
        var star=lines[lines.length-1];

        let X,Y;
        if(star.x==ox+radius)
        {
            Xcir=-1;
        }
        if(star.x==ox-radius)
        {
            Xcir=1;
        }
        X=star.x+Xcir;
        // if(star.y==oy+radius)
        // {
        //     Ycir=1;
        // }
        // if(star.y==oy-radius)
        // {
        //     Ycir=-1;
        // }
        let dX,dY;
        dX=star.x-ox;
        if(radius*radius>=dX*dX)
        {
            dY=parseInt(Math.sqrt(radius*radius-dX*dX));
            dY=dY*Xcir*-1;
        }
        else
        {
            dY=radius*Xcir*-1;
        }
        Y=oy+dY;


        if(Xcir==1)
            ptx.fillStyle="rgb(115,251,253)";
        else
            ptx.fillStyle="rgb(237,28,36)";
        ptx.fillRect(star.x,star.y,4,4);


            lines.push({
                x:X,
                y:Y,
            })
        if(planet.age>=planet.life/2)
        {
            lines.shift()
        }
        planet.age++;
        // if(planet.age>=planet.life)
        // {
        //     planets.splice(i,1)
        //     newplanet();
        // }
    }
}
planetinit()
setInterval(drawplanet,0.1)
setInterval(() => {
    if(planets==false)
    {
        newplanet();
    }
}, 1);


function setwindowUnit() { 
    let windowSize = parseInt(window.innerWidth);

    galaxy.width=0.5*window.innerWidth
    galaxy.height=0.5*window.innerHeight
    ox=parseInt(0.5*galaxy.width),oy=parseInt(0.5*galaxy.height);

    if(windowSize<1000)
    {
        radius=130;
    }
    else
    {
        radius=200;
    }


}

setwindowUnit();
window.addEventListener('resize', setwindowUnit)