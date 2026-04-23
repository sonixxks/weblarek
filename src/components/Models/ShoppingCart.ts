import { IProduct } from "../../types";
import { IEvents } from '../base/Events';

export class ShoppingCart {
    private products: IProduct[] = [];

    constructor(private events: IEvents) {}

    getProducts(): IProduct[] {
        return this.products;
    }

    addProduct(product: IProduct): void {
        if (!this.hasProduct(product.id)) {
            this.products.push(product);
            this.events.emit('cart:changed');
        }
    }

    removeProduct(id: string): void {
        const initialLength = this.products.length;
        this.products = this.products.filter((product) => product.id !== id);
        
        if (this.products.length !== initialLength) {
            this.events.emit('cart:changed');
        }
    }

    clearCart(): void {
        if (this.products.length > 0) { // ← Не эмитим, если корзина уже пуста
            this.products = [];
            this.events.emit('cart:changed');
        }
    }

    getTotalPrice(): number {
        return this.products.reduce((sum, product) => sum + (product.price ?? 0), 0);
    }

    getProductCount(): number {
        return this.products.length;
    }

    hasProduct(id: string): boolean {
        return this.products.some((product) => product.id === id)
    }
}