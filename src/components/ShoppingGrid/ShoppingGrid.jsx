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

  function addToCart(itemId, quantity = 1) {
    console.log(basket);
    const currentBasket = [...basket];
    for (let i = 0; i < quantity; i++) {
      currentBasket.push(products.find((item) => item.id === itemId));
    }
    setBasket(currentBasket);
  }

  return (
    <div className={styles.gridContainer}>
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.description} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              marginLeft: "10%",
            }}
          >
            <div>description</div>
            <div
              style={{
                display: "flex",
                width: "fit-content",
                // flex: "0 0 auto",
                justifyContent: "flex-end",
              }}
            >
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                defaultValue={1}
                id={`quantity-${item.id}`}
                style={{ width: "50%" }}
              />
              <button
                onClick={() => {
                  addToCart(
                    item.id,
                    parseInt(
                      document.querySelector(`#quantity-${item.id}`).value
                    )
                  );
                  document.querySelector(`#quantity-${item.id}`).value = 1;
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingGrid;
