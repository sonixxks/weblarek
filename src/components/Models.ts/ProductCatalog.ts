import { IProduct } from "../../types";

export class ProductCatalog {
    private products: IProduct[];
    private productCard: IProduct | null;

    constructor() {
        this.products = [];
        this.productCard = null;
    }

    setProducts(products: IProduct[]): void {
        this.products = products;
    }

    getProducts(): IProduct[] {
        return this.products;
    }

    getProductsById(id: string): IProduct | undefined {
        return this.products.find((product) => product.id === id);
    }

    setProductCard(productCard: IProduct): void {
        this.productCard = productCard;
    }

    getProductCard(): IProduct | null {
        return this.productCard;
    }
}