import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import CustomButton, { BUTTON_CONSTANTS } from "../Button";
import Flex from "../Container";
import Text from "../Text";
import WebsiteIcon from "../WebsiteIcon";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CONSTANTS.CSSStyles.FLEX;
const SPACING = (v) => Theme.SPACING(v);

const RenderController = () => {
  const styles = {
    container: {
      background: Theme.COLORS.shades.color_8,
      ...Theme.COLORS.effects.circleShadow,
      borderRadius: SPACING(10),
      padding: SPACING(16),
      margin: `${SPACING(10)} 0`,
    },
    buttons: {
      height: SPACING(40),
    },
  };
  return (
    <Flex style={styles.container}>
      <Flex justifyContent={FLEX.SPACE_BETWEEN}>
        <Text type={CSS.FONTS.SUB_TEXT}>
          See how your interests evolved over time
        </Text>
        <WebsiteIcon />
      </Flex>
      <Flex>
        <CustomButton style={styles.buttons}>2019</CustomButton>
        <CustomButton
          variant={BUTTON_CONSTANTS.CONTAINED}
          style={styles.buttons}
        >
          2020
        </CustomButton>
        <CustomButton
          variant={BUTTON_CONSTANTS.CONTAINED}
          style={styles.buttons}
        >
          2021
        </CustomButton>
      </Flex>
      <Text type={CSS.FONTS.SMALL}>Select a month or year</Text>
    </Flex>
  );
};
const InterestController = () => {
  return (
    <Flex justifyContent={FLEX.FLEX_START}>
      <Text style={{ marginBottom: SPACING(20) }}>Your interests</Text>
      <Text
        type={CSS.FONTS.SMALL}
        style={{ color: Theme.COLORS.shades.color_4 }}
      >
        based on your browsing history and time spent, here is what we
        identified your interests.
        <br />
        Whether your agree or not but this is what your data tells about you :)
      </Text>
      <RenderController />
    </Flex>
  );
};
export default InterestController;
