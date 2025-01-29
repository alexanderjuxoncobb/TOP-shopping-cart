import { useNavigate, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.css";

function NavigationBar(props) {
  const navigate = useNavigate();
  // const [cart, setCart] = useState(false);

  // const navigation = (cart) => {
  //   navigate(cart ? "/cart" : "/");
  //   setCart(cart);
  // };

  const isCart = useLocation().pathname.endsWith("/cart");

  return (
    <div className={styles.NavigationBar}>
      <h1 className={styles.title}>Pepe Shop</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => navigate("/")} className={styles.button}>
          HOME
        </button>

        <div className={styles.cartContainer}>
          <button onClick={() => navigate("/cart")} className={styles.button}>
            CART
          </button>
          {props.basket.length > 0 && (
            <div className={styles.badge}>{props.basket.length}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
