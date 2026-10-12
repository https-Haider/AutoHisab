import Link from "next/link";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy pb-20 pt-16 text-white sm:pb-28 sm:pt-24">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="page-container relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <span className="eyebrow border-white/15 bg-white/10 text-teal-light">Made for everyday driving in Pakistan</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-6xl">Know what your car really costs to run.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">AutoHisab turns the numbers you already know—distance, mileage, and fuel price—into a clear monthly and yearly estimate.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/fuel-cost-calculator-pakistan">Calculate fuel cost <Arrow /></Link>
              <a className="button-secondary" href="#how-it-works">See how it works</a>
            </div>
            <p className="mt-5 text-sm text-slate-400">Free to use · No sign-up · No vehicle data stored</p>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-8 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-sm sm:p-6">
              <div className="rounded-2xl bg-white p-6 text-navy shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Example estimate</p><p className="mt-1 font-semibold">Monthly fuel</p></div>
                  <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold text-teal-dark">PKR</span>
                </div>
                <p className="mt-7 text-sm text-slate-500">Estimated monthly cost</p><p className="mt-1 text-4xl font-bold tracking-tight">Rs 28,000</p>
                <div className="mt-7 grid grid-cols-2 gap-3"><div className="metric-mini"><span>Distance</span><strong>1,200 km</strong></div><div className="metric-mini"><span>Fuel used</span><strong>100 L</strong></div></div>
                <p className="mt-4 text-xs leading-5 text-slate-400">Illustrative only: 12 km/L at Rs 280/L. Enter your own figures for a useful estimate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="section-space bg-white">
        <div className="page-container">
          <div className="max-w-2xl"><span className="eyebrow">Simple by design</span><h2 className="section-title mt-5">A practical estimate in three steps</h2><p className="section-copy">No account, registration number, or complicated vehicle profile. Just the inputs that drive your fuel bill.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[["01", "Add your monthly drive", "Use your odometer, commute, or a sensible estimate of the kilometres you cover each month."], ["02", "Enter real-world mileage", "Use the km/L your vehicle actually returns, not only the manufacturer’s best-case figure."], ["03", "Set the price you pay", "Fuel prices vary. Enter the current pump price yourself and update it whenever it changes."]].map(([number, title, body]) => <article key={number} className="info-card"><span className="step-number">{number}</span><h3 className="mt-7 text-xl font-bold text-navy">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section-space bg-mist">
        <div className="page-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><span className="eyebrow">Why AutoHisab</span><h2 className="section-title mt-5">Clear numbers for better driving decisions</h2><p className="section-copy">A fuel estimate can help you set a household budget, compare commute choices, or see what improved mileage might save.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[["Rs", "Pakistan-friendly", "Results are shown in PKR with kilometres and litres."], ["≈", "Honest estimates", "Assumptions are visible and limitations are clearly explained."], ["↻", "Easy to adjust", "Change any input and see the estimate update instantly."], ["○", "Privacy-minded", "Calculations happen in your browser; no entries are saved."]].map(([icon, title, body]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-soft font-bold text-teal-dark">{icon}</span><h3 className="mt-5 font-bold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section-space bg-white"><div className="page-container"><div className="rounded-3xl bg-navy px-6 py-12 text-center text-white sm:px-12 sm:py-16"><span className="eyebrow border-white/10 bg-white/10 text-teal-light">Start with your numbers</span><h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Turn your next fuel fill into a useful monthly estimate.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">The calculator is free, private, and takes less than a minute.</p><Link className="button-primary mt-8" href="/fuel-cost-calculator-pakistan">Open fuel calculator <Arrow /></Link></div></div></section>
    </main>
  );
}
