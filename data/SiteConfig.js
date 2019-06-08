const config = {
  siteTitle: "Razorbacks", // Site title.
  siteTitleShort: "Death Race", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Death Race", // Alternative site title for SEO.
  siteLogo: "/static/assets/deathrace.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://razorbacks.baskeboler.xyz", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Razorbacks - Death Race", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-141731303-1", // Tracking code ID for google analytics.
  disqusShortname: "razorbacks-baskeboler-xyz", // Disqus shortname.
  postDefaultCategoryID: "Culture", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "baskeboler", // Username to display in the author segment.
  userEmail: "baskeboler@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "baskeboler", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Montevideo, Uruguay", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/94650559/c3e15ffb38d32ecb456e3abf4b79321e?size=200", // User avatar to display in the author segment.
  userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [{
      label: "GitHub",
      url: "https://github.com/baskeboler",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/baskeboler",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:yo@baskeboler.xyz",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. baskeboler" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;