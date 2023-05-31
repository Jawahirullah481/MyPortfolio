async function addProjects()
{
    console.log("called");

    await fetch("../projects.json")
            .then(response => response.json())
            .then(data =>  createSidebarViews(data));

    document.getElementById("load-wrapper").style.visibility = "hidden";
}

function createSidebarViews(data) {

        let view, imgLanguage, projectName;

        let sidebar = document.getElementById("sidebar");

        data.forEach(i => {
            
            // creating view
            view = document.createElement("a");
            view.classList.add("view");
            view.href = i.projectPageLink;

            // creating language image
            imgLanguage = document.createElement("div");
            imgLanguage.classList.add("lang");
            
            let language = i.language;
            if(language == "java")
            {
                imgLanguage.classList.add("java");
            }
            else if(language == "html, css, js")
            {
                imgLanguage.classList.add("web");
            }

            // creating project name
            projectName = document.createElement("div");
            projectName.classList.add("name");
            projectName.textContent = i.name;

            // adding elements to the sidebar

            view.appendChild(imgLanguage);
            view.appendChild(projectName);

            sidebar.appendChild(view);
            
        });

    }

window.addEventListener("load", addProjects);

