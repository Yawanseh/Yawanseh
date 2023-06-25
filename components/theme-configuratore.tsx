"use client";
import { defaultTheme } from "@/constants";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themeOptions = [
  { value: "acid", label: "Acid" },
  { value: "aqua", label: "Aqua" },
  { value: "autumn", label: "Autumn" },
  { value: "black", label: "Black" },
  { value: "bumblebee", label: "Bumblebee" },
  { value: "business", label: "Business" },
  { value: "cmyk", label: "Cmyk" },
  { value: "coffee", label: "Coffee" },
  { value: "corporate", label: "Corporate" },
  { value: "cupcake", label: "Cupcake" },
  { value: "cyberpunk", label: "Cyberpunk" },
  { value: "dark", label: "Dark" },
  { value: "dracula", label: "Dracula" },
  { value: "emerald", label: "Emerald" },
  { value: "fantasy", label: "Fantasy" },
  { value: "forest", label: "Forest" },
  { value: "garden", label: "Garden" },
  { value: "halloween", label: "Halloween" },
  { value: "lemonade", label: "Lemonade" },
  { value: "light", label: "Light" },
  { value: "lofi", label: "Lofi" },
  { value: "luxury", label: "Luxury" },
  { value: "night", label: "Night" },
  { value: "pastel", label: "Pastel" },
  { value: "retro", label: "Retro" },
  { value: "synthwave", label: "Synthwave" },
  { value: "valentine", label: "Valentine" },
  { value: "winter", label: "Winter" },
  { value: "wireframe", label: "Wireframe" },
];

const ThemeConfiguratore: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme.value);

  useEffect(() => {
    themeChange(false);
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <>
      <div className="dropdown-end dropdown">
        <select
          className="select w-full max-w-sm border-base-300 focus:outline-none"
          data-choose-theme
          value={theme}
          onChange={handleThemeChange}
        >
          <option disabled>Pick a theme</option>
          {themeOptions.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ThemeConfiguratore;
