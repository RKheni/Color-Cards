import React from "react";
import "../styles.css";
import InputColor from "react-input-color";

export default function ColorPicker(props) {
  const [color, setColor] = React.useState("");

  return (
    <>
      <div>
        {/* Display selected color code from ColorPicker */}
        <label
          className="label-colorCode"
          style={{ backgroundColor: color.hex }}
        >
          {color.hex}
        </label>

        <InputColor
          className="color-picker"
          initialValue="#d0bfd9ff"
          onChange={(color) => {
            // set label background color
            setColor(color);
            // set entire page background color
            props.updateBgColor(color.hex);
          }}
        />
      </div>
    </>
  );
}
