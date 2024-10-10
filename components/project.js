class Project extends HTMLElement {
    title = "Title Not Provided"
    desc = "Description Not Provided"
    imgsrc = "placeholder.png"

    constructor(title,desc,imgsrc) {
        super();
        if ( this.getAttribute("title") ) { this.title = this.getAttribute("title"); }
        if ( this.getAttribute("desc") ) { this.desc = this.getAttribute("desc"); }
        if ( this.getAttribute("imgsrc") ) { this.imgsrc = this.getAttribute("imgsrc") }
    }
    connectedCallback() {
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

customElements.define('project-component', Project);

/* 

<project-component
title=""
desc=""
imgsrc="">
</project-component>

*/