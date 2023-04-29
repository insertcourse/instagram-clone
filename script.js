const transform = document.querySelector(".change-name");
const profilename = document.querySelector(".transform-profile-name");
function onhandleclick(){
    const change = prompt("아이디를 입력하세용");
    
    if(!change){
        alert("값 입력 안됐는데요 --");
    }
    else{
        profilename.innerText=change; //profilename의 태그에 change의 값을 넣어줌
    }
}
    


transform.addEventListener("click", onHandleClick); //transform에 이벤트가 일어났을 때