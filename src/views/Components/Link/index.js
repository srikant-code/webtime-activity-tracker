import { Link } from "react-router-dom";

const CustomLink = ({ children, to, style, ...other }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", ...style }} {...other}>
      {children}
    </Link>
  );
};
export default CustomLink;
