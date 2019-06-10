import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Landing from "../components/Landing";

function link(
  title,
  url,
  image = "https://source.unsplash.com/random",
  text = ""
) {
  return {
    title,
    url,
    image: data => data[image].childImageSharp.fluid,
    text
  };
}

class Index extends React.Component {
  render() {
    const { location, data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    const cards = [
      link(
        "Albums",
        "/categories/albums",
        "deathrace2",
        "Razorbacks studio albums"
      ),
      link(
        "Blog",
        "/categories/blog",
        "emi1",
        "Just some random stuff I feel like posting."
      ),
      link(
        "Our Friends",
        "/our-friends",
        "panchos",
        "Links to some of our friends."
      )
    ].map(l => ({ ...l, image: l.image(data) }));
    return (
      <Layout location={location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <Landing cards={cards} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    deathrace2: file(relativePath: { eq: "deathrace2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    emi1: file(relativePath: { eq: "emi1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    panchos: file(relativePath: { eq: "panchos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            category
          }
        }
      }
    }
  }
`;
