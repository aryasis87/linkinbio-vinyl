import Link from 'next/link';
import { Bell, FileText, Mic2, Play, Ticket } from 'lucide-react';
import { ALBUM, LINKS } from '@/lib/laras';

const IKON = { putar: Play, lirik: FileText, tiket: Ticket, lonceng: Bell, mic: Mic2 };

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Piringan dengan label tipografi — persona fiktif, tanpa foto */}
        <div className="rise relative mx-auto h-52 w-52" aria-hidden="true">
          <div className="record absolute inset-0 rounded-full shadow-[0_20px_60px_-15px_rgba(232,161,60,0.35)]" />
          <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-studio bg-amberv text-center text-studio">
            <span className="font-serif text-lg leading-none">Laras</span>
            <span className="-mt-3 text-[8px] font-semibold uppercase tracking-[0.2em]">Senja Kala</span>
          </div>
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-studio" />
        </div>

        <header className="rise mt-7 text-center" style={{ animationDelay: '0.1s' }}>
          <p className="text-[11px] uppercase tracking-[0.35em] text-amberv">Penyanyi · Penulis lagu</p>
          <h1 className="mt-2 font-serif text-5xl">Laras</h1>
          <p className="mt-2 text-sm text-krem/80">Lagu-lagu tentang pulang, hujan, dan hal-hal yang tak sempat dikatakan.</p>
        </header>

        <div className="rise mt-6 rounded-2xl border border-krem/15 bg-white/5 p-4" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between text-xs text-krem/75">
            <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amberv" aria-hidden="true" /> Album baru</span>
            <span>{ALBUM.lagu.length} lagu</span>
          </div>
          <p className="mt-1 font-serif text-xl italic">&ldquo;{ALBUM.judul}&rdquo; — rilis {ALBUM.rilis.split(', ')[1]}</p>
          <div className="mt-3 h-1 rounded-full bg-krem/15" aria-hidden="true">
            <div className="progress h-full rounded-full bg-amberv" />
          </div>
        </div>

        <nav className="mt-6" aria-label="Tautan">
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-krem/70" aria-hidden="true">Side A / Side B</p>
          {LINKS.map((t, i) => {
            const Ikon = IKON[t.ikon];
            return (
              <Link
                key={t.no}
                href={t.href}
                className="rise group flex items-center gap-4 border-b border-krem/15 py-4 transition hover:bg-white/5 hover:px-3"
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
              >
                <span className="w-7 font-serif text-lg italic text-amberv">{t.no}</span>
                <Ikon size={17} className="text-krem/60 transition group-hover:text-amberv" aria-hidden="true" />
                <span className="flex-1 font-medium">{t.label}</span>
                <span className="text-xs text-krem/70">{t.dur}</span>
              </Link>
            );
          })}
        </nav>

        <p className="rise mt-7 text-center text-sm text-krem/75" style={{ animationDelay: '0.75s' }}>Dengarkan di semua platform musik — cari &ldquo;Laras Senja Kala&rdquo;.</p>
        <p className="rise mt-3 text-center text-xs text-krem/70" style={{ animationDelay: '0.8s' }}>℗ 2026 Laras · Jakarta · penyanyi fiktif untuk purwarupa desain</p>
      </div>
    </main>
  );
}
