import Flex from "../../Container";
import Text from "../../Text";
import Theme from "../../../../Utils/theme";
import { CONSTANTS } from "../../../../Utils/Constants";

const DDGUtil = {
  DecodeDDGURLAndConvertToText: (url) => {
    let text = url.split("https://duckduckgo.com/")[1];
    text = decodeURIComponent(text).replaceAll("_", " ");
    let textJSX = text;
    if (text.startsWith("d/")) {
      text = text.replace("d/", "");
      textJSX = (
        <Flex>
          {text}{" "}
          <Text
            type={CONSTANTS.CSSStyles.FONTS.ULTRASMALL}
            style={{ color: Theme.COLORS.shades.color_4 }}>
            &nbsp;&nbsp; &bull; DEFINATION
          </Text>
        </Flex>
      );
    }

    return { textJSX, text };
  },

  DivideParagraphToSentences: (
    text = "DuckDuckGo is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results. DuckDuckGo does not show search results from content farms. It uses various APIs of other websites to show quick results to queries and for traditional links it uses the help of its partners and its own crawler. The company is based in Paoli, Pennsylvania, in Greater Philadelphia and had 149 employees as of October 2021. The company name is a reference to the children's game duck, duck, goose.",
    maxChar = 250
  ) => {
    const regexp = new RegExp(".{1," + maxChar + "}\\.", "g");
    let m = text.match(regexp);
    let result = [];
    for (let sentence of m) result.push(sentence);
    //console.log(tweet, tweet.length);
    return result;
  },
};

export default DDGUtil;
