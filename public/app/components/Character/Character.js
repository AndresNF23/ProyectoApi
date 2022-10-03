export var Attribute;
(function (Attribute) {
    Attribute["image"] = "image";
    Attribute["name"] = "name";
    Attribute["status"] = "status";
    Attribute["origin"] = "origin";
    Attribute["species"] = "species";
    Attribute["gender"] = "gender";
})(Attribute || (Attribute = {}));
class MyCharacter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
            status: null,
            origin: null,
            species: null,
            gender: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Character/Character.css">
            <section class = "card">
                <div class = "info">
                    <img class = "image" src = ${this.image}>
                </div>
                    
                    <div class = "titles">
                        <h1 class = "name">${this.name}</h1>
                        <h3 class = "status">${this.status}</h3>
                    </div>
            
                <div class ="info2">
                    <ol class="infolist">
                     <li><span class = "species">${this.species}<span></li>
                     <li><span class = "gender">${this.gender}<span></li>
                    </ol>   
                </div>


            </section>
            `;
        }
    }
}
customElements.define("my-character", MyCharacter);
export default MyCharacter;
