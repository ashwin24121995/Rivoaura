import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
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
import CreateTeamNew from "./pages/CreateTeamNew";
import Contests from "./pages/Contests";
import MyContests from "./pages/MyContests";
import Leaderboard from "./pages/Leaderboard";
import UserProfile from "./pages/UserProfile";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PasswordReset from "./pages/PasswordReset";
import Settings from "./pages/Settings";
import WhyFree from "./pages/WhyFree";
import Layout from "./components/Layout";

function Router() {
  // make sure to consider if you need authentication for certain routes
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
      <Route path="/about">
        <Layout>
          <About />
        </Layout>
      </Route>
      <Route path="/why-free">
        <Layout>
          <WhyFree />
        </Layout>
      </Route>
      <Route path="/faq">
        <Layout>
          <FAQ />
        </Layout>
      </Route>
      <Route path="/blog">
        <Layout>
          <Blog />
        </Layout>
      </Route>
      <Route path="/contact">
        <Layout>
          <Contact />
        </Layout>
      </Route>
      <Route path="/dashboard">
        <Layout>
          <Dashboard />
        </Layout>
      </Route>
      <Route path="/create-team/:matchId">
        <Layout>
          <CreateTeamNew />
        </Layout>
      </Route>
      <Route path="/password-reset">
        <Layout>
          <PasswordReset />
        </Layout>
      </Route>
      <Route path="/settings">
        <Layout>
          <Settings />
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

      <Route path="/my-contests">
        <Layout>
          <MyContests />
        </Layout>
      </Route>
      <Route path="/leaderboard">
        <Layout>
          <Leaderboard />
        </Layout>
      </Route>
      <Route path="/profile">
        <Layout>
          <UserProfile />
        </Layout>
      </Route>
      <Route path="/contests/:id">
        <Layout>
          <Contests />
        </Layout>
      </Route>

      {/* Pages WITHOUT Layout (Fullscreen Apps) */}
      <Route path="/create-team/:matchId" component={CreateTeam} />

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
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
