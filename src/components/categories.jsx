import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    const { categories, onSelectCategory, selectedCategory } = this.props;
    return (
      <ul className="list-group">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`list-group-item ${
              selectedCategory.id === category.id ? "active" : ""
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    );
  }
}
