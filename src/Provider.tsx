import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDarkMode } from "hooks";
import CssBaseline from "@mui/material/CssBaseline";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const queryClient = new QueryClient();

interface ProviderProps {
  children: React.ReactNode;
}

// biome-ignore lint/style/noNonNullAssertion: <>
const rootElement = document.getElementById("root")!;
const materiaThemeComponents = {
  MuiPopover: {
    defaultProps: {
      container: rootElement,
    },
  },
  MuiPopper: {
    defaultProps: {
      container: rootElement,
    },
  },
  MuiDialog: {
    defaultProps: {
      container: rootElement,
    },
  },
  MuiModal: {
    defaultProps: {
      container: rootElement,
    },
  },
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const { isDark } = useDarkMode();

  const materialTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
    components: materiaThemeComponents,
    breakpoints: {
      values: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
  });

  // console.log(materialTheme);

  return (
    <>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </StyledEngineProvider>
    </>
  );
};

export default Provider;
