import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import ContentPage from "@/pages/ContentPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <ContentPage page="home" hero wide />} />
      <Route path="/faq" component={() => <ContentPage page="faq" wide />} />
      <Route path="/feedback" component={() => <ContentPage page="feedback" wide />} />
      <Route path="/licence" component={() => <ContentPage page="licence" hero />} />
      <Route path="/updates" component={() => <ContentPage page="updates" hero />} />
      <Route path="/mirrors" component={() => <ContentPage page="mirrors" hero />} />
      <Route path="/keys" component={() => <ContentPage page="keys" wide hero />} />
      <Route path="/links" component={() => <ContentPage page="links" wide hero />} />
      <Route path="/team" component={() => <ContentPage page="team" hero />} />
      <Route
        path="/latest"
        component={() => <ContentPage page="latest" wide hero sidebar />}
      />
      <Route
        path="/snapshot"
        component={() => <ContentPage page="snapshot" wide hero sidebar />}
      />
      <Route path="/docs" component={() => <ContentPage page="docs" hero />} />
      <Route path="/privacy" component={() => <ContentPage page="privacy" wide hero />} />
      <Route path="/changes" component={() => <ContentPage page="changes" wide hero />} />
      <Route path="/wishlist" component={() => <ContentPage page="wishlist" wide hero />} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
