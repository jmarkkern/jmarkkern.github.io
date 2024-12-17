class Project extends HTMLElement {
    title = "Title Not Provided"
    desc = "Description Not Provided"
    imgsrc = "placeholder.png"
    link = ""

    constructor(title,desc,imgsrc,link) {
        super();
        if ( this.getAttribute("title") ) { this.title = this.getAttribute("title"); }
        if ( this.getAttribute("desc") ) { this.desc = this.getAttribute("desc"); }
        if ( this.getAttribute("imgsrc") ) { this.imgsrc = this.getAttribute("imgsrc") }
        if ( this.getAttribute("link") ) { this.link = this.getAttribute("link"); }
    }
    connectedCallback() {
        if ( this.getAttribute("link") != "" ) {
            this.innerHTML = `

    <a href="${this.link}" target="_blank">
        <div class="container">
            <div class="row">
                <div class="left-project">
                    <h2>${this.title}</h2>
                    <p>${this.desc}</p>
                </div>
                <div class="right-project">
                    <img src="./media/${this.imgsrc}">
                </div>
            </div>
        </div>
    </a>
            `;
        }
        else {
            this.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="left-project">
                <h2>${this.title}</h2>
                <p>${this.desc}</p>
            </div>
            <div class="right-project">
                <img src="./media/${this.imgsrc}">
            </div>
        </div>
    </div>
            `;
        }
    }
}

customElements.define('project-component', Project);

/* 

<project-component
title=""
desc=""
imgsrc=""
link="">
</project-component>

*/