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
                header h3 {
                    color: #152E52;
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
            </style>
            <header id="navbar" class="navbar">
                <h3>Jaime Markkern</h3>
                <a href="index.html" class="active">About Me</a>
                <a href="uxui-portfolio.html">UX/UI</a>
                <a href="digiart-portfolio.html">Digital Art</a>
                <a href="https://drive.google.com/file/d/1bpyKffzRjMSMpWAlu_fu_Xe55A894C1r/view?usp=sharing" target="_blank">PDF Resume</a>
                <a href="javascript:void(0)" class="navbtn" onclick="navFunc()">&#9776;</a>
            </header>
        `;
    }
}
customElements.define('header-component', Header);