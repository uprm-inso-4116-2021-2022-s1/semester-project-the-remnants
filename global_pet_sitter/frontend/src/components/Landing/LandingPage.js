import React from 'react'
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

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

  export default function LandingPage() {

    return (
        <div className="landing-page">
            <ThemeProvider theme={theme}>
                <Header />
                <Content />
                <Footer />
            </ThemeProvider>
        </div>
    );
  }