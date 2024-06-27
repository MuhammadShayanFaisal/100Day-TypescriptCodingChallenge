var ProductImplementInterface = /** @class */ (function () {
    function ProductImplementInterface(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductImplementInterface.generateNextId = function () {
        return ProductImplementInterface.nextId++;
    };
    ProductImplementInterface.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    // 'private' property
    ProductImplementInterface.nextId = 1;
    return ProductImplementInterface;
}());
// Generate unique IDs for products using the static method
var product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
var product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());
