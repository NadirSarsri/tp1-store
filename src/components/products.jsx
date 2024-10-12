import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  state = {};
  render() {
    const { products: allProducts, onAddItem, selectedCategory } = this.props;
    let filteredProducts = allProducts;
    if (selectedCategory.id !== 0) {
      filteredProducts = allProducts.filter(
        (product) => product.idCategory === selectedCategory.id
      );
    }
    return (
      <div className="row g-3">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} onAddItem={onAddItem} />
        ))}
      </div>
    );
  }
}

export default Products;
