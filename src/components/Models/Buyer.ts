import { IBuyer, TPayment, TValidationErrors } from "../../types";
import { IEvents } from "../base/Events";

export class Buyer {
    private _payment: TPayment | null = null;
    private _address: string = "";
    private _email: string = "";
    private _phone: string = "";

    constructor(private events: IEvents) {}

    save(data: Partial<IBuyer>): void {
        if (data.payment !== undefined) {
            this._payment = data.payment as TPayment;
        }
        if (data.address !== undefined) {
            this._address = data.address;
        }
        if (data.email !== undefined) {
            this._email = data.email;
        }
        if (data.phone !== undefined) {
            this._phone = data.phone;
        }
        this.events.emit("order:changed");
    }

    getBuyer(): IBuyer {
        return {
            payment: this._payment || "", 
            address: this._address,
            email: this._email,
            phone: this._phone,
        };
    }

    clear(): void {
        this._payment = null;
        this._address = "";
        this._email = "";
        this._phone = "";
        this.events.emit("order:changed");
    }

    validate(): TValidationErrors {
        const errors: TValidationErrors = {};

        if (!this._payment) {
            errors.payment = "Выберите способ оплаты";
        }

        if (!this._address || this._address.trim() === "") {
            errors.address = "Укажите адрес доставки";
        }

        if (!this._email || this._email.trim() === "") {
            errors.email = "Укажите email";
        }

        if (!this._phone || this._phone.trim() === "") {
            errors.phone = "Укажите телефон";
        }
        return errors;
    }
}