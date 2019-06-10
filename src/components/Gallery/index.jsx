import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Paper, Container } from "@material-ui/core";
import Img from "gatsby-image";
import Masonry from "react-masonry-component";
import SEO from "../SEO";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";

const Gallery = props => {
  const { location, data } = props;
  const masonryOptions = {
    transitionDuration: 1000,
    fitWidth: true
  };

  const imagesLoadedOptions = { background: ".my-bg-image-el" };

  const tiles = data.allFile.edges
    .map(e => {
      return e.node.childImageSharp.fixed;
    })
    .map(im => (
      <li
        key={`im-${im.id}`}
        style={{ margin: 0, padding: 0 }}
        className="image-element-class"
      >
        <Img style={{ margin: 0, padding: 0 }} fadeIn fixed={im} />
      </li>
    ));
  return (
    <Layout location={location} title="Gallery">
      <div className="index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <SEO />
        <Container maxWidth="xl">
          {/* <Landing cards={cards} /> */}
          <Paper style={{ marginTop: "2em", backgroundColor: "#000000" }}>
            <Masonry
              style={{ margin: "auto", padding: 0, width: "100%" }}
              className="my-gallery-class" // default ''
              elementType="ul" // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad // default false and works only if disableImagesLoaded is false
              imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {tiles}
            </Masonry>
          </Paper>
        </Container>
      </div>
    </Layout>
  );
};

export default Gallery;
