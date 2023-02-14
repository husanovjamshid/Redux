import { BUY_MAC, BUY_Some_MAC } from "./macType";

export const BuyMacAction = () => {
  return {
    type: BUY_MAC,
  };
};

export const BuySomeMacAction = (number) => {
  return {
    type: BUY_Some_MAC,
    payload: number,
  };
};
