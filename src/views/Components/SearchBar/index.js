import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { marked } from "marked";
import { useEffect } from "react";
import { useState } from "react";
import { CONSTANTS } from "../../../Utils/Constants";
import Theme from "../../../Utils/theme";
import CustomButton, { BUTTON_CONSTANTS } from "../Button";
import CardLayout from "../Cards/Layout";
import Flex from "../Container";
import Text from "../Text";
import WebsiteIcon from "../WebsiteIcon";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CSS.FLEX;
const SPACING = (v) => Theme.SPACING(v);
const COLORS = Theme.COLORS;
const PERCENTAGE = (v) => `${v}%`;

const SearchBar = ({ style = {} }) => {
  const [inFocus, setInFocus] = useState(false);
  const [searchParam, setSearchParam] = useState(false);
  const [items, setItems] = useState([
    {
      name: "Get item from list",
      icon: "🔎",
    },
    {
      name: "Get item 2 from list",
      icon: "🔎",
    },
    {
      name: "Get item 3 from list",
      icon: "🔎",
    },
    {
      name: "Get item 4 from list",
      icon: "🔎",
    },
    {
      name: "Get item 5 from list",
      icon: "🔎",
    },
  ]);
  const [duckDuckResult, setDuckDuckResult] = useState({});
  const id = "searchbar";
  useEffect(() => {
    window.handleGoogleAutoComplete = function myAmazingFunction(data) {
      console.log(data);
      const modified = data[1].splice(0, 5).map((v) => {
        return { name: v[0], icon: "🔎" };
      });
      setItems(modified);
    };
    window.handleDuckDuckGoAutoComplete = function myAmazingFunction(data) {
      console.log(data);
      setDuckDuckResult(data);
    };
  }, [searchParam]);

  const Engines = {
    GOOGLE: "Google",
    DUCK_DUCK_GO: "Duck Duck Go",
  };
  const GetLink = (text, engine) => {
    const links = {
      [Engines.GOOGLE]: `https://www.google.com/complete/search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=${text}&xhr=t&callback=handleGoogleAutoComplete`,
      [Engines.DUCK_DUCK_GO]: `https://api.duckduckgo.com/?q=${text}&format=json&callback=handleDuckDuckGoAutoComplete`,
    };
    return links[engine];
  };
  const autocompleteScript = () => {
    let myScriptGoogle = "";
    let myScriptDDG = "";

    /* this section handles what happens after a key is pressed inside your input text box */
    const helloworld = document.getElementById(id);
    if (helloworld)
      helloworld.onkeyup = function () {
        /* this variable stores whatever is in the input text box */
        if (myScriptGoogle !== "") document.body.removeChild(myScriptGoogle);
        if (myScriptDDG !== "") document.body.removeChild(myScriptDDG);

        let searchbar = document.getElementById(id);
        let stuff_in_text_box;
        if (searchbar) stuff_in_text_box = searchbar.value;

        /* this is the script that will hold the data we're trying to get */
        myScriptGoogle = document.createElement("script");
        myScriptDDG = document.createElement("script");

        /* this sets the src of the script equal to the url of the data */
        /* myScriptGoogle.src = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&callback=myAmazingFunction&search='+stuff_in_text_box; */
        myScriptGoogle.src = GetLink(stuff_in_text_box, Engines.GOOGLE);
        myScriptDDG.src = GetLink(stuff_in_text_box, Engines.DUCK_DUCK_GO);
        // myScriptGoogle.onload = function (data) {
        //   console.log(data);
        //   window.handleGoogleAutoComplete(data);
        // };

        /* this attaches the script to the body of the page */
        document.body.appendChild(myScriptGoogle);
        document.body.appendChild(myScriptDDG);
      };
  };

  const styles = {
    container: {
      width: PERCENTAGE(100),
    },
    searchBar: {
      background: COLORS.shades.color_8,
      padding: SPACING(20),
      borderRadius: SPACING(10),
      border: `${SPACING(1)} solid ${COLORS.colors.color_1}`,
      width: PERCENTAGE(94),
      fontWeight: CSS.FONTS.BOLD,
      height: SPACING(25),
      transition: CSS.ANIMATION.POINT3,
      //   filter: `blur(0) !important`,
      ...Theme.FONTS.cabin.subHeading.bold,
    },
    searchSuggestion: {
      position: "relative",
      width: PERCENTAGE(100),
    },
    searchListContainer: {
      marginTop: SPACING(4),
      background: COLORS.shades.color_8,
      position: "absolute",
      top: SPACING(0),
      minWidth: SPACING(500),
      padding: SPACING(5),
      zIndex: 6,
      borderRadius: SPACING(8),
      width: PERCENTAGE(98),
      ...COLORS.effects.circleShadow,
    },
    searchListItem: {
      padding: SPACING(8),
      margin: `0 ${SPACING(8)}`,
      width: PERCENTAGE(97),
      borderRadius: SPACING(8),
      cursor: "pointer",
      textAlign: "left",
      background: COLORS.shades.color_8,
    },
    icon: {
      marginRight: SPACING(8),
    },
    DDGSug: {},
    DDGheading: {},
  };
  const css = `
        :focus-visible {
            outline: none;
            border-width: ${SPACING(2)};
            box-shadow: ${COLORS.effects.circleShadow.boxShadow};
            transition: ${CSS.ANIMATION.POINT3};
        }
        //  > *:not(#dontBlur) {
        //    filter: blur(${inFocus ? SPACING(5) : 0});
        // }
    `;

  return (
    <CardLayout heading="Search" style={{ ...style }}>
      <style>{css}</style>

      <Flex style={styles.container} flexFlow={FLEX.COLUMN}>
        <input
          type="text"
          id={id}
          style={styles.searchBar}
          placeholder="Search anything"
          onFocus={() => setInFocus(true)}
          onBlur={() => setInFocus(false)}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <Flex style={styles.searchSuggestion}>
          <Flex flexFlow={FLEX.COLUMN} style={styles.searchListContainer}>
            {items.map((item, index) => {
              return (
                <Flex
                  style={styles.searchListItem}
                  justifyContent={FLEX.FLEX_START}
                  className="cardHover"
                  key={index}
                  tabindex="0">
                  <div style={styles.icon}>
                    <WebsiteIcon icon={item.icon} />
                  </div>
                  <Text type={CSS.FONTS.SUB_HEADING} weight={CSS.FONTS.REGULAR}>
                    <span dangerouslySetInnerHTML={{ __html: item.name }} />
                  </Text>
                </Flex>
              );
            })}
            {duckDuckResult !== {} ? (
              <Flex style={styles.DDGSug} flexFlow={FLEX.COLUMN}>
                <Flex>
                  <Text
                    type={CSS.FONTS.SMALL}
                    style={{ color: COLORS.shades.color_4 }}>
                    Quick results for{" "}
                    <b style={{ color: COLORS.shades.color_1 }}>
                      {duckDuckResult?.Heading}
                    </b>{" "}
                    from Duck Duck Go
                  </Text>
                </Flex>
                {duckDuckResult.Abstract ? (
                  <RenderDDGAbstract duckDuckResult={duckDuckResult} />
                ) : (
                  <RenderCommonDDGResults duckDuckResult={duckDuckResult} />
                )}
                {duckDuckResult.Results && (
                  <RenderDDGResults duckDuckResult={duckDuckResult.Results} />
                )}
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
        </Flex>
      </Flex>
      <script>{autocompleteScript()}</script>
    </CardLayout>
  );
};
const RenderDDGResults = ({ duckDuckResult }) => {
  return duckDuckResult.map((item, index) => {
    return (
      <Flex>
        <DDGItemImage
          url={item?.Icon?.URL}
          width={16}
          style={{
            marginRight: SPACING(10),
          }}
        />
        <Text type={CSS.FONTS.SUB_HEADING}>{item.Text}</Text>
      </Flex>
    );
  });
};
const RenderDDGAbstract = ({ duckDuckResult }) => {
  return (
    <Flex>
      <Text type={CSS.FONTS.SUB_HEADING}>{duckDuckResult.Heading}</Text>
      <Text type={CSS.FONTS.SUB_TEXT} weight={CSS.FONTS.REGULAR}>
        Source: {duckDuckResult.AbstractSource}
      </Text>
      <Flex>
        <Text type={CSS.FONTS.SUB_TEXT} weight={CSS.FONTS.REGULAR}>
          {duckDuckResult.AbstractText}
        </Text>
        <DDGItemImage url={duckDuckResult.Image} width={90} />
      </Flex>
    </Flex>
  );
};
const DDGItemImage = ({ url, width = 72, style = {} }) => {
  function IsDDGImageAvaialble(url, callback) {
    const img = new Image();
    img.src = url;
    img.onload = function () {
      callback(this.width, this.height);
    };
  }
  const [imageAvaialble, setImageAvailable] = useState(false);
  const IsDDGImagePresent = (url = "/i/dc97481e.png") =>
    IsDDGImageAvaialble("https://duckduckgo.com" + url, (width, height) => {
      setImageAvailable(width < 5 && height < 5 ? false : true);
      console.log(width < 5 && height < 5, "image avaialbility");
    });

  useEffect(() => {
    IsDDGImagePresent(url);
  });

  const styles = {
    ...Theme.COLORS.effects.summaryCardShadow,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: imageAvaialble
      ? `url("https://duckduckgo.com${url}")`
      : null,
    minWidth: SPACING(width),
    height: SPACING(width),
    borderRadius: SPACING(10),
    marginRight: SPACING(20),
    ...style,
  };
  return imageAvaialble ? (
    <div style={styles}></div>
  ) : (
    <WebsiteIcon icon="🔎" style={{ marginRight: SPACING(10) }} />
  );
};

const RenderCommonDDGResults = ({ duckDuckResult }) => {
  const styles = {
    DDGSugItem: {
      margin: `0 ${SPACING(10)}`,
      padding: SPACING(10),
      borderRadius: SPACING(12),
      width: `-webkit-fill-available`,
    },
    buttons: {
      height: SPACING(40),
      fontWeight: CSS.FONTS.BOLD,
    },
  };
  return (
    <Flex
      flexFlow={FLEX.COLUMN}
      alignItems={FLEX.FLEX_START}
      justifyContent={FLEX.FLEX_START}>
      {duckDuckResult.RelatedTopics &&
        duckDuckResult?.RelatedTopics.map((item, index) => {
          if (item.FirstURL)
            return (
              <Flex
                style={styles.DDGSugItem}
                className={"cardHover"}
                flexFlow={FLEX.ROW}
                alignItems={FLEX.FLEX_START}
                justifyContent={FLEX.SPACE_BETWEEN}>
                <Flex
                  style={{ width: PERCENTAGE(100) }}
                  flexFlow={FLEX.ROW}
                  alignItems={FLEX.FLEX_START}
                  justifyContent={FLEX.FLEX_START}>
                  <DDGItemImage url={item.Icon.URL} />
                  <Flex
                    flexFlow={FLEX.COLUMN}
                    alignItems={FLEX.FLEX_START}
                    style={{ width: CSS.GENERIC.FIT_CONTENT }}>
                    <Text type={CSS.FONTS.SUB_HEADING}>
                      {DecodeDDGURLAndConvertToText(item.FirstURL)}
                    </Text>
                    <Text type={CSS.FONTS.SMALL} weight={CSS.FONTS.REGULAR}>
                      {item.Text}
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  type={CSS.FONTS.SUB_HEADING}
                  style={{ padding: SPACING(4) }}>
                  #{index + 1}
                </Text>
              </Flex>
            );
        })}
      {duckDuckResult.RelatedTopics && (
        <Flex>
          {duckDuckResult?.RelatedTopics.map((item, index) => {
            if (item.Topics) {
              return (
                <StyledBadge badgeContent={item.Topics.length}>
                  <CustomButton
                    variant={BUTTON_CONSTANTS.CONTAINED}
                    showShadow={false}
                    style={styles.buttons}>
                    {item.Name}
                  </CustomButton>
                </StyledBadge>
              );
            }
          })}
        </Flex>
      )}
    </Flex>
  );
};

const StyledBadge = withStyles(() => ({
  badge: {
    right: 6,
    top: 12,
    background: COLORS.shades.color_8,
    color: COLORS.shades.color_1,
    ...COLORS.effects.circleShadow,
    // border: `2px solid ${COLORS.colors.color_1}`,
    // padding: "0 4px",
  },
}))(Badge);

const DecodeDDGURLAndConvertToText = (url) => {
  const text = url.split("https://duckduckgo.com/")[1];
  return decodeURIComponent(text).replaceAll("_", " ");
};

export default SearchBar;
