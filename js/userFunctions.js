console.log("~userFunctions.js initialized!~");

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateUserToken(){
    /*let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;*/
    return "Browser CodeName: " + navigator.appCodeName + "Browser Name: " + navigator.appName + "Browser Version: " + navigator.appVersion + "Cookies Enabled: " + navigator.cookieEnabled + "Browser Language: " + navigator.language + "Browser Online: " + navigator.onLine + "Platform: " + navigator.platform + "User-agent header: " + navigator.userAgent + "";
}

function toggleUserMode(){
    if(userMode == "user"){
        a("col1").innerHTML = userCol1_innerHTML;
        document.getElementById("toolbox").style.display = "none";
    }else if(userMode == "admin"){
        a("col1").innerHTML = userCol1_innerHTML;
        document.getElementById("toolbox").style.display = "block";
    }
}

toggleUserMode_tool(){
    if(userMode == "user"){
        a("col1").innerHTML = userCol1_innerHTML;
        userMode = "admin";
    }else if(userMode == "admin"){
        a("col1").innerHTML = userCol1_innerHTML;
        userMode = "user";
    }   
}



var adminCol1_innerHTML = "<div id=\"editPartDataButton\" onclick=\"initiate_partModSetUp()\"><img id=\"editPartImg\" src=\"./Images/pencilIcon.png\"></div>" +
    "                    <div id=\"PV_tileWrap\">" +
    "                        <div id=\"fooTile\"></div>" +
    "                        <div id=\"fooTile_overlay\"></div>" +
    "                    </div>" +
    "                    <div id=\"controlWrap\">    " +
    "                        <div id=\"controlPanel\">" +
    "                            <div id=\"minus1\" onclick=\"minus1()\"><div id=\"minus1_inside\">-</div></div>" +
    "                            <div id=\"hiddenMinusBlocker\"></div>" +
    "                            <div id=\"add1\" onclick=\"add1()\"><div id=\"plus1_inside\">+</div></div>" +
    "                        </div>" +
    "                    </div>" +
    "                    <div id=\"delete\" onclick=\"deleteEntry(); exit_any();\"><img id=\"numControl_img\" src=\"Images/TrashBin.png\"></div>";



var userCol1_innerHTML = "<button id=\"claimBtn\">Claim This Object</button>";