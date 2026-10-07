import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";

export { NAV } from "./navigation";

const LOGO = "/logo-bsm-header.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-container/10 bg-[var(--header-background)] shadow-[0_1px_4px_rgba(19,27,46,0.06)]">
      <div className="relative mx-auto grid h-[var(--header-height)] max-w-[1280px] grid-cols-[1fr_auto] items-center px-margin-mobile md:px-gutter lg:grid-cols-[1fr_auto_1fr] lg:px-margin">
        <Link href="/" aria-label="PT Bumi Sada Mineral, Beranda" className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
          <Image
            src={LOGO}
            alt="Logo PT Bumi Sada Mineral"
            width={830}
            height={360}
            priority
            className="h-9 w-auto object-contain sm:h-10 lg:h-14 xl:h-16"
          />
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
}
