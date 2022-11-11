var blankSplashTable = "<table><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table>";

function createNewSplash(splashArr){
    $("body")[0].innerHTML += blankSplashTable;
    for(var i = 0; (splashArr.length) > i; i++){
        $("td")[$("td").length-(i+1)].innerHTML = "<img src=\"./QR_Codes/"+splashArr[i]+"\">";
    }
}


function createBoxCodes(n, callback){
    console.log("Generating "+n+" Box QR Codes..."); 
    fetch('/generateBoxQRs?n='+n)
        .then(response => response.json())
        .then(data => {
        var numCodes = eval(data);
        console.log("v/ " +numCodes+ " Box QR Codes Generated!");
        callback(data);
    });
}

var splitPs = [];
function splitUpPeopleBlockArr(arr){
    var capturedPBlockLength = arr.length;
    for(var i = 0; (capturedPBlockLength) > i; i+=16){
        splitPs.push(arr.splice(0,16));
    }
}

var pBlocks2 = [];
var i = 0;

function recursivelyCallSplash(){
    createNewSplash(splitPs[i]);
    setTimeout(()=>{
        i++;
        if(i<splitPs.length){
            recursivelyCallSplash();
        }
    },100);
}

document.getElementById("goBtn").onclick = ()=>{
    createBoxCodes(a("numCodes").value, (n)=>{
        for(var i = 1; i<=n; i++){
            pBlocks2.push("Loc_QR"+i+".png");
        }

        splitUpPeopleBlockArr(pBlocks2);
        recursivelyCallSplash();
    });
}