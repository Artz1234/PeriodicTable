function onload(){
    var dark=localStorage.getItem("dark-mode");
    var root = document.querySelector(":root");
    if(dark=="yes"){
        root.style.setProperty("--background","#101010");
        root.style.setProperty("--textcolor","#ffffff");
    }
    else if(dark=="no"){
    }
    else{
        root.style.setProperty("--background","#101010");
        root.style.setProperty("--textcolor","#ffffff");
    }
}