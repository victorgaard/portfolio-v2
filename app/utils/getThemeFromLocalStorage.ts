import { Theme } from "../components/ThemeDropdown";

function getThemeFromLocalStorage(): Theme {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") as Theme;
  }
  return "system";
}

export default getThemeFromLocalStorage;
