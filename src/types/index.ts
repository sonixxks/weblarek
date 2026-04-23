export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export type TValidationErrors = {
  payment?: string;
  address?: string;
  email?: string;
  phone?: string;
};

export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export type TPayment = 'card' | 'cash';

export interface IBuyer {
    payment: TPayment | '';
    email: string;
    phone: string;
    address: string;
}

// GET
export interface IProductResponse {
    total: number;
    items: IProduct[];
}

// Данные для POST
export interface IOrder extends IBuyer {
    total: number;
    items: string[];
}

// Ответ на POST
export interface IOrderResponse {
    id: string;
    total: number;
}

export interface ICardActions {
    onClick?: (event: MouseEvent) => void;
}