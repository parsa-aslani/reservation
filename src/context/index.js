import { createContext } from "react";

export const MainContext = createContext({
  opendrawer: false,
  setopendrawer: () => {},
  pagenumber: 0,
  handlepagenumber: () => {},
  handlechangemode: () => {},
});