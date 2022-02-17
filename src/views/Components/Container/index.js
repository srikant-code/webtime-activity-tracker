const Flex = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  alignContent = "center",
  flexFlow = "row wrap",
  display = "flex",
  style,
  className,
  animation = "",
  id = null,
  animationDelay = "50",
  ...other
}) => {
  const styles = {
    flex: {
      display: display,
      justifyContent: justifyContent,
      alignItems: alignItems,
      alignContent: alignContent,
      flexFlow: flexFlow,
      ...style,
    },
  };
  return (
    <div
      style={styles.flex}
      className={className ?? null}
      data-aos={animation}
      data-aos-delay={animationDelay}
      id={id}
      {...other}>
      {children}
    </div>
  );
};

export default Flex;
