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
        b("adminContent").forEach((ele)=>{
            ele.style.display = "none";
        });
        b("userContent").forEach((ele)=>{
            ele.style.display = "block";
        });
        document.getElementById("toolbox").style.display = "none";
    }else if(userMode == "admin"){
        b("adminContent").forEach((ele)=>{
            ele.style.display = "block";
        });
        b("userContent").forEach((ele)=>{
            ele.style.display = "none";
        });
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
