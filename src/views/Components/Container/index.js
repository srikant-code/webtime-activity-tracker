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
  animationDelay = "50",
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
      data-aos-delay={animationDelay}>
      {children}
    </div>
  );
};

export default Flex;
