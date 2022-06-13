import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Card/Cart";
import CardProvider from "./store/CartProvider";

function App() {
  const [isCardShown, setIsCardShown] = useState(false);

  const showCardHandler = () => {
    setIsCardShown(true);
  };

  const hideCardHandler = () => {
    setIsCardShown(false);
  };

  return (
    <CardProvider>
      {isCardShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCard={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
