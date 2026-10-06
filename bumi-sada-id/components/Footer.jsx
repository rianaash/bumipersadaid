import { NAV } from "./Header";
const link = "font-body-sm text-body-sm text-on-tertiary-container hover:text-secondary-fixed transition-colors";
export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl mb-space-xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight font-semibold">PT BUMI SADA MINERAL</span>
            <p className="font-body-md text-body-md text-on-tertiary-container max-w-sm">From Resources to Industry. From Supply to Opportunity.</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-primary font-bold uppercase tracking-wider mb-space-xs">Navigasi</span>
            {NAV.map(([l, h]) => <a key={h} href={h} className={link}>{l}</a>)}
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-primary font-bold uppercase tracking-wider mb-space-xs">Kantor Pusat</span>
            <p className={`${link} leading-relaxed`}>Treasury Tower, Lantai 28, District 8 SCBD<br />Jl. Jend. Sudirman Kav. 52-53, Senayan, Kebayoran Baru<br />Jakarta Selatan 12190, Indonesia</p>
            <span className={link}>Telepon: +62 21 5289 8000</span>
            <span className={link}>Email: corporate@bumisadamineral.co.id</span>
          </div>
        </div>
        <div className="pt-space-lg font-label-sm text-label-sm text-on-tertiary-container">© 2026 PT Bumi Sada Mineral. Hak Cipta Dilindungi Undang-Undang.</div>
      </div>
    </footer>
  );
}
