import { useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import "./style.css";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, author, img, price } = product;
  const handleRemove = () => {
    console.log(product);
    dispatch(removeFromCartThunk(id));
  };
  return (
    <li className="cartCard">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{author}</h3>
      <h3>R$: {price.toFixed(2)}</h3>
      <button onClick={handleRemove}>Remover</button>
    </li>
  );
};

export default ProductCart;
