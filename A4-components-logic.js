//ASSIGNMENT 4 WEB COMPONENTS
//LOGIC FILE
//IN THIS FILE YOU WILL SIMPLY GRAB YOUR CUSTOM ELEMENT AND ATTACH YOUR METHOD FROM YOUR MODULE TO IT.
class HumberClock extends HTMLElement{
    constructor(){
        super();

        let template = document.getElementById('humber-clock');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode:'open' });

        //get external style sheet
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'A4-components.css');

        //append to shadow root
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
    connectedCallback(){
        //get the countdown div from the template
        const count = this.shadowRoot.getElementById('countdown');

        setInterval(function(){
            count.innerHTML = myModule.getTime(); 
        }, 1000);
    }
}

customElements.define('humber-clock', HumberClock);