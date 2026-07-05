import Image from 'next/image';
import { Play, Ticket, Youtube, Music2, Mic2 } from 'lucide-react';

const TRACKS = [
  { no: 'A1', icon: Play, label: 'Album Baru — "Senja Kala"', dur: 'Spotify · Apple', url: '#' },
  { no: 'A2', icon: Youtube, label: 'Live Session (Akustik)', dur: 'YouTube', url: 'https://youtube.com' },
  { no: 'B1', icon: Ticket, label: 'Tiket Konser 2026', dur: '5 kota', url: '#' },
  { no: 'B2', icon: Music2, label: 'Semua Platform', dur: 'Deezer · Tidal', url: '#' },
  { no: 'B3', icon: Mic2, label: 'Booking & Kolaborasi', dur: 'manajemen', url: 'mailto:mgmt@laras.id' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Piringan */}
        <div className="rise relative mx-auto h-52 w-52">
          <div className="record absolute inset-0 rounded-full shadow-[0_20px_60px_-15px_rgba(232,161,60,0.35)]" aria-hidden="true" />
          {/* Label tengah = foto */}
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-amberv">
            <Image src="/images/p1.jpg" alt="Laras" width={80} height={80} priority className="h-full w-full object-cover" />
          </div>
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-studio" aria-hidden="true" />
        </div>

        {/* Identitas */}
        <header className="rise mt-7 text-center" style={{ animationDelay: '0.1s' }}>
          <p className="text-[11px] uppercase tracking-[0.35em] text-amberv">Penyanyi · Penulis lagu</p>
          <h1 className="mt-2 font-serif text-5xl">Laras</h1>
          <p className="mt-2 text-sm text-krem/60">Lagu-lagu tentang pulang, hujan, dan hal-hal yang tak sempat dikatakan.</p>
        </header>

        {/* Now playing */}
        <div className="rise mt-6 rounded-2xl border border-krem/15 bg-white/5 p-4" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between text-xs text-krem/60">
            <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amberv" /> Sedang diputar</span>
            <span>03:47</span>
          </div>
          <p className="mt-1 font-serif text-xl italic">“Senja Kala” — single terbaru</p>
          <div className="mt-3 h-1 rounded-full bg-krem/15">
            <div className="progress h-full rounded-full bg-amberv" />
          </div>
        </div>

        {/* Tracklist links */}
        <nav className="mt-6" aria-label="Tautan">
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-krem/40">Side A / Side B</p>
          {TRACKS.map((t, i) => (
            <a
              key={t.no}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rise group flex items-center gap-4 border-b border-krem/12 py-4 transition hover:bg-white/5 hover:px-3"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <span className="w-7 font-serif text-lg italic text-amberv">{t.no}</span>
              <t.icon size={17} className="text-krem/40 transition group-hover:text-amberv" />
              <span className="flex-1 font-medium">{t.label}</span>
              <span className="text-xs text-krem/40">{t.dur}</span>
            </a>
          ))}
        </nav>

        <p className="rise mt-8 text-center text-xs text-krem/35" style={{ animationDelay: '0.8s' }}>℗ {new Date().getFullYear()} Laras · Jakarta</p>
      </div>
    </main>
  );
}
