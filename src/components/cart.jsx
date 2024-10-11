import React, { Component } from "react";
import Item from "./item";
class Cart extends Component {
  render() {
    const { onCloseCart, items, onIncrement, onDecrement, onDelete } =
      this.props;
    const totalPrice = items.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );
    return (
      <div className="cart p-3">
        <header>
          <button
            onClick={onCloseCart}
            title="close cart"
            id="closeCart"
            className="btn-close"
          ></button>
          <h4 className="display-6">{`You have ${items.length} item(s) in the cart`}</h4>
        </header>
        <hr />
        <h4>{`Total: ${totalPrice.toFixed(2)} MAD`}</h4>
        <hr />
        <div className="container-fluid">
          {items.map((item) => (
            <Item
              onDecrement={onDecrement}
              onDelete={onDelete}
              onIncrement={onIncrement}
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
