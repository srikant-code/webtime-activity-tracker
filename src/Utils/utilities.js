export const Linkify = (text) => {
  // var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  // var imgRegex = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g;
  var bothImageAndURL =
    /(!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)|(\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\))|(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]))/gi;

  return text.replace(bothImageAndURL, function (url) {
    const isImage = /(!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\))/gi.test(url);
    const isAlreadyLink = /(\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\))/gi.test(
      url
    );
    if (isImage || isAlreadyLink) return url;
    else {
      let cleanedURL;
      try {
        cleanedURL = new URL(url);
      } catch (e) {
        console.log(url, " is invalid url");
      }
      if (cleanedURL) {
        const faviconURL = `https://www.google.com/s2/favicons?sz=32&domain_url=${cleanedURL?.hostname}`;
        return `![${cleanedURL?.hostname}](${faviconURL}) [${cleanedURL?.hostname}](${url})`;
      } else return url;
    }
  });
};

export const ScrollToTop = () => {
  const body = document.querySelector("#root");
  body.scrollIntoView(
    {
      behavior: "smooth",
    },
    500
  );
};

export let SearchMatchHighlighter = (text, matchWith) => {
  if (matchWith === "" || matchWith.trim() === "") return text;
  const regex = new RegExp("(" + matchWith + ")", "gi");
  const textSplit = text.split(regex);
  let resultTextArray = textSplit.map((word) => {
    return word.toLowerCase() === matchWith ? (
      <span
        style={{
          // backgroundColor: STRINGS.COLORS.LIGHTBLUE,
          // color: STRINGS.COLORS.WHITE,
          padding: "2px 5px",
          borderRadius: "4px",
        }}
      >
        {word}
      </span>
    ) : (
      <span>{word}</span>
    );
  });
  return <>{resultTextArray}</>;
};

export const useSetHeaderTitle = (title) => {
  // useEffect(() => {
  document.title = `CMD - ${title}`;
  document.getElementById("root").style.height = "calc(100% - 70px)";
  // });
};

export const CheckEmptyHeader = (header) => {
  // return isEmpty(header) ? "" : ` | ${header}`;
};

export const GetElementByID = (id) =>
  document.getElementById(id) ? document.getElementById(id).value : "";

export const GetElementByIDs = (ids) => ids.map((id) => GetElementByID(id));

export const GrammarSingularPlural = (text, value) =>
  value > 1 ? `${text}s` : text;

export const LengthOf = (text) => text.trim().length;

export const GetInitials = (string) => {
  var names = string.split(" "),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

export const FormatAndParseFloat = (floatNum = 0, toFixed = 1) => {
  return parseFloat(floatNum.toFixed(toFixed));
};
