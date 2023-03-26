import { Currency } from "./CurrencyForm";

interface Props {
  id: string;
  label: string;
  amount: number;
  value: string;
  onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Currency[];
}

const CurrencyFormField = ({
  id,
  label,
  amount,
  value,
  onChangeAmount,
  onChangeValue,
  options,
}: Props) => {
  return (
    <span className="currency-form__item">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        placeholder="0"
        value={amount}
        onChange={onChangeAmount}
        min={0}
      />
      <select value={value} onChange={onChangeValue}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </span>
  );
};

export default CurrencyFormField;
