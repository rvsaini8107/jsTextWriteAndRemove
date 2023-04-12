// container
const containerDiv = document.createElement("div");
containerDiv.id="containerDiv";
containerDiv.className="containerDiv";
document.body.appendChild(containerDiv);

// create header tag
// const header = document.createElement("header");
// header.id="header";
// header.className="header";
// containerDiv.appendChild(header);
// header.innerText="Header";

// const headerStyle={
//     height:"50px",
//     border:"solid 2px yellow"
// }
// document.body.style.cssText=`margin:0;
//                              padding:0;`;
// header.style.cssText=`border:solid 2px blue;
//                       border-radius: 6px;
//                       padding:1%;
//                       `;


containerDiv.style.cssText=`background:linear-gradient(to right, #7f00ff, #e100ff);`;


const mainDiv = document.createElement("div");
mainDiv.className="mainDiv";
mainDiv.id="mainDiv";
containerDiv.appendChild(mainDiv);


// create main div sub 3 div
const mainSub1 = document.createElement("div");
const mainSub2 = document.createElement("div");
const mainSub3 = document.createElement("div");

// add id 3 div
mainSub1.id="mainSub1";
mainSub2.id="mainSub2";
mainSub3.id="mainSub3";

// add class 3 div
// mainSub1.className="mainSub";
mainSub2.className="mainSub";
mainSub3.className="mainSub";

//add sub child div
mainDiv.appendChild(mainSub1);
mainDiv.appendChild(mainSub2);
mainDiv.appendChild(mainSub3);


//css property
mainDiv.style.cssText=`
display: grid;
grid-template-columns: 22% auto auto;
gap: 10px;
justify-content: space-between;
padding: 5% 2%;
`;


//mainSub 1 div set image
const formSubMain = document.createElement("form");
formSubMain.id="loginform";
formSubMain.clsssName="imgSubloginformDivClass";
mainSub1.appendChild(formSubMain);


//mainSub 2 div set image
const h1SubMain = document.createElement("h1");
h1SubMain.id="h1SubDiv";
h1SubMain.clsssName="h1SubDiv";
mainSub2.appendChild(h1SubMain);


//mainSub 3 div set image
const imageSubMain = document.createElement("img");
imageSubMain.id="imgSubDiv";
imageSubMain.clsssName="imgSubDivClass";
imageSubMain.src="./image/city1.jpg";
mainSub3.appendChild(imageSubMain);

// onload function 
let imagelink=["./image/city1.jpg","./image/city2.jpg","./image/city3.jpg","./image/city4.jpg","./image/city5.jpg","./image/city6.jpg","./image/city7.jpg","./image/city8.jpg","./image/city9.jpg"];
    let i=0;
    setInterval(function(){
        imageSubMain.src=imagelink[i];
        i++;
        if(i==imagelink.length)
            i=0;
    },3000);

    // setTimeout(
    //     function(){
    //         imageSubMain.src="./image/city2.jpg"
    //     },2000
    // );



// inner form 
formSubMain.innerHTML=`
<H1 class="h1">LOGIN</H1>
<div class="m-3">
        
        <input type="text" class="form-control" id="nameid" placeholder="User id" name="userid">
    </div>
    <div class="m-3">
        
        <input type="password" class="form-control" id="pass" placeholder="Password" name="addr">
    </div>
    <button type="submit" class="btn btn-primary m-3">Login</button>
`;


// div 2  
mainSub2.innerHTML=`
<h2 class="h2"><span class="text-run"></span></h2>
<p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a est similique deleniti fuga, quibusdam et, laboriosam suscipit sit, accusamus harum facere iusto unde aperiam alias porro totam soluta earum? Odit minima et id maiores architecto molestias illum natus saepe non? Eius hic dolorum ipsam reprehenderit. Quidem quisquam rem porro!</p>
`;

//change text
var typed = new Typed(".text-run",{
    strings:["Welcome To ShriGanesh Portfolio Page","Welcome To You","Coding Is Life","Coding................"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});






