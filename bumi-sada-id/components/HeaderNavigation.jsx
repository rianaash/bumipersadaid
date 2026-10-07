"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { NAV } from "./navigation";

export default function HeaderNavigation() {
  const [activeHref, setActiveHref] = useState("#beranda");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (NAV.some(([, href]) => href === window.location.hash)) {
      setActiveHref(window.location.hash);
    }

    const sections = NAV
      .map(([, href]) => document.getElementById(href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.15, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleNavClick(href) {
    setActiveHref(href);
    setIsOpen(false);
  }

  function linkClass(href, mobile = false) {
    const active = activeHref === href;
    return mobile
      ? `flex min-h-11 items-center border-l-2 px-4 py-2 text-sm leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${active ? "border-secondary font-bold text-primary-container" : "border-transparent font-medium text-primary-container hover:border-secondary hover:text-secondary"}`
      : `inline-flex min-h-11 items-center border-b-2 px-1 text-sm leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${active ? "border-secondary font-bold text-primary-container" : "border-transparent font-medium text-primary-container hover:border-secondary hover:text-secondary"}`;
  }

  return (
    <div className="flex items-center">
      <nav aria-label="Navigasi utama" className="hidden lg:block">
        <ul className="flex items-center gap-5 xl:gap-space-lg">
          {NAV.map(([label, href]) => (
            <li key={href}>
              <Link href={href} onClick={() => handleNavClick(href)} className={linkClass(href)} aria-current={activeHref === href ? "location" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href="#kontak"
        onClick={() => handleNavClick("#kontak")}
        className="ml-6 hidden min-h-11 items-center justify-center rounded-lg bg-secondary px-space-md py-space-sm font-label-lg text-label-lg text-on-secondary transition-colors hover:bg-on-secondary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary lg:inline-flex"
      >
        Hubungi Kami
      </Link>

      <button
        type="button"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary-container transition-colors hover:bg-primary-container/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:hidden"
      >
        <Icon name={isOpen ? "close" : "menu"} className="text-[24px]" />
      </button>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "block" : "hidden"} absolute left-0 right-0 top-full border-b border-primary-container/10 bg-[var(--header-background)] px-margin-mobile pb-5 pt-2 shadow-[0_8px_16px_rgba(19,27,46,0.08)] lg:hidden`}
      >
        <nav aria-label="Navigasi mobile">
          <ul className="flex flex-col">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <Link href={href} onClick={() => handleNavClick(href)} className={linkClass(href, true)} aria-current={activeHref === href ? "location" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#kontak"
            onClick={() => handleNavClick("#kontak")}
            className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-secondary px-space-md py-space-sm font-label-lg text-label-lg text-on-secondary transition-colors hover:bg-on-secondary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </div>
  );
}