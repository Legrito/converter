import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.sass";
import Header from "./components/Header";
import CurrensyForm from "./components/CurrencyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrap">
      <Header />
      <div className="currency-form__wrap">
        <CurrensyForm />
      </div>
    </div>
  );
}

export default App;
