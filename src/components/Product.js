import React, { useEffect } from "react";
import FormetPrice from "../Helpers/FormetPrice";
import { NavLink } from "react-router-dom";
// const Product = ({ id, name, image, price, category }) => {
const Product = ({ id, name='product', image='urls', price='profit', category='all' }) => {

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            
            <p className="card-data--price"><FormetPrice price={price}/></p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
