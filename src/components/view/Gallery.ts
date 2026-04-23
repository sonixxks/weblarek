import { Component } from '../base/Component';

export class Gallery extends Component<HTMLElement> {
    protected catalogElement: HTMLElement;

    constructor(container: HTMLElement) {
        super(container);
        this.catalogElement = container;
    }

    set catalog(items: HTMLElement[]) {
        this.catalogElement.innerHTML = '';
        items.forEach(item => {
            this.catalogElement.appendChild(item);
        });
    }
}