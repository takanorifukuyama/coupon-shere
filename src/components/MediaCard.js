import React from 'react';
import { withRouter } from 'react-router';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {

  card: {
    maxWidth: 345,
    margin:20,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;

  const handleToAboutPage = () => {
    this.props.history.push('/about')
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
          image="https://media-cdn.tripadvisor.com/media/photo-s/0c/0e/61/91/cafe-amore.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.shop}
          </Typography>
          <Typography component="p">
            {props.coupon}
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          To HR.
        </Button>
        <Button size="small" color="primary" onCliick={handleToAboutPage}>
          MORE
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  withStyles(styles)(MediaCard)
);