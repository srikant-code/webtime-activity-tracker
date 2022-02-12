import { Button } from "@material-ui/core";
import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
const ButtonRippleEffect = ({
  width = 85,
  height = 85,
  borderRadius = 16,
  children = "This is a button effect",
  style = {},
  onclick = () => console.log("Please add a button onclick handler"),
}) => {
  return (
    <Button
      style={{
        height: Theme.SPACING(isNaN(height) ? height : height + 4),
        width: Theme.SPACING(isNaN(width) ? width : width + 4),
        // margin: `${Theme.SPACING(-1)} ${Theme.SPACING(2)} ${Theme.SPACING(5)} ${Theme.SPACING(2)}`,
        margin: `0 ${Theme.SPACING(0)}`,
        padding: Theme.SPACING(0),
        borderRadius: Theme.SPACING(borderRadius),
        cursor: "pointer",
        position: CONSTANTS.CSSStyles.GENERIC.RELATIVE,
        letterSpacing: 0,
        textAlign: "left",
        textTransform: "unset",
        ...Theme.FONTS.cabin.subText.bold,
        color: Theme.COLORS.colors.color_1,
        minWidth: Theme.SPACING(10),
        ...style,
      }}
      onClick={() => (onclick ? onclick() : null)}
    >
      {children}
    </Button>
  );
};

export default ButtonRippleEffect;
