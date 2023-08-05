function onload(){
    var dark=localStorage.getItem("dark-mode");
    var root = document.querySelector(":root");
    if(dark=="yes"){
        root.style.setProperty("--link", "#ffffff");
        root.style.setProperty("--linkvisited", "#eeeeff");
        root.style.setProperty("--linkhover", "#000000");
        root.style.setProperty("--linkactive", "#ffffff");
        root.style.setProperty("--background","#101010");
        root.style.setProperty("--textcolor","#ffffff");
    }
    else if(dark=="no"){
    }
    else{
        localStorage.setItem("dark-mode","yes");
        body.classList.add("dark-mode");
        root.style.setProperty("--link", "#ffffff");
        root.style.setProperty("--linkvisited", "#eeeeff");
        root.style.setProperty("--linkhover", "#000000");
        root.style.setProperty("--linkactive", "#ffffff");
        root.style.setProperty("--background","#101010");
        root.style.setProperty("--textcolor","#ffffff");
    }
}