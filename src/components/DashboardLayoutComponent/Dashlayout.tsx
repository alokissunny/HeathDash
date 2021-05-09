// import React from "react";
// import RecipeReviewCard from './card/CardComponent';
// export default function DashLayout() {

//     return (
//         <div class="mdc-layout-grid">
//   <div class="mdc-layout-grid__inner">
//     <div class="mdc-layout-grid__cell">
//       <div class="mdc-layout-grid__inner">
//         <div class="mdc-layout-grid__cell"><RecipeReviewCard></RecipeReviewCard></div>
//         <div class="mdc-layout-grid__cell"><RecipeReviewCard></RecipeReviewCard></div>
//       </div>
//     </div>
//     <div class="mdc-layout-grid__cell"><RecipeReviewCard></RecipeReviewCard></div>
//     <div class="mdc-layout-grid__cell"><RecipeReviewCard></RecipeReviewCard></div>
//   </div>
// </div>
        // <table>
        //     <tr>
        //         <td>
        //         <RecipeReviewCard></RecipeReviewCard>
    
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>
        //         <RecipeReviewCard></RecipeReviewCard>
  
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>
        //         <RecipeReviewCard></RecipeReviewCard>
   
        //         </td>
        //     </tr>
        // </table>
//         );
       
// }
import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './card/CardComponent';
import {sampleTest} from '../../data/Tests';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function DashLayout() {
  const classes = useStyles();
  const [items , setItems] = useState(['test1'])
  

  const addTest = () => {
    let i = items.length+1;
    items.push('test'+i);
   setItems([...items]);
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {items.map((item) => {
          return ( <Grid key ="{item}" item xs={12}  sm={6} md={4}>
            <RecipeReviewCard test={item}></RecipeReviewCard>
            </Grid>);
        })
        }
        <Grid item xs={12}  sm={6} md={4}>
        <IconButton aria-label="settings" onClick={addTest}>
            <AddBoxIcon />
          </IconButton>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4}>
          <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
        <RecipeReviewCard></RecipeReviewCard>
        </Grid> */}
      </Grid>
    </div>
  );
}
