//default color randomizer and display
var color = tinycolor.random().toHexString();
var colorComp=tinycolor(color).complement().toHexString();
//tetrad colors formation
var colorArray=tinycolor(color).analogous();
var firstColor=colorArray[1].toHexString();
var firstColorComp=tinycolor(firstColor).complement().toHexString();
var secondColor=colorArray[2].toHexString();
var thirdColor=colorArray[4].toHexString();
document.querySelector(".headerHex").innerHTML="backgroud: "+color+" "+"text: "+colorComp;
document.querySelector(".buttonHex1").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;
document.querySelector(".buttonHex2").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;
document.querySelector(".buttonHex3").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;
document.querySelector(".buttonHex4").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;

//styling
var header=document.querySelector(".header");
header.style.backgroundColor = `${color}`;
header.style.color = `${colorComp}`;
var analButton=document.querySelector(".anal");
var monoButton=document.querySelector(".monochrome");
var triadButton=document.querySelector(".triad");
var splitButton=document.querySelector(".split");
var contents=document.querySelector(".contents");
var nav=document.querySelector(".navigations");
contents.style.backgroundColor=`${secondColor}`;
nav.style.backgroundColor=`${thirdColor}`;
analButton.style.backgroundColor= `${firstColor}`;
analButton.style.color= `${firstColorComp}`;
monoButton.style.backgroundColor= `${firstColor}`;
monoButton.style.color= `${firstColorComp}`;
triadButton.style.backgroundColor= `${firstColor}`;
triadButton.style.color= `${firstColorComp}`;
splitButton.style.backgroundColor= `${firstColor}`;
splitButton.style.color= `${firstColorComp}`;

var monoButton=document.querySelector(".monochrome");
var triadButton=document.querySelector(".triad");
var splitButton=document.querySelector(".split");
var contents=document.querySelector(".contents");
var nav=document.querySelector(".navigations");
contents.style.backgroundColor=`${secondColor}`;
nav.style.backgroundColor=`${thirdColor}`;

//colorshifter func make
anal = () => {
var color = tinycolor.random().toHexString();
var colorComp=tinycolor(color).complement().toHexString();
var colorArray=tinycolor(color).analogous();
var firstColor=colorArray[1].toHexString();
var firstColorComp=tinycolor(firstColor).complement().toHexString();
var secondColor=colorArray[2].toHexString();
var thirdColor=colorArray[4].toHexString();
document.querySelector(".headerHex").innerHTML="backgroud: "+color+" "+"text: "+colorComp;
document.querySelector(".buttonHex1").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;
header.style.backgroundColor = `${color}`;
header.style.color = `${colorComp}`;
analButton.style.backgroundColor= `${firstColor}`;
analButton.style.color= `${firstColorComp}`;
contents.style.backgroundColor=`${secondColor}`;
nav.style.backgroundColor=`${thirdColor}`;
};
monochrome = () => {
var color = tinycolor.random().toHexString();
var colorComp=tinycolor(color).complement().toHexString();
var colorArray=tinycolor(color).monochromatic();
var firstColor=colorArray[1].toHexString();
var firstColorComp=tinycolor(firstColor).complement().toHexString();
var secondColor=colorArray[2].toHexString();
var thirdColor=colorArray[3].toHexString();
document.querySelector(".headerHex").innerHTML="backgroud: "+color+" "+"text: "+colorComp;
document.querySelector(".buttonHex2").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;
header.style.backgroundColor = `${color}`;
header.style.color = `${colorComp}`;
monoButton.style.backgroundColor= `${firstColor}`;
monoButton.style.color= `${firstColorComp}`;
contents.style.backgroundColor=`${secondColor}`;
nav.style.backgroundColor=`${thirdColor}`;
};
triad = () => {
var color = tinycolor.random().toHexString();
var colorComp=tinycolor(color).complement().toHexString();
var colorArray=tinycolor(color).triad();
var firstColor=colorArray[1].toHexString();
var firstColorComp=tinycolor(firstColor).complement().toHexString();
var secondColor=colorArray[2].toHexString();
document.querySelector(".headerHex").innerHTML="backgroud: "+color+" "+"text: "+colorComp;
document.querySelector(".buttonHex3").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;
header.style.backgroundColor = `${color}`;
header.style.color = `${colorComp}`;
triadButton.style.backgroundColor= `${firstColor}`;
triadButton.style.color= `${firstColorComp}`;
contents.style.backgroundColor=`${secondColor}`;
nav.style.backgroundColor="black";

};
split = () => {
var color = tinycolor.random().toHexString();
var colorComp=tinycolor(color).complement().toHexString();
var colorArray=tinycolor(color).splitcomplement();
var firstColor=colorArray[1].toHexString();
var firstColorComp=tinycolor(firstColor).complement().toHexString();
var secondColor=colorArray[2].toHexString();
document.querySelector(".headerHex").innerHTML="backgroud: "+color+" "+"text: "+colorComp;
document.querySelector(".buttonHex4").innerHTML="backgroud: "+firstColor+"<br>"+"text: "+firstColorComp;
header.style.backgroundColor = `${color}`;
header.style.color = `${colorComp}`;
splitButton.style.backgroundColor= `${firstColor}`;
splitButton.style.color= `${firstColorComp}`;
contents.style.backgroundColor=`${secondColor}`;
nav.style.backgroundColor="black";
};

//arratch func to button
analButton.addEventListener("click", anal);
monoButton.addEventListener("click", monochrome);
triadButton.addEventListener("click", triad);
splitButton.addEventListener("click", split);






