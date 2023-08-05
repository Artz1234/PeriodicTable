function onload(){
    var dark=localStorage.getItem("dark-mode");
    var square=localStorage.getItem("square");
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
        root.style.setProperty("--link", "#000000");
        root.style.setProperty("--linkvisited", "#101000");
        root.style.setProperty("--linkhover", "#ffffff");
        root.style.setProperty("--linkactive", "#202020");
        root.style.setProperty("--background","#ffffff");
        root.style.setProperty("--textcolor","#000000");
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
    if(square=="yes"){
        root.style.setProperty("--minwidth","53px");
    }
    else if(square=="no"){
        root.style.setProperty("--minwidth","1px");
    }
}