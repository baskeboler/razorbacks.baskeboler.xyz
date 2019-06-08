import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import DeathRace from "../components/DeathRace";
import config from "../../data/SiteConfig";
import { StaticQuery, graphql } from "gatsby";

class DeathRacePage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Death Race">
        <div className="deathrace-container">
          <Helmet>
            <title>{`Death Race | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/deathrace/`} />
          </Helmet>
          <StaticQuery
            query={graphql`
              query {
                allFile(filter: { sourceInstanceName: { eq: "audio" } }) {
                  edges {
                    node {
                      id
                      name
                      absolutePath
                      relativePath
                      publicURL
                    }
                  }
                }
              }
            `}
            render={data => (
              <ul>
                {data.allFile.edges.map(e => (
                  <li>
                    <audio src={e.node.publicURL} controls />
                  </li>
                ))}
              </ul>
            )}
          />
        </div>
      </Layout>
    );
  }
}

export default DeathRacePage;
