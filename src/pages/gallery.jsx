import React from "react";
import { graphql } from "gatsby";
import config from "../../data/SiteConfig.js";
import Layout from "../layout";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Landing from "../components/Landing/index.jsx";
import PostListing from "../components/PostListing/index.jsx";
import {
  Paper,
  Container,
  GridListTile,
  Grid,
  GridList
} from "@material-ui/core";
import Img from "gatsby-image";
import Masonry from "react-masonry-component";
const Gallery = props => {
  const { location, data } = props;
  const cards = [];
  const masonryOptions = {
    transitionDuration: 1000,
    fitWidth: true
  };

  const imagesLoadedOptions = { background: ".my-bg-image-el" };

  const tiles = data.allFile.edges
    .map(e => {
      return e.node.childImageSharp.fixed;
    })
    .map((im, i) => (
      <li
        key={`im-${i}`}
        style={{ margin: 0, padding: 0 }}
        className="image-element-class"
      >
        <Img style={{ margin: 0, padding: 0 }} fadeIn={true} fixed={im} />
      </li>
      //   <GridListTile
      //     key={im}
      //     rows={im.aspectRatio < 1.0 ? 2 : 1}
      //     cols={im.aspectRatio > 1.5 ? 2 : 1}
      //     //   style={{ margin: 0, padding: 0 }}
      //     key={`tile-${i}`}
      //   >
      //     <Img imgStyle={{ height: "100%" }} fadeIn={true} fluid={im} />
      //   </GridListTile>
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
              className={"my-gallery-class"} // default ''
              elementType={"ul"} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
              imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {tiles}
            </Masonry>
          </Paper>
        </Container>
        {/* <GridList cellHeight={300} cols={5}>
          {tiles}
        </GridList> */}
      </div>
    </Layout>
  );
};

export default Gallery;

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "" }
        sourceInstanceName: { eq: "assets" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            id
            fixed(fit: COVER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
