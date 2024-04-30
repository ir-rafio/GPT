import { BrowserRouter } from "react-router-dom";
import { SuperTokensWrapper } from "supertokens-auth-react";
import { NavBar } from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import { RouteComponent } from "./routes";
import { Toaster } from "./components/ui/sonner";

export function App() {
  return (
    <SuperTokensWrapper>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <NavBar />
          <RouteComponent />
          <Toaster />
        </BrowserRouter>
      </ThemeProvider>
    </SuperTokensWrapper>
  );
}
