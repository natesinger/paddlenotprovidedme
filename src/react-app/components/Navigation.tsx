interface NavigationProps {
  current: string;
  onNavigate: (to: string) => void;
}

export function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div 
          className="brand" 
          onClick={() => onNavigate("/about")} 
          role="button" 
          aria-label="Go to About" 
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") onNavigate("/about"); }}
        >
          <img src="/icon.png" alt="USCGS icon" className="brand-badge" />
          <span>
            <span className="desktop-only">Up Shit Creek Guide Service</span>
            <span className="mobile-only">USCGS</span>
          </span>
        </div>
        <div className="nav-links">
          <a 
            href="/about" 
            onClick={(e) => { e.preventDefault(); onNavigate("/about"); }} 
            className={current === "/about" ? "active" : ""}
          >
            About
          </a>
          <a 
            href="/poem" 
            onClick={(e) => { e.preventDefault(); onNavigate("/poem"); }} 
            className={current === "/poem" ? "active" : ""}
          >
            Poem
          </a>
          <a 
            href="/menu" 
            onClick={(e) => { e.preventDefault(); onNavigate("/menu"); }} 
            className={current === "/menu" ? "active" : ""}
          >
            Menu
          </a>
        </div>
      </div>
    </nav>
  );
}
