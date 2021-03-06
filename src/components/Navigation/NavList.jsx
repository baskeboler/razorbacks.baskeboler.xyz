import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon forceSize>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Albums",
      leftIcon: <FontIcon forceSize>album</FontIcon>,
      component: Link,
      to: "/categories/albums"
    },
    {
      primaryText: "Gallery",
      leftIcon: <FontIcon forceSize>photo_album</FontIcon>,
      component: Link,
      to: "/gallery"
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push(
    {
      primaryText: "About",
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: "/about/"
    },
    {
      primaryText: "Friends",
      leftIcon: <FontIcon>favorite</FontIcon>,
      component: Link,
      to: "/our-friends/"
    }
  );
  return NavList;
}
export default GetNavList;
