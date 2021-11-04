class CartBuilder {
    items = []; 
    size = 0;
    total() {
        var totalPrice = 0.00;
        for (let i = 0; i < this.items.length; i++){
            totalPrice = totalPrice + this.items[i].price;
        }
        return totalPrice;
    };
    add(item){
        this.items.push(item);
        this.size++;
    };
    remove(itemid){
        this.items = this.items.filter(cartItem=>{
            return cartItem.id !== itemid;
        })
        this.size--;
    };
    isEmpty() {
        return (this.size === 0);
    };
    log(){
        console.log(this.items);
    };
}



export var cart = new CartBuilder();