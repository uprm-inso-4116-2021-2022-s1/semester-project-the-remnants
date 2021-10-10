import React from "react";
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Grid from './Grid'
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PetsIcon from '@material-ui/icons/Pets';
import HeaderButton from "./HeaderButton";

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
  center: {
    display: "flex",
    justifyContent: "center",
    padding: "50px"
  }
})

export default function Content() {
  const classes = styles(); 

  return (
    <>
        <div className={classes.wrapper}>
            <Typography variant="h3" className={classes.bigSpace} color="primary">
                Pet Care. Made Easy!
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
            Wherever you are, get a pet sitter! Browse for registered pet sitters and find on that meets your needs.
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
            Have pet sitting experience or want to become one? Register now and start sitting!
            </Typography>
        </div>
        <div className={classes.center}>
            <HeaderButton  text="Start Here" onClick={event =>  window.location.href='/signup'} />
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
            <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Safe and Secure"/>
            <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Adapt To Your Schedule"/>
            <Grid icon={<PetsIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="All Pets are Welcomed!"/>
        </div>
    </>
  );
}