import './scss/styles.scss';
import { ProductCatalog } from './components/Models.ts/ProductCatalog';
import { ShoppingCart } from './components/Models.ts/ShoppingCart';
import { Buyer } from './components/Models.ts/Buyer';
import { apiProducts } from './utils/data';
import { TPayment } from './types';
import { ShopApi } from "./components/ShopApi";
import { Api } from "./components/base/Api";
import { API_URL } from "./utils/constants";

const productsCatalog = new ProductCatalog();

console.log(`Начальный массив товаров из каталога: ${productsCatalog.getProducts()}`);

productsCatalog.setProducts(apiProducts.items);
console.log('Все товары в каталоге:', productsCatalog.getProducts());
console.log('Количество товаров в каталоге:', productsCatalog.getProducts().length);

const productId = apiProducts.items[0]?.id;
if (productId) {
    const foundProduct = productsCatalog.getProductsById(productId);
    console.log(`Поиск товара с ID ${productId}:`, foundProduct);
}

productsCatalog.setProductCard(apiProducts.items[0]);
console.log('Сохраненная карточка товара:', productsCatalog.getProductCard());

const shoppingCart = new ShoppingCart();

console.log('Начальное состояние корзины:', shoppingCart.getProducts());

shoppingCart.addProduct(apiProducts.items[0]);
shoppingCart.addProduct(apiProducts.items[1]);
console.log("Корзина после добавления:", shoppingCart.getProducts());
console.log('Количество товаров в корзине после добавления:', shoppingCart.getProductCount());
console.log('Общая стоимость корзины после добавления:', shoppingCart.getTotalPrice());
console.log("Есть ли первый товар:", shoppingCart.hasProduct(apiProducts.items[0].id));

shoppingCart.removeProduct(apiProducts.items[0].id);
console.log("Корзина после удаления:", shoppingCart.getProducts());
console.log('Количество товаров после удаления:', shoppingCart.getProductCount());
console.log('Общая стоимость после удаления:', shoppingCart.getTotalPrice());

shoppingCart.clearCart();
console.log("Корзина после очистки:", shoppingCart.getProducts());
console.log('Количество товаров после очистки:', shoppingCart.getProductCount());

const testBuyerData = {
  payment: "card" as TPayment,
  phone: "+7 999 999-99-99",
  address: "г. Екатеринбург, ул. Коминтерна, д. 11, кв. 11",
  email: 'sonixks@yandex.ru'
};

const buyer = new Buyer(testBuyerData);

console.log('Валидация корректных данных:', buyer.validate());
console.log('Получение данных покупателя:', buyer.getBuyer());

console.log('Очистка данных');
buyer.clearBuyerData();
console.log('Валидация после очистки:', buyer.validate());

console.log('Сохраняем данные');
buyer.save();

const baseApi = new Api(API_URL);
const shopApi = new ShopApi(baseApi);
shopApi
  .getProducts()
  .then((data) => {
    const products = data.items;
    productsCatalog.setProducts(products); 

    console.log(productsCatalog);
  })
  .catch((err) => {
    console.log(err);
  });