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
    }
    footer h3 {
        color: #152E52;
        text-decoration: none;
        float: left;
        margin: 0 calc(100% - 570px) 16px 16px;
    }
    footer p {
        text-decoration: none;
    }
    footer a {
        text-decoration: none;
    }
    @media screen and (max-width: 800px) {
        footer .column {
            width: 100%;
        }
    }
    @media screen and (min-width: 800px) {
        footer .column {
            width: calc(33%);
        }
    }   
</style>

<footer>
    <div class="row">
    <h3><br>Let's Connect</h3>
    </div>
    <div class="row">
    <div class="column">
        <p><small><strong>Social</strong></small></p>
        <p><a href="https://www.linkedin.com/in/jaime-markkern/" target="_blank" style="padding: 0px 0px;">LinkedIn</a></p>
    </div>
    <div class="column">
        <p><small><strong>Email</strong></small></p>
        <p>jaimemarkkern@gmail.com</p>
    </div>
    <div class="column">
        <p><small>HTML and CSS by me!</small></p>
        <p style="padding-left: 0px;"><img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!"></p>
    </div>
    </div>
</footer>
        `;
    }
}
customElements.define('footer-component', Footer);