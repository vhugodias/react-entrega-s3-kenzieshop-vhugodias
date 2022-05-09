import { useSelector } from "react-redux";
import Product from "../productCard";
import "./style.css";

const ProductList = () => {
  const products = useSelector(({ products }) => products);
  console.log(products);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
