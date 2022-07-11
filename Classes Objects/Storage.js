class Storage {

    constructor(capacity) {
        this.capacity = capacity
        this.storage = [];
        this.totalCost = 0

    }

    addProduct(product) {
        this.storage.push(product)
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity
    }
    getProducts() {
          this.storage = this.storage.map(item => JSON.stringify(item))
          return this.storage.join("\n")
    }

}

-> {"name":"Cucamber","price":1.5,"quantity":15}
   {"name":"Tomato","price":0.9,"quantity":25}
   {"name":"Bread","price":1.1,"quantity":8}
   2
   53.8
  [
   '{"name":"Cucamber","price":1.5,"quantity":15}',
   '{"name":"Tomato","price":0.9,"quantity":25}',
   '{"name":"Bread","price":1.1,"quantity":8}'
  ]
