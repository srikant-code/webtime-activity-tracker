import Theme from "../../../Utils/theme";

const VerticalBar = ({ style = {} }) => {
  const styles = {
    verticalBar: {
      background: Theme.COLORS.shades.color_5,
      width: Theme.SPACING(1),
      height: "auto",
      margin: Theme.SPACING(4),
      ...style,
    },
  };
  return <div style={styles.verticalBar}></div>;
};

export default VerticalBar;
