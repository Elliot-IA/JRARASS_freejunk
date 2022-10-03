console.log("~userFunctions.js initialized!~");

function generateUserToken(){
    console.log("Creating a new user token...");
    var fullNavigatorTextSmush = navigator.appCodeName + navigator.appName + navigator.appVersion + navigator.cookieEnabled + navigator.language + navigator.onLine + navigator.platform + navigator.userAgent;
    var fullNavigatorTextSmush_numbers = fullNavigatorTextSmush.match(/\d/g);
    fullNavigatorTextSmush_numbers = fullNavigatorTextSmush_numbers.join("");
    console.log("User token created: "+fullNavigatorTextSmush_numbers);
    return fullNavigatorTextSmush_numbers;
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

function toggleUserMode_tool(){
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