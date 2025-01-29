import { useState, useEffect } from "react";
import styles from "./ShoppingGrid.module.css";

function ShoppingGrid({ basket, setBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function setData() {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      console.log("Raw data:", data); // Let's see what we're getting

      setProducts(data);
    }

    setData();
  }, []);

  function addToCart(itemId) {
    console.log(basket);
    const currentBasket = [...basket];
    currentBasket.push(products.find((item) => item.id === itemId));
    setBasket(currentBasket);
  }

  return (
    <div className={styles.gridContainer}>
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.description} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>description</div>
            <button onClick={() => addToCart(item.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingGrid;
