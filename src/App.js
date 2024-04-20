import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "router/AppRouter";
import theme from "styles/theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
