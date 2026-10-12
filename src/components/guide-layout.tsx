import Link from "next/link";
import type { ReactNode } from "react";

const guides = [
  ["/guides/how-to-calculate-fuel-average", "How to calculate fuel average"],
  ["/guides/monthly-petrol-expense-pakistan", "Plan a monthly petrol budget"],
  ["/guides/petrol-vs-hybrid-cost-pakistan", "Compare petrol and hybrid fuel costs"],
] as const;

export function GuideLayout({ title, intro, children, currentPath }: { title: string; intro: string; children: ReactNode; currentPath: string }) {
  return <main><section className="bg-navy py-14 text-white sm:py-20"><div className="page-container max-w-4xl"><span className="eyebrow border-white/10 bg-white/10 text-teal-light">AutoHisab guide</span><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p><p className="mt-5 text-sm text-slate-400">Editorial responsibility: AutoHisab · Last reviewed: 12 October 2026</p></div></section><section className="section-space"><div className="page-container grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_19rem]"><article className="content-page min-w-0">{children}</article><aside className="h-fit rounded-2xl bg-mist p-6 lg:sticky lg:top-24"><h2 className="text-lg font-bold text-navy">Continue with AutoHisab</h2><nav aria-label="Related guides" className="mt-4 flex flex-col gap-3 text-sm leading-6">{guides.filter(([path]) => path !== currentPath).map(([path, label]) => <Link key={path} className="font-semibold text-teal-dark underline-offset-4 hover:underline" href={path}>{label}</Link>)}<Link className="font-semibold text-teal-dark underline-offset-4 hover:underline" href="/fuel-cost-calculator-pakistan">Use the fuel cost calculator</Link></nav></aside></div></section></main>;
}
