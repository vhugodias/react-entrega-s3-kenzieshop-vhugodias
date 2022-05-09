import { useSelector } from "react-redux";
import ProductCart from "../cartCard";
import "./style.css";

const CartList = () => {
  const cart = useSelector(({ cart }) => cart);
  console.log(cart);

  const totalMoney = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  return (
    <>
      {cart.length > 0 ? (
        <div className="cartContainer">
          <div className="cartInfo">
            <ul>
              {cart.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}
            </ul>
          </div>
          <div className="totalMoney">
            <h3>Resumo do Pedido:</h3>
            <div className="totalMoney-info">
              <p>{cart.length} Produtos</p>
              <p>R$ {totalMoney}</p>
            </div>
            <button>Finalizar</button>
          </div>
        </div>
      ) : (
        <div className="cartInfo-Empty">
          <h1>Carrinho vazio</h1>
        </div>
      )}
    </>
  );
};

export default CartList;
