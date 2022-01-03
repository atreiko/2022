const template = document.createElement('template')
template.innerHTML = `
    <style>

        .tooltip-container {
            display: inline-block;
            position: relative;
            z-index: 2;
        }

        svg {
            width: 1em;
            cursor: pointer;
        }

        .cancel {
            display: none;
        }

        .notify-container {
            position: absolute;
            bottom: 125%;
            background: #fff;
            box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
            width: 300px;
            font-size: .8em;
            padding: 1em;
            border-radius: .5em;
            z-index: 9;
            transform: scale(0);
            transform-origin: bottom left;
            transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }

    </style>
 
    <div class='tooltip-container'>
        <svg class="alert" enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24">
            <path d="M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"/>
            <g>
                <path d="M12,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S7.6,4,12,4 M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10   C22,6.5,17.5,2,12,2L12,2z"/>
            </g>
        </svg>

        <svg class="cancel" viewBox="0 0 48 48">
            <path d="M24 4c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm10 27.17l-2.83 2.83-7.17-7.17-7.17 7.17-2.83-2.83 7.17-7.17-7.17-7.17 2.83-2.83 7.17 7.17 7.17-7.17 2.83 2.83-7.17 7.17 7.17 7.17z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
        </svg>

        <div class="notify-container">
            <slot name="message"/>
        </div>
    </div>
`; 


class PopupNotify extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    tooltip(expandState) {
        const tooltip = this.shadowRoot.querySelector('.notify-container')
        const alert = this.shadowRoot.querySelector('.alert')
        const cancel = this.shadowRoot.querySelector('.cancel')

        if(expandState) {
            tooltip.style.transform = 'scale(1)';
            alert.style.display = 'none';
            cancel.style.display = 'block'
            expandState = false
        } else {
            tooltip.style.transform = 'scale(0)';
            cancel.style.display = 'none';
            alert.style.display = 'block'
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.alert').addEventListener('click', () => {
            this.tooltip(true)
        })

        this.shadowRoot.querySelector('.cancel').addEventListener('click', () => {
            this.tooltip(false)
        })

        if(this.getAttribute('tip_background')) {
            this.shadowRoot.querySelector('.notify-container').style.background = this.getAttribute('tip_background')
        }

        if(this.getAttribute('tip_color')) {
            this.shadowRoot.querySelector('.notify-container').style.color = this.getAttribute('tip_color')
        }
    }
}

window.customElements.define('popup-notify', PopupNotify) 