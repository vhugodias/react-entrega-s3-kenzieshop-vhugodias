import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";

import "./style.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, author, img, price } = product;
  const { cart } = useSelector((state) => state);
  const handleAdd = () => {
    const sameId = cart.filter((product) => product.id === id);
    if (sameId.length === 0) {
      dispatch(addToCartThunk(product));
    }
  };
  return (
    <div className="cardContainer">
      <img src={img} />
      <h2>{name}</h2>
      <h3 className="author">{author}</h3>
      <h3 className="price">R$: {price.toFixed(2)}</h3>
      <button onClick={handleAdd}>Adicionar ao carrinho</button>
    </div>
  );
};

export default Product;
