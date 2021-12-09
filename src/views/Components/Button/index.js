import Theme from "../../../Utils/theme";
import Button from "@material-ui/core/Button";
import { CONSTANTS } from "../../../Utils/Constants";
// import DeleteIcon from "@mui/icons-material/Delete";
const CustomButton = ({
  text,
  children,
  style,
  variant = BUTTON_CONSTANTS.FILLED,
  showShadow = true,
}) => {
  return (
    <>
      <Button
        size="large"
        style={{
          padding: `${Theme.SPACING(15)} ${Theme.SPACING(16)}`,
          background:
            variant === BUTTON_CONSTANTS.FILLED
              ? Theme.COLORS.colors.color_1
              : Theme.COLORS.shades.color_8,
          boxShadow: showShadow
            ? Theme.COLORS.effects.buttonShadow.boxShadow
            : "none",
          borderRadius: Theme.SPACING(12),
          border:
            variant === BUTTON_CONSTANTS.OUTLINED ||
            variant === BUTTON_CONSTANTS.FILLED
              ? `${Theme.COLORS.colors.color_1} solid ${Theme.SPACING(2)}`
              : "none",
          textTransform: "initial",
          letterSpacing: "normal",
          margin: Theme.SPACING(4),
          color:
            variant === BUTTON_CONSTANTS.FILLED
              ? Theme.COLORS.shades.color_8
              : Theme.COLORS.shades.color_1,
          transition: CONSTANTS.CSSStyles.ANIMATION.POINT3,
          ...style,
        }}>
        {text ?? children}
      </Button>
    </>
  );
};

export const BUTTON_CONSTANTS = {
  FILLED: "filled",
  OUTLINED: "outlined",
  CONTAINED: "contained",
};

export default CustomButton;
