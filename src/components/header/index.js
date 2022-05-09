import { useHistory } from "react-router-dom";
import "./style.css";

const Header = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const handleCart = () => {
    history.push("/carrinho");
  };

  return (
    <div className="header">
      <h1 onClick={handleHome}>Kenzie Books</h1>
      <button onClick={handleCart}>Carrinho</button>
    </div>
  );
};

export default Header;
