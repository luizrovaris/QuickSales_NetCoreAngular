"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreBasket = /** @class */ (function () {
    function StoreBasket() {
        this.products = [];
    }
    StoreBasket.prototype.addProduct = function (product) {
        var productsLocalStorage = localStorage.getItem("productsLocalStorage");
        if (productsLocalStorage) {
            this.products = JSON.parse(productsLocalStorage);
        }
        this.products.push(product);
        localStorage.setItem("productsLocalStorage", JSON.stringify(this.products));
    };
    StoreBasket.prototype.updateProducts = function (products) {
        localStorage.setItem("productsLocalStorage", JSON.stringify(products));
    };
    StoreBasket.prototype.getProducts = function () {
        var productsLocalStorage = localStorage.getItem("productsLocalStorage");
        if (productsLocalStorage) {
            this.products = JSON.parse(productsLocalStorage);
        }
        return this.products;
    };
    StoreBasket.prototype.removeProduct = function (product) {
        var productsLocalStorage = localStorage.getItem("productsLocalStorage");
        if (productsLocalStorage) {
            this.products = JSON.parse(productsLocalStorage);
            localStorage.setItem("productsLocalStorage", JSON.stringify(this.products.filter(function (p) { return p.id != product.id; })));
        }
    };
    StoreBasket.prototype.cleanBasket = function () {
        localStorage.setItem("productsLocalStorage", "");
    };
    StoreBasket.prototype.isBasketEmpty = function () {
        return this.getProducts().length < 1;
    };
    return StoreBasket;
}());
exports.StoreBasket = StoreBasket;
//# sourceMappingURL=store.basket.js.map