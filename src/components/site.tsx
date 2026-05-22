'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const phone = '+91 96795 73134';
const wa = 'https://wa.me/919679573134';

const featuredPackages = [
  {
    title: 'Royal Honeymoon in Havelock',
    duration: '5 Nights / 6 Days',
    price: 'From ₹68,000',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=80',
    tag: 'Honeymoon'
  },
  {
    title: 'Family Paradise Circuit',
    duration: '6 Nights / 7 Days',
    price: 'From ₹54,000',
    image:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80',
    tag: 'Family'
  },
  {
    title: 'Adventure + Scuba Escape',
    duration: '4 Nights / 5 Days',
    price: 'From ₹59,000',
    image:
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1400&q=80',
    tag: 'Adventure'
  }
];

const services = [
  'Premium Hotel Booking',
  'Inter-Island Ferry Reservations',
  'Private Cab & Airport Transfers',
  'Sightseeing & Sunset Cruises',
  'Scuba and Adventure Activities',
  'Customized Itinerary Planning'
];

export default function Site() {
  return (
    <main className="relative overflow-x-clip bg-slate-950 text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-30rem] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />

      <header className="fixed top-0 z-50 w-full border-b border-white/15 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex w-[min(1200px,92%)] items-center justify-between py-3">
          <a href="#" className="text-lg font-semibold tracking-wide">Naidu Andaman Travels</a>
          <nav className="hidden items-center gap-7 text-sm text-white/85 md:flex">
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={wa} className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">WhatsApp</a>
        </div>
      </header>

      <section className="relative min-h-screen pt-28">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="Andaman coastline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950" />
        <div className="relative mx-auto grid w-[min(1200px,92%)] items-end gap-8 pb-20 lg:grid-cols-[1.2fr_.8fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-wider text-cyan-200">
              PORT BLAIR BASED LUXURY TRAVEL CURATORS
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Cinematic Andaman Holidays, Designed For Your Style
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-200 md:text-lg">
              Exclusive stays, private logistics, ferry coordination, and island experiences across Havelock, Neil,
              Ross, and Port Blair with dedicated local support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950">Get Free Itinerary</a>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold">Call {phone}</a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="rounded-3xl border border-white/30 bg-white/10 p-5 backdrop-blur-xl"
          >
            <h2 className="text-xl font-semibold">Start Planning in 30 Seconds</h2>
            <div className="mt-4 grid gap-3">
              <input className="rounded-xl border border-white/20 bg-slate-900/60 p-3 text-sm" placeholder="Travel Month" />
              <select className="rounded-xl border border-white/20 bg-slate-900/60 p-3 text-sm"><option>Traveler Type</option><option>Honeymoon Couple</option><option>Family</option></select>
              <select className="rounded-xl border border-white/20 bg-slate-900/60 p-3 text-sm"><option>Budget Range</option><option>₹40K - ₹70K</option><option>₹70K+</option></select>
              <button type="button" className="rounded-xl bg-cyan-300 p-3 text-sm font-semibold text-slate-950">Send Me Itinerary</button>
            </div>
          </motion.form>
        </div>
      </section>

      <section id="packages" className="mx-auto w-[min(1200px,92%)] py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Signature Packages</h2>
          <p className="hidden text-sm text-slate-300 md:block">Curated for honeymoon, family and premium adventure</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredPackages.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
              <div className="relative h-56">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs text-cyan-100">{item.tag}</span>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.duration}</p>
                <p className="text-base font-medium text-cyan-200">{item.price}</p>
                <button className="mt-2 rounded-xl border border-white/20 px-4 py-2 text-sm">Check Availability</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-900/80 py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-3xl font-semibold md:text-4xl">Premium Services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100">{service}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto w-[min(1200px,92%)] py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Andaman Moments</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=900&q=80'
          ].map((img) => (
            <div key={img} className="relative h-40 overflow-hidden rounded-2xl md:h-56">
              <Image src={img} alt="Andaman gallery" fill loading="lazy" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900 py-20">
        <div className="mx-auto grid w-[min(1200px,92%)] gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Let’s Build Your Andaman Journey</h2>
            <p className="mt-3 text-slate-300">Call or WhatsApp for immediate planning assistance and custom itinerary options.</p>
            <p className="mt-6 text-lg">Phone: {phone}</p>
            <a className="mt-3 inline-block rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950" href={wa}>Message on WhatsApp</a>
          </div>
          <form className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <input className="mb-3 w-full rounded-xl border border-white/20 bg-slate-950/70 p-3 text-sm" placeholder="Full Name" />
            <input className="mb-3 w-full rounded-xl border border-white/20 bg-slate-950/70 p-3 text-sm" placeholder="Phone Number" defaultValue={phone} />
            <textarea className="mb-3 w-full rounded-xl border border-white/20 bg-slate-950/70 p-3 text-sm" rows={4} placeholder="Travel dates, travelers, package preference" />
            <button type="button" className="w-full rounded-xl bg-white p-3 text-sm font-semibold text-slate-950">Submit Inquiry</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-6 text-center text-sm text-slate-400">
        © 2026 Naidu Andaman Travels · Port Blair, Andaman & Nicobar Islands
      </footer>

      <a href={wa} className="fixed bottom-5 right-5 z-40 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl">
        WhatsApp {phone}
      </a>
    </main>
  );
}
