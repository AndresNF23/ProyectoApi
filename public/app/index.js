var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData } from "./data.js";
import "./components/index.js";
import { Attribute } from "./components/Character/Character.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.card = [];
        this.attachShadow({ mode: "open" });
        console.log(getData.length + "length index");
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield getData();
            this.render(character);
        });
    }
    render(character) {
        character.forEach((character) => {
            const cardApi = this.ownerDocument.createElement("my-character");
            cardApi.setAttribute(Attribute.name, character.name);
            cardApi.setAttribute(Attribute.image, character.image);
            cardApi.setAttribute(Attribute.status, character.status);
            cardApi.setAttribute(Attribute.origin, character.origin);
            cardApi.setAttribute(Attribute.species, character.species);
            cardApi.setAttribute(Attribute.gender, character.gender);
            cardApi.addEventListener("click", () => console.log(character.name + "ayuda"));
            this.card.push(cardApi);
        });
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =
                `
            <link rel="stylesheet" href="./app/components/Character/Character.css"> 
            <div class = "section">
                <h1 class = "title">Rick and Morty</h1>
                <h2 class = "subtitle">Characters</h2>
            
            </div>
        
           `;
            this.card.forEach((character) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(character);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
