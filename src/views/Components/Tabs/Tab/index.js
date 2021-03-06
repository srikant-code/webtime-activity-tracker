import { CONSTANTS } from "../../../../Utils/Constants";
import Theme from "../../../../Utils/theme";
import CustomButton, { BUTTON_CONSTANTS } from "../../Button";
import Flex from "../../Container";
import Text from "../../Text";

const Tab = ({ active, data = "Tab text", index, buttonStyles }) => {
  //   const [isActive, setIsActive] = useState(false);
  return (
    <Flex>
      <CustomButton
        variant={
          active === index
            ? BUTTON_CONSTANTS.FILLED
            : BUTTON_CONSTANTS.CONTAINED
        }
        showShadow={false}
        style={buttonStyles}>
        <Text
          type={CONSTANTS.CSSStyles.FONTS.SUB_TEXT}
          style={{
            color:
              active === index
                ? Theme.COLORS.shades.color_8
                : Theme.COLORS.colors.color_1,
          }}>
          {data.buttonText ?? "dafault text"}
        </Text>
      </CustomButton>
      {active === index && (data.expandHeader || data.expandSubHeader) && (
        <div
          style={{
            margin: `0 0 0 ${Theme.SPACING(-20)}`,
            background: Theme.COLORS.shades.color_7,
            padding: `${Theme.SPACING(4)} ${Theme.SPACING(20)}`,
            borderRadius: `0 ${Theme.SPACING(12)} ${Theme.SPACING(12)} 0`,
            border: `solid ${Theme.COLORS.shades.color_5} ${Theme.SPACING(1)}`,
          }}>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SUB_HEADING}
            style={{
              color: Theme.COLORS.shades.color_3,
            }}>
            {data.expandHeader ?? ""}
          </Text>
          <Text
            type={CONSTANTS.CSSStyles.FONTS.SMALL}
            style={{
              color: Theme.COLORS.shades.color_3,
            }}>
            {data.expandSubHeader ?? ""}
          </Text>
        </div>
      )}
    </Flex>
  );
};

export default Tab;
