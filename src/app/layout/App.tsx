import { ThemeProvider } from '@emotion/react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';


function App() {

  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark': 'light';
  const Theme=createTheme({
    palette:{
     mode: paletteType,
    }
  });

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
