'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const phone = '+91 96795 73134';
const wa = 'https://wa.me/919679573134';

const packages = [
  { name: 'Luxury Honeymoon Escape', price: '₹68,000', tag: 'Honeymoon' },
  { name: 'Family Island Comfort', price: '₹52,000', tag: 'Family' },
  { name: 'Adventure & Scuba Trail', price: '₹59,000', tag: 'Adventure' }
];

export default function Site() {
  return (
    <main>
      <header className="fixed top-0 z-50 w-full bg-navy/85 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="font-bold">Naidu Andaman Travels</div>
          <div className="hidden gap-6 md:flex"><a href="#packages">Packages</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
          <a href={wa} className="rounded-full bg-aqua px-4 py-2 text-navy font-semibold">WhatsApp</a>
        </div>
      </header>

      <section className="relative h-[90vh] pt-20 text-white">
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Andaman beach" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 to-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="max-w-3xl text-5xl font-extrabold">Luxury Andaman Journeys, Designed Around You</h1>
            <p className="mt-4 max-w-2xl text-lg">Havelock, Neil, Ross Island, ferry planning, premium stays, cab transfers and dedicated local support.</p>
            <div className="mt-6 flex gap-3"><a href="#contact" className="rounded-full bg-cobalt px-6 py-3">Get Free Itinerary</a><a href={`tel:${phone.replace(/\s+/g,'')}`} className="glass rounded-full px-6 py-3">Call {phone}</a></div>
          </motion.div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Featured Packages</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{packages.map((p) => <article key={p.name} className="rounded-2xl border bg-white p-6 shadow-sm"><p className="text-sm text-cobalt">{p.tag}</p><h3 className="mt-2 text-xl font-semibold">{p.name}</h3><p className="mt-2 text-slate-600">Starting {p.price}</p><button className="mt-4 rounded-lg bg-navy px-4 py-2 text-white">Book Consultation</button></article>)}</div>
      </section>

      <section id="services" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold">Complete Andaman Services</h2>
          <p className="mt-3 text-slate-300">Ferry booking, hotel booking, private cab services, sightseeing tours, scuba and water adventure activities.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div><h2 className="text-3xl font-bold">Plan Your Andaman Vacation</h2><p className="mt-3">Phone: {phone}</p><p>WhatsApp: {phone}</p></div>
          <form className="rounded-2xl border bg-white p-6 shadow-sm"><input className="mb-3 w-full rounded border p-3" placeholder="Full name" /><input className="mb-3 w-full rounded border p-3" placeholder="Phone" defaultValue={phone} /><textarea className="mb-3 w-full rounded border p-3" placeholder="Travel dates, travelers, preferences" /><button className="w-full rounded-lg bg-cobalt px-4 py-3 text-white">Submit Inquiry</button></form>
        </div>
      </section>

      <a href={wa} className="fixed bottom-4 right-4 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg">WhatsApp</a>
    </main>
  );
}
