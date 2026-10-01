//panel
let startscreen = document.getElementById("startscreen");
setTimeout(() => {
    startscreen.style.display="none"
    document.getElementById("boss").style.display="inline"
}, 2000);
// Coins Logic
let mycoins = 0;
let clpower = 1;
let myclicks = 0;
let myrebirths = 0;
let rebcost = 100;


function formatMoney(x) {
    let text = x;

    if (x >= 1000) {
        text = x / 1000 + "K";
    }
    if (x >= 1000000) {
        text = x / 1000000 + "M";
    }
    if (x >= 1000000000) {
        text = x / 1000000000 + "B";
    }
    if (x >= 1000000000000) {
        text = x / 1000000000000 + "T";
    }
    if(x >= 1000000000000000){
        text = x / 1000000000000000 + "QD";    
    }
    if(x >= 1000000000000000000){
        text = x / 1000000000000000000 + "QN";    
    }
    if(x >= 1000000000000000000000){
        text = x / 1000000000000000000000 + "SX";    
    }
    if(x >= 1000000000000000000000000){
        text = x / 1000000000000000000000000 + "SP";    
    }
    if(x >= 1000000000000000000000000000){
        text = x / 1000000000000000000000000000 + "OCT";    
    }
    if(x >= 1000000000000000000000000000000){
        text = x / 1000000000000000000000000000000 + "NON";    
    }
    if(x >= 1000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000 + "D";    
    }
    if(x >= 1000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000 + "UD";    
    }
    if(x >= 1000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000 + "DD";    
    }
    if(x >= 1000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000 + "TD";    
    } 
    if(x >= 1000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000 + "QTRD";    
    } 
    if(x >= 1000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000 + "QNS";    
    }    
     if(x >= 1000000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000000 + "SXD";    
    }    
     if(x >= 1000000000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000000000 + "SPT";    
    }  
  if(x >= 1000000000000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000000000000 + "OCD";    
    } 
   if(x >= 1000000000000000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000000000000000 + "NOV";    
    }  
  if(x >= 1000000000000000000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000000000000000000 + "VG";    
    } 
   if(x >= 1000000000000000000000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000000000000000000000 + "UVG";    
    }
   if(x >= 1000000000000000000000000000000000000000000000000000000000000000000000){
        text = x / 1000000000000000000000000000000000000000000000000000000000000000000000 + "DVG";    
    }                           
    return text;
}
const coinInp = document.getElementById("coininp");
const coinsp = document.getElementById("coinsp");
const addCoins = document.getElementById("addcoins");
const setCoins = document.getElementById("setcoins");

addCoins.onclick = () => {
    mycoins += Number(coinInp.value);
    coinsp.textContent = "Coins: " + formatMoney(mycoins);
};

setCoins.onclick = () => {
    mycoins = Number(coinInp.value);
    coinsp.textContent = "Coins: " + formatMoney(mycoins);
};

const powInp = document.getElementById("powerinp");
const powDisplay = document.getElementById("powp");
const setPower = document.getElementById("setpower");
const addPower = document.getElementById("addpower");

addPower.onclick = () => {
    clpower += Number(powInp.value);
    powDisplay.textContent = "Power: " + formatMoney(clpower);
};

setPower.onclick = () => {
    clpower = Number(powInp.value);
    powDisplay.textContent = "Power: " + formatMoney(clpower);
};

//game start//coins
let clickp = document.getElementById("clicksp");
const click = document.getElementById("click");
clickp.textContent = "Clicks: " + formatMoney(myclicks);
coinsp.textContent = "Coins: " + formatMoney(mycoins);
powDisplay.textContent = "Power: " + formatMoney(clpower);

click.onclick = () => {
    mycoins += clpower;
    coinsp.textContent = "Coins: " + formatMoney(mycoins);
    myclicks += 1;
    clickp.textContent = "Clicks: " + formatMoney(myclicks);
};

//rebirths
let rebp = document.getElementById("rebp");
let rebtn = document.getElementById("rebtn");
rebp.textContent = "Rebirths: " + formatMoney(myrebirths);

rebtn.onclick = function() {
    if (mycoins < rebcost) {
        alert("not enough money, need more " + formatMoney(rebcost - mycoins));
    } else {
        myrebirths += 1;
        rebp.textContent = "Rebirths: " + formatMoney(myrebirths);
        rebcost *= 2;
        clpower *= 2;
        mycoins = 0;
        coinsp.textContent = "Coins: " + formatMoney(mycoins);
        powDisplay.textContent = "Power: " + formatMoney(clpower);
        alert("rebirthed next rebirth cost " + formatMoney(rebcost));
    }
};

//game end
const bordon = document.getElementById("bordon");
const bordof = document.getElementById("bordof");
const cmo = document.getElementById("cmo");

navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    cmo.srcObject = stream;
});

bordon.onclick = function() {
    cmo.classList.add("woo");
};

bordof.onclick = function() {
    cmo.classList.remove("woo");
};
