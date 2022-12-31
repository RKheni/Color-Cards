import { useState } from "react";
import Cards from "./components/Cards.js";
import ColorPicker from "./components/ColorPicker.js";

export default function App() {
  const [bgColor, setbgColor] = useState("");

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Color Cards</h1>
      <ColorPicker
        updateBgColor={(color) => {
          setbgColor(color);
        }}
      />
      <Cards
        updateBgColor={(color) => {
          setbgColor(color);
        }}
      />
    </div>
  );
}
