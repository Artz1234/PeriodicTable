function onload(){
    var dark=localStorage.getItem("dark-mode");
    var root = document.querySelector(":root");
    if(dark=="yes"){
        root.style.setProperty("--background","#101010");
        root.style.setProperty("--textcolor","#ffffff");
    }
    else if(dark=="no"){
        root.style.setProperty("--background","#ffffff");
        root.style.setProperty("--textcolor","#000000");
    }
    else{
        root.style.setProperty("--background","#101010");
        root.style.setProperty("--textcolor","#ffffff");
    }
}