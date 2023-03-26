import { useEffect, useState } from "react";
import { getCurrencySymbols, getCurrencyRate } from "../apiServise";
import CurrencyFormField from "./CurrencyFormField";

export interface Currency {
  value: string;
  label: string;
}

const CurrensyForm = () => {
  const [currencyOptions, setCurrencyOptions] = useState<Currency[]>([]);
  const [rate, setRate] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");
  const [amountFrom, setAmountFrom] = useState<number>(0);
  const [amountTo, setAmountTo] = useState<number>(amountFrom * rate);

  useEffect(() => {
    getCurrencySymbols().then(({ data }) => {
      const currencyOptions: Currency[] = Object.keys(data.data).map(key => ({
        value: key,
        label: key,
      }));
      setCurrencyOptions(currencyOptions);
    });
  }, []);

  useEffect(() => {
    if (amountFrom && amountFrom > 0) {
      const amount = amountFrom * rate;
      setAmountTo(+amount.toFixed(2));
    }
  }, [rate, amountFrom]);

  useEffect(() => {
    getCurrencyRate(from, to).then(({ data: { data } }) =>
      setRate(data[`${to}`])
    );
  }, [from, to]);

  const handleChangeFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFrom(e.currentTarget.value);
  };
  const handleChangeTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTo(e.currentTarget.value);
  };

  const handleChangeAmountFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountFrom(+e.currentTarget.value);
  };
  const handleChangeAmountTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountTo(+e.currentTarget.value);
    if (amountFrom && amountFrom > 0) {
      const amount = amountTo / rate;
      setAmountFrom(+amount.toFixed(2));
    }
  };

  return (
    <>
      <form className="currency-form">
        <CurrencyFormField
          id="amountFrom"
          label="From:"
          amount={amountFrom}
          onChangeAmount={handleChangeAmountFrom}
          options={currencyOptions}
          value={from}
          onChangeValue={handleChangeFrom}
        />
        <CurrencyFormField
          id="amountTo"
          label="To:"
          amount={amountTo}
          onChangeAmount={handleChangeAmountTo}
          options={currencyOptions}
          value={to}
          onChangeValue={handleChangeTo}
        />
      </form>
    </>
  );
};

export default CurrensyForm;
