import React, { Component } from "react";
class Product extends Component {
  render() {
    const { imageUrl, title, price } = this.props.product;
    const { product, onAddItem } = this.props;
    return (
      <div className="col-md-6 col-lg-3">
        <div className="card">
          <img src={imageUrl} alt={title} className="card-img-top" />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <h6 className="card-subtitle text-muted">{`${price} MAD`}</h6>
            <button
              onClick={() => onAddItem(product)}
              className="mt-2 btn btn-sm btn-outline-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
