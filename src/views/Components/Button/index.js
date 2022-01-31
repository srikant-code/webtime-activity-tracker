import Theme from "../../../Utils/theme";
import Button from "@material-ui/core/Button";
import { CONSTANTS } from "../../../Utils/Constants";
import { makeStyles } from "@material-ui/core";
// import DeleteIcon from "@mui/icons-material/Delete";
const CustomButton = ({
  text,
  children,
  style,
  variant = BUTTON_CONSTANTS.FILLED,
  showShadow = true,
}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 24,
    },
    label: {
      width: "100%",
    },
  });
  const classes = useStyles();
  const checkIconSize = () => {
    return variant === BUTTON_CONSTANTS.ICON.SMALL ||
      variant === BUTTON_CONSTANTS.ICON.MEDIUM ||
      variant === BUTTON_CONSTANTS.ICON.LARGE
      ? Theme.SPACING(variant)
      : null;
  };
  return (
    <>
      <Button
        size="large"
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        style={{
          padding: `${Theme.SPACING(15)} ${Theme.SPACING(16)}`,
          background:
            variant === BUTTON_CONSTANTS.FILLED
              ? Theme.COLORS.colors.color_1
              : Theme.COLORS.shades.color_7,
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
          width: checkIconSize(),
          height: checkIconSize(),
          color:
            variant === BUTTON_CONSTANTS.FILLED
              ? Theme.COLORS.shades.color_8
              : Theme.COLORS.shades.color_1,
          transition: CONSTANTS.CSSStyles.ANIMATION.POINT3,
          ...style,
        }}
      >
        {text ?? children}
      </Button>
    </>
  );
};

export const BUTTON_CONSTANTS = {
  FILLED: "filled",
  OUTLINED: "outlined",
  CONTAINED: "contained",
  ICON: {
    ULTRA_SMALL: 24,
    SMALL: 36,
    MEDIUM: 48,
    LARGE: 54,
  },
};

export default CustomButton;
