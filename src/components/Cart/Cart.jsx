import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./Cart.module.css";

function Cart(props) {
  const counts = {};
  if (props.basket) {
    props.basket.forEach((item) => {
      counts[item.id] = (counts[item.id] || 0) + 1;
    });
  }

  console.log(counts);

  return (
    <>
      <NavigationBar {...props} />
      <div className={styles.gridContainer}>
        {Object.entries(counts).length > 0 ? (
          Object.entries(counts).map(([itemId, count]) => {
            return (
              <div key={itemId} className={styles.cartItem}>
                <img
                  src={
                    props.basket.find((item) => item.id === Number(itemId))
                      .image
                  }
                  alt=""
                />
                <h2 className="h2">{count}</h2>
              </div>
            );
          })
        ) : (
          <h2>Cart is empty.</h2>
        )}
      </div>
    </>
  );
}

export default Cart;
