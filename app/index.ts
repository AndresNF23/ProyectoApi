
import { getData } from "./data.js";

import "./components/index.js"
import MyCharacter, {Attribute} from "./components/Character/Character.js";
// import MyCharacter, {Attribute} from "./components/Character/Character";

class AppContainer extends HTMLElement{

    card: MyCharacter[] = [];
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log(getData.length+"length index");

    }

    async connectedCallback(){
        const character = await getData();
        this.render(character);
    }

    render(character:any){

            character.forEach((character:{name:string;status:string;origin:string;species:string;gender:string;image:string})=>{
            const cardApi = this.ownerDocument.createElement("my-character") as MyCharacter;
            cardApi.setAttribute(Attribute.name, character.name);
            cardApi.setAttribute(Attribute.image, character.image);
            cardApi.setAttribute(Attribute.status, character.status);
            cardApi.setAttribute(Attribute.origin, character.origin);
            cardApi.setAttribute(Attribute.species, character.species);
            cardApi.setAttribute(Attribute.gender, character.gender);
            cardApi.addEventListener("click",()=>console.log(character.name+"ayuda"));
            this.card.push(cardApi);
        })
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = 
                
             `
            <link rel="stylesheet" href="./app/components/Character/Character.css"> 
            <div class = "section">
                <h1 class = "title">Rick and Morty</h1>
                <h2 class = "subtitle">Characters</h2>
            
            </div>
        
           `;
            

            this.card.forEach((character)=>{
                this.shadowRoot?.appendChild(character);
               
                
            })
        }
    }
}

customElements.define("app-container",AppContainer);