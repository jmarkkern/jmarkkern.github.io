class PageTitle extends HTMLElement {
    title = "Let's create something together"
    constructor() {
        super();
        if (document.title.includes("Portfolio")) {
            this.title = "Let's create something together"
        }
        if (document.title.includes("About")) {
            this.title = "Get to Know Me"
        }
        if (document.title.includes("UX/UI")) {
            this.title = "My UX/UI Projects"
        }
        if (document.title.includes("Digital Art")) {
            this.title = "My Digital Art"
        }
    }
    connectedCallback() {
        if (document.title.includes("Portfolio")) {
            this.innerHTML = `
        <style>
            h1 {
                font-family: "Instrument Sans", Verdana, sans-serif;
                color:#EDEFF2;
            }
            @media screen and (max-width: 960px) {
                .page-title-left {
                    width: 100%;
                }
                .page-title-right {
                    padding-top: 4vh;
                    padding-bottom: 4vh;
                    width: 100%;
                }
                h1 {
                    font-size: 10vw;
                    text-align: center;
                    margin: auto 16px;
                }
            }
            @media screen and (min-width: 960px) {
                .page-title-left {
                    height: 100%;
                    width: 40%;
                    float: left;
                }
                .page-title-right {
                    height: 100%;
                    width:60%;
                    float: right;
                }
                h1 {
                    font-size: 8vw;
                    text-align: left;
                    margin: auto 16px;
                }
            }
        </style>

        <div style="text-align:center">
            <div class="row" style="background-color:#152E52; height:90vh; height:100%;">
                <div class="page-title-right">
                    <h1>Let's create something together</h1>
                </div>
                <div class="page-title-left">
                    <img src="media/landing_img.png" alt="" style="float:center; max-width: 600px;">
                </div>
            </div>
            <svg width="200" height="100">
                <polygon points="0,0, 100,50, 200,0" fill=#152E52 />
            </svg>
        </div>
        `
        }
        else {
            this.innerHTML = `
    <div style="background-color: #152E52; width: 100%;">
        <h1 style="color:#EDEFF2; margin:0px; padding:64px; text-align:center;">${this.title}</h1>
    </div>
        `;
        }
    }
}

customElements.define('pagetitle-component', PageTitle);