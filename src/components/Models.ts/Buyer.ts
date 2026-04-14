import { IBuyer } from "../../types";
import { TPayment } from "../../types";

type ValidationResult = {
    valid: boolean;
    errors: {
        payment?: string;
        address?: string;
        phone?: string;
        email?: string;
    };
};

export class Buyer {
    private payment: TPayment;
    private address: string;
    private phone: string;
    private email: string;

    constructor(data: IBuyer) {
        this.payment = data.payment;
        this.address = data.address;
        this.phone = data.phone;
        this.email = data.email;
    }

    save(): void {}

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
        const errors: ValidationResult["errors"] = {};

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
