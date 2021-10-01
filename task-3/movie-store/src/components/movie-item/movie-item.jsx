import React from 'react';
import propTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });
const imageUrl = (img) => `https://image.tmdb.org/t/p/w500${img}`;


export default function MovieItem({item}) {
  // const classes = useStyles();
  console.log(item.id);
  return (
    <div className='item' key={item.id}>
      <img src={imageUrl(item.poster_path)} className='film' alt={item.title}/>
      <div>{item.title}</div>
      <div>{item.overview}</div>
    </div>
  );
}

MovieItem.propTypes = {
  item: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    overview: propTypes.string,
    poster_path: propTypes.string,
  })
};

// <Card className={classes.root}>
// <Card className="child">
//   <CardActionArea>
//     <CardMedia
//       component="img"
//       alt="Contemplative Reptile"
//       // height="140"
//       image={imageUrl(item.poster_path)}
//       title={item.title}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="h2">
//         {item.title}
//       </Typography>
//       <Typography variant="body2" color="textSecondary" component="p">
//         {item.overview}
//       </Typography>
//       <p>{item.release_date}</p>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     <Button size="small" color="primary">
//       Share
//     </Button>
//     <Button size="small" color="primary">
//       Learn More
//     </Button>
//   </CardActions>
// </Card>