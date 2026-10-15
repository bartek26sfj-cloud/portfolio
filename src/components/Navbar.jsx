import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { href: "#om-meg", label: "Om meg" },
  { href: "#ferdigheter", label: "Ferdigheter" },
  { href: "#prosjekter", label: "Prosjekter" },
  { href: "#erfaring", label: "Erfaring" },
  { href: "#kontakt", label: "Kontakt" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#topp" className="navbar__logo">
          BT
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Åpne meny"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
