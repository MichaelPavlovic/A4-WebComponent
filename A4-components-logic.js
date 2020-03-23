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

        //appent to shadow root
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
    connectedCallback(){
        const count = this.shadowRoot.getElementById('countdown');

        setInterval(function(){
            let current = new Date();
            let hours = current.getHours();
            let minutes = current.getMinutes();
            let seconds = current.getSeconds();

            if(minutes < 10 ){
                minutes = '0' + minutes;
            }

            if(seconds < 10){
                seconds = '0' + seconds;
            }

            count.innerHTML = hours + ":" + minutes + ":" + seconds;
        }, 1000);
    }
}

customElements.define('humber-clock', HumberClock);