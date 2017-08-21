var flag = false;
function showMenu(){
    if(!flag){
        document.getElementById("current-menu").style.display = "block";
        flag = !flag;
    } else {
        document.getElementById("current-menu").style.display = "none";
        flag = !flag;
    }
}

