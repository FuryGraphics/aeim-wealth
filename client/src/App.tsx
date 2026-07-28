import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import LocationPage from "./pages/LocationPage";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Disclaimer, PrivacyPolicy } from "./pages/Legal";
import { SERVICES, LOCATIONS } from "./lib/siteData";
import ChatWidget from "./components/ChatWidget";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/:slug">
          {(params) => <ServiceDetail slug={params.slug} />}
        </Route>
        <Route path="/about" component={About} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        {/* Location routes */}
        {LOCATIONS.map((loc) => (
          <Route key={loc.slug} path={`/${loc.slug}`}>
            <LocationPage slug={loc.slug} />
          </Route>
        ))}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
