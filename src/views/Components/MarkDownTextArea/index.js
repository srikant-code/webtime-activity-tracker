import { useState, useEffect } from "react";
import { marked } from "marked";
import Theme from "../../../Utils/theme";
const CustomTextArea = ({ id = "default" }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const html = marked.parse(value);
    document.getElementById(`spill-${id}`).innerHTML = html;
  }, [value]);

  const css = `
    #spillTextArea-${id}:focus {
      border: 2px solid black !important;
      transition: 0.3s all;
    }
    input[type=checkbox] {
      padding: 9px;
    margin: 0 0 -5px 0;
    border-radius: 5px;
    border: 2px solid black !important;
    appearance: none;
    }
  `;
  return (
    <>
      <textarea
        id={`spillTextArea-${id}`}
        contentEditable={true}
        value={value}
        style={{
          outline: "none",
          borderRadius: "10px",
          border: true ? "none" : "2px solid black",
          maxHeight: 250,
          padding: 12,
          margin: 10,
          width: "100%",
          height: 200,
          background: "white",
          ...Theme.FONTS.cabin.subHeading.bold,
        }}
        onChange={(e) => setValue(e.target.value)}>
        {" "}
      </textarea>{" "}
      <style>{css}</style>
      <div id={`spill-${id}`} style={{ margin: 10, padding: 10 }}></div>{" "}
    </>
  );
};

export default CustomTextArea;
