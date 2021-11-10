import React from 'react'
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import SearchBar from "material-ui-search-bar";
import Filter from './Filter';

const styles = makeStyles({
    searchBar: {
      textAlign: 'center',
      width: '50%',
      margin:'50px auto',
      backgroundColor: '#1543'
    },
})

const theme = createTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });

  export default function Search() {
    const classes = styles()
    return (
        <div className="Search">
            <ThemeProvider theme={theme}>
                <Header />
                <SearchBar 
                  placeholder='Enter a name, place, or any keyword :)'
                  className={classes.searchBar}
                />
                <Filter />
            </ThemeProvider>
        </div>
    );
  }