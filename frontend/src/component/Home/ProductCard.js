import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import './ProductCard.css'
const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>

      </div>
      <span className="price">{`$${product.price}`}</span>
      <span><b className={product.Stock < 1 ? "redColor" : "greenColor"}>
        {product.Stock < 1 ? "Liên hệ" : "Còn Hàng"}
      </b></span>
    </Link>
  );
};

export default ProductCard;
