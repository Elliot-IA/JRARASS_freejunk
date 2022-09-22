console.log("~userFunctions.js initialized!~");

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateUserToken(length){
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

if(getCookie("userToken") != ''){
    //This means the user DOES have a cookie token
}else{
    //This means the user DOES NOT have a cookie token
    setCookie("userToken", generateUserToken(12), 100000);
}

function transformHomepageForUserView(){
    a("col1").children.toArray.forEach(el=>{el.remove()});

}