import { useState, useEffect } from "react";
import { marked } from "marked";
import Theme from "../../../Utils/theme";
import { CONSTANTS } from "../../../Utils/Constants";
import Text from "../Text";
import { Linkify } from "../../../Utils/utilities";
import VerticalBar from "../VerticalBar";

const CustomTextArea = ({ id = "default" }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    let textareaText = value;
    textareaText = Linkify(textareaText);
    const html = marked.parse(textareaText);
    document.getElementById(`spill-${id}`).innerHTML = html;
  }, [value]);

  const css = `
    .spillTextArea {
      box-shadow: ${Theme.COLORS.effects.big_blur} !important;
      transition: 0.3s all;
      // border: ${Theme.SPACING(2)} solid ${Theme.COLORS.shades.color_8};
      padding: ${Theme.SPACING(16)} ${Theme.SPACING(24)} !important;
    }
    
    .spillTextArea:focus {
      transition: 0.3s all;
    }

    .spillTextArea:hover {
      transition: 0.3s all;
      // border: ${Theme.SPACING(2)} solid ${
    Theme.COLORS.shades.color_6
  } !important;
      box-shadow: ${Theme.COLORS.effects.buttonShadow} !important;
    }

    input[type=checkbox] {
      padding: ${Theme.SPACING(4)};
      margin: 0 0 ${Theme.SPACING(-5)} 0;
      border-radius: ${Theme.SPACING(5)};
      border: ${Theme.SPACING(2)} solid ${
    Theme.COLORS.shades.color_6
  } !important;
      appearance: none;
      color: ${Theme.COLORS.colors.color_1};
      background: ${Theme.COLORS.shades.color_8};
    }
    
    input[type=checkbox]:not(:checked):after {
      content: ' ';
      padding: ${Theme.SPACING(8)};
      transition: all 0.2s ease-in-out;
    }
    input[type=checkbox]:checked:after {
      content: '✔';
      font-size: ${Theme.SPACING(20)};
      color: ${Theme.COLORS.colors.color_1};
      line-height: 0;
      transition: all 0.2s ease-in-out;
    }

    .renderMarkdown h1, .renderMarkdown h2, .renderMarkdown h3, .renderMarkdown h4, .renderMarkdown h5, .renderMarkdown h6 {
      margin: ${Theme.SPACING(8)} ${Theme.SPACING(4)};
      padding: 0;
    }
    .renderMarkdown h1::after, .renderMarkdown h2::after, .renderMarkdown h3::after, .renderMarkdown h4::after, .renderMarkdown h5::after, .renderMarkdown h6::after {
      margin: ${Theme.SPACING(8)} 0;
      padding: 0;
      content: "";
      display: block;
      opacity: 0.1;
      border-bottom: 3px solid ${Theme.COLORS.colors.color_1};
    }
    .renderMarkdown img {
      border-radius: ${Theme.SPACING(6)};
      margin: 0 ${Theme.SPACING(-5)} ${Theme.SPACING(-11)} 0;
      background: ${Theme.COLORS.shades.color_7};
      padding: ${Theme.SPACING(2)};
    }
    .renderMarkdown li {
      margin:${Theme.SPACING(2)};
      padding:${Theme.SPACING(4)};
    }
    .renderMarkdown p {
      margin: ${Theme.SPACING(4)};
      padding: 0;
    }
    .renderMarkdown hr {
      margin: ${Theme.SPACING(4)};
      border: 1px solid ${Theme.COLORS.colors.color_1};
      padding: 0;
      opacity: 0.1;
    }
    .renderMarkdown a, .renderMarkdown code, .renderMarkdown kbd {
      color: ${Theme.COLORS.colors.color_1};
      font-weight: ${CONSTANTS.CSSStyles.FONTS.BOLD};
      padding: ${Theme.SPACING(8)} ${Theme.SPACING(8)};
      background: ${Theme.COLORS.shades.color_7};
      border-radius: ${Theme.SPACING(4)};
      margin-left: ${Theme.SPACING(3)};
    }
    .renderMarkdown pre {
      padding: ${Theme.SPACING(8)};
      width: 90%;
      background: ${Theme.COLORS.shades.color_7};
      border-radius: ${Theme.SPACING(4)};
      color: ${Theme.COLORS.colors.color_1};
    }
    .renderMarkdown pre code {
      margin: ${Theme.SPACING(8)};
      padding: ${Theme.SPACING(0)};
      line-height: ${Theme.SPACING(30)};
    }
    .renderMarkdown li::marker {
      color: ${Theme.COLORS.colors.color_1};
      font-weight: ${CONSTANTS.CSSStyles.FONTS.BOLD};
    }
  `;

  const styles = {
    container: {
      display: "flex",
      flexFlow: CONSTANTS.CSSStyles.FLEX.COLUMN,
      background: Theme.COLORS.shades.color_6,
      borderRadius: `${Theme.SPACING(8)}`,
      justifyContent: CONSTANTS.CSSStyles.FLEX.CENTER,
      alignItems: CONSTANTS.CSSStyles.FLEX.CENTER,
    },
    leftTopbar: {
      display: "flex",
      flexFlow: CONSTANTS.CSSStyles.FLEX.COLUMN,
      width: "50%",
    },
    topbar_container: {
      margin: `${Theme.SPACING(4)} ${Theme.SPACING(10)}`,
      flexFlow: CONSTANTS.CSSStyles.FLEX.ROW,
      display: "flex",
      justifyContent: CONSTANTS.CSSStyles.FLEX.SPACE_BETWEEN,
      alignItems: CONSTANTS.CSSStyles.FLEX.CENTER,
      width: "auto",
    },
    topbar_container_left: {
      display: "flex",
      alignItems: CONSTANTS.CSSStyles.FLEX.CENTER,
    },
    topbar_container_left_icon: {
      background: Theme.COLORS.colors.color_1,
      borderRadius: Theme.SPACING(4),
      padding: Theme.SPACING(4),
      margin: Theme.SPACING(4),
      width: Theme.SPACING(20),
      height: Theme.SPACING(20),
    },
    topbar_container_left_heading: {
      padding: Theme.SPACING(8),
    },
    topbar_container_right: {},
    textarea: {
      outline: "none",
      borderRadius: "10px",
      border: true ? "none" : `2px solid ${Theme.COLORS.shades.color_6}`,
      maxHeight: 250,
      padding: 12,
      margin: 10,
      width: "auto",
      height: 240,
      background: "white",
      ...Theme.FONTS.cabin.subHeading.bold,
    },
    textAreaDivider: {
      display: "flex",
      width: "100%",
    },
    mdRenderDiv: {
      margin: 10,
      padding: 10,
      width: "auto",
      height: "100%",
      border: `${Theme.SPACING(2)} solid ${Theme.COLORS.shades.color_5}`,
      borderRadius: Theme.SPACING(8),
      maxHeight: Theme.SPACING(250),
      overflow: "auto",
    },
  };
  return (
    <>
      <div style={styles.container}>
        <div style={styles.textAreaDivider}>
          <div style={styles.leftTopbar}>
            <div style={styles.topbar_container}>
              <div style={styles.topbar_container_left}>
                <Text
                  type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}
                  style={styles.topbar_container_left_icon}>
                  IC
                </Text>
                <Text
                  type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}
                  style={styles.topbar_container_left_heading}>
                  Heading
                </Text>
              </div>
              <Text
                type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
                weight={CONSTANTS.CSSStyles.FONTS.REGULAR}
                style={styles.topbar_container_right}>
                Markdown supported
              </Text>
            </div>
            <textarea
              id={`spillTextArea-${id}`}
              value={value}
              className="spillTextArea"
              style={styles.textarea}
              onChange={(e) => setValue(e.target.value)}></textarea>
            <style> {css} </style>
          </div>
          <VerticalBar />
          <div style={styles.leftTopbar}>
            <div style={styles.topbar_container}>
              <div style={styles.topbar_container_left}>
                <Text
                  type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}
                  style={styles.topbar_container_left_heading}>
                  Preview
                </Text>
              </div>
            </div>
            <div
              id={`spill-${id}`}
              style={styles.mdRenderDiv}
              className="renderMarkdown"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomTextArea;
