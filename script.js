//panel

//coins
// Coins Logic
let mycoins = 0;
let clpower = 1;
let myclicks = 0;
let myrebirths = 0;
let rebcost = 100;

const coinInp = document.getElementById("coininp");
const coinsp = document.getElementById("coinsp"); // Fixed from "coinp" to "coinsp"
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
//game start
function formatMoney(x) {
    let text = x;

    if (x >= 1e66) {
        text = (x / 1e66).toFixed(2) + "DVG";
    } else if (x >= 1e63) {
        text = (x / 1e63).toFixed(2) + "UVG";
    } else if (x >= 1e60) {
        text = (x / 1e60).toFixed(2) + "VG";
    } else if (x >= 1e57) {
        text = (x / 1e57).toFixed(2) + "NOV";
    } else if (x >= 1e54) {
        text = (x / 1e54).toFixed(2) + "OCD";
    } else if (x >= 1e51) {
        text = (x / 1e51).toFixed(2) + "SPT";
    } else if (x >= 1e48) {
        text = (x / 1e48).toFixed(2) + "SXD";
    } else if (x >= 1e45) {
        text = (x / 1e45).toFixed(2) + "QNS";
    } else if (x >= 1e42) {
        text = (x / 1e42).toFixed(2) + "QTRD";
    } else if (x >= 1e39) {
        text = (x / 1e39).toFixed(2) + "TD";
    } else if (x >= 1e36) {
        text = (x / 1e36).toFixed(2) + "DD";
    } else if (x >= 1e33) {
        text = (x / 1e33).toFixed(2) + "UD";
    } else if (x >= 1e30) {
        text = (x / 1e30).toFixed(2) + "D";
    } else if (x >= 1e27) {
        text = (x / 1e27).toFixed(2) + "NON";
    } else if (x >= 1e24) {
        text = (x / 1e24).toFixed(2) + "OCT";
    } else if (x >= 1e21) {
        text = (x / 1e21).toFixed(2) + "SP";
    } else if (x >= 1e18) {
        text = (x / 1e18).toFixed(2) + "SX";
    } else if (x >= 1e15) {
        text = (x / 1e15).toFixed(2) + "QN";
    } else if (x >= 1e12) {
        text = (x / 1e12).toFixed(2) + "QD";
    } else if (x >= 1e9) {
        text = (x / 1e9).toFixed(2) + "T";
    } else if (x >= 1e6) {
        text = (x / 1e6).toFixed(2) + "M";
    } else if (x >= 1e3) {
        text = (x / 1e3).toFixed(2) + "K";
    }

    return text;
}

//coins
let clickp = document.getElementById("clicksp")
const click = document.getElementById("click");
clickp.textContent = "Clicks: " + formatMoney(myclicks)
coinsp.textContent = "Coins: " + formatMoney(mycoins);
powDisplay.textContent = "Power: " + formatMoney(clpower);

click.onclick = () => {
    mycoins += clpower
    coinsp.textContent = "Coins: " + formatMoney(mycoins)
    myclicks += 1
    clickp.textContent = "Clicks: " + formatMoney(myclicks)
}
//rebirths
let rebp = document.getElementById("rebp")
let rebtn = document.getElementById("rebtn")
rebp.textContent = "Rebirths: " + formatMoney(myrebirths);

rebtn.onclick = function() {
if (mycoins < rebcost) {
    alert("not enough money,  need more " + formatMoney(rebcost - mycoins))
}
else {
    myrebirths += 1
    rebp.textContent = "Rebirths: " + formatMoney(myrebirths)
    rebcost *= 2
    clpower *= 2
    mycoins = 0
    coinsp.textContent = "Coins: " + formatMoney(mycoins)
    powDisplay.textContent = "Power: " + formatMoney(clpower)
    alert("rebirthed next rebirth cost " + formatMoney(rebcost))
}
}
//power


//game end
const bordon = document.getElementById("bordon")
const bordof = document.getElementById("bordof")
const cmo = document.getElementById("cmo")

navigator.mediaDevices.getUserMedia({video:true})
.then(function(stream) {
    cmo.srcObject = stream
})

bordon.onclick = function() {
    cmo.classList.add("woo")
}

bordof.onclick = function() {
    cmo.classList.remove("woo")
}