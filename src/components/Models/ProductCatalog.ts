import { IProduct } from '../../types/index';
import { IEvents } from '../base/Events';

export class ProductCatalog {
    private _items: IProduct[] = [];
    private _preview: string | null = null;

    constructor(private events: IEvents) {}

    setItems(items: IProduct[]): void {
        this._items = items;
        this.events.emit('catalog:changed');
    }

    getItems(): IProduct[] {
        return this._items;
    }

    getProduct(id: string): IProduct | undefined {
        return this._items.find(item => item.id === id);
    }

    setPreview(id: string): void {
        this._preview = id;
        this.events.emit('preview:changed');
    }

    getPreview(): IProduct | undefined {
        if (!this._preview) return undefined;
        return this.getProduct(this._preview);
    }
}