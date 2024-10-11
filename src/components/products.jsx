import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  state = {};
  render() {
    const { products, onAddItem } = this.props;
    return (
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddItem={onAddItem} />
        ))}
      </div>
    );
  }
}

export default Products;
