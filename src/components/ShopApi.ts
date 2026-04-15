import { IApi, IProductResponse, IOrder, IOrderResponse } from "../types";

export class ShopApi {
    private api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    getProducts(): Promise<IProductResponse> {
        return this.api.get<IProductResponse>("/product/");
    }

    createOrder(order: IOrder): Promise<IOrderResponse> {
        return this.api.post<IOrderResponse>("/order/", order);
    }
}