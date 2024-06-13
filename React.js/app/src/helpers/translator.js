import { languages } from "../languages";

export function translator(language) {
  return (key) => languages[key][language];
}
