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
