class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <style>
        footer {
            background-color: #EDEFF2;
            width: 100%;
            text-align: center;
            padding-bottom: 36px;
        }
        footer h4 {
            font-family: "Open Sans", Verdana, sans-serif;
            font-size: 14px;
	        font-weight: bold;
            color: #151C28;
            margin: 24px 0px 16px 0px;
        }
        footer p {
            text-decoration: none;
            margin: 16px 16px 0px 16px;
        }
        footer a {
            text-decoration: none;
        }
        @media screen and (max-width: 800px) {
            footer .column {
                width: 100%;
            }
            footer h3 {
                color: #152E52;
                text-decoration: none;
                float: center;
                margin: 0 16px 0px 16px;
            }
        }
        @media screen and (min-width: 800px) {
            footer .column {
                width: calc(33%);
            }
            footer h3 {
                color: #152E52;
                text-decoration: none;
                float: left;
                margin: 0 calc(100% - 570px) 0px 16px;
            }
        }   
    </style>

    <footer>
        <div class="row">
        <h3><br>Let's Connect</h3>
        </div>
        <div class="row">
        <div class="column">
            <h4>Social</h4>
            <p><a href="https://www.linkedin.com/in/jaime-markkern/" target="_blank" style="padding: 0px 0px;">LinkedIn</a></p>
        </div>
        <div class="column">
            <h4>Email</h4>
            <p><a href="mailto:jaimemarkkern@gmail.com">jaimemarkkern@gmail.com</a></p>
        </div>
        <div class="column">
            <p style="padding-left: 0px; margin: 24px 0px 16px 0px;"><img style="border:0;width:54px;height:19px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!"></p>
            <p><small>HTML and CSS by me!</small></p>
        </div>
        </div>
    </footer>
        `;
    }
}
customElements.define('footer-component', Footer);