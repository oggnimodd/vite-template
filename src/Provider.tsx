import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDarkMode } from "hooks";
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from "antd";

const queryClient = new QueryClient();

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const { isDark } = useDarkMode();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AntdConfigProvider
          theme={{
            ...antdTheme,
            algorithm: isDark
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
          }}
        >
          {children}
        </AntdConfigProvider>{" "}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Provider;
