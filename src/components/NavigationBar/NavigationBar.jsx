import { useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.NavigationBar}>
      <h1 className={styles.title}>Pepe Shop</h1>
      <button onClick={() => navigate("/")} className={styles.button}>
        HOME
      </button>
      <button onClick={() => navigate("/cart")} className={styles.button}>
        CART
      </button>
    </div>
  );
}

export default NavigationBar;
