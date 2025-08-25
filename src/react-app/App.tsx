// src/App.tsx
import { useEffect, useMemo, useState, type ReactNode } from "react";
import "./App.css";
import { PoemPage } from "./pages/PoemPage";
import { MenuPage } from "./pages/MenuPage";
import { AboutPage } from "./pages/AboutPage";

type RoutePath = "/" | "/about" | "/poem" | "/menu";

function useRouter() {
  const [path, setPath] = useState<RoutePath>(() => (location.pathname as RoutePath));

  useEffect(() => {
    const onPop = () => setPath(location.pathname as RoutePath);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to: RoutePath, replace?: boolean) => {
    if (replace) {
      history.replaceState({}, "", to);
    } else {
      history.pushState({}, "", to);
    }
    setPath(to);
  };

  return { path, navigate } as const;
}

function Nav({ current, onNavigate }: { current: RoutePath; onNavigate: (to: RoutePath) => void }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => onNavigate("/about")} role="button" aria-label="Go to About" tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") onNavigate("/about"); }}>
          <img src="/icon.png" alt="USCGS icon" className="brand-badge" />
          <span>
            <span className="desktop-only">Up Shit Creek Guide Service</span>
            <span className="mobile-only">USCGS</span>
          </span>
        </div>
        <div className="nav-links">
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate("/about"); }} className={current === "/about" ? "active" : ""}>About</a>
          <a href="/poem" onClick={(e) => { e.preventDefault(); onNavigate("/poem"); }} className={current === "/poem" ? "active" : ""}>Poem</a>
          <a href="/menu" onClick={(e) => { e.preventDefault(); onNavigate("/menu"); }} className={current === "/menu" ? "active" : ""}>Menu</a>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const { path, navigate } = useRouter();

  // Redirect / -> /about once on mount if needed
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/about", true);
    }
  }, []);

  let page: ReactNode;
  if (path === "/poem") page = <PoemPage />;
  else if (path === "/menu") page = <MenuPage />;
  else page = <AboutPage />;

  return (
    <>
      <Nav current={path === "/" ? "/about" : path} onNavigate={navigate} />
      {page}
    </>
  );
}

export default App;
