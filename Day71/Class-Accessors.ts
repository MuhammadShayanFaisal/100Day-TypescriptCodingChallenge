// Following is the example of class accessors with functions and variables
class ProductExAccessors {
    private _price: number;// 'private' property
    constructor(private id: number, private name: string) {
      this._price = 0; // Default price
    }
    get price(): number {// 'public' getter for price
      return this._price; 
    }
    set price(newPrice: number) {// 'public' setter for price
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
    }
}
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}
  // Create an instance of the ProductExAccessors class
const productEx=new ProductExAccessors(1,"Widget");
  console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
  // Use the 'setter' to update the price
  productEx.price = 20.0;
  console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
  // Attempting to set a negative price triggers the setter logic
  productEx.price = -5; // Price cannot be negative.
  console.log(productEx.getProductInfo());