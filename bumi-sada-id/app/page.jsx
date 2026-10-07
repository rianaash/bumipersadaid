import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { values, bars, divisions, steps, missions, holders, people } from "@/components/data";

const HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuBREME3S_dhMy-bQx6Jkj7jUZqfP0dyUgW41p_cpNi4G81CH6ROSqhcfKmrUo3b6nHnBPLh6SbI0MXOAhcfleIx_yNJmxlAp18NzcoZOT-5carC92o-364erjHEjNVOuTiS_rC8OjD7g8IEXNgnj3g6xCtbUpFqDJRkiZai_o0VXMTVleWtHaxkdjFquLjv-jBy9VsXZOfODplOfUREIDvKIQmqWuUxJu0dhT1dNX9e";
const WAREHOUSE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCuharSi9jC4H4Ddp-IVhoufqKXap6v8dTsubOOxxJm7QeslDLkQzQZMxCFVR5b8qUEDcUyBYezi1pub6IUhsQiiiQMQnrPyiUyJ1ILZhi7QgF71kOhtgUf-ORHhypB31WR8WLsvc72HW88Jf2gwiqDOr0_2MdsbVOJ9hXljLvmuEIXhxTn0ndsYjODfw8BckiDxe54Az0rcMieUfPvsN_1fi4aWPXnoE88zBLSBJ7x";
const MAP = "https://lh3.googleusercontent.com/aida-public/AB6AXuAkukDB6AVVto0r2dNKk1lRB5QohzybxEfbSVv6EgzhtYGejlUq-1m8v65G6JiweeJIZzPPetT-lJeJ0Y2B-1DY429D4POKmwT20XDeltQdqbRMdw_6y3n8FBysiiO3y5IBaj8VgGYWJ-OoNK7CboRYvQKP3Vd05F1Hqn8GKzKzA6IGhMpqeSrauYmFvepO5Cf9tEMVlfqlX1LIDT1yRklw4umqvxNuGkSlOM-DiA85";
const OFFICE_ADDRESS = "Prosperity Tower Lantai 9 Unit C, District 8 SCBD Lot 28, Jl. Jend. Sudirman Kav. 52-53, Kelurahan Senayan, Kec. Kebayoran Baru, Kota Adm. Jakarta Selatan, DKI Jakarta 12190";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const targetSegments = [
  ["precision_manufacturing", "Industri Manufaktur Logam & Kimia"],
  ["construction", "Konstruksi & Infrastruktur Pembangunan"],
  ["bolt", "Sektor Energi & Pabrik Pengolahan"],
];

const wrap = "max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin";
const sec = "w-full py-space-xl md:py-24";

function Eyebrow({ children, both }) {
  return (
    <div className={`flex items-center gap-2 mb-space-xs ${both ? "justify-center" : ""}`}>
      <span className="w-6 h-1 rounded bg-secondary" />
      <span className="font-label-lg text-label-lg text-secondary uppercase font-bold tracking-wider">{children}</span>
      {both && <span className="w-6 h-1 rounded bg-secondary" />}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-surface">
        {/* HERO */}
        <section id="beranda" className="relative w-full overflow-hidden bg-primary-container pt-10 pb-14 md:pt-16 md:pb-20 lg:pb-24">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: `url('${HERO}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/95 via-primary-container/85 to-primary-container" />
          <div className={`relative ${wrap} flex flex-col items-start z-10`}>
            <div className="inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-1 rounded-lg bg-surface-container-high/20 px-3 py-1.5 backdrop-blur-sm mb-space-lg">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span className="font-label-sm text-[10px] leading-4 text-secondary-fixed uppercase tracking-wider md:text-label-sm md:tracking-widest">Profil Korporasi Resmi</span>
                <span className="text-on-tertiary-container text-[10px] leading-4 md:text-xs" aria-hidden="true">•</span>
              </span>
              <span className="whitespace-nowrap font-label-sm text-[10px] leading-4 text-inverse-on-surface md:text-label-sm">PT Bumi Sada Mineral</span>
            </div>
            <h1 className="font-display text-display-mobile md:text-[64px] md:leading-[72px] text-on-primary font-extrabold max-w-4xl tracking-tight mb-space-md">
              From Resources to Industry.<br className="hidden sm:inline" />
              <span className="text-secondary-fixed">From Supply to Opportunity.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-[65ch] leading-relaxed mb-space-xl">
              PT Bumi Sada Mineral menghubungkan kebutuhan industri dengan berbagai <span className="text-on-primary font-semibold">resources</span> yang relevan, dengan fokus pada ekosistem bisnis yang adaptif, reliable, dan kolaboratif.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto mb-space-sm">
              <a href="#tentang-kami" className="inline-flex items-center justify-center gap-2 bg-secondary-container hover:bg-secondary text-primary-container hover:text-on-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg transition-all shadow-md">
                <span>Tentang Kami</span><Icon name="arrow_downward" className="text-[18px]" />
              </a>
              <a href="#kontak" className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg transition-all backdrop-blur-sm">
                <span>Hubungi Kami</span><Icon name="mail" className="text-[18px]" />
              </a>
            </div>
            <div className="w-full pt-space-md flex flex-wrap items-center gap-3">
              <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-wider">Prinsip Fundamental:</span>
              {[["sync_alt", "Adaptif"], ["verified", "Reliable"], ["handshake", "Kolaboratif"]].map(([i, t]) => (
                <div key={t} className="flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low/10 text-on-primary font-label-md text-label-md">
                  <Icon name={i} className="text-secondary-fixed text-[16px]" /><span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TARGET SEGMEN PASAR */}
        <section className={`relative z-20 ${wrap} -mt-8`}>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-xl md:p-space-lg">
            <div className="mb-space-md flex flex-col gap-space-sm md:flex-row md:items-start md:gap-space-lg">
              <div className="flex shrink-0 items-center gap-2">
                <Icon name="groups" className="text-secondary text-[20px]" />
                <h2 className="font-label-lg text-label-lg text-on-surface font-bold">Target Segmen Pasar</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant md:max-w-3xl">PT Bumi Sada Mineral memfokuskan layanan pengadaan kepada pemangku kepentingan kunci di ekosistem produktif:</p>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-3 md:gap-4">
              {targetSegments.map(([icon, title]) => (
                <div key={title} className="flex min-h-24 items-start gap-3 rounded-lg bg-surface-container-low p-3 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-container">
                    <Icon name={icon} className="text-secondary-fixed text-[20px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Segmen Pasar</span>
                    <h3 className="font-headline-sm text-headline-sm break-words text-on-surface font-bold leading-snug">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-space-md flex flex-col items-start justify-between gap-2 border-t border-outline-variant/30 pt-space-sm text-xs text-on-surface-variant sm:flex-row sm:items-center">
              <span>Standar Kualitas B2B</span>
              <span className="font-semibold text-secondary">Verified Compliance</span>
            </div>
          </div>
        </section>

        {/* TENTANG KAMI */}
        <section id="tentang-kami" className={`${sec} bg-surface`}>
          <div className={`${wrap} flex flex-col lg:flex-row items-stretch gap-12`}>
            <div className="lg:w-7/12 flex flex-col justify-center">
              <Eyebrow>Tentang Kami</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">Pilar Pasokan Terpercaya Menopang Transformasi Industri Nasional</h2>
              <div className="p-space-md bg-surface-container-high rounded-xl mb-space-md">
                <p className="font-body-lg text-body-lg text-on-surface font-semibold leading-snug">“PT Bumi Sada Mineral merupakan perusahaan yang bergerak di bidang komoditas dan material, dengan cakupan usaha mulai dari penyiapan lahan hingga perdagangan bahan bakar, logam dan bijih logam, serta material konstruksi.”</p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">PT Bumi Sada Mineral hadir untuk mengambil peran dalam mendukung kebutuhan rantai pasok komoditas dan material yang menjadi bagian penting dari berbagai aktivitas pembangunan dan industri. Dengan cakupan kegiatan usaha yang meliputi penyiapan lahan serta perdagangan komoditas seperti bahan bakar, logam dan bijih logam, semen, kapur, pasir, dan batu, perusahaan memiliki ruang untuk menghubungkan kebutuhan pasar dengan ketersediaan sumber daya dan material secara lebih terintegrasi.</p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">Ke depan, PT Bumi Sada Mineral diarahkan untuk mengembangkan kapabilitas dan membangun kemitraan strategis guna menciptakan nilai yang berkelanjutan di sektor komoditas dan material Indonesia.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {values.map(([i, t]) => (
                  <div key={t} className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest shadow-sm">
                    <Icon name={i} className="text-secondary text-[22px]" /><span className="font-label-md text-label-md text-on-surface font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 flex flex-col gap-4">
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Gudang logistik mineral" className="w-full h-full object-cover" src={WAREHOUSE} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-space-md">
                  <span className="text-on-primary font-headline-sm text-headline-sm">Rantai Pasokan Mineral Strategis</span>
                </div>
              </div>
              <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-md flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Kapabilitas Terpadu</span>
                  <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase">BSM Ecosystem</span>
                </div>
                <div className="flex flex-col gap-3">
                  {bars.map(([l, v, c]) => (
                    <div key={l} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between"><span className="text-on-surface-variant font-label-md text-label-md">{l}</span><span className="text-secondary font-bold font-label-md text-label-md">{v}</span></div>
                      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden"><div className={`h-full rounded-full ${c}`} /></div>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg flex items-center gap-3">
                  <Icon name="format_image_left" className="text-secondary text-[24px]" />
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Menjalankan kepatuhan tata kelola komoditas dan kepatuhan standar legalitas perdagangan mineral nasional.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BISNIS KAMI */}
        <section id="bisnis-kami" className={`${sec} bg-surface-container-low`}>
          <div className={wrap}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
              <div className="max-w-2xl"><Eyebrow>Bisnis Kami</Eyebrow><h2 className="font-headline-lg text-headline-lg text-on-surface">Cakupan Portofolio Kegiatan Usaha</h2></div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-3 md:mt-0">Solusi dari hulu ke hilir: integrasi logistik mineral, pasokan energi industri, dan persiapan fondasi proyek skala besar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-space-xl">
              {divisions.map(([i, d, t, p, tag, core]) => (
                <div key={t} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1">
                  <div>
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-space-md ${core ? "bg-primary-container text-secondary-fixed" : "bg-surface-container text-secondary"}`}><Icon name={i} className="text-[30px]" /></div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">{d}</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-space-sm">{t}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{p}</p>
                  </div>
                  <div className="mt-space-md pt-space-sm flex items-center gap-1.5 text-secondary"><span className="font-label-md text-label-md font-semibold">{tag}</span><Icon name="chevron_right" className="text-[16px]" /></div>
                </div>
              ))}
            </div>
            <div className="w-full rounded-xl bg-primary-container p-space-lg text-on-primary shadow-md">
                <div>
                  <div className="mb-space-md flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2"><Icon name="alt_route" className="text-secondary-fixed text-[22px]" /><span className="font-label-lg text-label-lg text-secondary-fixed uppercase tracking-wider font-bold">Alur Model Bisnis</span></div>
                    <span className="font-label-sm text-label-sm text-inverse-on-surface/70">Terintegrasi dari Hulu ke Hilir</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-space-md">
                    {steps.map(([i, n, t, sub, p]) => (
                      <div key={t} className="bg-surface-container-low/10 p-space-md rounded-lg hover:bg-surface-container-low/20 transition-all">
                        <div className="flex items-center justify-between mb-2"><span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold">{n}</span><Icon name={i} className="text-on-primary text-[20px]" /></div>
                        <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold mb-1">{t}</h4>
                        <span className="text-xs text-secondary-fixed font-label-sm text-label-sm">{sub}</span>
                        <p className="font-body-sm text-body-sm text-inverse-on-surface/80 mt-2 leading-relaxed">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-on-primary/10 pt-4 text-xs text-on-tertiary-container sm:flex-row sm:items-center">
                  <span>Prinsip Utama: Konsistensi Mutu, Ketepatan Volume, dan Skalabilitas Jangka Panjang</span>
                  <div className="flex items-center gap-1 text-secondary-fixed font-semibold"><span>Sistem Rantai BSM</span><Icon name="bolt" className="text-[14px]" /></div>
                </div>
            </div>
          </div>
        </section>

        {/* VISI & MISI */}
        <section id="visi-misi" className={`${sec} bg-surface`}>
          <div className={wrap}>
            <div className="text-center max-w-3xl mx-auto mb-space-xl">
              <Eyebrow both>Arah &amp; Komitmen</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Visi &amp; Misi Perusahaan</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Kompas strategis dalam menavigasi peluang komoditas dan menghadirkan dampak positif berkelanjutan bagi seluruh ekosistem mitra.</p>
            </div>
            <div className="relative mb-space-xl overflow-hidden rounded-xl bg-primary-container p-6 shadow-lg md:p-space-xl">
              <div aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-on-primary opacity-[0.06] md:block"><Icon name="visibility" className="text-[200px]" /></div>
              <div className="relative z-10 max-w-full">
                <div className="flex items-center gap-2 mb-space-sm">
                  <span className="px-3 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold">Visi Korporasi</span>
                  <span className="font-label-sm text-label-sm text-on-primary/75">Landasan Masa Depan</span>
                </div>
                <blockquote className="max-w-full font-headline-md text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.3] font-bold text-on-primary md:max-w-[24em] lg:max-w-[28em]">
                  <span className="text-secondary-container">“</span>Menjadi mitra penggerak ekosistem komoditas terpercaya yang menghubungkan sumber daya dengan peluang industri dalam menciptakan kebutuhan industri yang berkelanjutan.<span className="text-secondary-container">”</span>
                </blockquote>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {missions.map(([t, p, c], i) => (
                <div key={t} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center font-display font-extrabold text-2xl mb-space-md">{String(i + 1).padStart(2, "0")}</div>
                  <div className="grow">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-sm">{t}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{p}</p>
                  </div>
                  <div className="mt-space-md pt-3 flex items-center gap-2 text-xs text-outline"><Icon name="check_circle" className="text-[16px] text-secondary" /><span>{c}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* KONTAK */}
        <section id="kontak" className={`${sec} bg-surface`}>
          <div className={wrap}>
            <div className="max-w-2xl mb-space-xl">
              <Eyebrow>Hubungi Kami</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Mulai Kolaborasi Strategis</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Diskusikan kebutuhan pasokan komoditas, proyek penyiapan lahan, atau jalin kemitraan rantai pasok bersama tim representatif kami.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div><span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Kantor Operasional &amp; Manajemen</span><h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Prosperity Tower SCBD</h3></div>
                  <div className="flex items-start gap-3"><Icon name="location_on" className="text-secondary text-[24px] shrink-0 mt-0.5" /><a href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Buka lokasi kantor di Google Maps" className="group flex min-w-0 items-start gap-1 font-body-sm text-body-sm text-on-surface-variant leading-relaxed hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"><span className="underline-offset-2 group-hover:underline">{OFFICE_ADDRESS}</span><Icon name="open_in_new" className="mt-0.5 shrink-0 text-[16px]" /></a></div>
                  {[["mail", "Alamat Email Resmi", "info@bumisadamineral.co.id", "mailto:info@bumisadamineral.co.id"], ["call", "Telepon / WhatsApp Korporat", "+62 21 5289 8000"], ["schedule", "Jam Kerja Operasional", "Senin – Jumat : 08.30 – 17.30 WIB"]].map(([i, l, v, h]) => (
                    <div key={l} className="flex items-center gap-3">
                      <Icon name={i} className="text-secondary text-[24px] shrink-0" />
                      <div className="flex flex-col"><span className="font-label-sm text-label-sm text-outline">{l}</span>
                        {h ? <a href={h} className="font-body-sm text-body-sm text-on-surface hover:text-secondary font-semibold transition-colors">{v}</a> : <span className="font-body-sm text-body-sm text-on-surface font-semibold">{v}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Buka lokasi kantor di Google Maps" className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-xl bg-surface-container-high bg-cover bg-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary" style={{ backgroundImage: `url('${MAP}')` }}>
                  <div className="absolute inset-0 bg-primary-container/40 flex items-center justify-center p-4 text-center">
                    <div className="bg-surface-container-lowest/95 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col items-center gap-2">
                      <Icon name="pin_drop" className="text-secondary text-[28px]" />
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">District 8 SCBD Lot 28</span>
                      <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant group-hover:text-secondary"><span>Kebayoran Baru, Jakarta Selatan</span><Icon name="open_in_new" className="text-[14px]" /></span>
                    </div>
                  </div>
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
