import "./App.css";
// import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Typography from "./Components/typography.js";
// defaultTheme
import themes from "./themes";
const App = () => {
  // const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes("customization")}>
        <CssBaseline />
        <Typography />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
