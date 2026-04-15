import { IProduct } from "../../types";

export class ShoppingCart {
    private products: IProduct[];

    constructor() {
        this.products = [];
    }

    getProducts(): IProduct[] {
        return this.products;
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
    }

    removeProduct(id: string): void {
        this.products = this.products.filter((product) => product.id !== id);
    }

    clearCart(): void {
        this.products = [];
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