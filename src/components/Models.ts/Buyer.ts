import { IBuyer } from "../../types";
import { TPayment } from "../../types";
import { ValidationResult, ValidationErrors } from "../../types";

export class Buyer {
    private payment: TPayment | '';
    private address: string;
    private phone: string;
    private email: string;

    constructor() {
        this.payment = '';
        this.address = '';
        this.phone = '';
        this.email = '';
    }

    save(data: Partial<IBuyer>): void {
        if (data.payment !== undefined) {
            this.payment = data.payment;
        }
        if (data.address !== undefined) {
            this.address = data.address;
        }
        if (data.email !== undefined) {
            this.email = data.email;
        }
        if (data.phone !== undefined) {
            this.phone = data.phone;
        }
    }

    getBuyer(): IBuyer {
        return {
            payment: this.payment,
            address: this.address,
            phone: this.phone,
            email: this.email
        }
    }

    clearBuyerData() {
        this.payment = "";
        this.address = "";
        this.phone = "";
        this.email = "";
    }

    validate(): ValidationResult {
        const errors: ValidationErrors = {};

        if (!this.payment) {
            errors.payment = "Не выбран вид оплаты";
        }

        if (!this.email || !this.email.trim()) {
            errors.email = "Укажите email";
        }

        if (!this.phone || !this.phone.trim()) {
            errors.phone = "Укажите телефон";
        }

        if (!this.address || !this.address.trim()) {
            errors.address = "Укажите адрес";
        }

        return {
            valid: Object.keys(errors).length === 0,
            errors
        };
    }
}
