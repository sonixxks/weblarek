import { IProduct } from '../../types';
import { IEvents } from '../base/Events';

export class ShoppingCart {
    private _items: IProduct[] = [];

    constructor(private events: IEvents) {}

    getItems(): IProduct[] {
        return this._items;
    }

    addItem(item: IProduct): void {
        if (!this.isInCart(item.id)) {
            this._items.push(item);
            this.events.emit('basket:changed');
        }
    }

    removeItem(itemId: string): void {
        this._items = this._items.filter(item => item.id !== itemId);
        this.events.emit('basket:changed');
    }

    clear(): void {
        this._items = [];
        this.events.emit('basket:changed');
    }

    getTotalPrice(): number {
        return this._items.reduce((total, item) => {
            return total + (item.price || 0);
        }, 0);
    }

    getCount(): number {
        return this._items.length;
    }

    isInCart(itemId: string): boolean {
        return this._items.some(item => item.id === itemId);
    }
}