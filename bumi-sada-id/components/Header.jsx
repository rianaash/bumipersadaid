import Icon from "./Icon";
const LOGO = "/logo-bsm-header.jpg";
export const NAV = [["Beranda","#beranda"],["Tentang Kami","#tentang-kami"],["Bisnis Kami","#bisnis-kami"],["Visi & Misi","#visi-misi"],["Korporasi","#korporasi"],["Kontak","#kontak"]];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-space-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="PT Bumi Sada Mineral" className="h-12 w-auto rounded-md object-contain" src={LOGO} />
        </a>
        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV.map(([l, h], i) => (
            <a key={h} href={h} className={`py-space-xs font-label-lg text-label-lg transition-colors ${i === 0 ? "text-secondary-fixed border-b-2 border-secondary font-bold" : "text-inverse-on-surface hover:text-secondary-fixed"}`}>{l}</a>
          ))}
        </nav>
        <a href="#kontak" className="hidden sm:inline-flex items-center justify-center bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg transition-colors">Hubungi Kami</a>
      </div>
    </header>
  );
}
