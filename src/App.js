import React, { Component } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Cart from "./components/cart";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "Apple Watch 4",
        price: 2500,
        imageUrl: "./images/img01.jpg",
      },
      {
        id: 2,
        title: "Huawei Watch Pro GT",
        price: 3500,
        imageUrl: "./images/img02.jpg",
      },
      {
        id: 3,
        title: "Sumsung Watch 2",
        price: 2000,
        imageUrl: "./images/img03.jpg",
      },
      {
        id: 4,
        title: "Xiaomi Watch 3",
        price: 1500,
        imageUrl: "./images/img04.jpg",
      },
    ],
    cart: [],
    cartVisibility: false,
  };
  handleCloseCart = () => {
    this.setState({ cartVisibility: false });
  };
  handleShowCart = () => {
    this.setState({ cartVisibility: true });
  };

  handleAddItem = (product) => {
    const items = [...this.state.cart];
    const itemInCart = items.find((it) => it.id === product.id);
    if (!itemInCart) {
      // item doesn't exist in the cart
      const item = { ...product, quantity: 1 };
      items.push(item);
    } else {
      // item exists in the cart
      const item = { ...itemInCart, quantity: itemInCart.quantity + 1 };
      const index = items.findIndex((it) => it.id === itemInCart.id);
      items[index] = item;
    }
    this.setState({ cart: items, cartVisibility: true });
  };

  handleIncrementQuantity = (item) => {
    const items = [...this.state.cart];
    const modifiedItem = { ...item, quantity: item.quantity + 1 };
    const index = items.indexOf(item);
    items[index] = modifiedItem;
    this.setState({ cart: items });
  };
  handleDecrementQuantity = (item) => {
    const items = [...this.state.cart];
    const modifiedItem = { ...item, quantity: item.quantity - 1 };
    const index = items.indexOf(item);
    items[index] = modifiedItem;
    this.setState({ cart: items });
  };
  handleDeleteItem = (item) => {
    const items = this.state.cart.filter((it) => it.id !== item.id);
    this.setState({ cart: items });
  };
  render() {
    const { cartVisibility, products, cart } = this.state;
    return (
      <div>
        {cartVisibility && (
          <Cart
            items={cart}
            onIncrement={this.handleIncrementQuantity}
            onDecrement={this.handleDecrementQuantity}
            onDelete={this.handleDeleteItem}
            onCloseCart={this.handleCloseCart}
          />
        )}
        <Navbar totalItems={cart.length} onShowCart={this.handleShowCart} />
        <main className="container pt-3">
          <div className="row">
            <aside className="col-lg-2">Categories</aside>
            <div className="col-lg-10">
              <Products products={products} onAddItem={this.handleAddItem} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
