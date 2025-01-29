import NavigationBar from "../NavigationBar/NavigationBar";
import ShoppingGrid from "../ShoppingGrid/ShoppingGrid";

function Home({ basket, setBasket }) {
  console.log(basket);

  return (
    <>
      <NavigationBar basket={basket} setBasket={setBasket} />
      <div>Home</div>
      <ShoppingGrid basket={basket} setBasket={setBasket} />
    </>
  );
}

export default Home;
