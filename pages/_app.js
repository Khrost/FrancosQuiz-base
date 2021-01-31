import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from "../db.json";//raiz do projeto é ../

const GlobalStyle = createGlobalStyle`
  *{
	  box-sizing: border-box;
	}
  body {
    margin: 0;
    padding: 0;
    //novo estilo
    display: flex;
    flex-direction: column;
	  font-family: 'Lato', sans-serif;
    //deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
	html, body {
    min-height: 100vh;
  }
	#__next {
    flex: 1;
    display: flex;
	  flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
