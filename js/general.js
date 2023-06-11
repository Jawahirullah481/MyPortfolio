var header, projectmenu, iconCloseProjects;

window.addEventListener("load", function(){
    header = document.getElementById("header");
    projectmenu = document.getElementById("sidebar"); 
    
    if(document.title != "My Projects")
    document.getElementById("load-wrapper").style.visibility = "hidden";
});


function showMenu()
{
    header.style.left = "0%";
}

function closeMenu()
{
    header.style.left = "100%";
}

function showProjects()
{
    projectmenu.style.visibility = "visible";
}

function closeProjects()
{
    projectmenu.style.visibility = "hidden";
}
