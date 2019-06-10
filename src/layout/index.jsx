import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, withStyles } from "@material-ui/core";
export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Navigation config={config} LocalTitle={this.props.title}>
          <div>
            <Helmet>
              <meta name="description" content={config.siteDescription} />
            </Helmet>
            {children}
          </div>
        </Navigation>
      </ThemeProvider>
    );
  }
}
