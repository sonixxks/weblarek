import { Component } from "../base/Component";
import { IEvents } from "../base/Events";
import { ensureElement } from "../../utils/utils";

export class Modal extends Component<HTMLElement> {
  protected closeButton: HTMLButtonElement;
  protected contentContainer: HTMLElement;

  constructor(container: HTMLElement, protected events: IEvents) {
    super(container);

    this.closeButton = ensureElement<HTMLButtonElement>(".modal__close", this.container);
    this.contentContainer = ensureElement<HTMLElement>(".modal__content", this.container);

    this.closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        this.close();
    });

    this.container.addEventListener("click", (event) => {
      if (event.target === this.container) {
        this.close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        this.container.classList.contains("modal_active")
      ) {
        this.close();
      }
    });
  }

  open(content: HTMLElement): void {
    this.contentContainer.replaceChildren(content);
    this.container.classList.add('modal_active');
  }

  close(): void {
    this.container.classList.remove("modal_active");
    this.contentContainer.innerHTML = "";
  }
}