const transform = document.querySelector(".fow_color");
const profilename = document.querySelector(".profile-name");
function onhandleclick(){
    const change = prompt("아이디를 입력하세요");
    
    if(change==""){
        alert("값이 입력이 안됐는데요..");
    }
    else{
        profilename.innerText=change; 
    }
}
    


transform.addEventListener("click", onhandleclick); 