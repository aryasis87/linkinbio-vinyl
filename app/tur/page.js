import { SITE, TIKET_DIBUKA, TUR } from '@/lib/laras';
import Kembali from '../components/Kembali';
import FormIngatkan from '../components/FormIngatkan';

export const metadata = {
  title: 'Tur Akustik 5 Kota',
  description: 'Tur akustik "Senja Kala" Laras November–Desember 2026 di Jakarta, Bandung, Yogyakarta, Semarang, dan Surabaya — minta pengingat saat tiket dibuka atau ajukan booking.',
  alternates: { canonical: `${SITE}/tur` },
};

export default function Tur() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-xl">
        <Kembali />
        <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-amberv">Tur akustik · Senja Kala</p>
        <h1 className="mt-1 font-serif text-5xl">Lima kota, satu gitar</h1>
        <p className="mt-3 text-sm text-krem/80">Kursi terbatas, tanpa pengeras suara besar. Tiket dibuka {TIKET_DIBUKA}.</p>

        <ol className="mt-8 border-l border-krem/20 pl-6">
          {TUR.map((t) => (
            <li key={t.kota} className="relative pb-7 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-amberv bg-studio" />
              <p className="text-xs uppercase tracking-[0.2em] text-krem/75">{t.tanggal}</p>
              <h2 className="font-serif text-3xl">{t.kota}</h2>
              <p className="text-sm text-krem/80">{t.venue} · {t.kursi} kursi</p>
            </li>
          ))}
        </ol>

        <FormIngatkan />
        <p className="mt-6 text-center text-xs text-krem/70">Venue dan tanggal adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
