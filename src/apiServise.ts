import axios from "axios";

// const API_KEY = "oodBDoQ8iA96IyYTnxrPkKyfuhh1LWvbC";
//const BASE_URL = "https://api.apilayer.com/exchangerates_data";
const API_KEY = "sZ1eu8L1lHTJSzdxNpyrpHG3fqivvWQJwRtbKb1f";
const BASE_URL = "https://api.freecurrencyapi.com/v1";
// const BASE_URL = "https://api.freecurrencyapi.com/v1/currencies?apikey=sZ1eu8L1lHTJSzdxNpyrpHG3fqivvWQJwRtbKb1f&currencies=EUR%2CUSD%2CCAD&base_currency=BRL";

axios.defaults.baseURL = BASE_URL;

export const getCurrencySymbols = () => {
  return axios(`/currencies?apikey=${API_KEY}`);
};

//api.freecurrencyapi.com/v1/latest?apikey=sZ1eu8L1lHTJSzdxNpyrpHG3fqivvWQJwRtbKb1f&currencies=EUR%2CUSD

export const getCurrencies = () => {
  return axios(
    `/latest?apikey=${API_KEY}&currencies=EUR%2CUSD&base_currency=PLN`
  );
};

export const getCurrencyRate = (from: string, to: string) => {
  return axios(
    `/latest?apikey=${API_KEY}&currencies=${to}&base_currency=${from}`
  );
};
