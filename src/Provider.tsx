import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { useDarkMode } from "hooks";

const queryClient = new QueryClient();

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  useDarkMode();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NextUIProvider>{children}</NextUIProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Provider;
