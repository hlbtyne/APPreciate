import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   },
//   avatar: {
//     backgroundColor: red[500]
//   }
// }));

const Application = props => {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div>

      <div onClick={()=> props.selectApp(props.app)} className="card border-light mb-3" style={{width: 400, margin: 30}}>
        <div class="card-header">
          <h4>{props.app.name}</h4>
        </div>
        <img src={props.app.image} style={{width: 398}}></img>
        <div class="card-body">
          <h5>Category: {props.app.category}</h5>
          <p class="card-text">{props.app.description}</p>
        </div>
      </div>

    </div>
    
  );
};

export default Application;