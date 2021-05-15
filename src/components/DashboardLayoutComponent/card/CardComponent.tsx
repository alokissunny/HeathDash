import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  Fullscreen from '@material-ui/icons/Fullscreen';
import { Chart } from "react-google-charts";
import EditIcon  from '@material-ui/icons/Edit';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
root: {
  maxWidth: 345,
},
media: {
  height: 0,
  paddingTop: '56.25%', // 16:9
},
expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
expandOpen: {
  transform: 'rotate(180deg)',
},
avatar: {
  backgroundColor: red[500],
},
}),
);

export default function RecipeReviewCard(props:any) {
const history = useHistory();
const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
setExpanded(!expanded);
};
const fullScreen = ()=> {
  history.push('/details/'+props.test);
}
return (
<Card className={classes.root}>
    <CardHeader
    avatar={
      <Avatar aria-label="recipe" className={classes.avatar}>
        H
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <Fullscreen onClick={fullScreen}/>
      </IconButton>
    }
    title={props.test}
    subheader="September 14, 2016"
  />
<div>
<IconButton aria-label="Add Entry">
        <BarChartIcon />
      </IconButton>
</div>
  <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
      This impressive paella is a perfect party dish and a fun meal to cook together with your
      guests. Add 1 cup of frozen peas along with the mussels, if you like.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
  <IconButton aria-label="Add Entry">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="Add Entry">
        <AttachFileIcon />
      </IconButton>
  </CardActions>
</Card>
);
}
