interface Book{  // Interface definitions for Book and Game
    itemType:string;
    title:string;
    isbn:number;
}
  interface Game{
    itemType:string;
    title:string;
    style:string;
    price:number;
}
  class Collection<T> { // Generic Class `Collection`
    public data: T[] = [];
    add(item: T): void {   // Method to add an item of type `T` to the collection
      this.data.push(item);
    }
}
  // Creating an instance of `Collection` with type parameter `Book`
  let itemOne = new Collection<Book>();
  itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
  itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
  console.log(itemOne);
  // Creating an instance of `Collection` with type parameter `Game`
  let itemTwo = new Collection<Game>();
  itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
    }
);
  console.log(itemTwo);