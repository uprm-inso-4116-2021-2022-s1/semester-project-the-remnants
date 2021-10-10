import React from 'react'
import HeaderButton from './HeaderButton'
import logo from '../../../static/assets/GPS-Logo.png';
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    title: {
        marginRight: "300px",
        marginLeft: "100px"
    },
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#FFF",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "7%", 
        ['@media (max-width:500px)']: { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

export default function Header() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(151, 143, 147, 0.8)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <Typography variant="h3" className={classes.title}>
                   Global Pet Sitters
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <HeaderButton text="SignUp" onClick={event =>  window.location.href='/signup'} />
                <HeaderButton text="Login" onClick={event =>  window.location.href='/login'} />
            </Toolbar>
    )
}