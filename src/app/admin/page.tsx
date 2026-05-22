const cards = [
  'Manage Packages','Manage Destinations','Manage Testimonials','Manage Gallery','Manage FAQs','Manage Blog','Manage SEO','Manage Inquiries','Manage Bookings','Manage Offers','Update Contact','Upload Images'
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 text-slate-300">Secure content operations for Naidu Andaman Travels.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map((c) => <section key={c} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><h2 className="font-semibold">{c}</h2><p className="mt-2 text-sm text-slate-400">CRUD module scaffold ready for API integration.</p></section>)}
      </div>
    </main>
  );
}
