import { useState, useEffect } from "react";
import styles from "./ShoppingGrid.module.css";

function ShoppingGrid() {
  const [products, setProducts] = useState([]);
  console.log(products);

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

  return (
    <div className={styles.gridContainer}>
      {products.map((item, index) => (
        <div>
          <img key={index} src={item.image} alt={item.description} />
          <div>description</div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingGrid;
