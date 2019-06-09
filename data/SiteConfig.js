const config = {
  siteTitle: "Razorbacks", // Site title.
  siteTitleShort: "Death Race", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Death Race", // Alternative site title for SEO.
  siteLogo: "/assets/deathrace.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://razorbacks.baskeboler.xyz", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "kickass rock n roll band from uruguay", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-141731303-1", // Tracking code ID for google analytics.
  disqusShortname: "razorbacks-baskeboler-xyz", // Disqus shortname.
  postDefaultCategoryID: "bullshit", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "baskeboler", // Username to display in the author segment.
  userEmail: "baskeboler@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "baskeboler", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Montevideo, Uruguay", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/94650559/c3e15ffb38d32ecb456e3abf4b79321e?size=200", // User avatar to display in the author segment.
  userDescription: `Hi there, I am Victor, people call me basket, I played drums in this band and loved every minute of it.
  Razorbacks is no longer active and it is very unlikely that we return in the near future. I work as a software developer and in order 
  to stay up to date with new tech trends I build sites to try out new nerdy shit. This is my first try with gatsby.js, netlify and netlify-cms 
  which are all awesome. I will be gathering as much band related material (albums, pictures, videos) as I can and will be posting it here
  as well as whatever else that goes through my mind. I never had a blog so this may end up being my personal blog disguised as a band page lol.
  Anyways, thats enough text, I was feeling dirty leaving the default template user description. kthxbye.`, // User description to display in the author segment.
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
  copyright: "Copyright © 2019. baskeboler", // Copyright string for the footer of the website and RSS feed.
  bingMetaTagName: "msvalidate.01",
  bingAuthCode: "A3598FA53379C447FA39C5C6AEBDF447"
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