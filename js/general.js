var header, projectmenu;

window.addEventListener("load", function(){
    header = document.getElementById("header");
    projectmenu = document.getElementById("sidebar"); 
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
    projectmenu.style.left = "0";
}

function closeProjects()
{
    projectmenu.style.visibility = "hidden";
    projectmenu.style.left = "-100%";
}