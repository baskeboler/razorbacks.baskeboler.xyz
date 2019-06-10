import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  // Button,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { graphql, Link, StaticQuery } from "gatsby";
// import {} from "@material-ui/icons";
import Img from "gatsby-image";
import React from "react";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: "#000000", //theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroHeader: {
    color: theme.palette.primary
    // color: "#FF5252"
    // color: `$md-red-a-200`
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  cardActions: {
    justifyContent: "space-around"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Landing = props => {
  const classes = useStyles(props);
  const { cards } = props;

  return (
    <div className={classes.heroContent}>
      <Container>
        <CssBaseline />
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "header-logo.png" }) {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => <Img fluid={data.file.childImageSharp.fluid} />}
        />
      </Container>

      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={10} margin={0}>
          {cards.map((card, i) => (
            <Grid item key={`card-${i}`} xs={12} sm={6} md={4}>
              <Link to={card.url}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="ignoreme"
                    component={() => <Img fluid={card.image} />}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.text}</Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button
                      color="secondary"
                      variant="contained"
                      size="small"
                      fullWidth
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;
