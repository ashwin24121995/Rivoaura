import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Tournaments from "./pages/Tournaments";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PointSystem from "./pages/PointSystem";
import HowToPlay from "./pages/HowToPlay";
import AboutUs from "./pages/AboutUs";
import CreateTeam from "./pages/CreateTeam";
import Contests from "./pages/Contests";
import Layout from "./components/Layout";


function Router() {
  return (
    <Switch>
      {/* Pages with Layout */}
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/tournaments">
        <Layout>
          <Tournaments />
        </Layout>
      </Route>
      <Route path="/community">
        <Layout>
          <Community />
        </Layout>
      </Route>
      <Route path="/login">
        <Layout>
          <Login />
        </Layout>
      </Route>
      <Route path="/register">
        <Layout>
          <Register />
        </Layout>
      </Route>
      <Route path="/point-system">
        <Layout>
          <PointSystem />
        </Layout>
      </Route>
      <Route path="/how-to-play">
        <Layout>
          <HowToPlay />
        </Layout>
      </Route>
      <Route path="/about-us">
        <Layout>
          <AboutUs />
        </Layout>
      </Route>
      <Route path="/terms">
        <Layout>
          <Terms />
        </Layout>
      </Route>
      <Route path="/privacy">
        <Layout>
          <Privacy />
        </Layout>
      </Route>
      <Route path="/fair-play">
        <Layout>
          <FairPlay />
        </Layout>
      </Route>
      <Route path="/responsible-gaming">
        <Layout>
          <ResponsibleGaming />
        </Layout>
      </Route>

      {/* Pages WITHOUT Layout (Fullscreen Apps) */}
      <Route path="/create-team/:matchId" component={CreateTeam} />
      <Route path="/contests/:matchId" component={Contests} />

      <Route path="/404">
        <Layout>
          <NotFound />
        </Layout>
      </Route>
      
      {/* Final fallback route */}
      <Route>
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
