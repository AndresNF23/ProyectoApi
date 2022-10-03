export enum Attribute{
    "image" = "image",
    "name" = "name",
    "status" = "status",
    "origin" = "origin",
    "species" = "species",
    "gender" = "gender"

}

class MyCharacter extends HTMLElement{

    image?: string;
    name?: string;
    status?: string;
    origin?: string;
    species?: string;
    gender?:string;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            image: null,
            name: null,
            status: null,
            origin: null,
            species: null,
            gender:null,
        };
        return Object.keys(attrs);
   
}
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            this[propName] = newValue;

            this.render();
    }
    render(){
        if(this.shadowRoot){
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
            `
        }
}
}

customElements.define("my-character", MyCharacter);
export default MyCharacter;