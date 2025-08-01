class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <style>
        footer {
            background-color: #152E52;
            width: 100vw;
            text-align: center;
            padding-bottom: 16px;
        }
        footer h2 {
            color: #EDEFF2;
            text-decoration: none;
        }
        footer h3 {
            color: #EDEFF2;
            text-decoration: none;
        }
        footer a {
            width: 128px;
            line-height: 32px;
            border-radius: 16px;
            display: inline-block;
            margin-bottom: 16px;
            background-color: #EDEFF2;
            text-decoration: none;
            text-align: center;
        }
        @media screen and (max-width: 800px) {
            footer img {
                width: 50%;
                float: center;
            }
            .left-footer {
                width: 100%;
            }
            .right-footer {
                width: 100%;
                padding: 0px 0px 0px 0px;
            }
        }
        @media screen and (min-width: 800px) {
            footer img {
                max-width: 480px;
                float: center;
            }
            .left-footer {
                width: calc(50%);
                float: left;
            }
            .right-footer {
                width: calc(50% - 64px);
                padding: 0px 32px 32px 32px;
                float: right;
            }
        }   
    </style>

    <footer>
        <div class="row">
            <div class="column right-footer">
                <div style="width:50%;float:left;">
                    <h2>Get in Contact</h2>
                    <div><a href="mailto:jaimemarkkern@gmail.com">Email</a></div>
                    <div><a href="https://www.linkedin.com/in/jaime-markkern/" target="_blank">LinkedIn</a></div>
                    <div><a href="https://www.behance.net/jaimemarkkern" target="_blank">Behance</a></div>
                </div>
                <div style="width:50%;float:left;">
                    <h2>See More</h2>
                    <div><a href="about.html">About Me</a></div>
                    <div><a href="https://drive.google.com/file/d/1bpyKffzRjMSMpWAlu_fu_Xe55A894C1r/view?usp=sharing" target="_blank">Resume</a></div>
                    <div><a href="https://github.com/jmarkkern" target="_blank">GitHub</a></div>
                </div>
            </div>
            <div class="column left-footer">
                <a href="index.html" style="background:none; width:100%;"><img src="./media/landing_img.png" alt="Link to Home Page"></a>
            </div>
        </div>
    </footer>
        `;
    }
}
customElements.define('footer-component', Footer);