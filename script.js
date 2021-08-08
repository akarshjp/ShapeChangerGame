let currentScore=0;//let is also used as var, var values are block scoped, apples to functions and if statements or basically between {}
let highScore=0;
let playing=false;
let shape1;
let shape2;
let speed;
const matchBtn=document.getElementById('match');
//const number=10;// cannot update value of const

const shapes=[// creating random shapes
    {color: '#ff595e', width: 250, height:160},
    {color: '#ff595e', width: 270, height:150},
    {color: '#ffca3a', width: 320, height:170},
    {color: '#ffca3a', width: 310, height:180},
    {color: '#8ac926', width: 190, height:160},
    {color: '#8ac926', width: 200, height:175},
    {color: '#1982c4', width: 380, height:185},
    {color: '#1982c4', width: 400, height:120},
    {color: '#6a4c93', width: 370, height:145},
    {color: '#6a4c93', width: 440, height:160}
]
 const selectRandomShape = () =>{// selects and return random number
    const randomNum= Math.floor(Math.random()*shapes.length); 
    const randomSelection=shapes[randomNum];
    return randomSelection;
 }

// Start Game
    document.getElementById('slow').addEventListener('click', changeSpeed);
    document.getElementById('normal').addEventListener('click', changeSpeed);
    document.getElementById('fast').addEventListener('click', changeSpeed);

    document.getElementById('play').onclick= () => {
    playing=true;
   
    //disable play button while playing
    document.getElementById('play').disabled=true;
    repeatRandomShape();
    
}
function changeSpeed() {

    let slow = document.getElementById('slow').checked;
    
    let normal = document.getElementById('normal').checked;
    
    let fast = document.getElementById('fast').checked;
    console.log(slow,normal,fast);
    if (slow === true) {
    speed = 4000;
    }
    if (normal === true) {
    speed = 1000;
    }
    if (fast === true) {
    speed = 700;
    }
    }


 
 const repeatRandomShape=() => {
     // we need to run selectRandomShapes every second  so we use setInterval
    setInterval(()=>{

    matchBtn.disabled=false;
    shape1=selectRandomShape();
    shape2=selectRandomShape();
// "Hello I am" + name;  or use `Hello I am ${name}';
//`used for big strings`
 
    const shape1Styles = `width:${shape1.width+'px'}; 
                        background: ${shape1.color};
                        height: ${shape1.height+'px'};`//used to define the style which will be shown to the webpage
   //cssText allows to store a string of styels
    
    const shape2Styles = `width:${shape2.width+'px'}; 
                          background: ${shape2.color};
                          height: ${shape2.height+'px'};`//used to define the style which will be shown to the webpage
    
    document.getElementById('shape1').style.cssText=shape1Styles;//cssText allows to store a string of styels
    document.getElementById('shape2').style.cssText=shape2Styles;

}, speed)
} 

//Compare
document.getElementById('match').onclick =() => {
    if(playing)
    {
        matchBtn.disabled=true;
        if(Object.is(shape1, shape2))
        {
            currentScore++;
            document.getElementById("score").innerHTML=currentScore;
        }
        else
        {
            currentScore--;
            document.getElementById("score").innerHTML=currentScore;
        }
    }
   
    //HighScore
    if(currentScore>highScore)
    {
        highScore=currentScore;
        document.getElementById("highscore").innerHTML=currentScore;
    }
    else
    {
        document.getElementById("highscore").innerHTML=highScore;
    }
}
