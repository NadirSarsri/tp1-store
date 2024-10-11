import React, { Component } from "react";
class Item extends Component {
  render() {
    const { imageUrl, price, title, quantity } = this.props.item;
    const { onIncrement, onDecrement, onDelete, item } = this.props;
    return (
      <div className="row border-bottom mb-3 rounded bg-light shadow-sm">
        <div className="col-2">
          <img src={imageUrl} alt={title} className="img-fluid rounded" />
        </div>
        <div className="col-6">
          <h5>{title}</h5>
          <p>{`Unit price: ${price.toFixed(2)} MAD`}</p>
          <p className="">
            <span className="fw-bold">Subtotal: </span>
            <span>{`${(price * quantity).toFixed(2)} MAD`}</span>
          </p>
        </div>
        <div className="col-4 d-flex justify-content-around align-items-center">
          <button
            onClick={() => onDecrement(item)}
            disabled={quantity === 1}
            className="btn btn-secondary"
          >
            -
          </button>
          <span className="badge text-bg-primary">{quantity}</span>
          <button
            onClick={() => onIncrement(item)}
            className="btn btn-secondary"
          >
            +
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(item)}>
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
