"use client";
import { useState } from "react";
import Icon from "./Icon";
const inp = "w-full px-3.5 py-2.5 rounded bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all";
const lbl = "font-label-md text-label-md text-on-surface font-semibold";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  // TODO: sambungkan ke email service (Resend / Formspree) sebelum go-live
  const submit = (e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); };
  return (
    <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-md">
      <div className="mb-space-md">
        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Formulir Kontak Bisnis</span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Kirimkan Permintaan atau Penawaran</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Tim kami akan menindaklanjuti pesan Anda dalam waktu 1x24 jam kerja.</p>
      </div>
      <form className="flex flex-col gap-space-md" onSubmit={submit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5"><label className={lbl} htmlFor="fullName">Nama Lengkap *</label><input id="fullName" className={inp} placeholder="Contoh: Budi Santoso" required /></div>
          <div className="flex flex-col gap-1.5"><label className={lbl} htmlFor="workEmail">Alamat Email Perusahaan *</label><input id="workEmail" type="email" className={inp} placeholder="budi@perusahaan.co.id" required /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5"><label className={lbl} htmlFor="companyName">Nama Perusahaan / Organisasi</label><input id="companyName" className={inp} placeholder="PT Industri Konstruksi Jaya" /></div>
          <div className="flex flex-col gap-1.5"><label className={lbl} htmlFor="sector">Kategori Kebutuhan</label>
            <select id="sector" className={inp}>
              <option>Perdagangan Logam &amp; Bijih Logam</option><option>Perdagangan Bahan Bakar &amp; Energi</option>
              <option>Material Semen, Pasir &amp; Batu</option><option>Penyiapan &amp; Pengelolaan Lahan</option><option>Kemitraan Strategis Lainnya</option>
            </select></div>
        </div>
        <div className="flex flex-col gap-1.5"><label className={lbl} htmlFor="msg">Pesan / Rincian Inquiry *</label>
          <textarea id="msg" rows={4} className={inp} required placeholder="Jelaskan spesifikasi kebutuhan komoditas, estimasi volume, atau detail kemitraan yang diharapkan..." /></div>
        <div className="flex items-center gap-2 pt-1">
          <input id="consent" type="checkbox" required className="rounded text-secondary focus:ring-secondary w-4 h-4" />
          <label htmlFor="consent" className="font-body-sm text-body-sm text-on-surface-variant">Saya menyetujui data di atas digunakan untuk korespondensi resmi B2B bersama PT Bumi Sada Mineral.</label>
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg transition-colors mt-2 shadow-sm self-start">
          <span>Kirim Pesan Resmi</span><Icon name="send" className="text-[18px]" />
        </button>
        {sent && <p role="status" className="font-body-sm text-body-sm text-secondary font-semibold">Terima kasih. Permintaan Anda telah diterima oleh PT Bumi Sada Mineral.</p>}
      </form>
    </div>
  );
}
