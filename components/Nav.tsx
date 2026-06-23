"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";
import styles from "./Nav.module.css";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#coverage", label: "Coverage" },
  { href: "#proof", label: "Reviews" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the sheet is open; close on Escape or a jump back to desktop.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 921px)");
    const onWide = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled || open ? styles.solid : ""}`}>
        <div className={`shell ${styles.inner}`}>
        <a href="#main" className={styles.brand} aria-label="Terminal Car Wash RM — home">
          <Logo />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.phone}>
            {site.phone}
          </a>
          <a href="#book" className="btn btn-primary">
            Book a wash
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-sheet"
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
          <span data-open={open} />
        </button>
        </div>
      </header>

      {/* Mobile sheet — rendered as a SIBLING of the header so the header's
          backdrop-filter never becomes its containing block (that bug made the
          old sheet collapse and read as transparent). Body is the containing
          block, so inset:0 fills the viewport. */}
      <div
        id="mobile-sheet"
        className={styles.sheet}
        data-open={open}
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <nav className={styles.sheetInner} aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.sheetLink}
              style={{ ["--i" as string]: i }}
              onClick={() => setOpen(false)}
            >
              <span>{l.label}</span>
              <Chevron />
            </a>
          ))}
          <hr className="divider" />
          <a
            href={site.phoneHref}
            className={styles.sheetPhone}
            onClick={() => setOpen(false)}
          >
            {site.phone}
          </a>
          <a
            href="#book"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Book a wash
          </a>
        </nav>
      </div>
    </>
  );
}

function Chevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
