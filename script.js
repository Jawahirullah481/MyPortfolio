let skillsContainers, firstSkillShown = false, secondSkillShown = false;
let headerElement, navBarElement, oldScrollY = 0, newScrollY = 0;

window.onload = () => {
    skillsContainers = document.getElementsByClassName("skills-container");
    headerElement = document.getElementById("header");
    navBarElement = document.getElementById("navbar");

    window.addEventListener("scroll", (event) => {

        newScrollY = window.scrollY;
        if (window.innerWidth >= 768) {
            changeHeaderStyle(event);
        } else {
            changeNavbarStyle(event);
        }

        const container1Top = skillsContainers[0].getBoundingClientRect().top;
        const container2Top = skillsContainers[1].getBoundingClientRect().top;

        if (!firstSkillShown && window.innerHeight - container1Top >= 230) {
            showSkill(0);
            firstSkillShown = true;
        }

        if (!secondSkillShown && window.innerHeight - container2Top >= 230) {
            showSkill(1);
            secondSkillShown = true;
        }

    });

}


const showSkill = (skillHolderNumber) => {
    const progressBars = document.getElementsByClassName("skills-container")[skillHolderNumber].getElementsByClassName("percentage");
    for (progressBar of progressBars) {
        progressBar.style.width = progressBar.dataset.percentageValue + "%";
    }
}

var CertificateSlider = new Swiper('.certificate-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 145,
        scale: 1,
        modifier: 1.75,
        slideShadows: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


const changeHeaderStyle = (event) => {

    if (newScrollY < 35) {
        headerElement.classList.remove("header-bg", "header-hide");
        headerElement.classList.add("header-view");
    } else if (oldScrollY < newScrollY) {
        headerElement.classList.remove("header-bg", "header-view");
        headerElement.classList.add("header-hide");
    }
    else {
        headerElement.classList.remove("header-hide", "header-view");
        headerElement.classList.add("header-bg");
    }

    oldScrollY = newScrollY;

}

const changeNavbarStyle = (event) => {

    if (newScrollY < 35) {
        navBarElement.classList.remove("navbar-hide");
    } else if ((oldScrollY < newScrollY)) {
        navBarElement.classList.add("navbar-hide");
    }
    else {
        navBarElement.classList.remove("navbar-hide");
    }

    oldScrollY = newScrollY;
}

function showMenu() {
    header.style.left = "0%";
}

function closeMenu() {
    header.style.left = "100%";
}

function menuClicked() {
    if(window.innerWidth < 769) {
        closeMenu();
    }
}