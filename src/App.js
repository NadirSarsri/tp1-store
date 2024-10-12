import React, { Component } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Cart from "./components/cart";
import Categories from "./components/categories";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        idCategory: 1,
        title: "Apple Watch 4",
        price: 2500,
        imageUrl: "./images/img01.jpg",
      },
      {
        id: 2,
        idCategory: 1,
        title: "Huawei Watch Pro GT",
        price: 3500,
        imageUrl: "./images/img02.jpg",
      },
      {
        id: 3,
        idCategory: 1,
        title: "Sumsung Watch 2",
        price: 2000,
        imageUrl: "./images/img03.jpg",
      },
      {
        id: 4,
        idCategory: 1,
        title: "Xiaomi Watch 3",
        price: 1500,
        imageUrl: "./images/img04.jpg",
      },
      {
        id: 5,
        idCategory: 2,
        title: "Huawei Nova 7i",
        price: 2500,
        imageUrl: "./images/img13.jpg",
      },
      {
        id: 6,
        idCategory: 2,
        title: "Xiaomi Redmi 11d",
        price: 2700,
        imageUrl: "./images/img14.jpg",
      },
      {
        id: 7,
        idCategory: 2,
        title: "Iphone 12 Pro",
        price: 11500,
        imageUrl: "./images/img15.jpg",
      },
      {
        id: 8,
        idCategory: 2,
        title: "Iphone X",
        price: 2500,
        imageUrl: "./images/img16.jpg",
      },
      {
        id: 9,
        idCategory: 3,
        title: "Dell Workstation",
        price: 32500,
        imageUrl: "./images/img09.jpg",
      },
      {
        id: 10,
        idCategory: 3,
        title: "HP Workstation",
        price: 12700,
        imageUrl: "./images/img10.jpg",
      },
      {
        id: 11,
        idCategory: 3,
        title: "Lenovo Worksation",
        price: 13500,
        imageUrl: "./images/img11.jpg",
      },
      {
        id: 12,
        idCategory: 3,
        title: "Azus Worksation",
        price: 15000,
        imageUrl: "./images/img12.jpg",
      },
      {
        id: 13,
        idCategory: 4,
        title: "Nintendo Switch",
        price: 5000,
        imageUrl: "./images/img18.jpg",
      },
      {
        id: 14,
        idCategory: 4,
        title: "Play Station 5",
        price: 4500,
        imageUrl: "./images/img19.jpg",
      },
      {
        id: 15,
        idCategory: 4,
        title: "Play Station Pro",
        price: 11500,
        imageUrl: "./images/img20.jpg",
      },
      {
        id: 16,
        idCategory: 4,
        title: "Lotech",
        price: 2000,
        imageUrl: "./images/img21.jpg",
      },
    ],
    cart: [],
    cartVisibility: false,
    categories: [
      { id: 0, name: "All categories" },
      { id: 1, name: "Watch" },
      { id: 2, name: "Smartphone" },
      { id: 3, name: "Workstation" },
      { id: 4, name: "Gaming" },
    ],
    selectedCategory: {
      id: 0,
      name: "All categories",
    },
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

  handleSelectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { cartVisibility, products, cart, categories, selectedCategory } =
      this.state;
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
            <aside className="col-lg-2">
              <Categories
                onSelectCategory={this.handleSelectCategory}
                selectedCategory={selectedCategory}
                categories={categories}
              />
            </aside>
            <div className="col-lg-10">
              <Products
                selectedCategory={selectedCategory}
                products={products}
                onAddItem={this.handleAddItem}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
