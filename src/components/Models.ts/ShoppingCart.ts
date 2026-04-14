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
        this.products.filter((product) => product.id !== id);
    }

    clearCart(): void {
        this.products = [];
    }

    getTotalPrice(): number {
        let sum = 0;

        for (const product of this.products) {
            if (product.price !== null && product.price !== undefined) {
                sum += product.price;
            } else {
                sum += 0;
            }
        }
        return sum;
    }

    getProductCount(): number {
        return this.products.length;
    }

    hasProduct(id: string): boolean {
        return this.products.some((product) => product.id === id)
    }
}