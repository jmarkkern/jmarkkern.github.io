class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
<style>
    header {
        line-height: 56px;
        width: 100%;
        position: fixed;
        top: 0;
        display: block;
        background-color: #EDEFF2;
        overflow: hidden;
        z-index: 1000;
    }
    header h1 {
        color: #152E52;
        font-size: 20px;
        text-decoration: none;
        float: left;
        margin: auto calc(100% - 570px) auto 16px;
    }
    header a {
        text-decoration: none;
        float: left;
        display: block;
        padding-left: 16px;
        padding-right: 16px;
    }
    header a:hover {
        color: #152E52;
        background-color: #B4BFD0;
    }
    header a.active {
        pointer-events: none;
        font-weight: bolder;
    }
    header .navbtn {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .navbar a:any-link {
            display: none;
        }
        .navbar a.navbtn {
            display: block;
            position: fixed;
            right: 0;
            top: 0;
            font-size: 20px;
            padding-left: 20px;
            padding-right: 20px;
        }
        .navbar.responsive {
            position: fixed;
        }
        .navbar.responsive h1 {
            float: none;
        }
        .navbar.responsive a {
            line-height: 40px;
            float: none;
            display: block;
            text-align: center;
        }.navbar.responsive a.navbtn {
            line-height: 56px;
        }
    }
</style>

<header id="navbar" class="navbar">
    <h1>Jaime Markkern</h1>
    <a id="navabout" href="index.html">About Me</a>
    <a id="navuxui" href="uxui-portfolio.html">UX/UI</a>
    <a id="navdigiart" href="digiart-portfolio.html">Digital Art</a>
    <a href="https://drive.google.com/file/d/1bpyKffzRjMSMpWAlu_fu_Xe55A894C1r/view?usp=sharing" target="_blank">PDF Resume</a>
    <a href="javascript:void(0)" class="navbtn" onclick="navFunc()">&#9776;</a>
</header>

        `;
    }
}
customElements.define('header-component', Header);

function navFunc() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

if (document.title.includes("Portfolio")) {
    document.getElementById("navabout").classList.add("active");
}
if (document.title.includes("UX/UI")) {
    document.getElementById("navuxui").classList.add("active");
}
if (document.title.includes("Digital Art")) {
    document.getElementById("navdigiart").classList.add("active");
}