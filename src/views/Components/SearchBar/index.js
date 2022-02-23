import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
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
import DDGUtil from "./DDG/util";

const CSS = CONSTANTS.CSSStyles;
const FLEX = CSS.FLEX;
const SPACING = (v) => Theme.SPACING(v);
const COLORS = Theme.COLORS;
const PERCENTAGE = (v) => `${v}%`;

const SearchBar = ({ style = {} }) => {
  const [inFocus, setInFocus] = useState(false);
  const [searchParam, setSearchParam] = useState(false);
  const [duckDuckResult, setDuckDuckResult] = useState({});
  const id = "searchbar";
  const Engines = {
    GOOGLE: "Google",
    DUCK_DUCK_GO: "Duck Duck Go",
  };

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
  ]);

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

  useEffect(() => {
    window.handleGoogleAutoComplete = function myAmazingFunction(data) {
      // console.log(data);
      const modified = data[1].splice(0, 5).map((v) => {
        return { name: v[0], icon: "🔎" };
      });
      setItems(modified);
    };
    window.handleDuckDuckGoAutoComplete = function myAmazingFunction(data) {
      // console.log(data);
      setDuckDuckResult(data);
    };
  }, [searchParam]);

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
    DDGSug: { width: PERCENTAGE(100) },
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
          autoComplete="off"
          style={styles.searchBar}
          placeholder="Search anything"
          onFocus={() => setInFocus(true)}
          onBlur={() => setInFocus(false)}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <Flex style={styles.searchSuggestion}>
          <Flex flexFlow={FLEX.COLUMN} style={styles.searchListContainer}>
            {items.map((item, index) => {
              return <RenderGoogleSearchResult key={index} item={item} />;
            })}
            {duckDuckResult !== {} && (
              <Flex
                style={styles.DDGSug}
                flexFlow={FLEX.COLUMN}
                alignItems={FLEX.FLEX_START}>
                <RenderDDGQuickResHeading duckDuckResult={duckDuckResult} />
                {duckDuckResult.Abstract ? (
                  <RenderDDGAbstract duckDuckResult={duckDuckResult} />
                ) : (
                  <RenderCommonDDGResults duckDuckResult={duckDuckResult} />
                )}
                {duckDuckResult.Results && (
                  <RenderDDGResults duckDuckResult={duckDuckResult.Results} />
                )}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
      <script>{autocompleteScript()}</script>
    </CardLayout>
  );
};

const RenderGoogleSearchResult = ({ item }) => {
  const styles = {
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
  };
  return (
    <Flex
      style={styles.searchListItem}
      justifyContent={FLEX.FLEX_START}
      className="cardHover"
      tabIndex="0">
      <div style={styles.icon}>
        <WebsiteIcon icon={item.icon} />
      </div>
      <Text type={CSS.FONTS.SUB_HEADING} weight={CSS.FONTS.REGULAR}>
        <span dangerouslySetInnerHTML={{ __html: item.name }} />
      </Text>
    </Flex>
  );
};

const RenderDDGQuickResHeading = ({ duckDuckResult }) => {
  return (
    <Flex>
      <Text
        type={CSS.FONTS.SMALL}
        style={{
          color: COLORS.shades.color_4,
          margin: SPACING(10),
        }}>
        Quick results for{" "}
        <b style={{ color: COLORS.shades.color_1 }}>
          {duckDuckResult?.Heading}
        </b>{" "}
        from Duck Duck Go
      </Text>
    </Flex>
  );
};
const RenderDDGResults = ({ duckDuckResult }) => {
  return duckDuckResult.map((item, index) => {
    return (
      <Flex
        key={index}
        style={{
          width: `-webkit-fill-available`,
          padding: SPACING(10),
          margin: SPACING(10),
          borderRadius: SPACING(10),
        }}
        className="cardHover">
        <DDGItemImage
          url={item?.Icon?.URL}
          width={16}
          style={{
            marginRight: SPACING(10),
          }}
        />
        <Flex>
          <Text type={CSS.FONTS.SUB_HEADING}>{item.Text}</Text>
          <Text
            type={CSS.FONTS.SMALL}
            style={{
              color: COLORS.shades.color_4,
              marginLeft: SPACING(4),
              marginTop: SPACING(4),
            }}>
            &bull; Results
          </Text>
        </Flex>
      </Flex>
    );
  });
};
const RenderDDGAbstract = ({ duckDuckResult }) => {
  const splitTextResult = DDGUtil.DivideParagraphToSentences(
    duckDuckResult.AbstractText
  );
  const RenderAbstractHeading = () => {
    return (
      <Flex
        justifyContent={FLEX.SPACE_BETWEEN}
        style={{ width: PERCENTAGE(100), padding: SPACING(10) }}>
        <Text
          type={CSS.FONTS.SUB_HEADING}
          style={{ color: COLORS.colors.color_1 }}>
          {duckDuckResult.Heading}
        </Text>
        <Text type={CSS.FONTS.SMALL} weight={CSS.FONTS.REGULAR}>
          Source |{" "}
          <b style={{ color: COLORS.colors.color_1 }}>
            {duckDuckResult.AbstractSource}
          </b>
        </Text>
      </Flex>
    );
  };

  const RenderAbstractText = ({ item }) => {
    return (
      <>
        <Text
          // className="cardHover"
          type={CSS.FONTS.SMALL}
          style={{
            padding: SPACING(4),
            borderRadius: SPACING(8),
          }}
          weight={CSS.FONTS.REGULAR}>
          {item}
        </Text>
        <hr />
      </>
    );
  };

  return (
    <Flex>
      <RenderAbstractHeading />
      <div style={{ padding: `0 ${SPACING(10)}` }}>
        <div style={{ float: "left" }}>
          <DDGItemImage url={duckDuckResult.Image} width={90} />
        </div>
        {splitTextResult.slice(0).map((item, index) => {
          return <RenderAbstractText item={item} key={index} />;
        })}
      </div>
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
      setImageAvailable(width < 16 && height < 16 ? false : true);
      // console.log(width < 16 && height < 16, "image avaialbility");
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

const RenderBadgeButton = ({ item, onclick, active = false }) => {
  const styles = {
    buttons: {
      height: SPACING(40),
      // width: PERCENTAGE(100),
      width: `-webkit-fill-available`,
      fontWeight: CSS.FONTS.BOLD,
    },
    label: {
      ...CSS.FONTS.ELLIPSIS,
      textAlign: "left",
      display: "block",
    },
    active: {
      background: COLORS.colors.color_1,
      color: COLORS.shades.color_8,
    },
  };
  const useStyles = makeStyles({
    badge: {
      background: COLORS.colors.color_2,
      color: COLORS.shades.color_8,
      border: `${SPACING(2)} solid ${COLORS.shades.color_7}`,
    },
  });
  const classes = useStyles();
  return (
    <StyledBadge
      badgeContent={item.Topics ? item.Topics.length : 0}
      classes={{
        badge: active ? classes.badge : {},
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}>
      <CustomButton
        variant={BUTTON_CONSTANTS.CONTAINED}
        showShadow={false}
        labelStyle={styles.label}
        onclick={onclick}
        style={
          active ? { ...styles.buttons, ...styles.active } : styles.buttons
        }>
        {
          [
            "😀",
            "😁",
            "😂",
            "🤣",
            "😃",
            "😄",
            "😅",
            "😆",
            "😉",
            "😊",
            "😋",
            "😎",
            "😍",
          ][Math.floor(Math.random() * 13)]
        }
        {item.Name}
      </CustomButton>
    </StyledBadge>
  );
};

const StyledBadge = withStyles(() => ({
  badge: {
    left: 6,
    top: 12,
    background: COLORS.shades.color_7,
    color: COLORS.shades.color_1,
    ...Theme.FONTS.cabin.small.bold,
    // border: `2px solid ${COLORS.colors.color_1}`,
    // padding: "0 4px",
  },
  root: { width: PERCENTAGE(100) },
}))(Badge);

const RenderCommonDDGResults = ({ duckDuckResult = {} }) => {
  console.log(duckDuckResult);
  const [ddgResult, setDdgResult] = useState(duckDuckResult);
  const initialTitle = "Top results";
  const [titleClicked, setTitleClicked] = useState(initialTitle);
  const styles = {
    DDGSugItem: {
      margin: `0 ${SPACING(10)}`,
      padding: SPACING(10),
      borderRadius: SPACING(12),
      width: `-webkit-fill-available`,
    },
    width100: {
      width: PERCENTAGE(100),
    },
    catHeading: {
      margin: `0 ${SPACING(10)} ${SPACING(10)} ${SPACING(10)}`,
      color: COLORS.colors.color_1,
    },
    sugRank: { padding: `${SPACING(4)} ${SPACING(10)} 0 0` },
  };

  useEffect(() => {
    setDdgResult(duckDuckResult);
    setTitleClicked(initialTitle);
  }, [duckDuckResult]);

  const DDGItemText = ({ item }) => {
    return (
      <Flex
        flexFlow={FLEX.COLUMN}
        alignItems={FLEX.FLEX_START}
        style={{ width: CSS.GENERIC.FIT_CONTENT }}>
        <Text type={CSS.FONTS.SUB_HEADING}>
          {DDGUtil.DecodeDDGURLAndConvertToText(item.FirstURL).textJSX}
        </Text>
        <Text type={CSS.FONTS.SMALL} weight={CSS.FONTS.REGULAR}>
          {item.Text.replace(
            DDGUtil.DecodeDDGURLAndConvertToText(item.FirstURL).text,
            ""
          ).replace("Meanings ", "")}
        </Text>
      </Flex>
    );
  };

  const DDGItemRank = ({ rank }) => {
    return (
      <Text type={CSS.FONTS.SUB_HEADING} style={styles.sugRank}>
        #{rank + 1}
      </Text>
    );
  };

  return (
    <Flex
      alignItems={FLEX.FLEX_START}
      flexFlow={FLEX.ROW}
      justifyContent={FLEX.SPACE_BETWEEN}
      style={styles.width100}>
      <Flex
        flexFlow={FLEX.COLUMN}
        alignItems={FLEX.FLEX_START}
        style={styles.width100}>
        {ddgResult.RelatedTopics && ddgResult.RelatedTopics.length > 0 && (
          <>
            <Text type={CSS.FONTS.SUB_HEADING} style={styles.catHeading}>
              {titleClicked} ({ddgResult.RelatedTopics.length}) -&gt;
            </Text>
            <hr />
          </>
        )}
        {ddgResult.RelatedTopics &&
          ddgResult.RelatedTopics.length > 0 &&
          ddgResult?.RelatedTopics.map((item, index) => {
            if (item.FirstURL)
              return (
                <Flex
                  style={styles.DDGSugItem}
                  className={"cardHover"}
                  key={index}
                  flexFlow={FLEX.ROW}
                  alignItems={FLEX.FLEX_START}
                  justifyContent={FLEX.SPACE_BETWEEN}>
                  <DDGItemRank rank={index} />
                  <Flex
                    style={styles.width100}
                    flexFlow={FLEX.ROW}
                    alignItems={FLEX.FLEX_START}
                    justifyContent={FLEX.FLEX_START}>
                    <DDGItemImage url={item.Icon.URL} />
                    <DDGItemText item={item} />
                  </Flex>
                </Flex>
              );
          })}
      </Flex>
      {duckDuckResult.RelatedTopics && duckDuckResult.RelatedTopics.length > 0 && (
        <Flex flexFlow={FLEX.COLUMN} style={{ width: PERCENTAGE(30) }}>
          <RenderBadgeButton
            item={{ Name: initialTitle }}
            active={titleClicked === initialTitle}
            onclick={() => {
              setDdgResult(duckDuckResult);
              setTitleClicked(initialTitle);
            }}
          />
          {duckDuckResult?.RelatedTopics.map((item, index) => {
            return (
              item.Topics && (
                <RenderBadgeButton
                  item={item}
                  key={index}
                  active={titleClicked === item.Name}
                  onclick={() => {
                    setDdgResult({ RelatedTopics: item.Topics });
                    setTitleClicked(item.Name);
                  }}
                />
              )
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default SearchBar;
