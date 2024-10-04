class Project extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
<style>
    @media screen and (max-width: 800px) { 
        .left-project {
            width: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .right-project {
            width: 100%;
        }
        .right-project img {
            border-radius: 0px 0px 6px 6px;
        }
    }
    @media screen and (min-width: 800px) {
        .left-project {
            width: calc(50% - 64px);
            padding: 0px 32px 32px 32px;
            float: left;
            overflow: hidden;
        }
        .right-project {
            width: calc(50%);
            float: right;
        }
        .right-project img {
            border-radius: 0px 6px 6px 0px;
        }
    }
</style>

<div class="container">
    <div class="row">
        <div class="left-project">
            <h2>Project Title</h2>
            <p>This is a project description.</p>
        </div>
        <div class="right-project">
            <img src="./media/placeholder.png">
        </div>
    </div>
</div>
        `;
    }
}

customElements.define('project-component', Project);