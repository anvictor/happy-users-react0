import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedTextFields from './card-child/inputs';
import C_Picker from './card-child/color-picker';
const styles = {
  card: {
    minWidth: 295,
    marginLeft: -25,
  }
};

function SimpleCard(props) {
  const { classes } = props;
// console.log('props ;', props);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Change properties
        </Typography>
        <Typography variant="h5" component="h2">
          rotation
          <OutlinedTextFields/>
        </Typography>
        <Typography variant="h5" component="h2">
          color
          <C_Picker/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">add new {props.entity}</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);