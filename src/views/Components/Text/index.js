import Theme from "../../../Utils/theme";

const Text = ({ type = "heading", jsx, weight = "bold", children, style }) => {
  const properties = Theme.FONTS.cabin[type][weight];
  return <p style={{ ...properties, ...style }}>{children}</p>;
};

export default Text;
