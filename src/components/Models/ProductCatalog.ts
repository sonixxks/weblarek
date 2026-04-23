import { IProduct } from "../../types";
import { IEvents } from '../base/Events';

export class ProductCatalog {
    private products: IProduct[] = [];
    private productCard: IProduct | null = null;

    constructor(private events: IEvents) {}

    setProducts(products: IProduct[]): void {
        this.products = products;
        this.events.emit('catalog:changed');
    }

    getProducts(): IProduct[] {
        return this.products;
    }

    getProductsById(id: string): IProduct | undefined {
        return this.products.find((product) => product.id === id);
    }

    setProductCard(productCard: IProduct): void {
        this.productCard = productCard;
        this.events.emit('product:changed');
    }

    getProductCard(): IProduct | null {
        return this.productCard;
    }
}