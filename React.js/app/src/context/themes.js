import { createContext, useState } from "react";

import { themes } from "../themes/appThemes";

export const ThemesContext = createContext();

export function ThemesContextProvider({ children }) {
  const [state, setState] = useState("light");
  return (
    <ThemesContext.Provider value={{ state, setState }}>
      {children}
    </ThemesContext.Provider>
  );
}
