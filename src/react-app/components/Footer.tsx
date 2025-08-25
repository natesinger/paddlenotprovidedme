import React from "react";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <nav aria-label="Footer">
          <a href="/about">About</a>
          <a href="/poem">Poem</a>
          <a href="/menu">Menu</a>
        </nav>
        <div className="copyright">© {new Date().getFullYear()} Up Shit Creek Guide Service</div>
      </div>
    </footer>
  );
}
