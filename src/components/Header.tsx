import { useEffect, useState } from "react";
import { getCurrencies } from "../apiServise";

interface Rate {
  currency: string;
  value: number;
}

const Header = () => {
  const [rates, setRates] = useState<Rate[]>([
    { currency: "EUR", value: 0.0 },
    { currency: "USD", value: 0.0 },
  ]);
  useEffect(() => {
    getCurrencies().then(({ data }) => {
      const allRates: Rate[] = Object.entries(data.data).map(rate => ({
        currency: rate[0],
        value: rate[1] as number,
      }));
      setRates(allRates);
    });
  }, []);
  return (
    <header className="header">
      <p className="header__logo">CurrencyRates</p>
      <div className="header__content">
        {rates.map(rate => (
          <div key={rate.currency}>
            <p>{rate.currency}</p>
            <p>{rate.value.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
