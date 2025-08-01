class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <style>
        header {
            width: 100%;
            height: 56px;
            display: block;
            position: fixed;
            top: 0;
            z-index: 100;
            overflow: hidden;
            background-color: #152E52;
        }
        header a {
            width: 128px;
            line-height: 32px;
            border-radius: 16px;
            display: block;
            float: left;
            margin: 12px 16px 12px 0px;
            background-color: #EDEFF2;
            text-decoration: none;
            text-align: center;
        }
        header a.name {
            width: 288px;
            margin-left: 16px;
            color: #EDEFF2;
            background-color: #152E52;
            font-size: 32px;
            font-weight: bold;
        }
        header a:hover {
            color: #152E52;
            background-color: #B4BFD0;
        }
        header a.name:hover {
            color: #B4BFD0;
            background-color: #152E52;
        }
        header a.active {
            color: #152E52;
            background-color: #B4BFD0;
            pointer-events: none;
            font-weight: bold;
        }
        header a.name.active {
            color: #EDEFF2;
            background-color: #152E52;
        }
        header .navbtn {
            display: none;
        }

        @media screen and (max-width: 960px) {
            header { overflow: visible; }
            .navbar a {
                width: 100%;
                margin: 0px;
                border-radius: 0px;
                padding-top: 12px;
                padding-bottom: 12px;
                color: #EDEFF2;
                background-color: #152E52;
            }
            .navbar a.name {
                width: 100%;
                margin: 0px;
                text-align: center;
                float: left;
            }
            .navbar a:not(:first-child) {
                display: none;
                float: left;
            }
            .navbar a.navbtn {
                width: 56px;
                line-height: 56px;
                border-radius: 0px;
                display: block;
                margin: 0px;
                padding: 0px;
                position: absolute;
                top: 0;
                right: 0;
                font-size: 24px;
            }

            .navbar.responsive {
                position: fixed;
                }
            .navbar.responsive a {
                display: block;
                float: none;
            }
        }
        
        @media screen and (min-width: 960px) {
            header a.name {
                float: left;
                text-align: left;
                margin-right: calc(100% - 880px);
            }
        }
    </style>

    <header id="navbar" class="navbar">
        <a id="navhome" href="index.html" class="name">Jaime Markkern</a>
        <a id="navabout" href="about.html">About Me</a>
        <a id="navuxui" href="uxui-portfolio.html">UX/UI</a>
        <a id="navdigiart" href="digiart-portfolio.html">Digital Art</a>
        <a href="https://drive.google.com/file/d/1bpyKffzRjMSMpWAlu_fu_Xe55A894C1r/view?usp=sharing" target="_blank">Resume</a>
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
    document.getElementById("navhome").classList.add("active");
}
if (document.title.includes("About")) {
    document.getElementById("navabout").classList.add("active");
}
if (document.title.includes("UX/UI")) {
    document.getElementById("navuxui").classList.add("active");
}
if (document.title.includes("Digital Art")) {
    document.getElementById("navdigiart").classList.add("active");
}